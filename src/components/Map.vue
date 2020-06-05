/* eslint-disable */
<template>
    <div class="row no-gutters">
      <!-- 選擇地區 -->
      <div class="toolbox col-sm-3 p-2 bg-white">
          <div class="form-group d-flex">
            <label for="city" class="col-form-label mr-2 text-right">縣市</label>
            <div class="flex-fill">
                <select id="city" class="form-control" v-model="select.city">
                    <!-- 製作下拉選單 -->
                    <option v-bind:value="city.name"
                            v-bind:key="city.name"
                            v-for="city in city">
                            {{ city.name }}
                    </option>
                </select>
            </div>
          </div>
          <div class="form-group d-flex">
            <label for="dist" class="col-form-label mr-2 text-right">地區</label>
            <div class="flex-fill">
                <select id="dist" class="form-control" v-model="select.dist">
                    <!-- 製作下拉選單 -->
                    <option
                      :value="dist.name"
                      :key="dist.name"
                      v-for="dist in city.find((city) => city.name === select.city).districts">
                        {{ dist.name }}
                    </option>
                </select>
            </div>
          </div>
          <div class="form-group d-flex">
            <label for="toiletType" class="col-form-label mr-2 text-right">廁所種類</label>
            <div class="flex-fill">
                <select id="toiletType" class="form-control" v-model="select.toiletType">
                    <!-- 製作下拉選單 -->
                    <option :value="toiletType"
                            :key="key"
                            v-for="(toiletType, key) in toiletTypes">
                        {{ toiletType }}
                    </option>
                </select>
            </div>
          </div>
          <div class="form-group d-flex">
            <label v-if="isServerResponseError" class="col-form-label mr-2 text-right">
              伺服器忙碌中，請重新嘗試
            </label>
            <label v-else-if="isFetchingData" class="col-form-label mr-2 text-right">
              政府資料庫擷取中
            </label>
            <label v-else for="toiletType" class="col-form-label mr-2 text-right">
              總共找到：{{ totalToilet }}間
            </label>
            <button
                type="button"
                class="btn btn-info"
                @click="onQueryServerHandler">search</button>
          </div>
      </div>

      <!-- 顯示地圖和 UBike 站點 -->
      <div class="col-sm-9">
          <div id="map"></div>
      </div>
      <!-- <div class="modal">
          <div class="innerModal">
            <p>測試</p>
          </div>
        </div> -->
    </div>
</template>
<script>
import leaflet from 'leaflet';
import city from '../assets/city.json';

export default {
  name: 'Map',
  props: {
    msg: String,
  },
  data: () => ({
    city,
    toiletsOriginData: [],
    // toilets: [],
    toiletTypes: ['無障礙廁所', '男廁所', '女廁所', '親子廁所', '性別友善廁所', '混合廁所'],
    select: {
      city: '臺北市',
      dist: '中正區',
      toiletType: '混合廁所',
    },
    OSMap: {},
    totalToilet: 0,
    isFetchingData: true,
    isServerResponseError: false,
  }),
  created() {
    this.onQueryToiletData();
  },
  mounted() {
    // leaflet文件
    // https://leafletjs.com/examples/quick-start/
    // https://leafletjs.com/reference-1.6.0.html#tilelayer-url-template
    // map 設定
    this.OSMap = leaflet.map('map', {
      center: [25.041956, 121.508791],
      zoom: 18,
    });
    leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
    }).addTo(this.OSMap);
  },
  computed: {
    // 過濾廁所資料
    toilets() {
      /* eslint-disable */
      // 只過濾種類
      // return this.toiletsOriginData.filter((toilet) => toilet.Type2 === this.select.toiletType);
      return this.toiletsOriginData.filter((toilet) => toilet.City === this.select.dist && toilet.Type2 === this.select.toiletType);
    },
  },
  // 監聽搜尋
  watch: {
    "select.city": function () {
      this.select.dist = '';
    },
    "select.dist": function () {
      if(this.select.dist!=='' && this.select.dist!==undefined) {
        // this.isFetchingData = true;
        // this.isServerResponseError = false;
        // this.onQueryToiletData();
      }
    },
    "select.toiletType": function () {
      if(this.select.dist!=='' && this.select.dist!==undefined) {
        // this.isFetchingData = true;
        // this.isServerResponseError = false;
        // this.onQueryToiletData();
      }
    },
  },
  methods: {
    onQueryServerHandler() {
      this.isFetchingData = true;
      this.isServerResponseError = false;
      this.onQueryToiletData();
    },
    onQueryToiletData(offset=0, limit=1000) { // 跳過幾筆, 取幾筆 max: 1000
      // Sample: https://opendata.epa.gov.tw/DevelopZone/Sample/OTH00307/
      const filterLocation = `Type2%20eq%20%27${this.select.toiletType}%27%20and%20Country%20eq%20%27${this.select.city}%27%20and%20City%20eq%20%27${this.select.dist}%27`;
      const queryString = `filters=${filterLocation}&offset=${offset}&limit=${limit}`;
      const cors = 'https://cors-anywhere.herokuapp.com/';
      const toiletUrl = `https://opendata.epa.gov.tw/webapi/api/rest/datastore/355000000I-000467?${queryString}`;
      console.log('取得資料中...');
      this.axios.get(`${cors}${toiletUrl}`)
        .then((response) => {
          this.toiletsOriginData = response.data.result.records;
          return response;
        }).then(() => {
          this.updateMarkers();
          console.log('成功取得資料');
          this.isFetchingData = false;
          this.isServerResponseError = false;
        }).catch((error) => {
          console.log('伺服器忙碌中');
          this.isFetchingData = false;
          this.isServerResponseError = true;
        });
    },
    async updateMarkers() {
      // 移除被選取的座標 eachLayer()、removeLayer()
      // https://leafletjs.com/reference-1.6.0.html#map-eachlayer
      // https://leafletjs.com/reference-1.6.0.html#map-removelayer
      this.totalToilet = this.toilets.length;
      await this.OSMap.eachLayer((layer) => {
        if (layer instanceof leaflet.Marker) {
          this.OSMap.removeLayer(layer);
        }
      });

      // 新增選擇的座標
      await this.toilets.forEach((toilet) => {
        leaflet.marker([toilet.Latitude, toilet.Longitude])
          .bindPopup(`<p><strong style="font-size: 20px;">${toilet.Name}</strong></p>
                      <strong style="font-size: 16px; color: #d45345;">廁所種類：${toilet.Type2}</strong><br>
                      廁所等級: ${toilet.Grade}<br>
                      <small>地址: <a href=${'https://www.google.com/maps/place/'.concat(toilet.Address)} target="_blank">${toilet.Address}</a></small>`)
          .addTo(this.OSMap);
      });

      // 聚焦到選擇的座標 panTo
      // https://leafletjs.com/reference-1.6.0.html#map-panto
      const indexOfTargetCity = this.indexOfCity(this.select.city);
      await this.city[indexOfTargetCity].districts.find((dist) => {
        if (dist.name === this.select.dist) {
          // 聚焦座標
          // this.OSMap.panTo(new leaflet.LatLng(dist.latitude, dist.longitude));
          // 傳送特效
          this.OSMap.flyTo(new leaflet.LatLng(dist.lat, dist.lng), 15);
        }
        return dist.name === this.select.dist;
      });
    },
    indexOfCity(targetCity) {
      let indexOfTargetCity = -1;
      this.city.forEach((districts, index) => {
        if (districts.name === targetCity) {
          indexOfTargetCity = index;
          return indexOfTargetCity;
        }
      });
      return indexOfTargetCity;
    }
  },
};
</script>

<style scoped lang="scss">
    @import 'bootstrap/scss/bootstrap';
    #map {
        position: relative;
        height: 100vh;
    }
    h1 {
      margin: 0;
      padding: 0;
    }
    .app {
      margin: 0;
      padding: 0;
      position: relative;
      width: 100%;
      height: 100vh;
    }
    .modal {
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      background-color: rgba(0,0,0, 0.5);
      z-index: 1000;
    }
    .innerModal {
      position: absolute;
      left: 25%;
      right: 25%;
      top: 25%;
      margin: auto;
      background: white;
      z-index: 100;
      border-radius: 20px;
    }
    .title {
        text-align: center;
        font-size: 26px;
        margin: 20px auto;
    }
    .desc {
      text-align: center;
      font-size: 16px;
      margin: auto 20px;
    }
</style>

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
            <label
              v-if="(select.dist===''||select.dist===undefined)&&isFetchingData===false"
              class="col-form-label mr-2 text-right error-message">
              選擇地區以自動搜尋
            </label>
            <label v-else-if="isServerResponseError"
              class="col-form-label mr-2 text-right error-message">
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
                @click="onQueryServerHandler">Reload</button>
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
import KEY from '../../key.json';
import city from '../assets/city.json';
import queryLocation from '../assets/queryLocation.json';

export default {
  name: 'Map',
  props: {
    msg: String,
  },
  data: () => ({
    city,
    toiletsOriginData: [],
    toilets: [],
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
    // this.toilets = this.toiletsOriginData.filter((toilet) => this.select.dist === toilet.City);
  },
  // 監聽搜尋
  watch: {
    'select.city': function () {
      console.log('切換縣市');
      this.select.dist = '';
      this.onQueryToiletData();
    },
    'select.dist': function () {
      console.log('切換地區');
      this.updateMarkers();
    },
    'select.toiletType': function () {
      console.log('切換廁所種類');
      this.updateMarkers();
    },
  },
  methods: {
    updateMarkers() {
      this.onFilterToilet();
      this.onRemoveLocationFromMap();
      this.onAddLocationToMap();
      this.onFocusMap();
    },
    onFilterToilet() {
      this.toilets = this.toiletsOriginData
        .filter((toilet) => this.select.toiletType === toilet.Type2
          && this.select.dist === toilet.City);
    },
    onFilterToiletType() {
      this.toilets = this.toiletsOriginData
        .filter((toilet) => this.select.toiletType === toilet.Type2);
    },
    getQueryLocation() {
      return queryLocation[queryLocation
        .findIndex((cityData) => cityData.name === this.select.city)].location;
    },
    onQueryServerHandler() {
      this.isFetchingData = true;
      this.isServerResponseError = false;
      this.onQueryToiletData();
    },
    onQueryToiletData(offset = 0, limit = 100000) { // 跳過幾筆, 最多取幾筆
      // Sample: https://opendata.epa.gov.tw/DevelopZone/Sample/OTH00307/
      const queryString = `offset=${offset}&limit=${limit}`;
      const cors = 'https://cors-anywhere.herokuapp.com/';
      const location = this.getQueryLocation();
      const { ACCESS_TOKEN } = KEY;
      const toiletUrl = `https://data.epa.gov.tw/api/v1/${location}?${queryString}&api_key=${ACCESS_TOKEN}`;
      console.log('取得資料中...');
      this.axios.get(`${cors}${toiletUrl}`)
        .then((response) => {
          this.toiletsOriginData = response.data.records;
          this.updateMarkers();
          return response;
        }).then(() => {
          console.log('成功取得資料');
          this.isFetchingData = false;
          this.isServerResponseError = false;
        }).catch((error) => {
          console.log('伺服器忙碌中', error);
          this.isFetchingData = false;
          this.isServerResponseError = true;
        });
    },
    onFocusMap() {
      // 聚焦到選擇的座標 panTo
      // https://leafletjs.com/reference-1.6.0.html#map-panto
      const indexOfTargetCity = this.indexOfCity(this.select.city);
      this.city[indexOfTargetCity].districts.find((dist) => {
        if (dist.name === this.select.dist) {
          // 聚焦座標
          // this.OSMap.panTo(new leaflet.LatLng(dist.latitude, dist.longitude));
          // 傳送特效
          this.OSMap.flyTo(new leaflet.LatLng(dist.lat, dist.lng), 15);
        }
        return dist.name === this.select.dist;
      });
    },
    onRemoveLocationFromMap() {
      // 移除被選取的座標 eachLayer()、removeLayer()
      // https://leafletjs.com/reference-1.6.0.html#map-eachlayer
      // https://leafletjs.com/reference-1.6.0.html#map-removelayer
      this.totalToilet = this.toilets.length;
      this.OSMap.eachLayer((layer) => {
        if (layer instanceof leaflet.Marker) {
          this.OSMap.removeLayer(layer);
        }
      });
    },
    onAddLocationToMap() {
      // 新增選擇的座標
      this.toilets.forEach((toilet) => {
        leaflet.marker([toilet.Latitude, toilet.Longitude])
          .bindPopup(`<p><strong style="font-size: 20px;">${toilet.Name}</strong></p>
                      <strong style="font-size: 16px; color: #d45345;">廁所種類：${toilet.Type2}</strong><br>
                      廁所等級: ${toilet.Grade}<br>
                      <small>地址: <a href=${'https://www.google.com/maps/place/'.concat(toilet.Address)} target="_blank">${toilet.Address}</a></small>`)
          .addTo(this.OSMap);
      });
    },
    indexOfCity(targetCity) {
      let indexOfTargetCity = -1;
      this.city.forEach((districts, index) => {
        if (districts.name === targetCity) {
          indexOfTargetCity = index;
          return indexOfTargetCity;
        }
        return indexOfTargetCity;
      });
      return indexOfTargetCity;
    },
  },
};
</script>

<style scoped lang="scss">
    @import 'bootstrap/scss/bootstrap';
    #map {
        position: relative;
        height: 100vh;
    }
    .error-message {
      color: red;
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

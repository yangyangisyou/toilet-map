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
                  <option :value="dist.name"
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
          <label for="toiletType" class="col-form-label mr-2 text-right">
            總共找到：{{ totalToilet }}間
          </label>
        </div>
    </div>

    <!-- 顯示地圖和 UBike 站點 -->
    <div class="col-sm-9">
        <div id="map"></div>
    </div>
    </div>
</template>
<script>
import leaflet from 'leaflet';
import city from '../assets/city.json';
import toiletsOriginData from '../assets/toilets.json';

export default {
  name: 'Map',
  props: {
    msg: String,
  },
  data: () => ({
    city,
    toiletsOriginData,
    // toiletsOriginData: [],
    // toilets: [],
    toiletTypes: ['無障礙廁所', '男廁所', '女廁所', '親子廁所', '性別友善廁所', '混合廁所'],
    select: {
      city: '臺北市',
      dist: '中正區',
      toiletType: '混合廁所',
    },
    OSMap: {},
    totalToilet: 0,
  }),
  created() {
    // const cors = 'https://cors-anywhere.herokuapp.com/'; // use cors-anywhere to fetch api
    // const toiletUrl = 'http://opendata.epa.gov.tw/webapi/Data/OTH00307/?$filter=Country%20eq%20%27%E8%87%BA%E5%8C%97%E5%B8%82%27&$skip=0&$top=1000&format=json';
    // this.axios.get(`${cors}${toiletUrl}`)
    //   .then((response) => {
    //     this.toiletsOriginData = response.data;
    //     console.log(response.data);
    //     return response;
    //   }).then(() => {
    //     this.updateMarkers();
    //   });
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
    this.updateMarkers();
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
  watch: {
    toilets() {
      this.updateMarkers();
    },
    toiletsOriginData() {
      this.updateMarkers();
    },
    "select.dist": function() {
      this.updateMarkers();
    },
  },
  methods: {
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
      await this.city[0].districts.find((dist) => {
        if (dist.name === this.select.dist) {
          // 聚焦座標
          // this.OSMap.panTo(new leaflet.LatLng(dist.latitude, dist.longitude));
          // 傳送特效
          this.OSMap.flyTo(new leaflet.LatLng(dist.latitude, dist.longitude), 15);
        }
        return dist.name === this.select.dist;
      });
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
</style>

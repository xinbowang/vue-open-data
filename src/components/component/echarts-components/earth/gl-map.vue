<template>
  <div id="map-gl" ref="mapGl"></div>
</template>

<script>
import earthImg from './img/3.png';
import bgImg from './img/4.jpg';

export default {
  name: 'gl-map',
  data () {
    return {
      bgImg,
      earthImg,
      timer: null,
      myChart: null
    };
  },
  methods: {
    setMapData () {
      this.myChart = this.$echarts.init(this.$refs.mapGl);
      let opt = {
        backgroundColor: '#000',
        globe: {
          baseTexture: this.earthImg,
          heightTexture: '',
          displacementScale: 1,
          shading: 'realistic',
          environment: this.bgImg,
          realisticMaterial: {
            roughness: 1
          },
          postEffect: {
            enable: true
          },
          light: {
            main: {
              color: '#666',
              intensity: 1,
              shadow: false
            },
            ambient: {
              color: '#ccc',
              intensity: 1
            },
            ambientCubemap: {
              texture: '',
              diffuseIntensity: 1
            }
          },
          viewControl: {
            autoRotate: true,
            rotateSensitivity: [1, 0],
            targetCoord: [106.46, 35],
            distance: 80
          }
        }
      };
      this.myChart.setOption(opt);
    },
    getClientWindow () {
      let winH = document.documentElement.clientHeight;
      let winW = document.documentElement.clientWidth;
      this.$refs.mapGl.style.width = winW;
      this.$refs.mapGl.style.height = winH;
    },
    winResize () {
      let _self = this;
      _self.getClientWindow();
      window.onresize = () => {
        _self.timer = setTimeout(() => {
          _self.getClientWindow();
          this.myChart.resize();
          clearTimeout(_self.timer);
        }, 500);
      };
    }
  },
  mounted: function () {
    this.winResize();
    this.setMapData();
  }
};
</script>

<style scoped lang="scss">
  #map-gl {
    width: 100%;
    height: 100%;
  }
</style>

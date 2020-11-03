<template>
  <div class="v-application">
    <div class="v-application--wrap">
      <main class="v-main">
        <div class="v-main__wrap">
          <BillBoard />
        </div>
      </main>
      <footer class="pa-0">
        <img
          width="100%"
          height="auto"
          contain
          :src="require('@/assets/' + getFooter())"
        />
      </footer>
    </div>
  </div>
</template>

<style lang="scss">
.v-application .pa-0 {
  padding: 0px !important;
}

.v-application .mx-auto {
  margin-right: auto !important;
  margin-left: auto !important;
}
.v-application .pb-0 {
  padding-bottom: 0px !important;
}

.v-application .py-0 {
  padding-top: 0px !important;
  padding-bottom: 0px !important;
}

.v-application .px-1 {
  padding-right: 4px !important;
  padding-left: 4px !important;
}

.v-application .align-content-start {
  -ms-flex-line-pack: start !important;
  align-content: flex-start !important;
}

.v-main__wrap {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  max-width: 100%;
  position: relative;
}

.v-application--wrap {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100%;
  position: relative;
}
footer {
  display: flex;
}
.v-application {
  overflow: hidden;
}

.v-application .title,
.v-application .subtitle-2,
.v-application {
  font-family: "Nunito", sans-serif !important;
}
.v-application .headline,
.v-application .title-2,
.v-application .display-2 {
  font-family: "Montserrat", sans-serif !important;
  font-weight: 700 !important;
}
.v-main {
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
}

.v-footer {
  z-index: 5;
}

.v-application .title-2 {
  font-size: 24px;
}
.v-application .mpu {
  font-size: 22px !important;
}
</style>

<script>
import BillBoard from "./components/BillBoard";

export default {
  name: "App",
  components: {
    BillBoard
  },
  methods: {
    getFooter() {
      if (window.innerHeight > 300 && window.innerWidth > 160) {
        return "afm4_vrijstelling_vergunning-586x123.jpg";
      }
      if (window.innerHeight > 300) {
        return "afm6_vrijstelling_vergunning-420x254.jpg";
      }
      if (window.innerHeight < 100) {
        return "afm1_vrijstelling_vergunning-2357x80.jpg";
      }
      if (window.innerWidth > 960) {
        return "afm1_vrijstelling_vergunning-2357x80.jpg";
      }
      return "afm3_vrijstelling_vergunning-1176x146.jpg";
    }
  }
};
</script>

<style></style>

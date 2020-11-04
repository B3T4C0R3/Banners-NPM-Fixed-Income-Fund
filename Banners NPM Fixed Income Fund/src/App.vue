<template>
  <div class="v-application">
    <div class="v-application--wrap">
      <main class="v-main">
        <div class="v-main__wrap">
          <BillBoard />
        </div>
      </main>
      <footer class="pa-0">
        <img width="100%" height="auto" contain :src="getFooter()" />
      </footer>
    </div>
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
*,
::before,
::after {
  background-repeat: no-repeat;
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}
html {
  font-size: 16px;
  overflow-x: hidden;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
html {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  overflow-y: scroll;
  -webkit-text-size-adjust: 100%;
  word-break: normal;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
}

.v-application a {
  cursor: pointer;
}

.v-application .headline {
  font-size: 1.5rem !important;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: normal !important;
  font-family: "Roboto", sans-serif !important;
}
.v-application .subtitle-1 {
  font-size: 1rem !important;
  font-weight: normal;
  letter-spacing: 0.009375em !important;
  line-height: 1.75rem;
  font-family: "Roboto", sans-serif !important;
}

.v-application .display-2 {
  font-size: 3rem !important;
  font-weight: 400;
  line-height: 3.125rem;
  letter-spacing: normal !important;
  font-family: "Roboto", sans-serif !important;
}
.v-application .title {
  font-size: 1.25rem !important;
  font-weight: 500;
  line-height: 2rem;
  letter-spacing: 0.0125em !important;
  font-family: "Roboto", sans-serif !important;
}
.v-application .pa-0 {
  padding: 0px !important;
}

.v-application .ma-0 {
  margin: 0px !important;
}

.v-application .mx-auto {
  margin-right: auto !important;
  margin-left: auto !important;
}
.v-application .mx-2 {
  margin-right: 8px !important;
  margin-left: 8px !important;
}
.v-application .mx-1 {
  margin-right: 4px !important;
  margin-left: 4px !important;
}
.v-application .pb-0 {
  padding-bottom: 0px !important;
}
.v-application .pb-1 {
  padding-bottom: 4px !important;
}

.v-application .py-0 {
  padding-top: 0px !important;
  padding-bottom: 0px !important;
}
.v-application .mt-2 {
  margin-top: 8px !important;
}

.v-application .mt-1 {
  margin-top: 4px !important;
}

.v-application .mb-1 {
  margin-bottom: 4px !important;
}

.v-application .mb-0 {
  margin-bottom: 0 !important;
}

.v-application .px-1 {
  padding-right: 4px !important;
  padding-left: 4px !important;
}

.v-application .py-1 {
  padding-top: 4px !important;
  padding-bottom: 4px !important;
}

.v-application .py-2 {
  padding-top: 8px !important;
  padding-bottom: 8px !important;
}

.v-application .px-2 {
  padding-right: 8px !important;
  padding-left: 8px !important;
}

.v-application .pa-2 {
  padding: 8px !important;
}

.v-application .pr-0 {
  padding-right: 0px !important;
}
.v-application .px-0 {
  padding-right: 0px !important;
  padding-left: 0px !important;
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
.v-main:not([data-booted="true"]) {
  -webkit-transition: none !important;
  transition: none !important;
}
.v-main {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -ms-flex: 1 0 auto;
  flex: 1 0 auto;
  max-width: 100%;
  -webkit-transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
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

<template>
  <div class="adwrapper">
    <a @click="open" class="adwrapper__link">
      <div
        class="imgoverlay"
        :style="leaderboard ? 'background-color: rgba(5, 15, 200, 0.85); ' : ''"
      />
      <div class="imgwrapper">
        <div
          class="v-image v-responsive theme--light"
          style="height:100%;width:100%;background-color:rgb(5,15,200);"
        >
          <div class="v-responsive__sizer" style="padding-bottom:50%;" />
          <div
            class="v-image__image v-image__image--cover"
            :style="
              `background-image:url(${
                length
                  ? 'intro-length.jpg'
                  : width < 500
                  ? 'intro-small.jpg'
                  : 'intro.jpg'
              });background-position:center center;`
            "
          />
          <div class="v-responsive__content" style="width: 1024px;"></div>
        </div>
      </div>
      <div>
        <div
          :class="`row align-content-start text px-0 mx-auto`"
          :style="
            `height: 100%; color: ${textcolor}; width: ${
              length
                ? '100%'
                : `calc(100% - ${navSize}px - ${leaderboard ? '150px' : '0px'})`
            };`
          "
        >
          <div
            :class="
              `col col-12 py-0 ${width < 400 ? 'pb-1' : 'pb-0'} ${
                leaderboard ? 'px-1' : 'px-1'
              } ${length ? 'text-center' : ''}`
            "
            :style="
              `line-height:0; background-color: ${
                length ? bgcolor : 'transparent'
              }; z-index: 3`
            "
          >
            <img
              :style="`padding-top:${leaderboard ? '12px' : '4px'};`"
              height="auto"
              width="150px"
              :src="'logo-NLMKBPM-white.svg'"
            />
          </div>
          <div
            :style="
              leaderboard
                ? 'left: 150px;position:absolute;'
                : 'position:relative;'
            "
            :class="
              `col col-12 px-2 ${skyscraper ? 'mt-1' : length ? 'mt-2' : ''} ${
                leaderboard ? 'px-0 mt-1' : 'py-0'
              }
            `
            "
          >
            <transition name="slide" v-for="(slide, i) in slides" :key="i">
              <div
                :style="
                  `${
                    !leaderboard
                      ? 'background-color: rgba(5, 15, 200, 0.85);'
                      : ''
                  } position: absolute
                  ;max-width:100%;top:0;${
                    length ? 'left:0;' : ''
                  } word-break:break-word; z-index: ${leaderboard ? '2' : '3'}`
                "
                v-if="current === i && !slide.empty"
                cols="12"
                :class="
                  `${leaderboard ? '' : 'py-2'}  ${
                    skyscraper ? 'mx-1' : length ? 'mx-2' : ''
                  } ${skyscraper ? 'px-1' : 'px-2'}`
                "
              >
                <h1
                  style="line-height: 1;"
                  :class="
                    `${
                      width > 960 && !leaderboard
                        ? 'display-2 mb-2'
                        : width < 340
                        ? `title-2 mb-1 ${
                            (width < 301 && !length) || width < 161 ? 'mpu' : ''
                          }`
                        : `headline ${leaderboard ? 'mb-0' : 'mb-1'}`
                    } font-weight-bold`
                  "
                >
                  {{ slide.title }}
                </h1>
                <span
                  style="line-height: 1;"
                  :class="
                    `${
                      leaderboard || (!length && width < 337)
                        ? 'subtitle-1'
                        : 'title'
                    } font-weight-light`
                  "
                  >{{ slide.text }}</span
                >
              </div>
            </transition>
          </div>
          <div
            v-if="!leaderboard"
            class="col col-12 px-0 py-0"
            align-self="end"
          >
            <transition name="zoom">
              <div
                v-if="showButton"
                :class="width < 301 && !length ? 'px-2 py-1' : 'pa-2'"
                :style="
                  `position:absolute;right:0;width:100%;bottom:0;z-index:3;`
                "
              >
                <button
                  :style="
                    `background-color: rgb(255, 140, 50); border-color: rgb(255, 140, 50);${
                      width < 301 && !length
                        ? 'height:20px;'
                        : width < 337 && !length
                        ? 'height:34px;'
                        : ''
                    } ${length ? 'width:100%' : ''}`
                  "
                  :block="length"
                  class="font-weight-bold text-capitalize v-btn v-btn--contained v-btn--tile theme--dark v-size--large"
                  dark
                  :large="width > 900"
                  :small="skyscraper"
                  :x-small="width < 301 && !length"
                  tile
                >
                  <span class="v-btn__content">{{ button }}</span>
                </button>
              </div>
            </transition>
          </div>
        </div>
        <div
          v-if="!length"
          :class="`textwrapper`"
          :style="`background-color: ${bgcolor};`"
        />
        <transition name="zoom">
          <div
            v-if="showNav"
            class="row navwrapper ma-0"
            :style="
              `align-content: center;width: ${
                length ? '100%' : navSize + 'px'
              }; padding-top: ${length ? '50vh' : '0'}`
            "
          >
            <div
              :class="
                `text-right pa-2 col ${
                  length || leaderboard ? 'col-6 order-1' : 'col-12'
                }`
              "
              :style="!length ? 'align-self:flex-end;' : ''"
            >
              <button
                class="v-btn v-btn--contained v-btn--fab v-btn--round theme--dark v-size--default"
                :style="
                  `background-color: rgb(255, 140, 50); border-color: rgb(255, 140, 50);${
                    width < 301 && !length ? 'height:36px;width:36px;' : ''
                  }`
                "
                @click="
                  e => {
                    e.stopPropagation();
                    navigate('right');
                  }
                "
              >
                <span class="v-btn__content">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    style="margin-left:2px"
                    fill="none"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </span>
              </button>
            </div>
            <div
              v-if="!leaderboard"
              :class="
                `pa-2 col ${length ? 'text-left col-6' : 'text-right col-12'}`
              "
            >
              <button
                class="v-btn v-btn--contained v-btn--fab v-btn--round theme--dark v-size--default"
                :style="
                  `background-color: rgb(255, 140, 50); border-color: rgb(255, 140, 50);${
                    width < 301 && !length ? 'height:36px;width:36px;' : ''
                  }`
                "
                @click="
                  e => {
                    e.stopPropagation();
                    navigate('left');
                  }
                "
                :color="btncolor"
                fab
                :small="width < 301 && !length"
                dark
              >
                <span class="v-btn__content">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style="margin-right:2px"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </transition>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      showButton: false,
      showNav: false,
      slides: [],
      button: "Meer Informatie",
      bgcolor: "rgba(255,255,255,1)",
      textcolor: "#ffffff",
      btncolor: "#ff8c32",
      slideDuration: 5000,
      timeout: null,
      width: 0,
      height: 0,
      length: false,
      skyscraper: false,
      leaderboard: false,
      navSize: 72
    };
  },
  mounted() {
    if (window) {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.length = window.innerHeight > window.innerWidth;
      this.skyscraper = window.innerWidth < 300;
      this.leaderboard = window.innerHeight < 100;

      if (window.innerWidth < 301 && !this.length) {
        this.navSize = 56;
      }
      this.slides = [
        {
          empty: true
        },
        {
          title: "7%-9% rendement op jaarbasis",
          text: "Beleg in Private Equity via Fixed Income Participaties."
        },
        {
          title: "Winstdeling 75% tot 85%",
          text:
            "Naast uw renteuitkering deelt u mee in het gerealiseerd fondsresultaat."
        },
        {
          title: `Geen bank${this.width < 300 ? "- " : ""}financiering`,
          text: `Hierdoor hebben het fonds en haar deelnemingen geen hoge aflossingsdruk.${
            this.height > 90 ? "\n" : " "
          }U komt op de eerste plaats.`
        },
        {
          title: "Investeer gespreid in sectoren",
          text:
            "Focus op stabiele- en groeisectoren: IT, Digital marketing, E-commerce en Groothandel food."
        }
      ];
    }
    this.timeout = setTimeout(() => {
      this.timer();
      this.slides.shift();
      this.current = this.current - 1;
      this.showNav = true;
      this.showButton = true;
    }, 60);
  },
  methods: {
    open() {
      window.open(window.clickTag);
    },
    navigate(direction) {
      if (this.timeout) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.timer();
        }, this.slideDuration);
      }
      if (direction === "right") {
        this.next();
      } else if (direction === "left") {
        this.previous();
      }
    },
    timer() {
      this.next();
      this.timeout = setTimeout(() => {
        this.timer();
      }, this.slideDuration);
    },
    next() {
      if (this.current !== this.slides.length) {
        if (this.current == this.slides.length - 1) {
          this.current = 0;
        } else {
          this.current++;
        }
      }
    },
    previous() {
      if (this.current === 0) {
        this.current = this.slides.length - 1;
      } else {
        this.current = this.current - 1;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  margin-right: -12px;
  margin-left: -12px;
}

.col {
  -ms-flex-preferred-size: 0;
  flex-basis: 0;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  max-width: 100%;
}

.col-12 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
}
.col-6 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;
}

.col-xl,
.col-xl-auto,
.col-xl-12,
.col-xl-11,
.col-xl-10,
.col-xl-9,
.col-xl-8,
.col-xl-7,
.col-xl-6,
.col-xl-5,
.col-xl-4,
.col-xl-3,
.col-xl-2,
.col-xl-1,
.col-lg,
.col-lg-auto,
.col-lg-12,
.col-lg-11,
.col-lg-10,
.col-lg-9,
.col-lg-8,
.col-lg-7,
.col-lg-6,
.col-lg-5,
.col-lg-4,
.col-lg-3,
.col-lg-2,
.col-lg-1,
.col-md,
.col-md-auto,
.col-md-12,
.col-md-11,
.col-md-10,
.col-md-9,
.col-md-8,
.col-md-7,
.col-md-6,
.col-md-5,
.col-md-4,
.col-md-3,
.col-md-2,
.col-md-1,
.col-sm,
.col-sm-auto,
.col-sm-12,
.col-sm-11,
.col-sm-10,
.col-sm-9,
.col-sm-8,
.col-sm-7,
.col-sm-6,
.col-sm-5,
.col-sm-4,
.col-sm-3,
.col-sm-2,
.col-sm-1,
.col,
.col-auto,
.col-12,
.col-11,
.col-10,
.col-9,
.col-8,
.col-7,
.col-6,
.col-5,
.col-4,
.col-3,
.col-2,
.col-1 {
  width: 100%;
  padding: 12px;
}

.v-application .order-1 {
  -webkit-box-ordinal-group: 2 !important;
  -ms-flex-order: 1 !important;
  order: 1 !important;
}

.v-responsive {
  position: relative;
  overflow: hidden;
  -webkit-box-flex: 1;
  -ms-flex: 1 0 auto;
  flex: 1 0 auto;
  max-width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.v-image__image--cover {
  background-size: cover;
}

.v-image__image {
  background-repeat: no-repeat;
}

.v-image__image,
.v-image__placeholder {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.v-responsive__content {
  -webkit-box-flex: 1;
  -ms-flex: 1 0 0px;
  flex: 1 0 0px;
  max-width: 100%;
}

.v-responsive__sizer {
  -webkit-transition: padding-bottom 0.2s cubic-bezier(0.25, 0.8, 0.5, 1);
  transition: padding-bottom 0.2s cubic-bezier(0.25, 0.8, 0.5, 1);
  -webkit-box-flex: 1;
  -ms-flex: 1 0 0px;
  flex: 1 0 0px;
}

.v-image {
  z-index: 0;
}

.theme--dark.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
  background-color: #272727;
}
.v-btn:not(.v-btn--round).v-size--large {
  height: 44px;
  min-width: 78px;
  padding: 0 19.5555555556px;
}
.v-application .text-capitalize {
  text-transform: capitalize !important;
}
.v-application .font-weight-bold {
  font-weight: 700 !important;
}
.v-btn:not(.v-btn--disabled) {
  will-change: box-shadow;
}
.v-btn.v-size--large {
  font-size: 0.875rem;
}
.theme--dark.v-btn {
  color: #ffffff;
}
button,
input,
select,
textarea {
  background-color: transparent;
  border-style: none;
}
button,
html [type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}
button,
[type="button"],
[type="reset"],
[type="submit"],
[role="button"] {
  cursor: pointer;
  color: inherit;
}
button,
select {
  text-transform: none;
}
button {
  overflow: visible;
}
button,
input,
optgroup,
select,
textarea {
  font: inherit;
}
.v-btn {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 4px;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  font-weight: 500;
  letter-spacing: 0.0892857143em;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  outline: 0;
  position: relative;
  text-decoration: none;
  text-indent: 0.0892857143em;
  text-transform: uppercase;
  -webkit-transition-duration: 0.28s;
  transition-duration: 0.28s;
  -webkit-transition-property: opacity, -webkit-box-shadow, -webkit-transform;
  transition-property: opacity, -webkit-box-shadow, -webkit-transform;
  transition-property: box-shadow, transform, opacity;
  transition-property: box-shadow, transform, opacity, -webkit-box-shadow,
    -webkit-transform;
  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
}

.v-btn:before {
  border-radius: inherit;
  bottom: 0;
  color: inherit;
  content: "";
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  -webkit-transition: opacity 0.2s cubic-bezier(0.4, 0, 0.6, 1);
  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.6, 1);
}

.v-btn--fab.v-size--default {
  height: 56px;
  width: 56px;
}
.v-btn--fab.v-btn--contained {
  -webkit-box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
}

.v-btn--round {
  border-radius: 50%;
}

.v-btn--icon.v-size--default .v-icon,
.v-btn--fab.v-size--default .v-icon {
  height: 24px;
  font-size: 24px;
  width: 24px;
}

.v-btn > .v-btn__content .v-icon {
  color: inherit;
}

.v-btn--tile {
  border-radius: 0;
}

.v-application .text-right {
  text-align: right !important;
}

.v-application .text-left {
  text-align: left !important;
}

.v-application .text-center {
  text-align: center !important;
}
.v-icon.v-icon {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-font-feature-settings: "liga";
  font-feature-settings: "liga";
  font-size: 24px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  letter-spacing: normal;
  line-height: 1;
  position: relative;
  text-indent: 0;
  -webkit-transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.v-btn__content {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: inherit;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -ms-flex: 1 0 auto;
  flex: 1 0 auto;
  -webkit-box-pack: inherit;
  -ms-flex-pack: inherit;
  justify-content: inherit;
  line-height: normal;
  position: relative;
}

.textwrapper {
  z-index: 2;
  height: 100%;
  position: absolute;
  width: 150px;
}
.text {
  white-space: pre-line;
  line-height: 1;
  position: absolute;
}
.imgwrapper {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.imgoverlay {
  position: absolute;
  z-index: 1;
  background-color: rgba(5, 15, 200, 0.15);
  overflow: hidden;
  height: 100%;
  width: 100%;
}

.navwrapper {
  right: 0px;
  position: absolute;
  height: 100%;
  z-index: 3;
}
.wrapper {
  height: 100%;
}
.adwrapper {
  width: 100%;
}
.adwrapper__link {
  text-decoration: none;
  color: inherit;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.slideInLeft {
  animation-name: slideInLeft;
}

@keyframes slideOutRight {
  from {
    opacity: 1;
    position: absolute;
  }

  to {
    opacity: 0;
    position: absolute;
    transform: translate3d(100%, 0, 0);
  }
}

.slideOutRight {
  animation-name: slideOutRight;
}

.slide-enter-active {
  animation: slideInLeft 0.5s;
}

.slide-leave-active {
  animation: slideOutRight 0.5s;
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}

@keyframes zoomOut {
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
}

.zoom-enter-active {
  animation: zoomIn 0.5s;
}

.zoom-leave-active {
  animation: zoomOut 0.5s;
}
</style>

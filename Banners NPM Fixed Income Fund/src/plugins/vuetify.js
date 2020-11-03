import Vuetify from "vuetify/lib";

export default new Vuetify({
  icons: {
    iconfont: "md" // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
  },
  theme: {
    dark: false
  },
  themes: {
    light: {
      primary: "#050fc8",
      secondary: "#ff8c32"
    }
  }
});

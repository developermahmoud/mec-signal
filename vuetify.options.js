import colors from "vuetify/es5/util/colors";
export default {
  customVariables: ["~/assets/variables.scss"],
  rtl: false,
  theme: {
    dark: true,
    options: {
      customProperties: true,
    },
    themes: {
      dark: {
        primary: "#d9cea8",
        accent: colors.grey.darken3,
        secondary: "#24253d",
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3,
        background: "#1f2033",
        secondaryBackground: "#141122",
      },
    },
  },
};

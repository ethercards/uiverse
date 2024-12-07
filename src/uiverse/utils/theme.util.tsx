import { createTheme, PaletteOptions, Theme, ThemeOptions } from "@mui/material";

const generalThemeConfig: ThemeOptions = {
  palette: {
    primary: {
      main: "rgb(254, 44, 133)",
    },
  },
};
const lightTheme = createTheme({
  ...generalThemeConfig,
});

const darkTheme = createTheme({
  ...generalThemeConfig,
  palette: {
    ...generalThemeConfig.palette,
    primary: {
      main: "rgb(24, 44, 133)",
    },
    mode: "dark",
  } as PaletteOptions,
});

const getActiveTheme = (themeMode: "light" | "dark" = "dark"): Theme => {
  return themeMode === "light" ? lightTheme : darkTheme;
};

export { lightTheme, darkTheme, getActiveTheme };

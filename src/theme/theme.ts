import { createTheme, darken, lighten } from "@mui/material/styles";
import { darkColorPalette } from "./palette";
import { Inter, Roboto_Slab } from "next/font/google";

export const inter = Inter({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const roboto_slab = Roboto_Slab({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Times New Roman", "Times", "serif"],
});

export type CreatePortfolioThemeArgs = {
  mode: "dark" | "light";
  colors: {
    primary: string;
    secondary: string;
    backgroundPaper: string;
    backgroundDefault: string;
    textPrimary: string;
    textSecondary: string;
  };
  borderRadius?: string | number;
};

export const createPortfolioTheme = ({
  mode,
  borderRadius = 8,
  colors: {
    primary,
    secondary,
    backgroundDefault,
    backgroundPaper,
    textPrimary,
    textSecondary,
  },
}: CreatePortfolioThemeArgs) =>
  createTheme({
    spacing: (factor: number) => `${0.5 * factor}rem`,
    palette: {
      mode: "dark",
      primary: {
        light: lighten(primary, 0.25),
        main: darkColorPalette.primary,
        dark: darken(primary, 0.25),
      },
      secondary: {
        light: lighten(secondary, 0.25),
        main: darkColorPalette.secondary,
        dark: darken(secondary, 0.25),
      },
      background: {
        paper: darkColorPalette.backgroundPaper,
        default: darkColorPalette.backgroundDefault,
      },
      text: {
        primary: darkColorPalette.textPrimary,
        secondary: darkColorPalette.textSecondary,
      },
    },
    typography: {
      h1: {
        fontSize: "4rem",
        fontWeight: 600,
        fontFamily: inter.style.fontFamily,
      },
      h2: {
        fontSize: "3.2rem",
        fontWeight: 600,
        fontFamily: inter.style.fontFamily,
      },
      h3: {
        fontSize: "2.8rem",
        fontWeight: 400,
        fontFamily: inter.style.fontFamily,
      },
      h4: {
        fontSize: "2.2rem",
        fontWeight: 300,
        fontFamily: inter.style.fontFamily,
      },
      h5: {
        fontSize: "1.8rem",
        fontWeight: 500,
        fontFamily: inter.style.fontFamily,
      },
      h6: {
        fontSize: "1.1rem",
        fontWeight: 500,
        fontFamily: inter.style.fontFamily,
      },
      body1: {
        fontSize: "1.5rem",
        fontWeight: 300,
        fontFamily: roboto_slab.style.fontFamily,
      },
      body2: {
        fontSize: "1.2rem",
        fontWeight: 300,
        fontFamily: roboto_slab.style.fontFamily,
      },
    },
    components: {
      MuiButtonBase: {
        styleOverrides: {
          root: {
            "&.MuiListItemButton-root.Mui-selected": {
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "transparent",
              },
            },
            "&.MuiListItemButton-root": {
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "transparent",
                color: secondary,
              },
            },
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          "*": {
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
          },
          body: {
            color: textPrimary,
            fontWeight: 400,
            background: `${backgroundDefault} !important`,
            transition: "background 0.3s ease-in",
            fontSize: "1rem",
            lineHeight: "1.5rem",
            letterSpacing: "inherit !important",
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          root: {
            ".MuiPaper-root.MuiDrawer-paper": {
              background: backgroundPaper,
              backgroundImage: "none !important",
            },
          },
        },
      },
      MuiList: {
        styleOverrides: {
          root: {
            ".MuiButtonBase-root.MuiListItemButton-root > a": {
              color: textPrimary,
              textDecoration: "none",
            },
            ".MuiButtonBase-root.MuiListItemButton-root": {
              "&:hover > a": {
                color: secondary,
              },
            },
            ".MuiButtonBase-root.MuiListItemButton-root.Mui-selected > a": {
              color: secondary,
              backgroundColor: "none",
              textDecoration: "underline",
            },
          },
        },
      },
    },
  });

export const darkTheme = createPortfolioTheme({
  mode: "dark",
  colors: darkColorPalette,
});

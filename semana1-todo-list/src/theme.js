import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        primary: {
          100: "#ccd9e7",
          200: "#99b4ce",
          300: "#668eb6",
          400: "#33699d",
          500: "#004385",
          600: "#00366a",
          700: "#002850",
          800: "#001b35",
          900: "#000d1b",
        },
        secondary: {
          100: "#dbe9e8",
          200: "#b7d2d1",
          300: "#93bcba",
          400: "#6fa5a3",
          500: "#4b8f8c",
          600: "#3c7270",
          700: "#2d5654",
          800: "#1e3938",
          900: "#0f1d1c",
        },
        success: {
          100: "#d4dcd5",
          200: "#a9b9ab",
          300: "#7e9682",
          400: "#537358",
          500: "#28502e",
          600: "#204025",
          700: "#18301c",
          800: "#102012",
          900: "#081009",
        },
        danger: {
          100: "#eacccc",
          200: "#d59a99",
          300: "#c06766",
          400: "#ab3533",
          500: "#960200",
          600: "#780200",
          700: "#5a0100",
          800: "#3c0100",
          900: "#1e0000",
        },
        info: {
          100: "#e4f4f6",
          200: "#c9eaed",
          300: "#aedfe4",
          400: "#93d5db",
          500: "#78cad2",
          600: "#60a2a8",
          700: "#48797e",
          800: "#305154",
          900: "#18282a",
        },
        grey: {
          100: "#f6f6f7",
          200: "#edeef0",
          300: "#e5e5e8",
          400: "#dcdde1",
          500: "#d3d4d9",
          600: "#a9aaae",
          700: "#7f7f82",
          800: "#545557",
          900: "#2a2a2b",
        },
        warning: {
          100: "#fbf3d7",
          200: "#f7e7ae",
          300: "#f2dc86",
          400: "#eed05d",
          500: "#eac435",
          600: "#bb9d2a",
          700: "#8c7620",
          800: "#5e4e15",
          900: "#2f270b",
        },
      }
    : {
        primary: {
          100: "#000d1b",
          200: "#001b35",
          300: "#002850",
          400: "#00366a",
          500: "#004385",
          600: "#33699d",
          700: "#668eb6",
          800: "#99b4ce",
          900: "#ccd9e7",
        },
        secondary: {
          100: "#0f1d1c",
          200: "#1e3938",
          300: "#2d5654",
          400: "#3c7270",
          500: "#4b8f8c",
          600: "#6fa5a3",
          700: "#93bcba",
          800: "#b7d2d1",
          900: "#dbe9e8",
        },
        success: {
          100: "#081009",
          200: "#102012",
          300: "#18301c",
          400: "#204025",
          500: "#28502e",
          600: "#537358",
          700: "#7e9682",
          800: "#a9b9ab",
          900: "#d4dcd5",
        },
        danger: {
          100: "#1e0000",
          200: "#3c0100",
          300: "#5a0100",
          400: "#780200",
          500: "#960200",
          600: "#ab3533",
          700: "#c06766",
          800: "#d59a99",
          900: "#eacccc",
        },
        info: {
          100: "#18282a",
          200: "#305154",
          300: "#48797e",
          400: "#60a2a8",
          500: "#78cad2",
          600: "#93d5db",
          700: "#aedfe4",
          800: "#c9eaed",
          900: "#e4f4f6",
        },
        grey: {
          100: "#2a2a2b",
          200: "#545557",
          300: "#7f7f82",
          400: "#a9aaae",
          500: "#d3d4d9",
          600: "#dcdde1",
          700: "#e5e5e8",
          800: "#edeef0",
          900: "#f6f6f7",
        },
        warning: {
          100: "#2f270b",
          200: "#5e4e15",
          300: "#8c7620",
          400: "#bb9d2a",
          500: "#eac435",
          600: "#eed05d",
          700: "#f2dc86",
          800: "#f7e7ae",
          900: "#fbf3d7",
        },
      }),
});

export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    pallete: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.secondary[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

export const ColorModeContext = createContext({
  toogleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "dark" ? "light" : "dark")),
    }),
    []
  );
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};

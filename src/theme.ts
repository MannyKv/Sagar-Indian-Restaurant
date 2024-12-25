import {  createTheme, rem } from "@mantine/core";
import "@fontsource/noto-serif-display/900.css";
import "@fontsource/open-sans/400.css";
export const theme = createTheme({

    // color theme
    colors: {
        primary: [
            "#FFF5F5",
            "#FFE3E3",
            "#FFC9C9",
            "#FFA8A8",
            "#FF8787",
            "#FF6B6B",
            "#FA5252",
            "#F03E3E",
            "#E03131",
            "#C92A2A",
        ],
    },
scale:1,
    primaryColor: "primary",

    // Text component
     fontFamily: "Open Sans",
     fontFamilyMonospace: "Noto Serif Display, serif",
    fontSizes: {
        xs:rem(20),
        sm: rem(24),
        md: rem(32),
        lg: '3rem',
    },
    // Title component
    headings: {
        fontFamily: "Noto Serif Display, serif",
        sizes: {
            h1: { fontSize: rem(100),fontWeight: "900" },
            h2: { fontSize: rem(64)},
            h3: { fontSize:rem(40)},
            h4: { fontSize: rem(36) },
            h5: { fontSize: rem(28), fontWeight: "900" }, // sub heading
            h6: { fontSize: rem(20), fontWeight: "900" }, // sub title
        },
    },
});
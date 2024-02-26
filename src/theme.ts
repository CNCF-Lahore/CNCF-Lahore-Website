import { DefaultTheme } from "styled-components";

interface CustomTheme {
    red: string;
    black: {
        veryDark: string;
        darker: string;
        lighter: string;
    };
    white: {
        lighter: string;
        darker: string;
    };
    blue: {
        dark: string;
        medium: string;
        light: string;
    };
}

declare module "styled-components" {
    export interface DefaultTheme extends CustomTheme {}
}

// Now you can define your theme object
export const theme: DefaultTheme = {
    red: "#E51013",
    black: {
        veryDark: "#141414",
        darker: "#181818",
        lighter: "#2F2F2F",
    },
    white: {
        lighter: "#fff",
        darker: "#C9C8C9",
    },
    blue: {
        dark: "#001F3F",
        medium: "#0074D9",
        light: "#7FDBFF",
    },
};

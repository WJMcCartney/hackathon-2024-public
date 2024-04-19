import { createTheme } from "@mui/material/styles";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
const theme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: "#bdb6a4",
            paper: "#000000",
            menu: "rgb(5, 15, 5)",
        },
        primary: {
            main: "#d073ff",
        },
        secondary: {
            main: "#6b8bff",
        },
        text: {
            primary: "#000000",
            secondary: "#fff",
        },
    },
    shape: {
        borderRadius: 10,
    },
    typography: {
        fontFamily: "Poppins",
        button: {
            textTransform: "none",
        },
        h1: {
            fontFamily: "Poppins",
            fontWeight: 600,
            fontSize: 40,
        },
        code: {
            fontFamily: "monospace",
            fontWeight: 400,
            fontSize: 40,
        },
    },
});

export default theme;
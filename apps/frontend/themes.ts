import { createTheme } from "@mui/material";

export const colors = {
    darkBlack: '#2C2727',
    lightGrey: '#3E3939',
    creamWhite: '#F6F4F4',
    pitchOrange: '#FF7517'
}

export const theme  = createTheme({
    palette: {
        primary: {
            main: colors.darkBlack,
            light: colors.lightGrey
        },
        secondary: {
            main: colors.creamWhite
        },
    },
    typography: {
        fontFamily: 'Roboto'
    }
})
import {css} from "styled-components";

export const setColor = {
    dark: "#003049",
    light: "#eae2b7",
    lighten: "#f6f2df",
    yellow: "#eae2b7",
    orange: "#f77f00",
    red: "#d62828"
}

export const setFlex = ({align="center", justify="center"}={}) =>{
    return`display:flex; align-items:${align}; justify-content:${justify}`
}

export const setRem = (size = 16) => {
    return`${size/16}rem`
}
import React from "react";
import tw from "tailwind-styled-components"

const T = tw.p`
    text-4xl
`

export function Title(props){
    return(
        <T>{props.children}</T>
    )
}
import React from "react";
import tw, {styled} from "twin.macro";

const T = styled.p`
    ${ tw`text-5xl underline`}
`

export const Text = styled.p`
    ${ tw` text-lg`}
`

export function Title(props){
    return(
        <T className={"underline-offset-4 hover:underline-offset-8"}>{props.children}</T>
    )
}
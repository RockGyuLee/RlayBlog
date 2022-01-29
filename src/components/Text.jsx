import React from "react";
import tw, {styled} from "twin.macro";

const T = styled.p`
    ${ tw`text-4xl underline md:text-4xl lg:text-5xl`}
`

export const Text = styled.p`
    ${ tw` text-lg md:text-base`}
`

export const HeaderSubTeext = styled.p`
    ${tw` flex text-2xl font-bold justify-center items-center`}
    cursor : pointer;
`

export const HeaderText = styled.p`
    ${tw` flex text-3xl font-bold justify-center items-center`}
    cursor : pointer;
`

export function Title(props){
    return(
        <T className={"underline-offset-4 hover:underline-offset-8"}>{props.children}</T>
    )
}
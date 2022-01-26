import React from "react";
import tw, {styled} from "twin.macro";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//moduels
import { Title } from "./Text";

const CenterText = styled.div`
    ${tw` flex
    items-center
    justify-center
    w-full
    mt-10
    mb-10 `}
`

const Atag = styled.a`
    ${tw` mr-4 `}
`

export function SectionTitle({id, title}){
    return (
        <CenterText id={id}>
            <Atag href={`#${id}`}>
                <FontAwesomeIcon icon={faPaperclip} size="2x"/>
            </Atag>
            <Title>{title}</Title>
        </CenterText>
    )
}
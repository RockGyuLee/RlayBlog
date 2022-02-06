import React from "react";
import tw, {styled} from "twin.macro";
import { faGithub, faFacebookSquare, faInstagram} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Foot = styled.div`
    ${tw` bg-gray-900 `}
`

const Hover = styled(FontAwesomeIcon)`
    margin : 1%;
    cursor : pointer;
`

const FootItmes = styled.div`
    ${tw` `}
    padding : 2% 10%;
`

function Footer(){
    return (
        <Foot>
            <FootItmes>
            <Hover icon={faGithub} size={"2x"} color={"white"} style={{ margin : "1%"}} onClick={()=>{window.open("https://github.com/RockGyuLee")}}/>
            <Hover icon={faInstagram} size={"2x"} color={"white"} style={{ margin : "1%"}} onClick={()=>{window.open("https://www.instagram.com/222___rock___9/")}}/>
            </FootItmes>
        </Foot>
    )
}

export default Footer
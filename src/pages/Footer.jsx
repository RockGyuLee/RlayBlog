import React from "react";
import tw, {styled} from "twin.macro";

const Foot = styled.div`
    ${tw` bg-gray-900 `}
`

const FootItmes = styled.div`
    ${tw` `}
    padding : 2% 10%;
`

function Footer(){
    return (
        <Foot style={{height : "100px"}}>
            <FootItmes>
                tset
            </FootItmes>
        </Foot>
    )
}

export default Footer
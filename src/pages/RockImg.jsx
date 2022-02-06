import React, {Fragment} from "react";
import tw, { styled } from "twin.macro";
import Typed from 'react-typed';

//modules
import rock from "../../imgs/rock2.png";

const typeInfo =  [
    "코딩하는 순간을 즐기고 있습니다.",
    "다양한 사람, 새로운 기술들을 만나는걸 좋아합니다. :)",
    "완벽한 사람보다는 빈틈있는 사람이며 협업으로 더 나은 오늘과 내일을 보냅니다.",
];

const Ptag = styled.p`
    ${tw`text-base md:text-xl lg:text-2xl`} 
`

const RlayType = styled.div`
    ${tw`absolute top-0 m-16 md:m-24 lg:m-32`}
`

function RockImg(){
    return (
        <Fragment>
            <img className="w-full opacity-70 sm: h-96 md:h-auto lg:h-auto"  src={rock}/>
            <RlayType>
                <Ptag>
                    <Typed
                        strings = {typeInfo}
                        startDelay = {500}
                        typeSpeed = {100}
                        backSpeed = {50}
                        loop
                    />
                </Ptag>
            </RlayType>
        </Fragment>
    )
}

export default RockImg
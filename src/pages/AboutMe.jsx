import React, {Fragment} from "react";

import tw, {styled} from "twin.macro";
import { faUser, faMobileAlt, faMapMarkerAlt, faCalendarAlt, faAt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//modules
import { Container } from "../components/Container";
import { SectionTitle } from "../components/Section";
import { Text } from "../components/Text";

const FlexLayout = styled.div`
    ${tw` 
        flex
        items-center
        justify-center
        w-full
        flex
        flex-col
        lg:grid
        grid-cols-3 gap-3
    `}
`

const InfoComp = styled.div`
    ${ tw`
        flex
        items-center
        justify-start
        w-full
        pl-16
    `}
`
const ReverseInfo = styled.div`
    ${ tw`
        flex
        flex-col
        m-5
        ml-9
    `}
`

const myInfoList = [
    {
        Icon : <FontAwesomeIcon icon={faUser} size="2x"/>,
        title : "이름",
        text : "이락규"
    },
    {
        Icon : <FontAwesomeIcon icon={faMobileAlt} size="2x"/>,
        title : "연락처",
        text : "010-9918-5994"
    },
    {
        Icon : <FontAwesomeIcon icon={faMapMarkerAlt} size="2x"/>,
        title : "주소",
        text : "전주시 완산구 양지2길 10"
    },
    {
        Icon : <FontAwesomeIcon icon={faCalendarAlt} size="2x"/>,
        title : "생년월일",
        text : "95.01.16"
    },
    {
        Icon : <FontAwesomeIcon icon={faAt} size="2x"/>,
        title : "이메일",
        text : "rmfoszld@naver.com"
    }
]




function AboutMe(props){
    return(
        <div style={{padding : "2% 10%"}}>
            <SectionTitle title="Hi RockGyu" id="MyInfo"/>
            <FlexLayout>
                {
                    myInfoList.map( (i, idx)=> {
                        return (
                            <InfoComp key={idx}>
                                {i.Icon}
                                <ReverseInfo>
                                    <Text>{i.title}</Text>
                                    <Text>{i.text}</Text>
                                </ReverseInfo>
                            </InfoComp>
                        )
                    })
                }
            </FlexLayout>
        </div>
    )
}

export default AboutMe
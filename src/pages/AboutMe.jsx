import React, {Fragment} from "react";
import Typed from 'react-typed';
import tw, {styled} from "twin.macro";
import { faUser, faMobileAlt, faMapMarkerAlt, faCalendarAlt, faAt, faSeedling, faQuestionCircle, faCode, faHandshake } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//modules
import { Container } from "../components/Container";
import rock from "../../imgs/rock2.png";
import { SectionTitle } from "../components/Section";
import { Text } from "../components/Text";

const typeInfo =  [
    "코딩하는 순간을 즐기고 있습니다.",
    "다양한 사람, 새로운 기술들을 만나는걸 좋아합니다. :)",
    "완벽한 사람보다는 빈틈있는 사람이며 협업으로 더 나은 오늘과 내일을 보냅니다.",
];

const RlayType = styled.div`
    ${tw`absolute top-0 md:m-6 lg:m-32`}
`

const Ptag = styled.p`
    ${tw`text-2xl`} 
`

const FlexLayout = styled.div`
    ${tw` 
        flex
        items-center
        justify-center
        w-full
        grid grid-cols-3 gap-3
    `}
`

const InfoComp = styled.div`
    ${ tw`
        flex
        items-center
        justify-center
        m-3
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




function MyInfo(props){
    return(
        <Fragment>
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
        </Fragment>
    )
}

function AboutMe(){
    return(
        <Container>
            <img className="w-full opacity-70"  src={rock}/>
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
            <MyInfo />
        </Container>
    )
}

export default AboutMe
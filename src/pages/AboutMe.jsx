import React, {Fragment} from "react";
import Typed from 'react-typed';
import tw, {styled} from "twin.macro";
import { faUser, faMobileAlt, faMapMarkerAlt, faCalendarAlt, faAt, faSeedling, faQuestionCircle, faCode, faHandshake } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//modules
import { Container } from "../components/Container";
import rock from "../../imgs/rock2.png";
import { SectionTitle } from "../components/Section";

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

const ColumLayout = styled.div`
    ${tw`  `}
    margin : 2% 10%
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

const Row = styled.div`
    ${tw` flex m-10`}
`

const RowItem = styled.div`
    ${tw`flex flex-col w-1/5`}
`

const Text = styled.p`
    ${ tw` text-lg`}
`

const Title = styled.p`
    ${ tw` text-2xl	`}
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

const myPointList = [
    {
        Icon : <FontAwesomeIcon icon={faSeedling} size="2x"/>,
        title : "주니어 개발자",
        text : "사회에 나온지 3년 밖에 안되는 새내기 개발자입니다. 내가 꿈꾸는 것을 실현시키는 직업의 매력에 빠져서 개발자의 길을 걷게되었습니다."
    },
    {
        Icon : <FontAwesomeIcon icon={faQuestionCircle} size="2x"/>,
        title : "문제 해결 및 과정",
        text : "코딩뿐만이 아니라 사회를 살아가다보면 다양한 문제들을 마주하게 됩니다. 해당 문제에 최고의 해결방법을 찾으려고 노력합니다. 또한 문제를 해결하는 방법에만 몰두하는게 아닌 해결에 도출되기까지의 과정도 중요시하게 생각합니다."
    },
    {
        Icon : <FontAwesomeIcon icon={faCode} size="2x"/>,
        title : "계속되는 개발",
        text : "기술스택들을 다양하게 늘리려고 계속 공부합니다. 발전하는 개발세계에 더 최적화된 사람이 되고자 더 나은 개발자가 되기 위해 스스로 개발합니다."
    },
    {
        Icon : <FontAwesomeIcon icon={faHandshake} size="2x"/>,
        title : "서로의 신뢰와 협업",
        text : "무엇을 하던지 혼자서 하기란 지치고 매우 힘이 듭니다. 서로를 신뢰하고 믿어야 더 좋은 협업이 가능하고 그 결과는 좋은 제품이 나온다고 생각하고 있습니다."
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

function MyPoints(props){
    return (
        <Fragment>
            <SectionTitle title="RockGyu Points" id="MyPoints"/>
            <ColumLayout>
            {
                myPointList.map( (i, idx)=> {
                    return(
                        <Row key={idx}>
                            <RowItem>
                                {i.Icon}
                                <br/>
                                <Title>{i.title}</Title>
                            </RowItem>
                            <div className="flex items-center w-4/5">
                                <Text>{i.text}</Text>
                            </div>
                        </Row>
                    )
                })
            }
            </ColumLayout>
        </Fragment>
    )
}

function AboutMe(){
    return(
        <Container>
            <img className="w-full"  src={rock}/>
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
            <MyPoints />
        </Container>
    )
}

export default AboutMe
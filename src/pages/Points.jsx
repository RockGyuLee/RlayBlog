import React, {Fragment} from "react";
import Typed from 'react-typed';
import tw, {styled} from "twin.macro";
import { faUser, faMobileAlt, faMapMarkerAlt, faCalendarAlt, faAt, faSeedling, faQuestionCircle, faCode, faHandshake } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//modules
import { SectionTitle } from "../components/Section";
import { Row } from "../components/Layout";

const ColumLayout = styled.div`
`

const Roww = styled(Row)`
    ${tw` flex h-40 mt-20 mb-9 bg-white rounded-md shadow-lg `}
`

const RowItem = styled.div`
    ${tw`flex flex-col w-1/5 justify-center	items-center`}
`

const Text = styled.p`
    ${ tw` text-sm md:text-lg lg:text-xl`}
`

const Title = styled.p`
    ${ tw` text-base text-center ml-4 md:text-xl lg:text-2xl`}
`

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
        text : "무엇을 하던지 혼자서 하기란 매우 지치고 힘이 듭니다. 서로를 신뢰하고 믿어야 더 좋은 협업이 가능하고 그 결과는 좋은 제품이 나온다고 생각하고 있습니다."
    }
]

function Points(props){
    return (
        <div style={{backgroundColor : "#fcdd61", padding : "2% 10%"}}>
            <SectionTitle title="Points" id="MyPoints"/>
            <ColumLayout>
            {
                myPointList.map( (i, idx)=> {
                    return(
                        <Roww key={idx}>
                            <RowItem>
                                {i.Icon}
                                <br/>
                                <Title>{i.title}</Title>
                            </RowItem>
                            <div className="flex items-center w-4/5 p-4">
                                <Text>{i.text}</Text>
                            </div>
                        </Roww>
                    )
                })
            }
            </ColumLayout>
        </div>
    )
}

export default Points;
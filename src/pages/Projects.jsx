import React, { Fragment } from "react";
import tw, {styled} from "twin.macro";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { faAngleLeft, faAngleRight, faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//modules
import { SectionTitle } from "../components/Section";
import { Row } from "../components/Layout";

import bigdata1 from "../../imgs/projects/bigdatas/bigdata_1.png";
import bigdata2 from "../../imgs/projects/bigdatas/bigdata_2.png";
import bigdata3 from "../../imgs/projects/bigdatas/bigdata_3.png";
import bigdata4 from "../../imgs/projects/bigdatas/bigdata_4.png";
import bigdata5 from "../../imgs/projects/bigdatas/bigdata_5.png";
import bigdata6 from "../../imgs/projects/bigdatas/bigdata_6.png";

import bookLands1 from "../../imgs/projects/booklands/booklands1.png";
import bookLands2 from "../../imgs/projects/booklands/booklands2.png";
import bookLands3 from "../../imgs/projects/booklands/booklands3.png";
import bookLands4 from "../../imgs/projects/booklands/booklands4.png";

import tbs1 from "../../imgs/projects/tbs/tbs1.png";
import tbs2 from "../../imgs/projects/tbs/tbs2.png";
import tbs3 from "../../imgs/projects/tbs/tbs3.png";
import tbs4 from "../../imgs/projects/tbs/tbs4.png";
import tbs5 from "../../imgs/projects/tbs/tbs5.png";
import tbs6 from "../../imgs/projects/tbs/tbs6.png";
import tbs7 from "../../imgs/projects/tbs/tbs7.png";
import tbs8 from "../../imgs/projects/tbs/tbs8.png";

const imgStyle = {
    bigData : {

    },
    bookLands : {
        width : '300px'
    },
    tbsadd : {
        width : '300px'
    }
}

const ItemBlock = styled(Row)`
    ${tw` flex w-full m-3 flex-wrap mb-12 lg:pb-4 shadow-2xl lg:m-12 `};
`
const arrowStyles = {
    position: 'absolute',
    zIndex: 1,
    width: 30,
    cursor: 'pointer',
};

const Arrow = styled.button`
    background-color: transparent;
    transition: 0.25s ease-out;

    &:hover {
        background-color: #d3d3d3;
        transition: background-color 0.25s ease-out;
    }
`

const Title = styled.p`
    ${tw` text-center text-2xl font-bold`}
`

const SubTitle = styled.p`
    ${tw` mt-3`}
`


const Contents = styled.div`
    padding-bottom : 10%;
    border-bottom : 1px solid 
`

const projectDatas = [
    {
        projectName : "빅데이터 분석장치",
        styleId : "bigData",
        date : "19.09.01 ~ 21.10.31 (회사 팀 프로젝트)",
        datas : [
            {
                path : bigdata1,
                label : "로그인 화면",
            },
            {
                path : bigdata2,
                label : "메인화면",
            },
            {
                path : bigdata3,
                label : "보수/교체 순위",
            },
            {
                path : bigdata4,
                label : "선로전환기 장치",
            },
            {
                path : bigdata5,
                label : "선로전환기 추이분석",
            },
            {
                path : bigdata6,
                label : "궤도회로 장치",
            },
        
        ],
        contents : `
            코레일의 신호감시 시스템으로 궤도에서 감지되는 신호 데이터, 선로전환기 및 장치들의 데이터를 전처리 후 시각화 표시합니다.
            기획부터 프로젝트에 참여하여 배포까지 완료하였습니다. Spring, JS(React)로 프론트엔드 개발을 진행했습니다.
            첫 회사에서 새로 생긴 팀에서 처음으로 만드는 프로젝트였습니다. 초보 개발자이지만 생각을 많이하면서 웹개발을 진행했습니다. 개발자 마인드로 보는게 아닌
            사용자 입장에서 보려고 노력하였습니다. 많은 데이터를 어떻게 보여줘야 효과적으로 한눈에 파악되는지, 다양한 차트를 그려보면서 구축해 나갔습니다.
            또한, 사용자의 입력 이벤트를 디바운스, 쓰로틀링을 이용하여 웹 페이지의 연산을 최소화 시켜 나갔습니다. 어떻게 로직을 수정하고 변경해야 최적화할 수 있는지 끊임없이 생각하였습니다.
            디자이너 없이 웹 디자인을 구상하며 사용자의 UI & UX에 대해서도 생각할 수 있는 좋은 경험이었습니다.
            해당 프로젝트를 진행하면서 html, css, js에 대해서 깊이 알 수 있는 경험이 되었으며, 특히 js에 흥미가 생기게 되었습니다.
        `,
        useSkills : {
            skill : `코레일 신호설비에서 나오는 데이터들을 정기적인 유지보수에서 상태기반정비로 전환합니다. 또한 최종 기능은 현장유지보수자들의 경험을 토대로 기계 학습하여 
            최적의 현장 유지보수 프로세스 프레임워크 구축을 목표로 합니다.`, //주요기능
            link : "https://github.com/LeeJaeHyeuk/sehwa_SN_front", // github link
            backEnd : "Spring, MariaDB", // backEnd
            frontEnd : "React, Recoil, Tailwind, Figma" // frontEnd
        }
    },
    {
        projectName : "책동산",
        styleId : "bookLands",
        date : "20.05.01 ~ 21.03.31 (개인 프로젝트)",
        datas : [
            {
                path : bookLands1,
                label : "로그인 화면",
            },
            {
                path : bookLands2,
                label : "메인화면",
            },
            {
                path : bookLands3,
                label : "검색 화면",
            },
            {
                path : bookLands4,
                label : "책 상세 페이지",
            },
        ],
        contents : `
            React-Native를 이용하여 독후감 어플을 개발하였습니다. 팀 프로젝트로 기획, 디자인, 개발을 나눠서 진행할 예정이었으나 혼자서 시작한 프로젝트 입니다.
            react문법으로 어플을 개발한다는게 매우 흥미로워서 어플 개발을 시작하게 되었습니다. 또한, React와 CSS에 조금 더 익숙해질 수 있다고 생각하여 제작하게되었습니다.
            책동산 어플은 안드로이드 버전만 개발하였습니다. 기획부터 디자인, 개발을 다 해볼 수 있는 좋은 경험이었습니다.
            어플을 개발하면서 기획, 디자인, 개발로 인해서 프로젝트 방향을 많이 변경하면서 해당 부서들의 고충을 조금이나마 이해할 수 있게되었습니다.
        `,
        useSkills : {
            skill : "유저가 읽은 책을 검색한 후 해당 책에 대한 내 느낌을 간략히 저장한다. Firebase, Facebook 로그인, naveer open api(검색)", //주요기능
            link : "https://github.com/RockGyuLee/ChatBookRock", // github link
            backEnd : "Firebase",
            frontEnd : "React, React-Native, Android Studio" // frontEnd
        }
    },
    {
        projectName : "부패시체의 사후경과시간 추정 어플",
        styleId : "tbsadd",
        date : "19.03.02 ~ 21.06.15 (학교 팀 프로젝트)",
        datas : [
            {
                path : tbs1,
                label : "분석 목록 화면",
            },
            {
                path : tbs2,
                label : "분석 세팅 화면",
            },
            {
                path : tbs3,
                label : "주소 입력 화면",
            },
            {
                path : tbs4,
                label : "위치 입력 화면",
            },
            {
                path : tbs5,
                label : "GPS와 가까운 평균온도 자동 표시 화면",
            },
            {
                path : tbs6,
                label : "부패 점수 리스트 화면",
            },
            {
                path : tbs7,
                label : "온도 설정 화면",
            },
            {
                path : tbs8,
                label : "분석 결과 화면",
            },
        ],
        contents : `
            교수님이 전라북도경찰정에서 어플 제작 의뢰를 받으셔서 저와 팀원들을 꾸려 제작하게 되었습니다. 대학생시절에 실제 사용될 어플을 만들어볼 수 있는 좋은 기회였습니다. 고객과 미팅을 가지면서 니즈를 파악해가며
            어플의 기획을 다져나갔습니다. AndroidStudio로 제작하였으며 이 프로젝트는 그동안 배웠던 기술들을 사용자의 니즈에 잘 녹일 수 있는것도 큰 목표였습니다.
            사건현장에서 언제 죽었는지 알 수 없는 시체를 머리 몸통 팔/다리의 부패도를 점수화 한 후 이를 모두 합하여 총 부패지수를 구하고 Mottatt 회귀식을 이용하여 유효적산 온도를 구합니다.
            구한 온도를 현장과 기상청(openApi) 온도를 분석한 후 과거의 현장 온도를 보정하고, 유효적산온도(ADD)만큼 역산하여 PMI를 추정합니다. 추정한 PMI데이터는 사용자의 디바이스에 저장되며 다시 수정이 가능합니다.
        `,
        useSkills : {
            skill : `GPS를 이용한 근처 평균온도 api 이용, Mottatt 로직 수정, 저장 및 수정 기능`, //주요기능
            link : "X", // github link
            backEnd : "sqlite",
            frontEnd : "Android Studio" // frontEnd
        }
    }
]

const UseContents = ({data}) => {
    return (
        <div className="flex flex-col">
            <div className="flex mt-4 flex-col lg:flex-row">
                <div className="flex flex-row  items-center w-auto" >
                    <FontAwesomeIcon className="m-4 h-auto mr-8" icon={faHandPointRight} size="2x" />
                    <div className="font-bold" >주요기능</div>
                </div>
                <div className=" flex  items-center  text-base font-bold ml-6 lg:w-2/3">
                    {data.skill}
                </div>
            </div>
            <div className="flex mt-4 flex-col lg:flex-row">
                <div className="flex flex-row  items-center w-auto" >
                    <FontAwesomeIcon className="m-4 h-auto mr-8" icon={faHandPointRight} size="2x" />
                    <div className=" font-bold">Github</div>
                </div>
                <p className="flex  items-center  text-base font-bold  ml-6 break-all lg:w-2/3">
                    {data.link} 
                </p>
            </div>
            <div className="flex mt-4 flex-col lg:flex-row">
                <div className="flex flex-row  items-center w-auto" >
                    <FontAwesomeIcon className="m-4 h-auto mr-8" icon={faHandPointRight} size="2x" />
                    <div className=" font-bold">BackEnd</div>
                </div>
                <div className="flex  items-center font-bold ml-6 lg:w-2/3">
                    { data.backEnd}
                </div>
            </div>
            <div className="flex mt-4 flex-col lg:flex-row">
                <div className="flex flex-row  items-center w-auto">
                    <FontAwesomeIcon className="m-4 h-auto mr-8" icon={faHandPointRight} size="2x" />
                    <div className=" font-bold">FrontEnd</div>
                </div>
                <div className="flex  items-center font-bold ml-6 lg:w-2/3" >
                    { data.frontEnd}
                </div>
            </div>
        </div>
    )
}

function Projects(){
    return (
        <div style={{ backgroundColor : "#F3F0D7", padding : "2% 10%"}}>
            <SectionTitle title="Projects" id="projects"/>
                {
                    projectDatas.map( (item , idx)=> (
                        <ItemBlock key={idx}>
                        <div  className="flex flex-col m-4">
                            <div className=" m-4 flex flex-col justify-center items-center"> 
                                <Title>{item.projectName}</Title>
                                <SubTitle>{item.date}</SubTitle>
                            </div>
                            <div className=" flex flex-col w-72 lg:flex-row lg:w-full">
                                <Carousel
                                    className=" lg:w-1/2 p-4"
                                    statusFormatter={(current, total) => `${current} / ${total}`}
                                    renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                        hasPrev && (
                                            <Arrow  onClick={onClickHandler} title={label} style={{ ...arrowStyles,  height : "100%" }}>
                                                <FontAwesomeIcon icon={faAngleLeft} color="white"/>
                                            </Arrow>
                                        )
                                    }
                                    renderArrowNext={(onClickHandler, hasNext, label) =>
                                        hasNext && (
                                            <Arrow onClick={onClickHandler} title={label} style={{ ...arrowStyles, top:0, right: 0 ,height : "100%"}}>
                                                <FontAwesomeIcon icon={faAngleRight} color="white"/>
                                            </Arrow>
                                        )
                                    }
                                >
                                    {
                                        item["datas"].map( (i, idx )=> (
                                            <div key={idx} >
                                                <img src={i.path} style={ imgStyle[item.styleId] } />
                                                <p className="legend">{i.label}</p>
                                            </div>
                                        ))
                                    }
                                </Carousel>
                                <div className="w-full lg:w-1/2">
                                    <Contents className="h-fit text-base font-bold p-3">{item.contents}</Contents>
                                    <UseContents data={item.useSkills}/>
                                </div> 
                            </div>
                        </div>
                        </ItemBlock>
                    ))
                }
        </div>
    )
}

export default Projects
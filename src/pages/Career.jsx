import React, {useState, useEffect} from "react";
import tw, {styled} from "twin.macro";

//moduels
import sehwa from "../../imgs/sehwa.png";
import { SectionTitle } from "../components/Section";

const LogoText = styled.p`
    ${tw` text-4xl font-bold mb-3`}
`
const DateText = styled.p`
    ${tw` text-base ml-3 `}
`

const IntroText = styled.p`
    ${tw` text-xl m-3 `}
`

const SubTitle = styled.p`
    ${tw` text-xl font-bold m-3 `}
`
function Career(){

    const [ position, setPosition ] = useState(0);

    const onScroll = () => {
        setPosition(window.scrollY);
    }

    useEffect(()=>{
        window.addEventListener("scroll", onScroll)
        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    }, [])

    return (
        <div className="bg-orange-50" style={{
            padding : "2% 15%"
        }}>
            <SectionTitle title="Rock'story" id="story"/>
            <div style={{overflow : "auto", overflowY : "hidden"}}>
                <div className="flex" style={{height : "200vh", overflow : "auto", overflowY : "hidden"}}>
                    <div className="rounded-lg bg-white flex justify-center items-center"style={{
                            width : "300px",
                            height : "150px",
                            opacity : (position - 6000) / 200
                        }} >
                        <img src={sehwa} />
                    </div>
                    
                    <div className="flex flex-col" style={{
                        marginLeft : "5%",
                        borderLeft : "1px solid",
                        paddingLeft : "7%"
                    }}>
                        <div style={{
                            opacity : (position - 6000) / 200,
                        }}>
                            <LogoText>(주) 세화</LogoText>
                            <DateText className=" text-gray-500">19.09.01 - 21.10.31</DateText>
                            <IntroText>세화는 철도전기 신호분야의 기술력을 확보하여 철도 사업에 전반적으로 참여하고 유지보수자들에게 감시시스템 및 고장예측진단 기술을 적용하고 있습니다.</IntroText>
                            <IntroText>
                                빅데이터 고장 예측진단 시스템의 웹 개발 업무를 총괄하여 담당하였습니다. 개발과 서비스 베포까지 시켰습니다. 사용자들에게 서비스 교육까지 담당하였습니다.
                            </IntroText>
                        </div>
                        <div style={{
                            opacity : (position - 6250) / 200,
                        }}>
                            <SubTitle>
                                〒 예측진단 시스템 기획 및 백엔드, 프론트엔드 구상 및 개발 시작
                            </SubTitle>
                            <DateText className=" text-gray-500">19.09.01 - 19.12.31</DateText>
                            <div className="m-3">⁃ 프로젝트 기획</div>
                            <div className="m-3">⁃ 화면 UI &amp; UX 제작</div>
                            <div className="m-3">⁃ 프로토타입 화면 개발 시작</div>
                        </div>
                        <div style={{
                            opacity : (position - 6500) / 200,
                        }}>
                            <SubTitle>
                                〒 예측진단 시스템 화면 리뷰 및 리빌딩 진행
                            </SubTitle>
                            <DateText className=" text-gray-500 ">20.01.01 - 20.02.28</DateText>
                            <div className="m-3">⁃ 사용자 흐름도 제작</div>
                            <div className="m-3">⁃ 실무진들에게 화면 리뷰</div>
                            <div className="m-3">⁃ 프로젝트 방향성 수정 및 개발 도구 변경( Django -&gt; Spring / Jquery -&gt; React)</div>
                        </div>
                        <div style={{
                            opacity : (position - 6750) / 200,
                        }}>
                            <SubTitle>
                                〒 예측진단 시스템 웹 어플리케이션 제작 및 준공
                            </SubTitle>
                            <DateText className=" text-gray-500 ">20.03.01 - 20.09.30</DateText>
                            <div className="m-3">⁃ Jquery에서 React 변경 진행</div>
                            <div className="m-3">⁃ Figma를 이용한 화면 흐름도 작성 및 예측진단 시스템 방향성 구축</div>
                            <div className="m-3">⁃ Component 마다 Storybook으로 리뷰 진행 후 피드백 진행 </div>
                            <div className="m-3">⁃ Echart Component Customize( zoomin / zoomOut Event 생성 )</div>
                            <div className="m-3">⁃ Debounce Throttle 도입으로 성능 개선</div>
                            <div className="m-3">⁃ 컴포넌트마다 DAU, MAU 파악을 위한 이벤트 생성</div>
                            <div className="m-3">⁃ 예측진단 시스템 계룡역 준공</div>
                            <div className="m-3">⁃ 예측진단 시스템 피드백 수렴</div>
                        </div>
                        <div style={{
                            opacity : (position - 7000) / 200,
                        }}>
                            <SubTitle>
                                〒 사업소 피드백 시스템 리팩토링 
                            </SubTitle>
                            <DateText className=" text-gray-500 ">21.03.01 - 21.10.31</DateText>
                            <div className="m-3">⁃ 예측진단 시스템 사업소 준공 및 교육</div>
                            <div className="m-3">⁃ DAU, MAU 상위 Component 업데이트 진행 및 하위 Component 시나리오 재설정</div>
                            <div className="m-3">⁃ 반응형 웹 디자인 개발 및 CSS 코드 리팩토링</div>
                            <div className="m-3">⁃ 신입 프론트엔드 개발자 사수 담당 및 개발 프로세스 교육</div>
                        </div>
                        <div style={{
                            opacity : (position - 7300) / 200,
                        }}>
                            <SubTitle>
                                ⚡︎ 개발 업무 외 기타 업무
                            </SubTitle>
                            <DateText className=" text-gray-500 "></DateText>
                            <div className="m-3">⁃ 예측진단 시스템 교육 동영상 제작</div>
                            <div className="m-3">⁃ 예측진단 시스템 준공 및 교육</div>
                            <div className="m-3">⁃ 전처리, 백엔드 개발자와 코드 리뷰</div>
                            <div className="m-3">⁃ 신입 개발자 교육</div>
                            <div className="m-3">⁃ 신입 프론트엔드 개발자 사수 담당 및 개발 프로세스 교육</div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Career;
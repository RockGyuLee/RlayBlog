import React, {Fragment } from "react";
import tw, {styled} from "twin.macro";

//moduels
import { SectionTitle } from "../components/Section";
import { Row } from "../components/Layout";

import htmlcssjs from "../../imgs/htmlcssjs.jpeg";
import react from "../../imgs/react.png";
import recoil from "../../imgs/recoil.png";
import redux from "../../imgs/redux.png";
import jquery from "../../imgs/jquery.png";
import android from "../../imgs/android.jpeg";

import java from "../../imgs/java.png";
import spring from "../../imgs/spring.png"
import python from "../../imgs/python.png";
import django from "../../imgs/django.jpeg";
import tailwind from "../../imgs/tailwind.png";

import webpack from "../../imgs/webpack.png";
import git from "../../imgs/git.png";

import firebase from "../../imgs/firebase.jpeg";
import slack from "../../imgs/slack.png";
import figma from "../../imgs/figma.png";

import { Text } from "../components/Text";

const FlexLayout = styled.div`
    ${ tw` flex flex-col lg:flex-row`}
`

const BlockHeader = styled.div`
    ${tw`mt-4 w-full h-14 flex justify-center items-center border-b-4 pb-4`}
`

const ItemBlock = styled(Row)`
    ${tw` relative w-full lg:w-1/3 m-3 flex-wrap pb-4 shadow-2xl`};
    transform: translate(0%);
    transition: 0.2s ease-out;
    
    &:hover {
        transform: translate(0px, -10px);
        transition: 0.2s ease-out;
    }
`

const MiddleBlock = styled.div`
    ${tw`flex-wrap  pb-4 flex mb-4 bg-white rounded-md shadow-2xl    `}
    transform: translate(0%);
    transition: 0.2s ease-out;
    
    &:hover {
        transform: translate(0px, -10px);
        transition: 0.2s ease-out;
    }
`

const SkillItem = styled.img`
    ${tw`w-full`}
`

const CenterText = styled(Text)`
    ${tw` flex justify-center items-center font-bold text-3xl`}
`

function Skills(){
    return (
        <div style={{backgroundColor : "#CEE5D0", padding : "2% 10%"}}>
            <SectionTitle title="Skills" id="Skills"/>
            <FlexLayout>
                <ItemBlock>
                    <BlockHeader>
                        <CenterText>FrontEnd</CenterText>
                    </BlockHeader>
                    <SkillItem className="h-44" src={htmlcssjs}/>
                    <SkillItem className="h-32" src={react}/>
                    <SkillItem className="h-28 p-8" src={recoil}/>
                    <SkillItem className="h-28 p-4" src={redux}/>
                    <SkillItem className="h-28 p-4" src={jquery}/>
                    <SkillItem className="h-44 p-8" src={android}/>
                    <SkillItem className="h-44 p-4" src={tailwind}/>
                </ItemBlock>
                <div className="w-full lg:w-1/3 m-3 flex-wrap">
                    <MiddleBlock className="h-auto ">
                        <BlockHeader>
                            <CenterText>BackEnd</CenterText>
                        </BlockHeader>
                        <SkillItem className="h-32" src={java}/>
                        <SkillItem className="h-32" src={spring}/>
                        <SkillItem className="h-32" src={python}/>
                        <SkillItem className="h-32" src={django}/>
                    </MiddleBlock>
                    <MiddleBlock className="h-auto">
                        <BlockHeader>
                            <CenterText>Bundler & VCS</CenterText>
                        </BlockHeader>
                        <SkillItem className="h-32" src={webpack}/>
                        <SkillItem className="h-32" src={git}/>
                    </MiddleBlock>
                </div>
                <ItemBlock className="h-max	">
                    <div className="mt-4 w-full h-14 flex justify-center items-center border-b-4 pb-4">
                        <CenterText>Communication</CenterText>
                    </div>
                    <SkillItem className="h-32 p-8" src={figma}/>
                    <SkillItem className="h-28 p-8" src={slack}/>
                    <SkillItem className="h-32" src={firebase}/>
                </ItemBlock>
            </FlexLayout>
        </div>
    )
}

export default Skills;
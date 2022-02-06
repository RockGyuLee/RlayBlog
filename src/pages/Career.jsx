import React, {useState, useEffect} from "react";
import { SectionTitle } from "../components/Section";

//moduels
import sehwa from "../../imgs/sehwa.png";

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

    console.log("po",position)

    return (
        <div className="bg-red-100" style={{
            padding : "2% 20%"
        }}>
            <SectionTitle title="Rock'story" id="story"/>
            <div style={{overflow : "auto", overflowY : "hidden"}}>
                <div className="flex" style={{height : "200vh", overflow : "auto", overflowY : "hidden"}}>
                    <div className="rounded-lg bg-white flex justify-center items-center"style={{
                            width : "300px",
                            height : "150px",
                            opacity : (position - 6150) / 150
                        }} >
                        <img src={sehwa} />
                    </div>
                    
                    <div style={{
                        opacity : (position - 6150) / 150,
                        marginLeft : "5%",
                        borderLeft : "1px solid",
                        paddingLeft : "10%"
                    }}>
                        test
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Career;
import React from "react"
import Hero from "../components/Hero"
import Content from "../components/Content"
import DownloadCV from "../components/DownloadCV"
import { Container, Row, Col } from "react-bootstrap"

const AboutPage = (props)=>{
    return(
        <div>
                    <Hero title={props.title} text={props.text}/>
                   
            
            <Content>
               <p>
               Hi, my name is Erik Rudhe and I am a 26 year old person who has just graduated
with a master degree in media technology from Linköpings universitet, campus
Norrköping. It has been an education that I have enjoyed very much because 
I have developed both creatively and technically. Im now on the hunt for an 
exciting and intressenting job as a software developer, preferbly in the web development area. 
               </p>

                <p>I enjoy taking on complex problems and turning them into simple and beautiful
interface design solutions. I also enjoy working with the logic and structure
of coding and always strive to whrite elegant and efficient code, weather it
to be HTML, CSS and JavaScript or C++.</p>   

            <p>
            When Im not working or studying, you will probably find me in the climbing 
gym or outdoors looking for some adventure.  
            </p>

            <p>
            If you think I seem interesting and would like to know more about my work 
experience, you can dowload my CV below.
            </p>
            
            </Content>
            <DownloadCV/>
        </div>
    )
}

export default AboutPage
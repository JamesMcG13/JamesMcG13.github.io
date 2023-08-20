import React from "react";
import Typed from "react-typed";

function Intro(){
    return (
        <div className="flex items-center justify center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-6xl mb-3 md:mb-3 font-bold">James McGowan</h1>
            <Typed className="text-base md:text-3xl mb-6 font-medium"
                strings={["Computer Science Graduate", "Software Engineer", "Data Scientist", "Web Developer", "Data Analyst"]}
                typeSpeed={120}
                backspeed={100}
                loop
            />
            <p className="text-sm max-w-screen-xl mb-10 font-bold md:text-1xl">
                👨‍💻 I'm a passionate computer science graduate from UEA, eager for embark on a tech career. With a solid foundation and a thirst for knowledge, I'm ready to explore diverse career paths armed with a first-class degree.
                🚀 As a perpetual learner, I stay updated with industry trends and expand my toolkit. Problem-solving is my drive, and I thrive in collaborative environments, valuing diverse perspectives.
                🎓 UEA gave me theory; now, I'm eager for hands-on industry experience, making an impact through software, algorithms, and open-source. 
                💡 I'm open to various paths – from creation to analysis – thanks to the ever-evolving tech world. My goal is to contribute, learn, and embrace growth in the tech world!
            </p>
        </div>
    )
}

export default Intro;
import React from "react";
import Typed from "react-typed";

function Intro(){
    return (
        <div className="flex items-center justify center flex-col text-center pt-20 pb-20">
            <h1 className="text-4xl md:text-7xl mb-2 md:mb-3 font-bold bg-clip-text text-stone-900 dark:text-white">James McGowan</h1>
            <Typed className="text-2xl md:text-4xl mb-6 font-medium text-stone-900 dark:text-white"
                strings={["Computer Science Graduate", "Freelance Web Developer", "Data Analyst"]}
                typeSpeed={100}
                backspeed={100}
                loop
            />
            <p className="pb-20 text-md max-w-screen-md font-semi-bold md:text-1xl text-stone-900 dark:text-white">
                Passionate computer science graduate from UEA, eager for embark on a tech career. With a solid foundation and a thirst for knowledge, I'm ready to explore diverse career paths armed with a first-class degree.
                As a perpetual learner, I stay updated with industry trends and expand my toolkit. Problem-solving is my drive, and I thrive in collaborative environments, valuing diverse perspectives.
                UEA gave me theory; now, I'm eager for hands-on industry experience, making an impact through software, algorithms, and open-source. 
                I'm open to various paths – from creation to analysis – thanks to the ever-evolving tech space. My goal is to contribute, learn, and embrace growth in the technoloy sector!
            </p>
        </div>
    )
}

export default Intro;
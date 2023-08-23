import React from "react";
import timeline from "../Data/timeline";
import TimelineItem from "./TimeLineItem";
import Title from "./title";


function Timeline(){
    return(
        <div className="pt-10">
            <section class="w-screen h-96 flex items-center justify-center h-80 mb-20 bg-fixed bg-center bg-cover bg-UEA"/>
            <Title>Timeline</Title>
            <div className="flex flex-col md:flex-row justify-center pt-10 pb-20">
                <div className="w-full md:w-7/12">
                    {timeline.map(item =>(
                        <TimelineItem
                        year={item.year}
                        title={item.title}
                        duration={item.duration}
                        details={item.details}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Timeline;
import React from "react";
import portfolio from "../Data/Portfolio";
import PortfolioItem from "./PortfolioItem";

function Portfolio(){
    return(
        <div >
            <h2 className="text-center text-4xl md:text-4xl mb-2 md:mb-3 font-bold bg-clip-text text-stone-900">Projects</h2>
            <div className="flex flex-col md:flex-row items-center justify-center pt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {portfolio.map(project => (
                        <PortfolioItem                        
                        imgUrl={project.imgUrl}
                        title={project.title}
                        description={project.description}
                        stack={project.stack}
                        link={project.link}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
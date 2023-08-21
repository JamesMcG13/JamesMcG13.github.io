import React from "react";

function TimelineItem({year, title, duration, details}){
    return(
        <ol className="flex flex-col md:flex-row relative border-l border-stone-900 dark:border-white">
            <li className="mb-14 ml-4">
                <div className="absolute w-3 h-3 bg-stone-900 rounded-full mt-1.5 -left-1.5 border dark:bg-white"/>
                <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm text-white">
                    <span className="inline-block px-2 py-1 font-semibold text-white bg-gradient-to-r from-green-500 to-blue-500 drop-shadow-md rounded-md dark:bg-gradient-to-r dark:from-pink-500 dark:to-yellow-500">
                        {year}
                    </span>
                    <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
                        {title}
                    </h3>
                    <div className="my-1 text-sm font-normal leading-none text-blue-500 dark:text-pink-500">
                        {duration}
                    </div>
                </p>
                <p className="my-2 text-base font-normal text-stone-700 dark:text-white">
                    {details}
                </p>
            </li>
        </ol>
    )
}

export default TimelineItem;
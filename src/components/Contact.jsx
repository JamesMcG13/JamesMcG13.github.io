import React from "react";
import Title from "./title";

function Contact(){
    return(
        <div className="pt-20">
            <Title>Contact me</Title>
            <div className="flex flex-col mb-10 mx-auto pt-10"> 
                <div className="flex justify-center items-center">
                    <form
                        action="https://getform.io/slug"
                        method="POST"
                        className="flex flex-col w-full md:w-7/12"
                    >
                        <input 
                            type="text" 
                            name="name"
                            placeholder="Name"
                            className="p-2 bg-white border-stone-900 border-4 rounded-md focus:outline-none dark:border-white dark:text-white dark:bg-stone-900"
                        />

                        <input 
                            type="text" 
                            name="email"
                            placeholder="Email"
                            className="my-2 p-2 bg-white border-stone-900 border-4 rounded-md focus:outline-none dark:border-white dark:text-white dark:bg-stone-900"
                        />

                        <textarea
                            name=""
                            rows="10"
                            placeholder="Message"
                            className="my-2 mb-4 p-2 bg-white border-stone-900 border-4 rounded-md focus:outline-none dark:border-white dark:text-white dark:bg-stone-900"
                        />

                        <button className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-green-500 to-blue-500 drop-shadow-md hover:from-pink-500 hover:to-yellow-500 dark:bg-gradient-to-r dark:from-pink-500 dark:to-yellow-500 drop-shadow-md dark:hover:from-green-500 dark:hover:to-blue-500">Send</button>

                    </form>

                </div>
            </div>
        </div>
    )
}

export default Contact;
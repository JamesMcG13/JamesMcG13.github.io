import React from "react";

function Contact(){
    return(
        <div className="flex flex-col mb-10 mx-auto"> 
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
                        className="p-2 bg-white border-stone-900 border-2 rounded-md focus:outline-none"
                    />

                    <input 
                        type="text" 
                        name="email"
                        placeholder="Email"
                        className="my-2 p-2 bg-white border-stone-900 border-2 rounded-md focus:outline-none"
                    />

                    <textarea
                        name=""
                        rows="10"
                        placeholder="Message"
                        className="my-2 mb-4 p-2 bg-white border-stone-900 border-2 rounded-md focus:outline-none"
                    />

                    <button className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-green-500 to-blue-500 drop-shadow-md hover:from-pink-500 hover:to-yellow-500">Send</button>

                </form>

            </div>
        </div>
    )
}

export default Contact;
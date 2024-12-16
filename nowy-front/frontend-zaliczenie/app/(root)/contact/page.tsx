/* eslint-disable react/no-unescaped-entities */
"use client"
import { NextPage } from "next";

const Page: NextPage = () => {

    return (
        <div className="page space-y-10">

            <div className="flex items-start gap-10">
                <div className="tile space-y-5">
                    <h1 className="font-bold text-2xl">Have Questions?<br/>Contact Us!</h1>
                    <p>Whether you have questions about court availability, pricing, or anything else – we’re here to help!</p>
                    <div className="email-box">
                        <p>Email us at:</p>
                        <a className="text-blue-800" href="mailto:basketballcourts@example.com">basketballcourts@example.com</a>
                    </div>
                </div>

                <div className="flex flex-col tile w-full space-y-3">
                    <h2 className="text-center text-xl font-bold">Send us a message 🏀</h2>
                    <form className="flex flex-col p-4 space-y-5">
                        <label className="flex flex-col">
                            Full name*
                            <input type="text" placeholder="Enter your full name" required/>
                        </label>
                        <label className="flex flex-col">
                            Email address*
                            <input type="email" placeholder="Enter your email" required/>
                        </label>
                        <label className="flex flex-col">
                            Subject*
                            <input type="text" placeholder="What is this about?" required/>
                        </label>
                        <label className="flex flex-col">
                            Message*
                            <textarea placeholder="Write your message here" required></textarea>
                        </label>
                        <button type="submit" className="sendButton">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Page;

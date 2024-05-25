"use client"
import React, { useRef, useState } from 'react'
import Particless from '../(components)/Particless';
import emailjs from '@emailjs/browser';


const Page = () => {

    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [from_email, setFromemail] = useState("");
    const [from_name, setFromname] = useState("");

    const form = useRef();
    const YOUR_PUBLIC_KEY = process.env.YOUR_PUBLIC_KEY;
    const YOUR_SERVICE_ID = process.env.YOUR_SERVICE_ID;
    const YOUR_TEMPLATE_ID = process.env.YOUR_TEMPLATE_ID;

    const sendEmail = (e) => {
        e.preventDefault();

        console.log("entered")
        console.log(form.current);

        emailjs
            .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID,form.current, {
                publicKey: YOUR_PUBLIC_KEY

            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert('Message Sent Successfully')
                },
                (error) => {
                    console.log('FAILED...', error);
                    console.log(YOUR_PUBLIC_KEY);
                    console.log(YOUR_SERVICE_ID);
                    console.log(YOUR_TEMPLATE_ID);

                },
            );

    }


    return (
        <>
            <Particless />
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact</h2>
                    <form action="#" className="space-y-8" ref={form} onSubmit={sendEmail}>
                        <div>
                            <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
                            <input name="from_name" type="name" value={from_name} id="name" onChange={(e) => { setFromname(e.target.value) }} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Kaustubh Pathak" required />
                        </div>
                        <div>
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                            <input name="from_email" type="email" value={from_email} id="email" onChange={(e) => { setFromemail(e.target.value) }} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="example@gmail.com" required />
                        </div>
                        <div>
                            <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                            <input type="text" name='subject' onChange={(e) => { setSubject(e.target.value) }} value={subject} id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how can i help you" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                            <textarea id="message" name='message' onChange={(e) => { setMessage(e.target.value) }} value={message} rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                        </div>
                        <div className=' flex justify-center'>
                            <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-blue-500">Send message</button>

                        </div>
                    </form>
                </div>
            </section>
        </>

    )
}

export default Page
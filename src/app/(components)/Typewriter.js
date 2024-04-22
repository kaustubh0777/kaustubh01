import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js';
import words from '../words';

const Typewriter = () => {

    const ele = useRef(null);
    useEffect(() => {
        const typed = new Typed(ele.current, {
            strings: words,
            startDelay: 200,
            typeSpeed: 80,
            backSpeed: 90,
            backDelay: 100,
            loop:true
        });
        return () => {
            typed.destroy();
        };
    }, []);


    return (
        <div className='flex justify-center items-center text-3xl'>
            <h1>I'm a <span ref={ele} className=' text-yellow-500'></span></h1>
        </div>
    )
}

export default Typewriter
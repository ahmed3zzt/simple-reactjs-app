import React from 'react'
import "./hero.css"
import {Button} from "../../components/button/button";

const Hero = () => {
  return (
    <>
        <div className='hero-section'> 
            <div className="w-[80%] mx-auto flex items-center justify-center h-[100%] flex-col gap-4">
                <h1 className='text-[84px] font-bold'>The Axis Group</h1>
                <h2 className='text-3xl font-bold'>Financial Consulting. Let Us Do the Math.</h2>
                <Button text='Get Started'/>
            </div>
        </div>
    </>
  )
}

export {Hero}
'use client'
import React from 'react'
import {motion} from "framer-motion"
import { cn } from '@/lib/utils'

interface Props extends React.HTMLAttributes<HTMLDivElement>{
    text:string
    className?:string
}

const HeroAnimation = React.forwardRef<HTMLDivElement, Props>(
    ({text, className, ...props}, ref) => {
        const item = {
            hidden:{
                y:'200%',
                opacity:0,
                transition:{
                    ease:[0.455, 0.03, 0.515, 0.955], duration:0.55
                }
            },
            visible:{
                y:'0',
                opacity:1,
                transition:{
                    ease:[0.455, 0.03, 0.515, 0.955], duration:0.45
                }
            }
        }

        const words = text.split(" ").map(word => {
            const charaters = word.split("")
            charaters.push("\u00A0")
            return charaters
        })
  return (
    <div ref={ref} {...props}>
        {words.map((word, index) => {
            return(
                <span key={index} className='whitespace-nowrap' style={{overflow:'hidden'}}>
                    {word.map((element, charIndex) => (
                        <span key={charIndex} style={{overflow:'hidden', display:'inline-block'}}>
                            <motion.span variants={item}  className={cn("hello", className)} 
                            style={{display:'inline-block'}}
                            >
                                {element}
                            </motion.span>
                        </span>
                    ))}
                </span>
            )
        })}
    </div>
  )
}
)

HeroAnimation.displayName = 'HeroAnimation'; // Setting the display name

export default HeroAnimation;
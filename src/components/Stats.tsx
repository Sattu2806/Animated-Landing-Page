'use client'
import React from 'react'
import {motion} from "framer-motion"

type Props = {}

function Stats({}: Props) {
    const wrapperstat = {
        hidden:{
            opacity:0, translateX:-100
        },
        visible:{
            opacity:1,
            translateX:0,
            transition:{
                staggerChildren:0.125
            }
        }
    }

    const wrapper= {
        hidden:{
            opacity:0
        },
        visible:{
            opacity:1,
            transition:{
                staggerChildren:0.125,
            }
        }
    }

    const list = {
        hidden:{opacity:0, y:-100},
        visible:{
            opacity:1,
            y:0,
            transition:{duration:0.3 , ease:[0.455, 0.03, 0.515, 0.955]}
        }
    }
  return (
    <div className='relative'>
        <div className='w-full max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-y-12 pt-32'>
            <div className='lg:pr-16 overflow-hidden'>
                <motion.div initial={{translateX:100, opacity:0}} whileInView={{translateX:0, opacity:1}} transition={{duration:0.5}} viewport={{once:true}}>
                    <h2 className='text-2xl sm:text-3xl lg:text-4xl text-white max-w-md font-semibold'>The missing standard library for TypeScript</h2>
                    <p className="mt-6 mb-3 max-w-xl font-light text-zinc-400">TypeScript/JavaScript, the most popular programming language, is still missing a standard library. Effect is filling this gap by providing a solid foundation of data structures, utilities, and abstractions to make building applications easier.
                    </p>
                    <a href="/" className='flex items-start text-white'>
                        <span className='font-light'>See 2022 State of JavaScript survey</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 14" className="fill-current h-3.5 mt-0.5 ml-0.5"><path d="M9.31328 2.625H9.75078V3.0625V9.1875V9.625H8.87578V9.1875V4.11797L1.96602 11.0277L1.65703 11.3367L1.03906 10.7187L1.34805 10.4098L8.25781 3.5H3.18828H2.75078V2.625H3.18828H9.31328Z"></path></svg>
                    </a>
                </motion.div>
            </div>
            <div className='overflow-hidden'>
                <motion.div variants={wrapperstat} viewport={{once:true}} initial='hidden' whileInView='visible' className='grow order-2'>
                    <h3 className='text-xl text-white'>Most desired JS features</h3>
                    <a href="/" className='flex items-start text-white'>
                        <span className='font-light'>See 2022 State of JavaScript survey</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 14" className="fill-current h-3.5 mt-0.5 ml-0.5"><path d="M9.31328 2.625H9.75078V3.0625V9.1875V9.625H8.87578V9.1875V4.11797L1.96602 11.0277L1.65703 11.3367L1.03906 10.7187L1.34805 10.4098L8.25781 3.5H3.18828H2.75078V2.625H3.18828H9.31328Z"></path></svg>
                    </a>
                    <motion.ul variants={wrapper} className='relative mt-6 space-y-3'>
                        <div className='absolute left-0 w-px -inset-y-12 bg-gradient-to-b from-white/0 via-white/20 to-white/0'> </div>
                        <motion.li variants={list} className='relative w-full'>
                            <div className='absolute inset-0 bg-zinc-700 rounded-r-md' style={{opacity:'100%', width:'100%'}}></div>
                            <div className='relative items-center text-sm text-white px-2 w-full flex gap-4 h-6 whitespace-nowrap justify-between'>
                                <span>2. Standard Library</span>
                                <a href="/" className='flex items-center gap-1 text-white font-medium'>
                                    <span>Docs</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="fill-current h-3.5 mt-0.5 ml-0.5"><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z"></path></svg>
                                </a>
                            </div>
                        </motion.li>
                        <motion.li variants={list}  className="relative w-full">
                            <div className="absolute inset-0 bg-zinc-700 rounded-r-md" style={{opacity:"85%",width:"63.760829207920786%"}}></div>
                            <div className="relative items-center text-sm text-white px-2 w-full flex gap-4 h-6 whitespace-nowrap justify-between">
                                <span>4. Immutable Data Structures</span>
                                <a className="flex gap-1 items-center text-white font-medium" href="/docs">
                                    <span>Docs</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="fill-current h-3.5 mt-0.5 ml-0.5"><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z"></path></svg>
                                </a>
                            </div>
                        </motion.li>
                        <motion.li variants={list}  className="relative w-full">
                            <div className="absolute inset-0 bg-zinc-700 rounded-r-md" style={{opacity:'70%',width:'50.39449257425742%'}}></div>
                            <div className="relative items-center text-sm text-white px-2 w-full flex gap-4 h-6 whitespace-nowrap justify-between">
                                <span>5. Observable</span>
                                <a className="flex gap-1 items-center text-white font-medium" href="/docs">
                                    <span>Docs</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="fill-current h-3.5 mt-0.5 ml-0.5"><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z"></path></svg>
                                </a>
                            </div>
                        </motion.li>
                        <motion.li variants={list}  className="relative w-full">
                            <div className="absolute inset-0 bg-zinc-700 rounded-r-md" style={{opacity:"55%",width:"45.3279702970297%"}}></div>
                            <div className="relative items-center text-sm text-white px-2 w-full flex gap-4 h-6 whitespace-nowrap justify-between">
                                <span>6. Pipe Operator</span>
                                <a className="flex gap-1 items-center text-white font-medium" href="/docs">
                                    <span>Docs</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="fill-current h-3.5 mt-0.5 ml-0.5"><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z"></path></svg>
                                </a>
                            </div>
                        </motion.li>
                        <motion.li variants={list} className="relative w-full">
                            <div className="absolute inset-0 bg-zinc-700 rounded-r-md" style={{opacity:"40%",width:"37.68564356435643%"}}></div>
                            <div className="relative items-center text-sm text-white px-2 w-full flex gap-4 h-6 whitespace-nowrap justify-between">
                                <span>8. Pattern Matching</span>
                                <a className="flex gap-1 items-center text-white font-medium" href="/docs">
                                    <span>Docs</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="fill-current h-3.5 mt-0.5 ml-0.5"><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z"></path></svg>
                                </a>
                            </div>
                        </motion.li>
                    </motion.ul>
                </motion.div>
            </div>
        </div>
        <hr className='w-full border-none h-px bg-gradient-to-r from-white/0 via-white/20 to-white/0 mt-20' />
    </div>
  )
}

export default Stats
'use client'
import Image from 'next/image'
import React from 'react'
import {motion} from "framer-motion"

type Props = {}

function People({}: Props) {
    const wrapper = {
        hidden:{
            opacity:0
        },
        visible:{
            opacity:1,
            transition:{
                staggerChildren:0.05,
            }
        }
    }

    const item = {
        hidden:{y:-20, opacity:0,scale:0},
        visible:{
            y:0, opacity:1, scale:1
        }
    }
  return (
    <div className='relative pb-20'>
        <div className='absolute inset-x-0 top-0 h-96 overflow-hidden'>
            <div className='absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 bg-white/5 blur-3xl' style={{borderRadius:"50% 50%"}}></div>
        </div>
        <div className='w-full max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16 pt-32'>
            <motion.h2 initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.3}} viewport={{once:true}} className='text-2xl sm:text-3xl lg:text-4xl text-white text-center mb-16 font-semibold'>Join our welcoming community</motion.h2>
            <div>
                <motion.div variants={wrapper} initial='hidden' whileInView='visible' viewport={{once:true}} className='h-28 flex justify-between'>
                    <motion.div variants={item} className='h-full flex items-center'>
                        <div className='relative h-8 w-8'>
                            <div className='relative w-full h-full overflow-hidden rounded-full border border-white shadow-lg'>
                                <Image src='/avatar1.webp' alt='Avatar-Image' width={100} height={100}/>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div variants={item} className=' h-full flex items-start'>
                        <div className='relative h-14 w-14'>
                            <div className='relative w-full h-full overflow-hidden rounded-full border border-white shadow-lg'>
                                <Image src='/avatar2.webp' alt='Cont-Image' width={100} height={100}/>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div variants={item} className=' h-full flex items-end'>
                        <div className='relative h-16 sm:h-20 w-16 sm:w-20'>
                            <div className='relative w-full h-full overflow-hidden rounded-full border border-white shadow-lg'>
                                <Image src='/avatar3.webp' alt='Cont-Image' width={100} height={100}/>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div variants={item} className='hidden sm:flex h-full items-end'>
                        <div className='relative h-14 w-14'>
                            <div className='relative w-full h-full overflow-hidden rounded-full border border-white shadow-lg'>
                                <Image src='/avatar4.webp' alt='Cont-Image' width={100} height={100}/>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div variants={item} className='hidden sm:flex h-full items-start'>
                        <div className='relative h-8 w-8'>
                            <div className='relative w-full h-full overflow-hidden rounded-full border border-white shadow-lg'>
                                <Image src='/avatar5.webp' alt='Cont-Image' width={100} height={100}/>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div variants={item} className='hidden sm:flex h-full  items-end'>
                        <div className='relative h-14 w-14'>
                            <div className='relative w-full h-full overflow-hidden rounded-full border border-white shadow-lg'>
                                <Image src='/avatar6.webp' alt='Cont-Image' width={100} height={100}/>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div variants={item} className='hidden sm:flex h-full items-start'>
                        <div className='relative h-14 w-14'>
                            <div className='relative w-full h-full overflow-hidden rounded-full border border-white shadow-lg'>
                                <Image src='/avatar7.webp' alt='Cont-Image' width={100} height={100}/>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div variants={item} className='hidden sm:flex h-full items-center'>
                        <div className='relative h-8 w-8'>
                            <div className='relative w-full h-full overflow-hidden rounded-full border border-white shadow-lg'>
                                <Image src='/avatar8.webp' alt='Cont-Image' width={100} height={100}/>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
                <motion.div variants={wrapper} initial='hidden' whileInView='visible' viewport={{once:true}} className='sm:hidden h-28 flex justify-between'>
                    <motion.div variants={item} className='h-full flex items-end'>
                        <div className='relative h-14 w-14'>
                            <div className='relative w-full h-full overflow-hidden rounded-full border border-white shadow-lg'>
                                <Image src='/avatar4.webp' alt='Cont-Image' width={100} height={100}/>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div variants={item} className='h-full flex items-start'>
                        <div className='relative h-8 w-8'>
                            <div className='relative w-full h-full overflow-hidden rounded-full border border-white shadow-lg'>
                                <Image src='/avatar5.webp' alt='Cont-Image' width={100} height={100}/>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div variants={item} className='h-full flex items-end'>
                        <div className='relative h-14 w-14'>
                            <div className='relative w-full h-full overflow-hidden rounded-full border border-white shadow-lg'>
                                <Image src='/avatar6.webp' alt='Cont-Image' width={100} height={100}/>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div variants={item} className='h-full flex items-start'>
                        <div className='relative h-14 w-14'>
                            <div className='relative w-full h-full overflow-hidden rounded-full border border-white shadow-lg'>
                                <Image src='/avatar7.webp' alt='Cont-Image' width={100} height={100}/>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div variants={item} className='h-full flex items-center'>
                        <div className='relative h-8 w-8'>
                            <div className='relative w-full h-full overflow-hidden rounded-full border border-white shadow-lg'>
                                <Image src='/avatar8.webp' alt='Cont-Image' width={100} height={100}/>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
                <div className='flex mt-8 sm:mt-0'>
                    <div className='grow sm:w-1/3 lg:w-2/5'>
                        <motion.div initial='hidden' whileInView='visible' viewport={{once:true}} variants={wrapper} className='flex justify-around h-24'>
                            <motion.div variants={item} className=' h-full flex items-start'>
                                <div  className='relative h-14 w-14'>
                                    <div className='relative w-full h-full overflow-hidden rounded-full border border-white shadow-lg'>
                                        <Image src='/avatar9.webp' alt='Cont-Image' width={100} height={100}/>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div variants={item} className=' h-full flex items-end'>
                                <div className='relative h-8 w-8'>
                                    <div className='relative w-full h-full overflow-hidden rounded-full border border-white shadow-lg'>
                                        <Image src='/avatar10.webp' alt='Cont-Image' width={100} height={100}/>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div variants={item} className=' h-full flex items-center'>
                                <div className='relative h-14 w-14'>
                                    <div className='relative w-full h-full overflow-hidden rounded-full border border-white shadow-lg'>
                                        <Image src='/avatar11.webp' alt='Cont-Image' width={100} height={100}/>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:0.2, duration:0.3}} className='pt-8 sm:w-1/3 lg:w-1/5 hidden sm:flex flex-col items-center text-white'>
                        <a className="flex items-start justify-center text-white mb-4" href="https://github.com/Effect-TS/effect/graphs/contributors"><span>See all contributors</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 14" className="fill-current h-3.5 mt-0.5 ml-0.5"><path d="M9.31328 2.625H9.75078V3.0625V9.1875V9.625H8.87578V9.1875V4.11797L1.96602 11.0277L1.65703 11.3367L1.03906 10.7187L1.34805 10.4098L8.25781 3.5H3.18828H2.75078V2.625H3.18828H9.31328Z"></path></svg></a>
                        <a className="inline-flex relative z-10 h-10 rounded-xl p-px shadow-lg button-hover bg-gradient-to-b from-white to-zinc-300 " rel="noopener noreferrer" target="_blank" href="https://discord.gg/effect-ts"><div className="flex items-center gap-1 px-6 font-medium rounded-[11px] whitespace-nowrap bg-white text-black"><span>Join Discord</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="fill-current h-3.5 -mt-1"><path d="M328 96h24v24V360v24H304V360 177.9L81 401l-17 17L30.1 384l17-17 223-223H88 64V96H88 328z"></path></svg></div></a>
                        <div className='text-sm flex flex-col items-center mt-4'>
                            <p>2217 + community members</p>
                            <p className="flex items-center gap-1"><span className="animate-pulse h-3 w-3 bg-emerald-800 rounded-full flex items-center justify-center"><span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span></span>218 currently online</p>
                        </div>
                    </motion.div>
                    <div className='grow sm:w-1/3 lg:w-2/5'>
                        <motion.div initial='hidden' whileInView='visible' viewport={{once:true}} variants={wrapper} className='flex justify-around h-24'>
                            <motion.div variants={item} className=' h-full flex items-start'>
                                <div className='relative h-14 w-14'>
                                    <div className='relative w-full h-full overflow-hidden rounded-full border border-white shadow-lg'>
                                        <Image src='/avatar12.webp' alt='Cont-Image' width={100} height={100}/>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div variants={item} className=' h-full flex items-end'>
                                <div className='relative h-8 w-8'>
                                    <div className='relative w-full h-full overflow-hidden rounded-full border border-white shadow-lg'>
                                        <Image src='/avatar13.webp' alt='Cont-Image' width={100} height={100}/>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div variants={item} className=' h-full flex items-center'>
                                <div className='relative h-14 w-14'>
                                    <div className='relative w-full h-full overflow-hidden rounded-full border border-white shadow-lg'>
                                        <Image src='/avatar14.webp' alt='Cont-Image' width={100} height={100}/>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default People
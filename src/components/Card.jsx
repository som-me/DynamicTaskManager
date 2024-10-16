import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"


function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} dragElastic={0.2} className='relative w-60 h-72 flex-shrink-0 bg-zinc-900 rounded-[20px] text-zinc-100 p-5 overflow-hidden'>
        <FaRegFileAlt/>
        <p className='text-xs mt-5 font-semibold leading-tight'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full left-0 '>
            <div className='flex items-center justify-between py-2 px-8 mb-3'>
                <h5>{data.filesize}</h5>
                <span className='p-3 bg-zinc-600 rounded-full flex items-center justify-center '>
                    {data.close ? <IoClose/> : <LuDownload size="0.8em" color='#000' />}
                </span> 
            </div>
            {
                data.tag.isOpen && (
                <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} text-black text-center text-sm font-semibold`}>
                    {data.tag.tagTitle}
                </div>
                )
            }
            
        </div>
    </motion.div>
  )
}

export default Card
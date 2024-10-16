import React, { useRef } from 'react'
import Card from './Card'



function Foreground() {
    const ref= useRef(null);
    const data=[
        {
            desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem, ipsum dolor.",
            filesize:".4mb",
            close: true,
            tag: {
                isOpen:false,
                tagTitle:"Download Now", 
                tagColor:"green"
            }

        },
        {
            desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem, ipsum dolor.",
            filesize:".4mb",
            close: false,
            tag: {
                isOpen:true,
                tagTitle:"Download Now", 
                tagColor:"blue"
            }

        },
        {
            desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem, ipsum dolor.",
            filesize:".4mb",
            close: true,
            tag: {
                isOpen:true,
                tagTitle:"Download Now", 
                tagColor:"green"
            }

        }
    ]
  return (
    <div ref={ref} className='fixed w-full h-full z-[3] top-0 left-0 flex gap-10 flex-wrap p-5'>
        {data.map((item,index)=>(
            <Card data={item} reference={ref}/>
        ))}
    </div>
  )
}

export default Foreground
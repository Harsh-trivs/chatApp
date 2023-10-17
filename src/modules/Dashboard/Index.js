import React, { useState } from 'react'
import avatar from '../../assets/avatar.png'
import Input from '../../components/Input'
export default function Dashboard() {
    const [message,setMessage]=useState("");
    const contacts=[
        {
            name:"John",
            status:"Available",
            img:avatar,
        },
        {
            name:"Alex",
            status:"Available",
            img:avatar,
        },
        {
            name:"Larry",
            status:"Available",
            img:avatar,
        },
        {
            name:"Mike",
            status:"Available",
            img:avatar,
        },
    ]
  return (
    
    <div className='w-screen flex'>
        <div className='w-[25%] h-screen bg-secondary'>
            <div className='flex items-center my-8'>
               <div className="border border-primary p-[2px] rounded-full"><img src={avatar} width={50} height={50}/></div> 
                <div className='ml-5'>
                    <h3 className='text-2xl'>Tutorials Dev</h3>
                    <p className='text-lg font-light' >My Account</p>
                </div>
            </div>
            <hr />
            <div>
                <div className='text-primary text-lg'>Messages</div>
                <div>
                    {
                        contacts.map(({name,status,img})=>{
                            return (
                                <div className='flex items-center py-3 border-b border-b-gray-300'>
                                    <div className='cursor-pointer flex'>
                                        <div className="border border-primary p-[2px] rounded-full"><img src={avatar} width={50} height={50}/></div> 
                                        <div className='ml-4'>
                                        <h3 className='text-lg font-semibold'>{name}</h3>
                                        <p className='text-lg font-light text-gray-400' >{status}</p>
                                     </div>
                                 </div>
                             </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
        <div className='w-[75%]  h-screen bg-white flex flex-col items-center'>
            <div className='w-[75%] bg-secondary h-[80px] mt-14 rounded-full flex items-center px-10'>
                <div className='cursor-pointer'><img src={avatar} width={50} height={50}/></div>
                <div className='mr-auto'>
                <h3>Alexander</h3>
                <p className="text-sm font-light">online</p>
                </div>
                <div className='cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler  icon-tabler-phone" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                        </svg>
                </div>
            </div>
            <div className="border w-full h-[75%] overflow-auto border-b">
                <div className='h-[1000px] px-10 py-14'>
                    <div className='max-w-[300px] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nostrum mollitia laborum, quidem velit qui consequatur saepe eveniet, iure quibusdam voluptas similique et quod id suscipit pariatur facilis quasi soluta.</div>
                    <div className='max-w-[300px] bg-primary rounded-b-xl rounded-tr-xl ml-auto p-4 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ratione incidunt ipsa aliquam necessitatibus odit deserunt dicta illum fugit. Fugit reiciendis repellendus sit harum. Neque saepe deserunt voluptates, adipisci dolore obcaecati enim quia consectetur?</div>
                    
                </div>
            </div>
            <div className='flex w-full items-center'>
                <div className='w-[90%] p-4 rounded-full '>
                    <Input value={message} onChange={(e)=>{setMessage(e.target.value)}} name='message' type='text' placeholder='Type your message' parentClassName='w-full' className='p-2 px-4 border-0 bg-light shadow-md rounded-full focus:ring-0 focus:border-0 outline-none'/>
                </div>
                <div className=' cursor-pointer bg-light rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-send" width="30" height="30" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M10 14l11 -11"></path>
                    <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
                    </svg>
                </div>
            </div>
        </div>

        {/* <div className='w-[25%]  h-screen'></div> */}
    </div>
  )
}

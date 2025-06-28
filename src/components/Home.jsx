import React from 'react'

function Home({ data }) {
    return (
        <>
            <div className='w-full'>
                <div className='bg-zinc-100 h-[400px] w-full my-6 max-sm:h-[500px] max-sm:my-1 max-sm:w-full'>
                    <div className='absolute top-[43%] left-[40%] -translate-x-[50%] -translate-y-[50%] max-sm:absolute max-sm:top-80'>
                        <h1 className='text-5xl font-semibold tracking-wide max-sm:text-2xl my-5'>Cook anything <br />with the experts</h1>
                        <p className='mt-5 max-sm:text-sm my-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio <br /> delectus, repellat fugiat enim, molestiae impedit necessitatibus.</p>
                        <div className='mt-5'>
                            <button className='text-white bg-red-400 rounded-full py-2 px-4 cursor-pointer max-sm:py-1 max-sm:px-3'><a href='#'>Lets cook</a></button>
                            <button className='text-red-600 border-black border-[1px] rounded-full py-2 px-3 cursor-pointer mx-2 max-sm:py-1 max-sm:px-3'><a href='#'>Explore now</a></button>
                        </div>
                    </div>
                    <img className='h-[300px] opacity-80 rounded-lg mt-10 absolute left-[68%] object-cover max-sm:invisible' src="https://images.unsplash.com/photo-1532635211-8ec15f2ce05c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29va3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
                </div>
                <div className='text-center'>
                    <h1 className='text-red-600 tracking-[7px] uppercase mt-10 max-sm:mt-10'>{data}</h1>
                    <h1 className='text-4xl font-bold max-sm:text-lg my-3 leading-[1.4]'>Get a many of interesting <br />features</h1>
                </div>
            </div>
        </>
    )
}

export default Home

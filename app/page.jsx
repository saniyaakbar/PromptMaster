import React from 'react'
import Feed from "@components/Feed.jsx"

function Home() {
  return (
    <section className='w-full flex-center flex-col'>
        <h1 className='head_text text-center'>Discover and Share
            <br className='max-md:hidden'/>
            <span className='orange_gradient text-center'> AI Powered Prompts</span>
        </h1>

        <p className='desc text-center'>
            PromptMaster is a tool to generate AI powered prompts. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, eligendi.
        </p>

        <Feed/>

    </section>
  )
}

export default Home
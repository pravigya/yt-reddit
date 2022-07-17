import Image from 'next/image'
import React from 'react'
import { BeakerIcon, ChevronDoubleDownIcon, HomeIcon, MenuIcon, SearchIcon } from '@heroicons/react/solid'
import { BellIcon, ChatIcon, GlobeIcon, PlusIcon, SparklesIcon, SpeakerphoneIcon, VideoCameraIcon } from '@heroicons/react/outline'

function Header() {
  return (<div className='sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm'>
            <div className='relative h-10 w-20 flex-shrink-0 cursor-pointer'>
              <Image 
              objectFit='contain'
              src='https://images.unsplash.com/photo-1641431722064-a797ebfdb22e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80' layout='fill'/>
            </div>
          <div className='mx-7 flex items-center xl-min-w-[300px]'>
            <HomeIcon className='h-5 w-5'/>
            <p className='ml-2 hidden flex-1 lg-inline'>Home</p>
            <ChevronDoubleDownIcon className='h-5 w-5'/>
          </div>
          <form className='flex flex-1 items-center space-x-2 rounded-sm border border-gray-200 bg-gray-100 px-3 py-1 '>
            <SearchIcon className='h-6 w-6 text-gray-400'/>
            <input className='flex-1 bg-transparent outline-none' type='text' placeholder='Search Reddit'/>
            <button type='submit' hidden/>
          </form>
          <div className='mx-5 hidden items-center space-x-2 text-gray-500 lg:inline-flex'>
            <SparklesIcon className='icon'/>
            <GlobeIcon className='icon'/>
            <VideoCameraIcon className='icon'/>
            <hr className='h-10 border border-gray-100'/>
            <ChatIcon className='icon'/>
            <BellIcon className='icon'/>
            <PlusIcon className='icon'/>
            <SpeakerphoneIcon className='icon'/>
          </div>
          <div className='ml-5 flex items-center lg:hidden'>
            <MenuIcon className='icon'/>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1644982648791-a010e61aa845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
                alt="abc"
                height={5}
                width={5} />
                <p className='text-gray-400'>Sign In</p>
          </div>
      </div>
      
  )
} 

export default Header
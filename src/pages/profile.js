import Image from 'next/image'
import DefaultLayout from '@/components/DefaultLayout/DefaultLayout'
import React from 'react'
import bannerProfile from '../../public/images/mychili banner-profile.png'

const profile = () => {
    return (
        <>
            <DefaultLayout>
                <div className="flex w-full h-screen profilePage-bg">
                <div className='w-screen justify-center mt-32 mx-8'>
                    <h1 className='text-center font-semibold text-scan font-serif-inter text-6xl'>Profile</h1>
                    <div className='flex flex-row mt-16'>
                    <Image src ={bannerProfile} className='w-1/4 h-1/4'/>
                    </div>
                </div>
                </div>
            </DefaultLayout>
        </>
    )
}

export default profile
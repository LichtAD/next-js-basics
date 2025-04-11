"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const About = () => {

    const router = useRouter()

    const isloggedIn = true

    const handleNavigation = () => {
        if (isloggedIn) {
            router.push('/about/address')
        }
        else {
            router.push('/')
        }
    }

    return (
        <div>
            {/* create address folder and page.jsx */}
            
            {/* <Link href="/about/address" className='text-2xl text-indigo-400'>Address emnei</Link> */}
            <h2 className='text-3xl text-yellow-400'>About Page</h2>
            {/* <button type='button' className='text-center' onClick={handleNavigation}>Address navigation</button> */}
        </div>
    );
};

export default About;
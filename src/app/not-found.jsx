import Link from 'next/link';
import React from 'react';

export default function NotFound () {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h2>404</h2>
            <h1>Not Found</h1>
            <Link href="/">Go Back to Home</Link>
        </div>
    );
};
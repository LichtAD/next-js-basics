import Link from 'next/link';
import React from 'react';

const Services = () => {

    const data = [
        {
            "_id": "1",
            "service_name": "Web Development",
            "service_image": "/test_image/img1.jpeg",
            "service_description": "Build modern and responsive websites with cutting-edge technologies."
        },
        {
            "_id": "2",
            "service_name": "Graphic Design",
            "service_image": "/test_image/img2.jpeg",
            "service_description": "Create visually stunning graphics for branding, marketing, and UI/UX."
        },
        {
            "_id": "3",
            "service_name": "SEO Optimization",
            "service_image": "/test_image/img3.jpeg",
            "service_description": "Improve website ranking with advanced SEO techniques and analytics."
        },
    ]

    return (
        <div>
            <h1 className='text-5xl text-sky-400'>Services Page</h1>
            {
                data.map((service) => (
                    <div key={service._id} className='border-2 border-sky-400 p-4 m-4 rounded-md'>
                        <Link href={`/services/${service._id}`}>
                            <h2 className='text-3xl'>ID {service._id}: {service.service_name}</h2>
                            <img src={service.service_image} alt={service.service_name} className='w-1/4' />
                        </Link>
                    </div>
                ))
            }
        </div>
    );
};

export default Services;
import React from 'react';

const ServiceDetail = ({ params }) => {

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
        // {
        //     "_id": "4",
        //     "service_name": "Digital Marketing",
        //     "service_image": "https://example.com/images/digital-marketing.jpg",
        //     "service_description": "Boost your online presence with targeted marketing strategies."
        // },
        // {
        //     "_id": "5",
        //     "service_name": "App Development",
        //     "service_image": "https://example.com/images/app-development.jpg",
        //     "service_description": "Develop high-performance mobile and web applications for various platforms."
        // }
    ]

    // const { id } = params
    const id = params?.id

    const singleData = data.find(d => d._id === id)
    // console.log(singleData);

    return (
        <div>
            <h1>Service Detail - {id}</h1>
            <h1 className='text-3xl'>{singleData._id} - {singleData.service_name}</h1>
            <img className='w-96 border-2 border-amber-100 my-4' src={singleData.service_image} alt="" />
            <p>{singleData.service_description}</p>
        </div>
    );
};

export default ServiceDetail;
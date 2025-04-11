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
    ]

    // const { id } = params
    const id = params?.id

    const singleData = data.find(d => d._id === id)
    // console.log(singleData);

    if (singleData) {
        return (
            <div>
                <h1>Service Detail - {id}</h1>
                <h1 className='text-3xl'>{singleData._id} - {singleData.service_name}</h1>
                <img className='w-96 border-2 border-amber-100 my-4' src={singleData.service_image} alt="" />
                <p>{singleData.service_description}</p>
            </div>
        );
    }
    else {
        return (
            <div>
                <h1>Service Not Found</h1>
            </div>
        );
    }
};

export default ServiceDetail;
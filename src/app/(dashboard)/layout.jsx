import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <div>
            <div className='grid grid-cols-12'>
                {/* side nav */}
                <div className='col-span-3 border-2 border-white'>
                    <ul>
                        <li>Dashboard</li>
                        <li>Profile</li>
                        <li>Settings</li>
                    </ul>
                </div>

                {/* dashboard */}
                <div className='col-span-9 border-2 border-yellow-300'>{children}</div>
            </div>
        </div>
    );
};

export default DashboardLayout;
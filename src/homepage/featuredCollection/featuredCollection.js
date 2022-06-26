import React from 'react';

const featuredCollection = () => {
    return (
        <div className='h-screen'>
            <h1 className='text-center text-5xl'>Popular Collection</h1>
            <div className="hero w-[80vw] mx-auto min-h-[90%]">
                <div className="hero-content flex-col lg:flex-row justify-evenly min-w-[100%]">
                    <img src="https://api.lorem.space/image/movie?w=260&h=400" className="max-w-sm rounded-lg shadow-2xl" alt="" />
                    <div className='text-center'>
                        <p className="py-6">LIMITED EDITION APPLIANCES</p>
                        <h1 className="text-5xl font-bold">OFF 40%</h1>
                        <p className="py-6">COUNTDOWN......</p>
                        <button className="btn btn-primary">Shop Now</button>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default featuredCollection;
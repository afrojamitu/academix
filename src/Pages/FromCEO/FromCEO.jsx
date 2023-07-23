import React from 'react';

const FromCEO = () => {
    return (
        <div className='md:w-10/12 md:mx-auto mx-5 mt-8 mb-14'>
            <div className='grid md:grid-cols-2 gap-10'>
                <div>
                    <img src="https://media.istockphoto.com/id/981749414/photo/positive-and-professional-everything-you-want-in-an-entrepreneur.jpg?s=612x612&w=0&k=20&c=Tp04T5oHLnKtmosfilVaBRstMN1ARc1li8bQN8fx5RA=" alt="" />
                </div>


                <div className='space-y-3'>
                <h1 className="text-5xl cursive-font pb-4">Hear From Us</h1>

                    <p>Welcome to our college info hub, where the pursuit of knowledge meets limitless possibilities. As the CEO of this transformative platform, I stand before you with immense pride and excitement. Our mission is to empower each one of you to make informed decisions that shape your future.

                        With a user-friendly interface, access thousands of colleges, programs, and resources at your fingertips. From STEM to arts, we've curated the best to fuel your passions.

                        Seize this opportunity, reserve your seat, and embark on a journey of academic excellence. Together, let's unlock the doors to your dreams!</p>

                        <p className="text-end text-2xl cursive-font">- CEO of Academix</p>
                </div>
            </div>
        </div>
    );
};

export default FromCEO;
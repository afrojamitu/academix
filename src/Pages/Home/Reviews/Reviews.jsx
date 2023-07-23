import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Reviews.css';

import { Pagination, Navigation, HashNavigation } from 'swiper/modules';

const Reviews = () => {
    return (
        <div className='md:w-10/12 md:mx-auto mx-5 py-8'>
            <h1 className="text-5xl cursive-font pb-4">See What People Say About Us</h1>

            <div className='my-5'>
                <Swiper
                    spaceBetween={30}
                    hashNavigation={{
                        watchState: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation, HashNavigation]}
                    className="mySwiper"
                >
                    <SwiperSlide data-hash="slide1" className='p-24 flex flex-col gap-3'>
                        <img style={{ width: '45px' }} src="https://i.ibb.co/kVnbvfB/images-removebg-preview-1.png" alt="" />
                        Fantastic college resource, easy seat booking! A must-visit for aspiring students.
                        <p className="text-3xl cursive-font">Afroja</p>
                    </SwiperSlide>

                    <SwiperSlide data-hash="slide1" className='p-24 flex flex-col gap-3'>
                        <img style={{ width: '45px' }} src="https://i.ibb.co/kVnbvfB/images-removebg-preview-1.png" alt="" />
                        Exceptional college resource! Easy seat booking. A game-changer for students. Highly recommended!
                        <p className="text-3xl cursive-font">Alia</p>
                    </SwiperSlide>

                    <SwiperSlide data-hash="slide1" className='p-24 flex flex-col gap-3'>
                        <img style={{ width: '45px' }} src="https://i.ibb.co/kVnbvfB/images-removebg-preview-1.png" alt="" />
                        Fantastic college resource, easy seat booking! A must-visit for aspiring students.
                        <p className="text-3xl cursive-font">Nusrat</p>
                    </SwiperSlide>

                    <SwiperSlide data-hash="slide1" className='p-24 flex flex-col gap-3'>
                        <img style={{ width: '45px' }} src="https://i.ibb.co/kVnbvfB/images-removebg-preview-1.png" alt="" />
                        Fantastic college resource, easy seat booking! A must-visit for aspiring students.
                        <p className="text-3xl cursive-font">Mehjabeen</p>
                    </SwiperSlide>

                    <SwiperSlide data-hash="slide1" className='p-24 flex flex-col gap-3'>
                        <img style={{ width: '45px' }} src="https://i.ibb.co/kVnbvfB/images-removebg-preview-1.png" alt="" />
                        Fantastic college resource, easy seat booking! A must-visit for aspiring students.
                        <p className="text-3xl cursive-font">Katrina</p>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;
import React from 'react';

const Gallery = () => {
    return (
        <div className='pb-5'>
            <div className='md:w-10/12 md:mx-auto mx-5 my-10'>
                <h1 className="text-5xl cursive-font pb-4">100+ Graduates In A Frame</h1>
                <p>Witness the glory of our graduates! This section proudly showcases over 100 accomplished individuals who have passed through our institution's doors, leaving an indelible mark on the world. Each graduate's success story is a testament to our commitment to fostering excellence and empowering future leaders. From groundbreaking research to influential contributions in various fields, these outstanding individuals embody the essence of our educational mission. Join us in celebrating their achievements and drawing inspiration from their journeys toward greatness.</p>

                <div className='grid md:grid-cols-3 gap-3 my-8'>
                    <div className='grid gap-3'>
                        <img className='h-52 w-full' src="https://pfecglobal.com.bd/wp-content/uploads/2023/02/Early-Graduation-and-Swift-Employment-Opportunities.jpg" alt="" />

                        <img className='h-64 w-full' src="https://i.ibb.co/hD2wqC6/bigstock-group-graduate-university-grad-419071786.jpg" alt="" />

                        <img className='h-52 w-full' src="https://ulab.edu.bd/sites/default/files/Top-ULAB-Graduates-Receive-Gold-Medals-1000x608.jpg" alt="" />
                    </div>

                    <div className='grid gap-3'>
                        <img className='h-64 w-full ' src="https://tds-images.thedailystar.net/sites/default/files/images/2022/10/11/online_-_higher_education_in_bangladesh_-_collected.jpg" alt="" />

                        <img className='h-40 w-full' src="https://today.thefinancialexpress.com.bd/uploads/1551118648.jpg" alt="" />

                        <img className='h-64 w-full' src="https://i.ibb.co/C16595h/Notre-Dame-University-First-Convocation-Students-Throwing-Graduation-Cap-in-the-air-1024x683.jpg" alt="" />
                    </div>

                    <div className='grid gap-3'>
                        <img className='h-52 w-full' src="https://www.aiub.edu/Files/Uploads/AIUB_18th_Convocation_21.jpg" alt="" />

                        <img className='h-64 w-full' src="https://www.aiub.edu/Files/Uploads/original/AIUB_18th_Convocation_23.jpg" alt="" />

                        <img className='h-52 w-full' src="https://businesshaunt.com/wp-content/uploads/2020/06/Top-10-Most-Popular-Universities-in-Bangladesh-for-Higher-Study.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
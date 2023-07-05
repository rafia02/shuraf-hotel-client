import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';

import img1 from '../../../images/carosol/carosol2.jpg'
import img2 from '../../../images/carosol/carosol1.jpg'
import img3 from '../../../images/carosol/carosol3.jpg'
import img4 from '../../../images/carosol/carosol4.jpg'
import img5 from '../../../images/carosol/carosol5.jpg'
import img6 from '../../../images/carosol/carosol6.jpg'
import img7 from '../../../images/carosol/carosol7.jpg'
import img8 from '../../../images/carosol/carosol8.jpg'
import img9 from '../../../images/carosol/carosol9.jpg'
import FindBox from '../FindBox/FindBox';

const Carosol = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  // const onAutoplayTimeLeft = (s, time, progress) => {
  //   progressCircle.current.style.setProperty('--progress', 1 - progress);
  //   progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  // };
  return (

    <div className='relative '>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        // onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide> <img className='w-full h-60 md:h-96 lg:h-[500px] ' src={img6} alt="" /> </SwiperSlide>
        <SwiperSlide> <img className='w-full h-60 md:h-96 lg:h-[500px]' src={img1} alt="" /> </SwiperSlide>
        <SwiperSlide> <img className='w-full h-60 md:h-96 lg:h-[500px]' src={img9} alt="" /> </SwiperSlide>
        <SwiperSlide> <img className='w-full h-60 md:h-96 lg:h-[500px]' src={img7} alt="" /> </SwiperSlide>
        {/* <SwiperSlide> <img className='w-full h-60 md:h-96 lg:h-[500px]' src={img5} alt="" /> </SwiperSlide> */}
        <SwiperSlide> <img className='w-full h-60 md:h-96 lg:h-[500px]' src={img3} alt="" /> </SwiperSlide>
        <SwiperSlide> <img className='w-full h-60 md:h-96 lg:h-[500px]' src={img4} alt="" /> </SwiperSlide>
        <SwiperSlide> <img className='w-full h-60 md:h-96 lg:h-[500px]' src={img2} alt="" /> </SwiperSlide>
        <SwiperSlide> <img className='w-full  h-60 md:h-96 lg:h-[500px]' src={img8} alt="" /> </SwiperSlide>


      </Swiper>

    
      <div className='absolute bottom-5 md:bottom-1/4 w-full mx-auto  z-50'>
        <FindBox></FindBox>
      </div>

    </div>

  );
};

export default Carosol;
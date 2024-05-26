import { Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import d1 from "../assets/d-1.png";

export default function FeatureSlider() {
    return (
        <Swiper
            modules={[A11y]}
            spaceBetween={10}
            breakpoints={{
                0: {
                    slidesPerView: 2.1,
                },
                768: {
                    slidesPerView: 4.3,
                },
            }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide><img src={d1} className="w-[40%]" alt="" /></SwiperSlide>
            <SwiperSlide><img src={d1} className="w-[40%]" alt="" /></SwiperSlide>
            <SwiperSlide><img src={d1} className="w-[40%]" alt="" /></SwiperSlide>
            <SwiperSlide><img src={d1} className="w-[40%]" alt="" /></SwiperSlide>
            <SwiperSlide><img src={d1} className="w-[40%]" alt="" /></SwiperSlide>
            <SwiperSlide><img src={d1} className="w-[40%]" alt="" /></SwiperSlide>
            <SwiperSlide><img src={d1} className="w-[40%]" alt="" /></SwiperSlide>
            <SwiperSlide><img src={d1} className="w-[40%]" alt="" /></SwiperSlide>
            <SwiperSlide><img src={d1} className="w-[40%]" alt="" /></SwiperSlide>
            ...
        </Swiper>
    );
}
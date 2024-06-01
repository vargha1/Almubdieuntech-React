import { Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function FeatureSlider() {
    return (
        <Swiper
            loop={true}
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
        >
            <SwiperSlide><img src="/Projects/d-1.png" className="w-[40%]" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/Projects/d-1.png" className="w-[40%]" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/Projects/d-1.png" className="w-[40%]" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/Projects/d-1.png" className="w-[40%]" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/Projects/d-1.png" className="w-[40%]" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/Projects/d-1.png" className="w-[40%]" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/Projects/d-1.png" className="w-[40%]" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/Projects/d-1.png" className="w-[40%]" alt="" /></SwiperSlide>
            <SwiperSlide><img src="/Projects/d-1.png" className="w-[40%]" alt="" /></SwiperSlide>
            ...
        </Swiper>
    );
}
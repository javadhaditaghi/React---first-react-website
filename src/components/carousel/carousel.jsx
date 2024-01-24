// import Swiper core and required modules
import { Navigation, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CarouselCard from './carouselCard';
import "./carousel.css"
import jsonData from "./carouselInfo.json"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';




export default () => {
    return (
        <Swiper className="container swiper-container"
            // install Swiper modules
            modules={[Navigation, A11y, Autoplay]}

            spaceBetween={50}
            slidesPerView={4}
            navigation
            autoplay={{ delay: 2000 }}

            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}

        >

            {jsonData.map(slides => (
                <SwiperSlide><CarouselCard key={slides.id}>
                    <div style={{ padding: "30px" }}>
                        <img src={slides.icon} alt={slides.title}></img>
                        <h3>{slides.title}</h3>
                        <p>{slides.description}</p>
                    </div>
                </CarouselCard></SwiperSlide>

            ))}




        </Swiper>
    );
};
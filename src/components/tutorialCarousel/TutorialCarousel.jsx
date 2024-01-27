// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import TutorialInsideCard from './tutorialInsideCard';
import tutjsonData from "./tutorialInfo.json"
import "./tutorialCarousel.css"


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


export default () => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{
                clickable: true,

            }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            autoplay={{ delay: 2000 }}
            loop={true}
        >


            {
                tutjsonData.map(info => (
                    <SwiperSlide key={info.id}><TutorialInsideCard
                        title={info.title}
                        photo={info.photo}
                        comments={info.commntsNo}

                    ></TutorialInsideCard></SwiperSlide>

                ))

            }


        </Swiper>
    );
};
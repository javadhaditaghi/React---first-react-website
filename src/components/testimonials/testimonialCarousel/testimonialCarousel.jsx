import CarouselCard from './CarouselCard';
import jasonData from "./testimonialInfo.json";


// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const TestimonialCarousel = () => {

    return (
        <Swiper className='pt-5'
            // install Swiper modules
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1.2}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >

            {
                jasonData.map(slideInfo => (
                    <SwiperSlide
                        key={slideInfo.id}
                    ><CarouselCard stars={slideInfo.stars}
                        description={slideInfo.description}
                        name={slideInfo.name}
                        solvedIssue={slideInfo.solvedIssue}
                        mainPicture={slideInfo.mainPicture}>

                        </CarouselCard></SwiperSlide>



                ))
            }

        </Swiper>
    )
}


export default TestimonialCarousel
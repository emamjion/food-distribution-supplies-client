import { useEffect, useState } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([]);
    useEffect(() => {
        fetch('/testimonials.json').then(res => res.json()).then(data => setTestimonials(data))
    }, []);
    
    return (
        <div className="my-16 px-2 md:px-0">
            <div>
                <h1 className="text-3xl font-semibold mb-4 text-center">Donor Testimonials</h1>
                <p className="md:w-[600px] mx-auto text-center">
                    Empowering communities through generosity, our donors share heartfelt stories about how their contributions are making a real difference.
                </p>
            </div>
            <div className="mt-12">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    testimonials.map(testimonial => (<SwiperSlide key={testimonial.id}>
                        <div className="flex items-center flex-col">
                            <div className="md:flex items-center gap-4">
                                <img src={testimonial.image} className="size-20 rounded-full object-cover" />
                                <div>
                                    <h1 className="text-lg font-medium mt-4 md:mt-0">{testimonial.name}</h1>
                                    <span className="text-sm text-gray-600">{testimonial.date}</span>
                                </div>
                            </div>
                            <div className="text-center mt-6">
                                <p className="md:w-[600px] text-sm md:text-base">
                                    {testimonial.testimonial}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>))
                }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;



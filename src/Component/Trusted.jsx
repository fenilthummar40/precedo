import React, {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Thumbs} from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import {assets} from "../assets/assets.js";
import Title from "./Title.jsx";

const testimonials = [
    {
        name: "Savannah Nguyen",
        role: "President of Sales",
        image: assets.image_17,
        text: "“Morbi consectetur elementum purus mattis cursus purus vel metus iaculis sagittis. Vestibulum molestie bibendum turpis luctus sem lacinia quis. Quisque amet velit sit amet dui hendrerit ultricies a id ipsum Mauris sit amet lacinia est, vitae tristique metus tempor nibh ultricies.”"
    },
    {
        name: "Albert Flores",
        role: "Nursing Assistant",
        image: assets.image_17,
        text: "“Morbi consectetur elementum purus mattis cursus purus vel metus iaculis sagittis. Vestibulum molestie bibendum turpis luctus sem lacinia quis. Quisque amet velit sit amet dui hendrerit ultricies a id ipsum Mauris sit amet lacinia est, vitae tristique metus tempor nibh ultricies.”...“Morbi consectetur elementum purus mattis cursus purus vel metus iaculis sagittis. Vestibulum molestie bibendum turpis luctus sem lacinia quis. Quisque amet velit sit amet dui hendrerit ultricies a id ipsum Mauris sit amet lacinia est, vitae tristique metus tempor nibh ultricies.”"
    },
    {
        name: "Jenny Wilson",
        role: "Web Designer",
        image: assets.image_17,
        text: "“Morbi consectetur elementum purus mattis cursus purus vel metus iaculis sagittis. Vestibulum molestie bibendum turpis luctus sem lacinia quis. Quisque amet velit sit amet dui hendrerit ultricies a id ipsum Mauris sit amet lacinia est, vitae tristique metus tempor nibh ultricies.”..“Morbi consectetur elementum purus mattis cursus purus vel metus iaculis sagittis. Vestibulum molestie bibendum turpis luctus sem lacinia quis. Quisque amet velit sit amet dui hendrerit ultricies a id ipsum Mauris sit amet lacinia est, vitae tristique metus tempor nibh ultricies.”"
    },
    {
        name: "Leslie Alexander",
        role: "Medical Assistant",
        image: assets.image_17,
        text: "“Morbi consectetur elementum purus mattis cursus purus vel metus iaculis sagittis. Vestibulum molestie bibendum turpis luctus sem lacinia quis. Quisque amet velit sit amet dui hendrerit ultricies a id ipsum Mauris sit amet lacinia est, vitae tristique metus tempor nibh ultricies.” metus tempor nibh..“Morbi consectetur elementum purus mattis cursus purus vel metus iaculis sagittis. Vestibulum molestie bibendum turpis luctus sem lacinia quis. Quisque amet velit sit amet dui hendrerit ultricies a id ipsum Mauris sit amet lacinia est, vitae tristique metus tempor nibh ultricies.”"
    }
];

function Trusted() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className=" px-5 rounded-2xl text-white max-w-7xl mx-auto">

            <Title text1={`Trusted by Over 4200+ Clients Have To Say`}/>

            <Swiper
                thumbs={{swiper: thumbsSwiper}}
                modules={[Thumbs]}
                className="mb-8"
            >
                {testimonials.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-[#0f172a] to-[#1e293b] p-10">
                            <div className='md:w-2/5 w-full flex items-center justify-center'>
                                <img src={item.image}
                                     className="object-cover rounded-xl"/>
                            </div>

                            <div className="flex-1 w-full md:w-3/5">
                                <p className="text-gray-300 text-sm lg:text-lg leading-relaxed mb-6 line-clamp-5">“{item.text}”</p>

                                <hr className='border-gray-500'/>

                                <div className='mt-5'>
                                    <h3 className="text-xl font-semibold">{item.name}</h3>
                                    <p className="text-gray-400 text-sm">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <Swiper
                onSwiper={setThumbsSwiper}
                slidesPerView={4}
                spaceBetween={20}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Thumbs]}
            >
                {testimonials.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex items-center gap-3 opacity-50 hover:opacity-100 transition cursor-pointer hidden md:block">

                            <img src={item.image}
                                 className="w-12 h-12 rounded-full object-cover border-2 border-transparent"/>

                            <div className="hidden md:block">
                                <p className="text-sm font-medium">{item.name}</p>
                                <p className="text-xs text-gray-400">{item.role}</p>
                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Trusted;
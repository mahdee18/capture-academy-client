import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

const SwiperSlider = () => {
    return (
        <Swiper
            grabCursor
            modules={[Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
                delay: 6000,
            }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}

        >
            <SwiperSlide>

                <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-max lg:h-[650px] pt-8 pb-12 lg:py-0 bg-gray-200">
                    <div className="w-full lg:w-4/5 mx-auto p-6 rounded-xl bg-neutral/5">
                        <img
                            src='https://cutewallpaper.org/21/windows-10-4k-backgrounds/Original-Windows-10-Home-Wallpaper-1920x1080-.jpg'
                            alt=""
                            className="w-full aspect-square object-cover object-center"
                        />
                    </div>
                    <div className="space-y-8 px-4 md:px-0">
                        <h1 className="font-extrabold text-xl  md:text-4xl">
                            <Fade cascade damping={0.1} className="inline">
                                The Art of Portrait Photography
                            </Fade>
                        </h1>
                        <p className="md:text-lg">
                            Mastering the Craft of Portraiture and Unleashing the Power of Human Connection
                        </p>
                        <Link
                            to="/allclasses"
                            className="btn bg-green-600 text-white md:btn-lg btn-gradient rounded-full hover:text-black"
                        >
                            Explore Classes
                        </Link>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-max lg:h-[650px] pt-8 pb-12 lg:py-0 bg-gray-200">
                    <div className="w-full lg:w-4/5 mx-auto p-6 rounded-xl bg-neutral/5">
                        <img
                            src='https://th.bing.com/th/id/R.2a5a6006bc06981b9f29935ea228f4af?rik=UrKUdJtf8jWHng&riu=http%3a%2f%2fqwallps.com%2fwp-content%2fuploads%2f2021%2f03%2fBeach-Macro-Photo-Wallpaper-with-Seashell-and-Sunrise.jpg&ehk=Phpvg1l9f1h6bH1VEnfzC%2bg9wobds10Od5UIcKwoNPQ%3d&risl=&pid=ImgRaw&r=0'
                            alt=""
                            className="w-full aspect-square object-cover object-center"
                        />
                    </div>
                    <div className="space-y-8 px-4 md:px-0">
                        <h1 className="font-extrabold text-xl  md:text-4xl">
                            <Fade cascade damping={0.1} className="inline">
                                The Art of Macro Photography
                            </Fade>
                        </h1>
                        <p className="md:text-lg">
                            Exploring the Hidden Beauty and Intricate Details of the Miniature World
                        </p>
                        <Link
                            to="/allclasses"
                            className="btn bg-green-600 text-white md:btn-lg btn-gradient rounded-full hover:text-black"
                        >
                            Explore Classes
                        </Link>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>

                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-max lg:h-[650px] pt-8 pb-12 lg:py-0 bg-gray-200">
                    <div className="w-full lg:w-4/5 mx-auto p-6 rounded-xl bg-neutral/5">
                        <img
                            src='https://drscdn.500px.org/photo/103798759/q%3D80_m%3D1500/v2?sig=152f81800f9b91b23612d1b969d06f58ecaefe86eaea3659a90fb84aa870a3d9'
                            alt=""
                            className="w-full aspect-square object-cover object-center"
                        />
                    </div>
                    <div className="space-y-8 px-4 md:px-0">
                        <h1 className="font-extrabold text-xl  md:text-4xl">
                            <Fade cascade damping={0.1} className="inline">
                                The Art of Landscape Photography
                            </Fade>
                        </h1>
                        <p className="md:text-lg">
                            Capturing Nature's Grandeur and Inviting Serenity into Frame
                        </p>
                        <Link
                            to="/allclasses"
                            className="btn bg-green-600 text-white md:btn-lg btn-gradient rounded-full hover:text-black"
                        >
                            Explore Classes
                        </Link>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>

                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-max lg:h-[650px] pt-8 pb-12 lg:py-0 bg-gray-200">
                    <div className="w-full lg:w-4/5 mx-auto p-6 rounded-xl bg-neutral/5">
                        <img
                            src='https://i.ytimg.com/vi/AmHo91ARwK4/maxresdefault.jpg'
                            alt=""
                            className="w-full aspect-square object-cover object-center"
                        />
                    </div>
                    <div className="space-y-8 px-4 md:px-0">
                        <h1 className="font-extrabold text-xl  md:text-4xl">
                            <Fade cascade damping={0.1} className="">
                            The Art of Still Life Photography
                            </Fade>
                        </h1>
                        <p className=" md:text-lg ">
                        Elevating Ordinary Objects into Extraordinary Narratives of Beauty and Meaning
                        </p>
                        <Link
                            to="/allclasses"
                            className="btn bg-green-600 text-white md:btn-lg btn-gradient rounded-full hover:text-black"
                        >
                            Explore Classes
                        </Link>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default SwiperSlider;


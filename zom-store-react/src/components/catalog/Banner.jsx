import React from "react";
import { useProducts } from "../../hooks/useProducts";
import { BiLoader } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";

function Banner() {
    const { banners, loading, error } = useProducts();
    return (
        <>
            {loading && (
                <div className="p-4">
                    <BiLoader
                        className="text-primary-500 animate-spin"
                        size={24}
                    />
                </div>
            )}

            {error && (
                <div className="p-4">
                    <div className="text-center text-red-600">{error}</div>
                </div>
            )}

            {banners && banners.length > 0 ? (
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    navigation={true}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    className="w-full"
                >
                    {banners.map((banner) => (
                        <SwiperSlide key={banner.id ?? banner.name}>
                            <div
                                className="relative w-full px-6 py-24 bg-center bg-no-repeat bg-cover rounded-lg min-h-[200px] md:min-h-[300px]"
                                style={{
                                    backgroundImage: `url(${banner.image})`,
                                }}
                            >
                                {/* Soft primary Overlay */}
                                <div className="absolute inset-0 backdrop-blur-[1px]"></div>

                                {/* Content */}
                                <div className="relative z-10 flex flex-col items-center max-w-6xl gap-6 mx-auto text-white md:flex-row">
                                    {/* Text Section */}
                                    <div className="flex-1">
                                        <h1 className="mb-4 text-4xl font-bold drop-shadow-lg">
                                            {banner.name}
                                        </h1>

                                        {banner.description && (
                                            <p className="mb-6 text-lg opacity-95 drop-shadow">
                                                {banner.description}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : null}
        </>
    );
}

export default Banner;

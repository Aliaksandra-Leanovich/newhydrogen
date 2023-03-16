import {CSSProperties, useEffect, useRef, useState} from 'react';
import {FreeMode, Navigation, Thumbs} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import {useSliderIdContext} from '~/context/SliderIdContext';
import {IOption} from '~/types/types';

export function ProductGallery({
  media,
}: {
  media: IOption[];
  className?: string;
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const {sliderId} = useSliderIdContext();
  const sliderRef = useRef() as any;

  if (!media.length) {
    return null;
  }

  const paginationStyle = {
    '--swiper-navigation-color': '#000',
    '--swiper-pagination-color': '#000',
    marginBottom: '30px',
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.swiper.slideTo(sliderId);
    }
  }, [sliderId]);

  return (
    <div>
      <Swiper
        ref={sliderRef}
        style={paginationStyle as CSSProperties}
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        thumbs={{swiper: thumbsSwiper}}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {media.map((item) => (
          <SwiperSlide key={item.index}>
            <img
              src={item.image}
              alt={item.option}
              className="w-full h-full aspect-square fadeIn object-cover "
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        // @ts-ignore
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper  swiper-wrapper"
      >
        {media.map((item) => (
          <SwiperSlide key={item.index}>
            <img
              src={item.image}
              alt={item.option}
              className="w-full h-full aspect-square fadeIn object-cover "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

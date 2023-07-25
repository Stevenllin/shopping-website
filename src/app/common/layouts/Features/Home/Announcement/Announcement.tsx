import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';

const Announcement: React.FC = () => {
  /** 假資料 */
  const announcementData = [
    {
      id: 1,
      text: 'Lorem ipsum dolor sit amet, mea prompta tractatos ea.'
    },
    {
      id: 2,
      text: 'In est timeam intellegam, error consequuntur ius no.'
    },
    {
      id: 3,
      text: 'Prima placerat quo et, te usu dicat affert soluta.'
    }
  ]
  return (
    <section id="announcement">
      <div className="announcement">
        <Swiper
          height={10}
          hashNavigation
          centeredSlides
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          loop
          modules={[Autoplay, Pagination, Navigation]}
          speed={1000}
        >
          {
            announcementData.map(item => (
              <SwiperSlide key={item.id} className="d-flex align-items-center justify-content-center">
                <p className="mb-0">{item.text}</p>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  )
}

export default Announcement;

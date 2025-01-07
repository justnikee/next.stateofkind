import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

type Props = {}

const HeroSlider = (props: Props) => {
  return (
    <Splide
    options={{
        type: 'loop', // Enables infinite looping
        gap: '1rem',
        autoplay: true, // Enables autoplay
        interval: 3000, // Sets the autoplay interval to 3 seconds
        pauseOnHover: false, // Disables pausing on hover
        resetProgress: false,
    }}
    aria-label="My Favorite Images"
  >
    <SplideSlide>
      <img src="/Hero Images/BB_FEATURED_desktop_1200x.png" alt="Image 1" />
    </SplideSlide>
    <SplideSlide>
      <img src="/Hero Images/PS_FEATURED_desktop_1200x.jpg" alt="Image 2" />
    </SplideSlide>
  </Splide>
  )
}

export default HeroSlider
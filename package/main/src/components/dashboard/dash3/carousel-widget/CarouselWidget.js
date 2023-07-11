import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators } from 'reactstrap';
import DashCard from '../../dashboardCards/DashCard';

import img1 from '../../../../assets/images/bg/bg1.jpg';
import img2 from '../../../../assets/images/bg/bg2.jpg';

const items = [
  {
    altText: 'Uttar Pradesh',
    caption: 'Humidity 38%',
    src: img1,
  },
  {
    altText: 'Gujarat',
    caption: 'Wind 38%',
    src: img2,
  },
];

const CarouselWidget = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className="w-100 p-img" src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });
  return (
    /*--------------------------------------------------------------------------------*/
    /* Used In Wizard Page                                                            */
    /*--------------------------------------------------------------------------------*/
    <DashCard>
      <Carousel
        className="primary-carousel"
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </DashCard>
  );
};

export default CarouselWidget;

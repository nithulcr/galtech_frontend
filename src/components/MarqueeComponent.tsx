// components/Marquee.tsx
import React from 'react';

const MarqueeComponent = () => {
  const clientLogos = [
    { id: 1, src: '/logos/woocommerce.png' },
    { id: 2, src: '/logos/javascript.png' },
    { id: 3, src: '/logos/react.png' },
    { id: 4, src: '/logos/facebook.png' },
    { id: 5, src: '/logos/ai.png' },
    { id: 6, src: '/logos/google-ads.png' },
    { id: 7, src: '/logos/mongodb.png' },
    { id: 8, src: '/logos/shopify.png' },
    { id: 9, src: '/logos/woocommerce.png' },
    { id: 10, src: '/logos/wordpress.png' },
    { id: 11, src: '/logos/nodejs.png' },
    { id: 12, src: '/logos/php.png' },



  ];
  //  const clientLogos = [
  //   { id: 1, src: '/logos/woocommerce.png' },
  //   { id: 2, src: '/placements/placement (2).webp' },
  //   { id: 3, src: '/placements/placement (3).webp' },
  //   { id: 4, src: '/placements/placement (4).webp' },
  //   { id: 5, src: '/placements/placement (5).webp' },
  //   { id: 6, src: '/placements/placement (6).webp' },
  //   { id: 7, src: '/placements/placement (7).webp' },
  //   { id: 8, src: '/placements/placement (8).webp' },
  //   { id: 9, src: '/placements/placement (9).webp' },
  //   { id: 10, src: '/placements/placement (10).webp' },
  //   { id: 11, src: '/placements/placement (11).webp' },
  //   { id: 12, src: '/placements/placement (12).webp' },
  //   { id: 13, src: '/placements/placement (13).webp' },
  //   { id: 14, src: '/placements/placement (14).webp' },
  //   { id: 15, src: '/placements/placement (15).webp' },
  //   { id: 16, src: '/placements/placement (16).webp' },
  //   { id: 17, src: '/placements/placement (17).webp' },


  // ];



  // Duplicate items for seamless looping

  const verticalItems = [...clientLogos, ...clientLogos];


  return (

        <div className="flex w-full gap-2">
          {[1, 2, 3].map((i) => (
            <div key={`v-alt-marquee-${i}`} className="relative overflow-hidden  min-h-[700px] flex-1">
              <div className="absolute inset-0 z-10 "></div>
              <div
                className={`flex flex-col absolute w-full will-change-transform ${
                  i % 2 === 0 ? 'animate-marqueeVertical' : 'animate-marqueeVerticalAlt'
                }`}
              >
                {verticalItems.map((logo, index) => (
                  <React.Fragment key={`v-alt-logo-${i}-${index}`}>
                    <div className="flex  justify-center items-center rounded-[8px] overflow-hidden bg-gray-100 shadow border border-[#eaeaea] ">
                      <img src={logo.src} alt="" className="max-h-[100px] p-5 w-full object-contain" />
                    </div>
                    <div className="w-[30px] h-[30px]"></div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
     
  );
};

export default MarqueeComponent;
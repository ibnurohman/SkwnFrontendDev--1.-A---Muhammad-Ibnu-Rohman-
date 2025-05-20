import React from 'react';
import IconGusto from './Icon/IconGusto';
import IconStripe from './Icon/IconStripe';
import IconTreeHouse from './Icon/IconTreeHouse';
import IconUpWork from './Icon/IconUpwork';

const BannerThree = () => {
  return (
    <div className="bg-[#FCFAFA] py-15 px-4 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-10">
        <div className="text-center md:text-left">
          <h2 className="text-5xl md:text-7xl font-bold text-[#2F241F]">25+</h2>
          <p className="text-lg text-[#2F241F] tracking-wider mt-1">PARTNERED BRANDS</p>
        </div>

        <div className="w-full overflow-x-auto md:overflow-visible">
          <div className="flex flex-row items-center gap-9 md:gap-16 md:ml-28 min-w-max px-2">
            <div className="h-5 md:h-12 w-auto flex-shrink-0">
              <IconGusto className="w-full h-full" />
            </div>
            <div className="h-5 md:h-12 w-auto flex-shrink-0">
              <IconStripe className="w-full h-full" />
            </div>
            <div className="h-5 md:h-12 w-auto flex-shrink-0">
              <IconTreeHouse className="w-full h-full" />
            </div>
            <div className="h-5 md:h-12 w-auto flex-shrink-0">
              <IconUpWork className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerThree;

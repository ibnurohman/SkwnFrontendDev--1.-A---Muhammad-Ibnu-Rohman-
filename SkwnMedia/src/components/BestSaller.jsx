import React, { useEffect, useState } from 'react';
import { ConfigHome } from '../api/service/Home/ConfigHome';
import IconArrowPush from './Icon/IconArrowPush';
import IconArrowBack from './Icon/IconArrowBack';

const BestSellerSection = () => {
  const [data, setData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;

  const fetchData = async () => {
    try {
      const res = await ConfigHome.getHomePhoto();
      setData(res);
    } catch (err) {
      console.error('Fetch error:', err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleArrowClick = (direction) => {
    if (direction === 'left') {
      setStartIndex(prev => Math.max(prev - 1, 0));
    } else {
      setStartIndex(prev => Math.min(prev + 1, data.length - visibleCount));
    }
  };

  const visibleData = data.slice(startIndex, startIndex + visibleCount);
 
  return (
    <section className="bg-[#2C211D] text-[#F0F4C3] py-16 px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 md:gap-0">
        <div className="md:ml-20 text-center md:text-left">
          <p className="text-xl uppercase tracking-wider mb-1">Our Products</p>
          <h2 className="text-3xl md:text-5xl font-bold">This month’s best seller</h2>
        </div>
        <button className="bg-[#DCE775] hover:bg-[#d0e46c] text-md text-[#2F241F] px-5 py-2 rounded-xl transition w-fit self-center md:self-auto">
          SEE MORE
        </button>
      </div>

      <div className="relative">
        {/* Gambar wrapper */}
        <div className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth md:overflow-visible">
          {visibleData.map((item, index) => (
            <div
              key={index + startIndex}
              className="relative w-[260px] h-[360px] md:w-[300px] md:h-[440px] flex-shrink-0 rounded-2xl overflow-hidden group shadow-md"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="bg-white text-gray-800 text-lg md:text-xl opacity-50 px-2 py-1 rounded mb-1 w-fit">
                  ${item.price}
                </span>
                <h4 className="text-white text-2xl md:text-3xl font-semibold">{item.name}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol navigasi hanya muncul di desktop */}
        <div className="hidden md:flex absolute mt-7 -translate-y-1/2 right-4 gap-2 z-10">
          <button
            onClick={() => handleArrowClick('left')}
            disabled={startIndex === 0}
            className={`bg-[#E5F0B6] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#d0e46c] transition ${
              startIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <IconArrowBack className="w-4 h-4 text-[#2F241F]" />
          </button>
          <button
            onClick={() => handleArrowClick('right')}
            disabled={startIndex >= data.length - visibleCount}
            className={`bg-[#E5F0B6] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#d0e46c] transition ${
              startIndex >= data.length - visibleCount ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <IconArrowPush className="w-4 h-4 text-[#2F241F]" />
          </button>
        </div>

        {/* Tombol navigasi versi mobile */}
        <div className="flex md:hidden justify-center mt-6 gap-4">
          <button
            onClick={() => handleArrowClick('left')}
            disabled={startIndex === 0}
            className={`bg-[#E5F0B6] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#d0e46c] transition ${
              startIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <IconArrowBack className="w-4 h-4 text-[#2F241F]" />
          </button>
          <button
            onClick={() => handleArrowClick('right')}
            disabled={startIndex >= data.length - visibleCount}
            className={`bg-[#E5F0B6] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#d0e46c] transition ${
              startIndex >= data.length - visibleCount ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <IconArrowPush className="w-4 h-4 text-[#2F241F]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestSellerSection;

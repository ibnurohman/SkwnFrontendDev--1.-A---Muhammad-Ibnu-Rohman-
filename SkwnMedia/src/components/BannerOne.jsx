import { useEffect, useState } from "react";
import { ConfigHome } from "../api/service/Home/ConfigHome";
import { FaPlay, FaSearch } from "react-icons/fa";

export default function BannerOne() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await ConfigHome.getHomePhotoId("2");
      setData(response);
    } catch (error) {
      console.error("Error fetching photo:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="w-full bg-gray-500">
      <div className="max-w-8xl mx-auto bg-[#FCFAFA] grid grid-cols-1 md:grid-cols-2 items-center shadow-2xl">
        {/* Left Text Section */}
        <div className="p-6 md:p-12">
          <h1 className="text-3xl md:text-6xl font-bold text-[#2F241F] mb-4 leading-snug md:leading-tight">
            The kind of <span className="text-[#2f241fc9]"> furniture </span>you have
            <br />
            been looking for
          </h1>
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <button className="flex items-center gap-2 bg-[#E6EFBE] text-[#2D2D2D] px-4 py-2 rounded-lg text-sm md:text-lg font-medium hover:bg-[#d4e1a3] transition-colors duration-200">
              <FaSearch className="w-4 h-4 md:w-5 md:h-5" />
              Search Catalog
            </button>
            <button className="flex items-center gap-2 border border-[#2D2D2D] text-[#2D2D2D] px-4 py-2 rounded-lg text-sm md:text-lg font-medium hover:bg-gray-100 transition-colors duration-200">
              <FaPlay className="w-3.5 h-3.5 md:w-4 md:h-4" />
              Watch Videos
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative w-full h-72 md:h-[400px]">
          <img
            src={data?.image}
            alt="Banner Furniture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-end items-start md:justify-end md:items-start px-4 md:px-10 pb-4 md:pb-12 space-y-2 md:space-y-4">
            <div className="text-sm md:text-xl font-semibold text-[#2F241F] md:text-[#2F241F] shadow bg-[#FFFFFFCC] md:bg-transparent rounded px-2 py-1 md:px-2 md:py-0">
              {data?.price}
            </div>
            <div className="text-2xl md:text-5xl font-light drop-shadow-md text-[#2F241F] md:text-white">
              Pösht Sofa
            </div>
            <button className="bg-[#2F241F] text-white text-xs md:text-lg px-4 md:px-6 py-2 rounded-lg flex items-center gap-1 hover:bg-gray-800 transition-colors duration-200 w-max">
              VIEW DETAILS →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

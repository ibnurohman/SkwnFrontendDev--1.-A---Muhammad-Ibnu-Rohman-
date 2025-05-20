import { FaSearch, FaBriefcase } from "react-icons/fa";

const BannerTwo = () => {
  return (
    <section className="bg-[#2F241F] text-[#E5F0B6] py-12 px-6 md:px-20">
      <div className="text-left">
        <p className="text-lg md:text-2xl uppercase text-[#E5F0B6]/80 mb-2 md:mb-4">
          Why Choose Us?
        </p>
        <h2 className="text-2xl md:text-5xl font-bold mb-8 leading-snug md:leading-tight">
          We care about details and the quality
          <br className="hidden md:block" />
          of our products
        </h2>
      </div>

      <div className="flex flex-col gap-8 md:flex-row md:gap-6">
        {/* Feature 1 */}
        <div className="flex flex-row items-start gap-4">
          <div className="bg-[#E5F0B6]/20 text-[#E5F0B6] p-3 rounded-full">
            <FaSearch className="w-5 h-5" />
          </div>
          <div className="text-left">
            <p className="font-bold text-base md:text-xl">MANUFACTURED WITH</p>
            <p className="font-bold text-base md:text-xl">QUALITY MATERIALS</p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-row items-start gap-4">
          <div className="bg-[#DDE5B6]/20 text-[#DDE5B6] p-3 rounded-full font-bold text-lg flex items-center justify-center w-10 h-10">
            5
          </div>
          <div className="text-left">
            <p className="font-bold text-base md:text-xl">5 YEARS OF WARRANTY</p>
            <p className="font-bold text-base md:text-xl">FOR EACH PRODUCT</p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-row items-start gap-4">
          <div className="bg-[#DDE5B6]/20 text-[#DDE5B6] p-3 rounded-full">
            <FaBriefcase className="w-5 h-5" />
          </div>
          <div className="text-left">
            <p className="font-bold text-base md:text-xl">20 YEARS OF EXPERTISE</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerTwo;

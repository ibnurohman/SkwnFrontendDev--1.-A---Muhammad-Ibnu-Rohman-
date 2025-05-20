import { FaEnvelope } from "react-icons/fa";

const LimitedDealBanner = () => {
  return (
    <section className="bg-[#f9f7f6] py-16 px-4 md:px-20 text-center md:text-left">
      <p className="text-lg font-medium text-neutral-600 mb-2">LIMITED DEALS</p>
      <h2 className="text-3xl md:text-6xl font-bold text-neutral-900 leading-tight mb-6">
        Become a member and get 10% off of <br /> your first purchase
      </h2>
      <form className="flex flex-col md:flex-row max-w-md mx-auto md:mx-0">
        <input
          type="email"
          placeholder="Enter your email here"
          className="w-full px-4 py-4 rounded-md md:rounded-r-none md:rounded-l-md text-xl bg-white focus:outline-none"
        />
        <button
          type="submit"
          className="bg-lime-200 px-4 py-3 rounded-md md:rounded-l-none md:rounded-r-md flex items-center justify-center"
        >
          <FaEnvelope className="h-5 w-5 text-neutral-700" />
        </button>
      </form>
    </section>
  );
};

export default LimitedDealBanner;

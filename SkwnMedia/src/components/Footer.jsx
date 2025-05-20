import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import IconLogo from "./Icon/IconLogo";

const Footer = () => {
  return (
    <footer className="bg-white px-4 md:px-20 py-12 border-t border-gray-200">
      <div className="flex flex-col md:flex-row justify-between gap-8 text-center md:text-left">
        <div className="max-w-md mx-auto md:mx-0">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
            <IconLogo className="w-8 h-8" />
            <span className="font-semibold text-neutral-900">Dekoor</span>
          </div>
          <p className="text-sm text-neutral-600">
            Dekoor is a furniture company created to fulfill the needs of family
            with aesthetic feeling in their furniture. Always pay attention to
            details and give clear communication for the customers. Priority of
            our design is comfortability.
          </p>
          <p className="text-xs text-neutral-500 mt-6">
            ©Copyright 2022 Dekoor
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
          <div>
            <h4 className="font-medium text-neutral-900 mb-2">Support</h4>
            <ul className="space-y-1 text-neutral-600">
              <li>FAQ</li>
              <li>Shipping & Returns</li>
              <li>Care guide</li>
              <li>Redeem warranty</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-neutral-900 mb-2">Social Media</h4>
            <ul className="space-y-1 text-neutral-600">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <FaInstagram /> Instagram
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <FaFacebookF /> Facebook
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <FaTwitter /> Twitter
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <FaTiktok /> TikTok
              </li>
            </ul>
          </div>

          <div className="mx-auto">
            <h4 className="font-medium text-neutral-900 mb-2">About Us</h4>
            <ul className="space-y-1 text-neutral-600">
              <li>Our story</li>
              <li>Designer</li>
              <li>Craftmanship</li>
              <li>Sustainability</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

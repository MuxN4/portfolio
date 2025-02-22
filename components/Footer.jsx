import { assets, socialLinks } from '@/assets/assets';
import Image from 'next/image';

const Footer = () => {
  return (
    <>
      <footer className="py-10">
        {/* Horizontal Line */}
        <hr className="border-t border-gray-500 sm:border-[#f2f8fc] mb-8 mx-auto w-[80%]" />

        <div className="container mx-auto px-6 flex flex-col items-center text-center space-y-6">

          {/* Email Section */}
          <div className="flex items-center space-x-2 text-sm">
            <Image 
              src={assets.mail_icon} 
              alt="mail" 
              className="w-6 block md:hidden" 
            />
            <Image 
              src={assets.mail_icon_dark} 
              alt="mail dark" 
              className="w-6 hidden md:block" 
            />
            <span className="hover:text-cyan-400 transition duration-300">
              stev3npy@gmail.com
            </span>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map(({ id, href, icon }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-transform transform hover:scale-110"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Copyright Section */}
          <p className="text-xs">&copy; {new Date().getFullYear()} Stephen Onyango. All rights reserved.</p>
          
        </div>
      </footer>
    </>
  );
};

export default Footer;

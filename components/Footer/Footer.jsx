import Image from "next/image";
import styles from "./Footer.module.scss";
import Link from "next/link";
import socials from "../../data/social-media.json";
import SocialMediaItem from "../SocialMediaItem/SocialMediaItem";
const Footer = () => {
  return (
    <footer className="bg-adaptive-dark-3 text-white">
      <div className="container mx-auto py-10 px-5 lg:px-0">
        <div className="flex flex-col lg:flex-row">
          <div className="mr-12">
            <div className={`${styles.logo} relative`}>
              <Image
                src="/images/brand/uxph_logo.svg"
                alt="UXPH Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="mt-5">&copy; Copyright 2022.</p>
            <Link href="/">
              <a className="text-brand-color transition-all hover:text-brand-activeColor">
                View Code of Conduct
              </a>
            </Link>
          </div>
          <div>
            <h2 className="mb-8 mt-8 lg:mt-0">Connect with us</h2>
            <div className="grid grid-cols-1  gap-x-24 gap-y-7 lg:grid-cols-3 lg:grid-rows-2 ">
              {socials.map(({ icon, name, url, urlLabel }, index) => {
                return (
                  <SocialMediaItem
                    key={index}
                    icon={icon}
                    name={name}
                    url={url}
                    urlLabel={urlLabel}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import Image from "next/image";
import styles from "./Footer.module.scss";
import Link from "next/link";
import socials from "../../data/social-media.json";
import SocialMediaItem from "../SocialMediaItem/SocialMediaItem";
const Footer = () => {
  return (
    <footer className="bg-primary-color text-white">
      <div className="container mx-auto py-10">
        <div className="flex">
          <div className="mr-12">
            <div className={`${styles.logo} relative h-auto w-full `}>
              <Image
                src="/images/brand/uxph_logo.svg"
                alt="UXPH Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="mt-5">&copy; Copyright 2022.</p>
            <Link href="/">
              <a>View Code of Conduct</a>
            </Link>
          </div>
          <div>
            <h2 className="mb-8">Connect with us</h2>
            <div className="grid grid-cols-3 grid-rows-2 gap-x-24 gap-y-7 ">
              {socials.map(({ icon, name, url, urlLabel }) => {
                return (
                  <SocialMediaItem
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

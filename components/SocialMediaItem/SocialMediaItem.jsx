import Link from "next/link";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

const SocialMediaItem = ({ icon, name, url, urlLabel }) => {
  const icons = {
    facebook: <FaFacebookSquare />,
    linkedin: <FaLinkedin />,
    instagram: <FaInstagram />,
    twitter: <FaTwitter />,
    email: <FaEnvelope />,
  };
  return (
    <div className="flex items-start">
      <div className="mr-3 text-2xl">{icons[icon]}</div>
      <div>
        <h5>{name}:</h5>
        <Link href={url}>
          <a className="text-brand-color hover:underline">{urlLabel}</a>
        </Link>
      </div>
    </div>
  );
};

export default SocialMediaItem;

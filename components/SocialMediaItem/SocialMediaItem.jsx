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
        <p className="font-bold">{name}:</p>
        <Link href={url}>
          <a>{urlLabel}</a>
        </Link>
      </div>
    </div>
  );
};

export default SocialMediaItem;

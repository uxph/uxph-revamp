import Link from "next/link";
import styles from "./NavItem.module.scss";
const NavItem = ({ nav, active }) => {
  const { label, url, subNav, direction } = nav;

  return (
    <li className={styles.navItem}>
      <Link href={url ? url : "/"}>
        <a className="block px-5 py-5"> {label} </a>
      </Link>
      {/* {subNav && <div>subnav here</div>} */}
    </li>
  );
};

export default NavItem;

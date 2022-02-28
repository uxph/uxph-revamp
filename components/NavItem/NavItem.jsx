import Link from "next/link";
import styles from "./NavItem.module.scss";
const NavItem = ({ nav, active, navStyle }) => {
  const { label, url, subNav, direction } = nav;

  return (
    <li className={styles.navItem} data-style={navStyle}>
      {url != null ? (
        <Link href={url}>
          <a className="block px-5 py-5"> {label} </a>
        </Link>
      ) : (
        <span className="block px-5 py-5"> {label} </span>
      )}

      {subNav && (
        <div
          className={styles.subNav}
          style={{
            transformOrigin: direction === "left" ? "top left" : "top right",
            right: direction === "left" ? "auto" : "0",
          }}
        >
          <div className="overflow-hidden rounded-lg bg-white p-2 shadow-md">
            {subNav.map((subNavItem, index) => {
              return (
                <div className="p-4 transition-all hover:bg-adaptive-white-2" key={index}>
                  <Link href={subNavItem.url != null ? subNavItem.url : "/"}>
                    <a>
                      <p className="mb-1 font-semibold text-primary-color">
                        {subNavItem.label}
                      </p>
                      <small className="text-primary-color opacity-80">
                        {subNavItem.subLabel}
                      </small>
                    </a>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </li>
  );
};

export default NavItem;

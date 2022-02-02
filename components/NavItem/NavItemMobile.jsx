import Link from "next/link";

const NavItemMobile = ({ nav, active }) => {
  const { label, url, subNav, direction } = nav;

  return (
    <li className="block border-b-2 border-white border-opacity-5 px-10 py-6 text-white">
      {url != null ? (
        <Link href={url}>
          <a className="font-bold"> {label} </a>
        </Link>
      ) : (
        <span className="text-secondary-color">{label}</span>
      )}
      {subNav &&
        subNav.map((subNavItem, index) => {
          return (
            <div key={index} className="my-3 pl-2">
              <Link href={subNavItem.url}>
                <a className="block">
                  <p className="font-bold">{subNavItem.label}</p>
                  <small className="text-secondary-color">
                    {subNavItem.subLabel}
                  </small>
                </a>
              </Link>
            </div>
          );
        })}
    </li>
  );
};

export default NavItemMobile;

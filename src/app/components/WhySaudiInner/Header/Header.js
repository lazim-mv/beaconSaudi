"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import styles from "./header.module.css";
import { BtnComponent } from "../../ButtonComponent";

function Header() {
  const pathname = usePathname();

  const menuList = [
    { text: "Home", href: "/" },
    { text: "About Us", href: "/pages/About/" },
    { text: "Services", href: "/pages/Services/" },
    { text: "Contact Us", href: "/pages/Contact/" },
  ];


  return (
    <>
      <div className={`${styles.hContainer} ${styles.bgWhite}`}>
        <a href="/">
          <div className={styles.logoContainer}>
            <Image
              src="/Header/hLogo.svg"
              width={180}
              height={60}
              alt="ImageHeader"
              quality={100}
              priority={true}
              unoptimized
            />
          </div>
        </a>
        <div className={styles.hMenuContainer}>
          <div className={styles.hMenu}>
            <ul className={styles.hUlList}>
              {menuList.map((item, index) => (
                <li
                  key={index}
                  className={`${styles.huListTransitionWrapper} `}
                >
                  <a
                    href={item.href}
                    className={`${
                      pathname !== undefined &&
                      pathname !== null &&
                      pathname !== "" &&
                      pathname === item.href
                        ? styles.active
                        : ""
                    }`}
                  >
                    <div className={styles.listHoverTop}>{item.text}</div>
                    <div className={styles.listHoverBottom}>{item.text}</div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <a href="tel:966 570 807 175">
          <BtnComponent
            buttonText="+ 966 570 807 175"
            header={true}
            bg="#11215B"
            arrow={true}
            color="#ffffff"
            width="233px"
            height="50px"
          />
        </a>
      </div>
    </>
  );
}

export default Header;

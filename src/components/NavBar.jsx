import React from "react";
import "../styles/NavBar.css";
import ProfileIcon, { BookmarkIcon, MenuIcon } from "../icons/icons";

export default function NavBar() {
  return (
    <div className="navbar__container">
      <div>
        <MenuIcon />
      </div>

      <div>
        <img
          loading="lazy"
          src="https://static.coingecko.com/s/coingecko-logo-white-ea42ded10e4d106e14227d48ea6140dc32214230aa82ef63d0499f9c1e109656.png"
          alt="Coingecko logo"
          width="140"
          height="39"
        />
      </div>
      <div className="navbar__container__icons">
        <div className="navbar__span__icons">
          <img
            src="https://static.coingecko.com/s/candy_notification_web-a560ca6de9e0daaeb05eb6fe3dae7062684f63249dbf371568e7b062a3456e3e.png"
            alt="Candies"
          />
        </div>
        <div className="navbar__span__icons">
          <BookmarkIcon />
        </div>
        <div className="navbar__span__icons">
          <ProfileIcon />
        </div>
      </div>
    </div>
  );
}

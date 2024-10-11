import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p> <a href="https://www.youtube.com/channel/UCnuuJDc-5GoVvMdu9PrnfTg" target="_blank">By Pushpender⚡Verma - ⓒ CodeLoop {year}</a></p>
    </footer>
  );
}

export default Footer;

import React from "react";

function Footer() {
  return (
    <footer className="footer footer-center w-full p-4 bg-gray-300 text-gray-800">
      <div className="text-center">
        <p>
          Copyright © 2022 -
          <a className="font-semibold hover:text-gray-500" href="http://github.com/mylcin">
            {" "}
            mylcin
          </a>
        </p>
      </div>
    </footer>
  );
}

export default React.memo(Footer);

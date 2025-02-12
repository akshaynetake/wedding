import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-pink-950 text-white p-2 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-white font-display text-md tracking-wider font-bold">
          Design and Developed with &hearts; by{" "}
          <a
            href="https://www.instagram.com/prathamesh_netake/"
            className="font-bold underline"
            target="_blank"
          >
            Prathamesh Netake
          </a>
          . Photos by{" "}
          <a
            href="https://www.instagram.com/kalakarphotography/"
            className="font-bold underline"
            target="_blank"
          >
            Kalakar Studios (Rahul Netake)
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-black ">
      <div className="custom_container container  py-5 my-2  ">
        <div className="row">
          <Link href="/">
            <Image
              width={240}
              height={74}
              className="mx-auto w-[201px] lg:w-[240px]"
              src="/assets/svg/footer-logo.svg"
              alt="logo"
            />
          </Link>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et eum
            nihil obcaecati ratione alias id soluta quaerat sapiente repudiandae
            voluptatem, inventore voluptas saepe quasi deleniti ea molestiae
            illum perferendis libero!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

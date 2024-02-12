"use client";

import { usePathname } from "next/navigation";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({ children, lng }) => {
  const pathname = usePathname();
  const isTest =
    pathname.includes("privacy-policy") || pathname.includes("Terms");


  return (
    <>
      {!isTest && (
        <header>
          <Header lng={lng} />
        </header>
      )}
      <main className='overflow-x-hidden mt-[78px] sm:mt-[86px] md:mt-[90px] xl:mt-[109px]'>{children}</main>
      {!isTest && (
        <footer>
          <Footer lng={lng} />
        </footer>
      )}
    </>
  );
};

export default Layout;

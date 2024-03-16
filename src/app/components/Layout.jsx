"use client";

import React from 'react';

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { PdfProvider } from './PdfProvider';

const Layout = ({ children, lng }) => {
  return (
    <>
      <header>
        <Header lng={lng} />
      </header>
      <PdfProvider>
        <main className="overflow-x-hidden mt-[78px] sm:mt-[86px] md:mt-[109px] bg-mainBg">
          {children}
        </main>
        <footer>
          <Footer lng={lng} />
        </footer>
      </PdfProvider>
    </>
  );
};

export default Layout;
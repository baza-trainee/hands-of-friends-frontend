import React, { createContext, useState } from 'react';

const PdfContext = createContext();

const PdfProvider = ({ children }) => {
  const [sharedSearchValue, setSharedSearchValue] = useState('');

  return (
    <PdfContext.Provider value={{ sharedSearchValue, setSharedSearchValue }}>
      {children}
    </PdfContext.Provider>
  );
};

export { PdfContext, PdfProvider };
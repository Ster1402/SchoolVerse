import React from 'react';

const BackgroundPage = ({ children }: { children: any }) => {
  return (
    <div className="fixed top-0 left-0 overflow-x-hidden -z-10 overflow-y-auto bg-primary h-screen w-full bg-pattern bg-center bg-no-repeat bg-fixed bg-contain">
      <div className="z-0 w-full h-full text-secondary">{children}</div>
      <div className="bg-hat bg-opacity-80 bg-left-bottom bg-contain bg-no-repeat fixed -z-10 bottom-0 left-0 w-full h-60"></div>
    </div>
  );
};

export default BackgroundPage;

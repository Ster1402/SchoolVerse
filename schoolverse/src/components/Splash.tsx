import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE_LOADING } from 'utils/contants';

const Splash = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    setTimeout(() => {
      navigate(ROUTE_LOADING);
    }, 2000);
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <img src={'/images/schoolverse.svg'} alt="SchoolVerse" />
    </div>
  );
};

export default Splash;

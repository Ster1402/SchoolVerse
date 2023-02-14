import { Spinner } from 'flowbite-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE_LANDING } from 'utils/contants';

const Loading = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    setTimeout(() => {
      navigate(ROUTE_LANDING);
    }, 5000);
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <img src={'/images/icone_schoolverse.svg'} alt="SchoolVerse" />
      <Spinner size={'lg'} color={'success'} className='mt-4' />
    </div>
  );
};

export default Loading;

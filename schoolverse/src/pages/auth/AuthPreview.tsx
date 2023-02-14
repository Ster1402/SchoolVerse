import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import CustomButton from 'components/CustomButton';
import { useNavigate } from 'react-router-dom';
import { ROUTE_AUTH_PREVIEW, ROUTE_LOGIN, ROUTE_REGISTER } from 'utils/contants';

const AuthPreview = ({ page = 'register' }: { page: 'login' | 'register' }) => {
  const navigate = useNavigate();
  const [updatePage, setUpdatePage] = useState(page)

  return (
    <div className="p-4 pt-10 flex flex-col items-center justify-start gap-4 text-center">
      <div className="flex max-w-xs justify-center items-center">
        <img
          src="/images/schoolverse.svg"
          className="h-full w-full"
          alt="SchoolVerse"
        />
      </div>
      <h1 className="text-white text-2xl">
        Vivez une expérience virtuelle et
        <br />
        optimisée de votre cursus scolaire
      </h1>
      <span className="text-[#FFFFFFBF] text-sm block">
        Facilitez votre apprentissage grâce à schoolverse.
      </span>
      <div className="flex justify-center max-w-sm items-center my-4">
        <img src="/images/stylish_down_arrow.svg" alt="Arrow down" />
      </div>
      <div className="flex flex-col gap-3">
        <CustomButton
          onClick={async () => {
            if (updatePage === 'login') navigate(ROUTE_LOGIN);
            else navigate(ROUTE_REGISTER);
          }}
          title={updatePage === 'login' ? 'Se connecter' : "S'inscrire"}
          className="bg-secondary"
        />
        <CustomButton
          onClick={async () => {
            if (updatePage === 'login') navigate(ROUTE_LOGIN);
            else navigate(ROUTE_REGISTER);
          }}
          icon={<FcGoogle className="mr-2" />}
          title={
            updatePage === 'login'
              ? 'Se connecter avec Google'
              : "S'inscrire avec Google"
          }
          className="bg-white"
        />
      </div>
      <span className="w-full text-center text-white mt-5">
        {updatePage === 'register' ? (
          <>
            Vous avez déjà un compte ?
            <button
              onClick={async () => setUpdatePage('login')}
              className="text-secondary inline-block ml-3 font-semibold">
              Connectez vous
            </button>
          </>
        ) : (
          <>
            Vous n'avez pas de compte ?
            <button
              onClick={async () => setUpdatePage('register')}
              className="text-secondary inline-block ml-3 font-semibold">
              Inscrivez vous
            </button>
          </>
        )}
      </span>
    </div>
  );
};

export default AuthPreview;

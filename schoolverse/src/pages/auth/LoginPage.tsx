import InputText from 'components/inputs/InputText';
import SelectInput from 'components/select/SelectInput';
import React from 'react';
import { GrSecure } from 'react-icons/gr'
import { useNavigate } from 'react-router-dom';
import { ROUTE_REGISTER } from 'utils/contants';

const LoginPage = () => {
    const navigate = useNavigate()

    return (
    <div className="p-4 pt-10 flex flex-col items-center justify-start gap-4 text-center">
      <div className="flex w-60 justify-center items-center">
        <img
          src="/images/schoolverse.svg"
          className="h-full w-full"
          alt="SchoolVerse"
        />
      </div>
      <h1 className="text-white text-3xl">
        Connexion
      </h1>
      <span className="text-[#FFFFFFBF] text-sm block">
      Content de vous revoir !
      </span>
      <div className="flex flex-col gap-3 w-[45%] mx-auto">
        <SelectInput id='school' value={"Etablissement scolaire"} placeholder="ENSPD">
          <option value={"ENSPD"}> Ecole Nationale Supérieure de Polytechnique de Douala</option>
        </SelectInput>
        <InputText id='identifiant' value={"Identifiant"} placeholder='ENSPD-22G00804' type='text' />
        <InputText id='password' value={"Mot de passe"} type='password' icon={GrSecure} />
      </div>
      <span className="w-full text-center text-white mt-5">
        Vous n'avez pas de compte ?
        <button
          onClick={async () => navigate(ROUTE_REGISTER)}
          className="text-secondary inline-block ml-3 font-semibold">
          Inscrivez vous
        </button>
      </span>
    </div>
  );
};

export default LoginPage;

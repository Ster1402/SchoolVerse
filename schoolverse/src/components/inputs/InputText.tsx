import { Label, TextInput } from 'flowbite-react';
import React from 'react';

const InputText = ({
  id,
  value,
  type,
  icon,
  placeholder,
}: {
  id: string;
  value: any;
  type: string;
  icon?: any;
  placeholder?: string;
}) => {
  return (
    <div className="w-full">
      <div className="text-left mb-2 block">
        <Label htmlFor={id} color="text-secondary" value={value} />
      </div>
      <input
        className="text-white bg-[#447370] w-full rounded border-2 border-secondary placeholder-[#FFFFFF99]"
        type={type}
        id={id}
        placeholder={placeholder}
        color="text-white"
      />
    </div>
  );
};

export default InputText;

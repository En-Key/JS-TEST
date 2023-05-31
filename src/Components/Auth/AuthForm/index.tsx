import React, { useState } from 'react';
import { CustomInput } from '../../Commons/CustomInput';

export const AuthForm = () => {
  const [formState, setFormstate] = useState({
    email: '',
    password: '',
  });

  const handleChangeFieldForm = (fieldName: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormstate((prevValues) => ({ ...prevValues, [fieldName]: e.target }));
  };

  return <div>
    <CustomInput fieldLabel='Email' fieldName='Email' value={formState.email} handleChangeFieldForm={handleChangeFieldForm} />
    <CustomInput fieldLabel='Password' fieldName='Password' value={formState.password} type='password' handleChangeFieldForm={handleChangeFieldForm} />
  </div>
};

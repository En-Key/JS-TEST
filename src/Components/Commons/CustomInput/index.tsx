import React from 'react';

interface IProps {
  value: string;
  fieldLabel: string;
  fieldName: string;
  type?: React.HTMLInputTypeAttribute;
  handleChangeFieldForm: (fieldName: string) => (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const CustomInput = ({ value, fieldLabel, fieldName, type, handleChangeFieldForm }: IProps) => {
  // const [inputValues, setInputValues] = useState('');

  // const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setInputValues(event.target.value);
  // };

  return <div style={{ display: 'grid' }}>
    <span>{fieldLabel}</span>
        <input value={value} type={type} onChange={handleChangeFieldForm(fieldName)}/>
    </div>
};

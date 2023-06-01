/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react';
import { useSelector } from 'react-redux';
import { getUserToken } from '../../../store/userData/selectors';
import { routes } from '../../../utils/constants/routes';
import { Navigate } from 'react-router-dom';

interface IProps {
  children: React.ReactElement;
}

export const CheckAuth = ({ children }: IProps) => {
  const token = useSelector(getUserToken);

  if (!token) {
    return <Navigate to={routes.AUTH} />;
  }
  return <>{children}</>
};

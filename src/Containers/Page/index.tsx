import React from 'react';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';

export const Page = () => {
  const params = useParams();
  // const location = useLocation();
  // console.log(location);

  const navigate = useNavigate();
  console.log(navigate);

  const goBack = () => {
    navigate(-1);
    // navigate('/posts/575'); Либо путь
  };

  // if (params.id != null) {
  //   return <Navigate to='/' />
  // } редиректить пользователя в случае необходимости

  const goForvard = () => {
    navigate(1);
  };

  return <div>
    <span>
      {`Hi i am page number ${params.id ?? ''} `}
    </span>
    <button onClick={goBack}>Go back</button>
    <button onClick={goForvard}>Go forvard</button>
    </div>;
};

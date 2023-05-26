
import React from 'react';

interface TProps {
  initData: {
    id: string;
    link: string;
  }
  name: string;
}

export const Description = (props: TProps) => (
  // console.log(props);
   <>
    <p>
      {`Hello ${props.name}`}

        </p>
        <a
          className="App-link"
          href={props.initData.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {`Learn React ${props.initData.id}`}
        </a></>
)

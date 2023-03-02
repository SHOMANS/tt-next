import { useRouter } from 'next/router';
import React from 'react';

const SingleSkill = () => {
  const {
    query: { name },
  } = useRouter();

  console.log(name);

  return <div>SingleSkill: {name}</div>;
};


export default SingleSkill;

import React from 'react';
import { ImSpinner9 } from 'react-icons/im';

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <p className="text-2xl animate-spin">
        <ImSpinner9 />
      </p>
    </div>
  );
};

export default Loading;

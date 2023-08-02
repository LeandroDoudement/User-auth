import React from 'react';

interface Props {
  message: string;
}

const Snackbar = ({ message }: Props) => {
  return (
    <div className="fixed  top-0 right-0 bg-red-600 text-white px-4 py-2 rounded m-4 shadow-lg">
      <span className="py-2 px-4">{message}</span>
    </div>
  );
};

export default Snackbar;

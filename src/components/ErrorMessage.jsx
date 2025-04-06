import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <div className=" w-full bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-4" role="alert">
      <strong className="font-bold">Error: </strong>
      <span className="block sm:inline">{message || 'Something went wrong. Please try again.'}</span>
    </div>
  );
};

export default ErrorMessage;

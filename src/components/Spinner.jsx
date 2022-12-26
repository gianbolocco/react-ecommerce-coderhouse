import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useDarkModeContext } from '../context/DarkModeContext';

const Spinner = () => {

  const {darkMode} = useDarkModeContext()

  return (
    <div className={`flex justify-center items-center h-screen ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
      <FontAwesomeIcon className='duration-300 h-10' icon={faSpinner} spin />
    </div>
  );
};

export default Spinner;
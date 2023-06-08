import React from 'react';

const Search = ({ onSearchChnage }) => {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='font-Bigelow items-center  text-7xl font-bold m-10 text-teal-300 '>
        Monsters Rolodex
      </h1>
      <input
        type='search'
        placeholder='Search Monsters...'
        className='p-3 rounded-md outline-none'
        onChange={onSearchChnage}
      />
    </div>
  );
};

export default Search;

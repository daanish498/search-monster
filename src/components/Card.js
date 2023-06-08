import React from 'react';

const Card = ({ data }) => {
  console.log(data);
  return (
    <>
      <div
        className='max-w-sm w-72 m-2 p-4  border border-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-96 inline-flex flex-col items-center bg-teal-400 justify-center transform translate-z-0 transition-transform duration-250 ease-out hover:transform hover:scale-105
       '
      >
        <a href='#'>
          <img
            className='rounded-t-lg   '
            src={` ${`https://robohash.org/${data.id}?set=set2&size=180x180`}`}
            alt=''
          />
        </a>
        <div className='p-4 h-full flex-grow overflow-hidden  '>
          <a href='#'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              {data.name}
            </h5>
          </a>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            {data.email}
          </p>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400 flex gap-2'>
            Username: <span className='text-teal-50'>{data.username} </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;

import Card from '@/components/Card';
import Search from '@/components/Search';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Home = ({ data }) => {
  const [searchVlaue, setSearchValue] = useState('');

  const onSearchChnage = (e) => {
    const searchString = e.target.value.toLocaleLowerCase();
    setSearchValue(searchString);
  };

  const filterMonsterData = data.filter((monster) => {
    return (
      monster.name.toLocaleLowerCase().includes(searchVlaue) ||
      monster.email.toLocaleLowerCase().includes(searchVlaue) ||
      monster.username.toLocaleLowerCase().includes(searchVlaue)
    );
  });

  return (
    <div className='p-12 flex flex-col items-center'>
      <Search onSearchChnage={onSearchChnage} />
      <div className='mt-10'>
        {filterMonsterData.map((data) => (
          <Card data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users ');
    const data = res.data;

    return {
      props: { data }, // will be passed to the page component as props
    };
  } catch (error) {
    console.log(error);
  }
}

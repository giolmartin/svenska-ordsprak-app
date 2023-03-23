import { Routes, Route } from 'react-router-dom';

import Hero from '../../components/hero/hero.component';
import Content from '../../components/content/content.component';

import './home.styles';

//TODO: Add styling to the home page
const Home = () => {
  console.log('Home');
  return (
    <>
      <Hero />
      <Content />
    </>
  );
};
export default Home;

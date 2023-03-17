import { Routes, Route } from 'react-router-dom';
import './home.styles';
import Directory from '../../components/directory/directory.component';

//TODO: Add styling to the home page
const Home = () => {
  console.log('Home');
  return (
    <Routes>
      <Route index element={<Directory />} />
    </Routes>
  );
};
export default Home;

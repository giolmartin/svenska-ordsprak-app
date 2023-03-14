import { Routes, Route } from 'react-router-dom';
import './home.styles';
import Directory from '../../components/directory/directory.component';

const Home = () => {
  console.log('Home');
  return (
    <Routes>
      <Route index element={<Directory />} />
    </Routes>
  );
};
export default Home;

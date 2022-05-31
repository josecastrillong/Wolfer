import {
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
// import Login from './pages/login/Login';
import PropertyPhotos from './components/PropertyPhotos/PropertyPhotos';
import PropertyReview from './components/PropertyReview/PropertyReview';
import CountButtons from './components/Buttons/BlocksCount/CountButtons';
import InvestCard from './components/InvestCard/InvestCard';
import Property from './pages/Property/Property';
import ContractPage from './pages/Contract/Contract';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Routes>
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/contract" element={<ContractPage />} />
      <Route path="/" element={<Property />} />
      <Route path="/InvestCard" element={<InvestCard />} />
      <Route path="/PropertyPhotos" element={<PropertyPhotos />} />
      <Route path="/PropertyReview" element={<PropertyReview />} />
      <Route path="/CountButtons" element={<CountButtons />} />
    </Routes>
  );
}

export default App;

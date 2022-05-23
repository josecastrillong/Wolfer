import './App.css';
// import Login from './pages/login/Login';
import PropertyPhotos from './components/PropertyPhotos/PropertyPhotos';
import PropertyReview from './components/PropertyReview/PropertyReview';
import CountButtons from './components/Buttons/BlocksCount/CountButtons';
import InvestCard from './components/InvestCard/InvestCard';

function App() {
  return (
    <div>
      {/* <Login /> */}
      <PropertyPhotos />
      <PropertyReview />
      <CountButtons />
      <InvestCard />
    </div>
  );
}

export default App;

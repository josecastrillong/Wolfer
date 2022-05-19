import './App.css';
// import Login from './pages/login/Login';
import PropertyPhotos from './components/PropertyPhotos/PropertyPhotos';
import PropertyReview from './components/PropertyReview/PropertyReview';

function App() {
  return (
    <div>
      {/* <Login /> */}
      <PropertyPhotos />
      <PropertyReview />
    </div>
  );
}

export default App;

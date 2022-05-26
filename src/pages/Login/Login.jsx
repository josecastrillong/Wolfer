import { useEffect, useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { app } from '../../utils/ConfigFirebase';

const auth = getAuth();

function Login() {
  const [user, setUser] = useState(null);
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = data;

  const handleInputs = (event) => {
    const inputs = { [event.target.name]: event.target.value };
    setData({ ...data, ...inputs });
    console.log(data);
  };

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      console.log(user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };

  const handleCreateAccount = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };

  const handlelogout = () => {
    signOut(auth);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (userData) => {
      if (userData) {
        alert('Logged In');
      } else {
        alert('Not Logged In');
      }
    });
  }, []);
  return (
    <div className="App-header">
      <input
        placeholder="Email"
        name="email"
        type="email"
        className="input-fields"
        onChange={(event) => handleInputs(event)}
      />
      <input
        placeholder="Password"
        name="password"
        type="password"
        className="input-fields"
        onChange={(event) => handleInputs(event)}
      />
      <button type="button" onClick={handleCreateAccount}>Crear cuenta</button>
      <button type="button" onClick={{ handleLogin }}>Iniciar sesión</button>
    </div>
  );
}

export default Login;

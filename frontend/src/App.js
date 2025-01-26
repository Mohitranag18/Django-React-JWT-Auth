import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import { AuthProvider } from './context/useAuth';

import Login from './routes/login';
import Menu from './routes/menu';
import Register from './routes/register';

import Layout from './components/layout';
import PrivateRoute from './components/private_route';

function App() {
  return (
    <ChakraProvider>
        <Router>
          <AuthProvider>
              <Routes>
                <Route element={<PrivateRoute><Layout><Menu /></Layout></PrivateRoute>} path='/' /> 
                <Route element={<Layout><Login /></Layout>} path='/login' /> 
                <Route element={<Layout><Register /></Layout>} path='/register' /> 
              </Routes>
          </AuthProvider>
        </Router>
    </ChakraProvider>
  );
}

export default App;

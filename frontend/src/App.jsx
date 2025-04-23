import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './context/useAuth';

import Login from './routes/login';
import Home from './routes/home';
import Register from './routes/register';

import Layout from './components/layout';
import PrivateRoute from './components/private_route';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route element={<PrivateRoute><Layout><Home /></Layout></PrivateRoute>} path='/' /> 
          <Route element={<Layout><Login /></Layout>} path='/login' /> 
          <Route element={<Layout><Register /></Layout>} path='/register' /> 
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;

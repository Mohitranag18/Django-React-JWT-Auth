import React, { useEffect } from 'react';
import { useAuth } from '../context/useAuth';
import Layout from './layout';
import { Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to login page if not authenticated
    if (!loading && !user) {
      navigate('/login');
    }
  }, [loading, user, navigate]);

  if (loading) {
    return <Layout><Heading>Loading...</Heading></Layout>;
  }

  if (user) {
    return children;
  }

  // The navigation will happen in useEffect, no need for this line
  return null;
};

export default PrivateRoute;

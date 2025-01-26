import {
    FormControl,
    FormLabel,
    Button,
    VStack,
    Input,
    Text,
  } from '@chakra-ui/react'

import { useState } from 'react';
import { useAuth } from '../context/useAuth';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { loginUser } = useAuth();
    const nav = useNavigate();

    const handleLogin = async () => {
        await loginUser(username, password)
    }

    const handleNavigate = () => {
        nav('/register')
    }

    return (
        <VStack minH='500px' w='70%' maxW='400px' justifyContent='start' alignItems='start'>
            <Text mb='20px' color='gray.700' fontSize='44px' fontWeight='bold'>Login</Text>
            <FormControl mb='20px'>
                <FormLabel>Username</FormLabel>
                <Input bg='white' onChange={(e) => setUsername(e.target.value)} value={username} type='email' placeholder='Your username here' />
            </FormControl>
            <FormControl>
                <FormLabel>Password</FormLabel>
                <Input  bg='white' onChange={(e) => setPassword(e.target.value)} value={password} type='password' placeholder='Your password here' />
            </FormControl>
            <Button mb='10px' colorScheme='green' mt='20px' w='100%' onClick={handleLogin}>Login</Button>
            <Text onClick={handleNavigate} cursor='pointer' color='gray.600' fontSize='14px'>Don't have an account? Sign up</Text>
        </VStack>
    )
}

export default Login;
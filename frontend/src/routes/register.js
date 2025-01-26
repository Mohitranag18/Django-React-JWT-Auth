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

const Register = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    const { registerUser } = useAuth();
    const nav = useNavigate();

    const handleLogin = async () => {
        await registerUser(username, email, password, passwordConfirm)
    }

    const handleNavigate = () => {
        nav('/login')
    }

    return (
        <VStack minH='500px' w='70%' maxW='400px' justifyContent='start' alignItems='start'>
            <Text mb='20px' color='gray.700' fontSize='44px' fontWeight='bold'>Register</Text>
            <FormControl mb='20px'>
                <FormLabel>Username</FormLabel>
                <Input bg='white' onChange={(e) => setUsername(e.target.value)} value={username} type='text' placeholder='Your username here' />
            </FormControl>
            <FormControl mb='20px'>
                <FormLabel>Email</FormLabel>
                <Input  bg='white' onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder='Your email here' />
            </FormControl>
            <FormControl mb='20px'>
                <FormLabel>Password</FormLabel>
                <Input  bg='white' onChange={(e) => setPassword(e.target.value)} value={password} type='password' placeholder='Your password here' />
            </FormControl>
            <FormControl>
                <FormLabel>Confirm Password</FormLabel>
                <Input bg='white' onChange={(e) => setPasswordConfirm(e.target.value)} value={passwordConfirm} type='password' placeholder='Confirm password here' />
            </FormControl>
            <Button mb='10px' colorScheme='green' mt='20px' w='100%' onClick={handleLogin}>Register</Button>
            <Text onClick={handleNavigate} cursor='pointer' color='gray.600' fontSize='14px'>Have an account? Sign up</Text>
        </VStack>
    )
}

export default Register;
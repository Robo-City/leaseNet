import React, { useState } from 'react';
import { Link, router } from 'expo-router';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useSetRecoilState } from 'recoil';
import { authState, userDetailsState } from '../../atoms';
import axios from 'axios';
import { BASEURI } from '../../config';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setAuth = useSetRecoilState(authState);
  const setUserDetails = useSetRecoilState(userDetailsState);

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${BASEURI}/admin/login`, {
        email,
        password,
      });
  
      const data = response.data;
      if (data.token) {
        setAuth({
          isAuthenticated: true,
          token: data.token,
        });
        setUserDetails({
          id:data.username,
          username: data.username,
          email: data.email,
          address: data.address,
        });
        router.push("/(tabs)");
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Teacher's handy tool</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email..."
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <Link href={"/ForgotPassword"}>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </Link>
      <Link style={styles.loginBtn} href={"/(tabs)"}>
        <Text style={styles.loginText}>LOGIN</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    padding: 50,
    fontSize: 41,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#e0ebeb',
    shadowOpacity: 19,
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'blue',
  },
  forgot: {
    color: 'gray',
    fontSize: 11,
  },
  loginBtn: {
    width: '80%',
    borderRadius: 23,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
    backgroundColor: '#4CFF16',
    textAlign: 'center',
  },
  loginText: {
    color: 'green',
  },
});

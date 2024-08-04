import React, { useState } from 'react';
import { Link, router } from 'expo-router';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import { BASEURI } from '../../config';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleRequestReset = async () => {
    try {
      const response = await axios.post(`${BASEURI}/admin/forgot-password`, {
        email,
      });
  
      const data = response.data;
      if (data.success) {
        // Show a message to the user or redirect them
        alert('Password reset link sent to your email');
        router.push("/");
      }
    } catch (error) {
      console.error('Request failed', error);
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
      <TouchableOpacity style={styles.loginBtn} onPress={handleRequestReset}>
        <Text style={styles.loginText}>REQUEST RESET LINK</Text>
      </TouchableOpacity>
      <Link href={'/'}>
        <Text style={styles.forgot}>Back to Login</Text>
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

import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Layout from './Layout';
import { useAuth } from '../context/AuthContext';

const Connexion = () => {
  const { connexion } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigation = useNavigation();

  useEffect(() => {
    const lePanier = JSON.parse(localStorage.getItem('panier') || '[]');
    const leUser = JSON.parse(localStorage.getItem('user') || '[]');

    if (lePanier.length > 0 && leUser !== undefined) {
      const sendPanierData = async () => {
        try {
          const encodedLePanier = encodeURIComponent(JSON.stringify(lePanier));
          const encodedLeUser = encodeURIComponent(JSON.stringify(leUser));
          const url = `https://localhost:8000/panier?test=${encodedLePanier}&user=${encodedLeUser}`;

          const response = await fetch(url, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include',
          });

          if (!response.ok) {
            throw new Error('Erreur lors de l\'envoi des données au serveur');
          }

          const result = await response.json();
          localStorage.setItem('panier', JSON.stringify(result?.success));
        } catch (error) {
          console.error('Erreur:', error);
        }
      };

      sendPanierData();
    }
  }, []);

  const handleUsernameChange = (text: string) => {
    setUsername(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const handleSubmit = async () => {
    setError(null);

    if (!connexion) {
      setError("Erreur de configuration de l'authentification");
      return;
    }

    try {
      await connexion(username, password);
      navigation.navigate('Home'); // Naviguer vers la page d'accueil ou la page souhaitée
    } catch (e) {
      Alert.alert('Erreur de connexion', 'Nom d\'utilisateur ou mot de passe incorrect');
    }
  };

  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.title}>Connexion</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={username}
          onChangeText={handleUsernameChange}
          placeholderTextColor="#888"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          value={password}
          onChangeText={handlePasswordChange}
          placeholderTextColor="#888"
          secureTextEntry
        />
        <Button title="Connexion" onPress={handleSubmit} color="#FFD700" />

        <TouchableOpacity onPress={() => navigation.navigate('Inscription')}>
          <Text style={styles.signupText}>
            Pas de compte? <Text style={styles.signupLink}>Inscription</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 20,
    fontStyle: 'italic',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: 'black',
    backgroundColor: 'antiquewhite',
    color: 'black',
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    borderRadius: 0,
    textTransform: 'uppercase',
    width: '100%',
  },
  signupText: {
    marginTop: 20,
    fontSize: 16,
    color: '#888',
  },
  signupLink: {
    color: '#FFD700',
    fontWeight: 'bold',
  },
});

export default Connexion;

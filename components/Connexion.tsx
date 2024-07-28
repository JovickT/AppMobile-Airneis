import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert, AsyncStorage } from 'react-native';
import { useRouter } from 'expo-router';
import Layout from './Layout';

const Connexion = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const sendPanierData = async () => {
      try {
        const lePanier = await AsyncStorage.getItem('panier');
        const leUser = await AsyncStorage.getItem('user');
        if (lePanier && leUser) {
          const encodedLePanier = encodeURIComponent(lePanier);
          const encodedLeUser = encodeURIComponent(leUser);
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
          await AsyncStorage.setItem('panier', JSON.stringify(result?.success));
        }
      } catch (error) {
        console.error('Erreur:', error);
      }
    };

    sendPanierData();
  }, []);

  const handleUsernameChange = (text: string) => {
    setUsername(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const handleSubmit = async () => {
    setError(null);

    // Simulation de la connexion
    try {
      if (username === 'test' && password === 'password') {
        Alert.alert('Connexion réussie', 'Vous êtes maintenant connecté.');
        router.push('/'); // Naviguer vers la page d'accueil ou la page souhaitée
      } else {
        Alert.alert('Erreur de connexion', 'Nom d\'utilisateur ou mot de passe incorrect');
      }
    } catch (e) {
      setError('Nom d\'utilisateur ou mot de passe incorrect');
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

        <TouchableOpacity onPress={() => router.push('/inscription')}>
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

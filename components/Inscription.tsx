import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Layout from './Layout';
import { useRouter } from 'expo-router';

const Inscription = () => {
  const [nom, setNom] = useState<string>('');
  const [prenom, setPrenom] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async () => {
    setError(null);

    // Logique de soumission du formulaire d'inscription
    // Ajoutez ici la logique pour envoyer les données au serveur et gérer la réponse
    try {
      // Simuler une inscription réussie
      console.log({ nom, prenom, email, password });
      router.push('/connexion');
    } catch (err) {
      setError('Erreur lors de l\'inscription');
      console.error(err);
    }
  };

  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.title}>Inscription</Text>

        <TextInput
          style={styles.input}
          placeholder="Nom"
          value={nom}
          onChangeText={setNom}
          placeholderTextColor="#888"
        />

        <TextInput
          style={styles.input}
          placeholder="Prénom"
          value={prenom}
          onChangeText={setPrenom}
          placeholderTextColor="#888"
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#888"
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          value={password}
          onChangeText={setPassword}
          placeholderTextColor="#888"
          secureTextEntry
        />

        {error && <Text style={styles.error}>{error}</Text>}

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Inscription</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text>Vous avez déjà un compte? </Text>
          <TouchableOpacity onPress={() => router.push('/connexion')}>
            <Text style={styles.link}>Connexion</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
    fontStyle: 'italic',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: 'black',
    backgroundColor: 'antiquewhite',
    color: 'black',
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    borderRadius: 0,
    textTransform: 'uppercase',
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#FFD700',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textTransform: 'uppercase',
  },
  footer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  link: {
    color: '#FFD700',
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default Inscription;

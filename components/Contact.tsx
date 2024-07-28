import React, { useState } from 'react';
import { View, Text, TextInput, Button,TouchableOpacity, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Layout from './Layout';
import logo from '@/assets/images/carrousel.jpg';

const Contact = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log({ nom, prenom, email, message });
  };

  return (
    <Layout>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />

        <View style={styles.form}>
          <Text style={styles.label}>Nom :</Text>
          <TextInput
            style={styles.input}
            placeholder="Jones"
            value={nom}
            onChangeText={setNom}
            placeholderTextColor="#888"
          />
          <Text style={styles.label}>Prénom :</Text>
          <TextInput
            style={styles.input}
            placeholder="John"
            value={prenom}
            onChangeText={setPrenom}
            placeholderTextColor="#888"
          />
          <Text style={styles.label}>Mail :</Text>
          <TextInput
            style={styles.input}
            placeholder="exemple@xyz.fr"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholderTextColor="#888"
          />
          <Text style={styles.label}>Message :</Text>
          <TextInput
            style={[styles.input, styles.textarea]}
            placeholder="Message....."
            value={message}
            onChangeText={setMessage}
            multiline
            numberOfLines={5}
            placeholderTextColor="#888"
          />
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Envoyer</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 16,
  },
  logo: {
    width: Dimensions.get('window').width * 0.6,
    height: 100,
    marginBottom: 20,
  },
  form: {
    width: '100%',
    maxWidth: 400,
  },
  label: {
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
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
  textarea: {
    height: 120,
  },
});

export default Contact;

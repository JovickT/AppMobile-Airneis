import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import Layout from './Layout';

const CheckoutLivraison = () => {
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [adresse1, setAdresse1] = useState('');
  const [adresse2, setAdresse2] = useState('');
  const [ville, setVille] = useState('');
  const [region, setRegion] = useState('');
  const [codePostal, setCodePostal] = useState('');
  const [pays, setPays] = useState('');
  const [telephone, setTelephone] = useState('');
  const [sauvegarderInfos, setSauvegarderInfos] = useState(false);
  const router = useRouter();

  const handlePasserCommande = () => {
    // Logique pour traiter les informations de livraison
    router.push('/checkoutPayement');
  };

  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.title}>Livraison</Text>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Prénom :</Text>
          <TextInput
            style={styles.input}
            value={prenom}
            onChangeText={setPrenom}
            placeholder="Prénom"
            placeholderTextColor="#888"
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nom :</Text>
          <TextInput
            style={styles.input}
            value={nom}
            onChangeText={setNom}
            placeholder="Nom"
            placeholderTextColor="#888"
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Adresse 1 :</Text>
          <TextInput
            style={styles.input}
            value={adresse1}
            onChangeText={setAdresse1}
            placeholder="Adresse 1"
            placeholderTextColor="#888"
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Adresse 2 :</Text>
          <TextInput
            style={styles.input}
            value={adresse2}
            onChangeText={setAdresse2}
            placeholder="Adresse 2"
            placeholderTextColor="#888"
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Ville :</Text>
          <TextInput
            style={styles.input}
            value={ville}
            onChangeText={setVille}
            placeholder="Ville"
            placeholderTextColor="#888"
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Région :</Text>
          <TextInput
            style={styles.input}
            value={region}
            onChangeText={setRegion}
            placeholder="Région"
            placeholderTextColor="#888"
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Code postal :</Text>
          <TextInput
            style={styles.input}
            value={codePostal}
            onChangeText={setCodePostal}
            placeholder="Code postal"
            placeholderTextColor="#888"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Pays :</Text>
          <TextInput
            style={styles.input}
            value={pays}
            onChangeText={setPays}
            placeholder="Pays"
            placeholderTextColor="#888"
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Téléphone :</Text>
          <TextInput
            style={styles.input}
            value={telephone}
            onChangeText={setTelephone}
            placeholder="Téléphone"
            placeholderTextColor="#888"
            keyboardType="phone-pad"
          />
        </View>
        <View style={styles.radioGroup}>
          <TouchableOpacity onPress={() => setSauvegarderInfos(!sauvegarderInfos)} style={styles.radioButton}>
            <View style={[styles.radioOuter, sauvegarderInfos && styles.radioOuterActive]}>
              {sauvegarderInfos && <View style={styles.radioInner} />}
            </View>
            <Text style={styles.radioLabel}>Sauvegarder vos informations de livraison</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={handlePasserCommande}>
          <Text style={styles.buttonText}>Passer la commande</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#FFD700',
    marginVertical: 10,
  },
  inputGroup: {
    marginBottom: 15,
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
    fontSize: 16,
    borderRadius: 0,
    width: '100%',
  },
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioOuter: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#FFD700',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  radioOuterActive: {
    backgroundColor: '#FFD700',
  },
  radioInner: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: 'white',
  },
  radioLabel: {
    fontSize: 16,
    color: 'black',
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
});

export default CheckoutLivraison;

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import Layout from './Layout';

const CheckoutPayement = () => {
  const [numeroCarte, setNumeroCarte] = useState('');
  const [nomComplet, setNomComplet] = useState('');
  const [dateExpiration, setDateExpiration] = useState('');
  const [cvv, setCvv] = useState('');
  const router = useRouter();

  const handlePayer = () => {
    // Logique pour traiter les informations de paiement
    router.push('/checkoutFini');
  };

  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.title}>Payement</Text>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Numéro de carte :</Text>
          <TextInput
            style={styles.input}
            value={numeroCarte}
            onChangeText={setNumeroCarte}
            placeholder="Numéro de carte"
            placeholderTextColor="#888"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nom complet :</Text>
          <TextInput
            style={styles.input}
            value={nomComplet}
            onChangeText={setNomComplet}
            placeholder="Nom complet"
            placeholderTextColor="#888"
          />
        </View>
        <View style={styles.row}>
          <View style={[styles.inputGroup, styles.halfInputGroup]}>
            <Text style={styles.label}>Date d'expiration :</Text>
            <TextInput
              style={styles.input}
              value={dateExpiration}
              onChangeText={setDateExpiration}
              placeholder="MM/AA"
              placeholderTextColor="#888"
              keyboardType="numeric"
            />
          </View>
          <View style={[styles.inputGroup, styles.halfInputGroup]}>
            <Text style={styles.label}>CVV :</Text>
            <TextInput
              style={styles.input}
              value={cvv}
              onChangeText={setCvv}
              placeholder="CVV"
              placeholderTextColor="#888"
              keyboardType="numeric"
            />
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={handlePayer}>
          <Text style={styles.buttonText}>Payer</Text>
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInputGroup: {
    width: '48%',
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#FFD700',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textTransform: 'uppercase',
  },
});

export default CheckoutPayement;

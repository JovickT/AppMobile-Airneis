import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import Layout from './Layout';

const CheckoutFini = () => {
  const router = useRouter();
  const orderNumber = 'XXX'; // Vous pouvez remplacer 'XXX' par une variable dynamique si nécessaire.

  const handleContinuerAchats = () => {
    router.push('/'); // Assurez-vous que le chemin '/Home' est correct pour votre page d'accueil.
  };

  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.title}>Commande effectuée</Text>
        <Text style={styles.thankYouText}>Merci de votre achat !</Text>
        <Text style={styles.orderText}>
          Votre commande a bien été enregistrée sous le numéro {orderNumber}. Vous pouvez suivre son état depuis votre espace client.
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleContinuerAchats}>
          <Text style={styles.buttonText}>Continuer mes achats</Text>
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
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#FFD700',
    marginVertical: 10,
  },
  thankYouText: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
    color: 'black',
  },
  orderText: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
    color: 'black',
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

export default CheckoutFini;

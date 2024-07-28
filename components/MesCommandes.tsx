import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Layout from './Layout';

const MesCommandes = () => {
  // Exemple de données en dur
  const commandes = [
    {
      annee: 2023,
      details: [
        { date: '2023/01/05', numero: '1234567', statut: 'En cours', articles: 3, prix: 75.50 },
        { date: '2023/03/12', numero: '2345678', statut: 'Livrée', articles: 2, prix: 45.00 },
      ],
    },
    {
      annee: 2022,
      details: [
        { date: '2022/10/03', numero: '3912309', statut: 'Livrée', articles: 5, prix: 150.00 },
        { date: '2022/11/21', numero: '4567890', statut: 'Annulée', articles: 1, prix: 20.00 },
      ],
    },
  ];

  const router = useRouter();

  const handleCommandClick = (commande: any) => {
    router.push({
      pathname: '/commande',
      params: {
        numero: commande.numero,
        date: commande.date,
        statut: commande.statut,
      },
    });
  };

  return (
    <Layout>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Mes commandes</Text>
        {commandes.map((commande, index) => (
          <View key={index}>
            <Text style={styles.annee}>{commande.annee}</Text>
            <View style={styles.separator} />
            {commande.details.map((detail, i) => (
              <TouchableOpacity key={i} onPress={() => handleCommandClick(detail)}>
                <View style={styles.commandeContainer}>
                  <View style={styles.commandeRow}>
                    <Text style={styles.commandeInfo}>{detail.date} - #{detail.numero}</Text>
                    <Text style={styles.commandeStatut}>{detail.statut}</Text>
                  </View>
                  <View style={styles.commandeRow}>
                    <Text style={styles.commandeInfo}>{detail.articles} articles</Text>
                    <Text style={styles.commandePrix}>{detail.prix.toFixed(2)}€</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
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
  annee: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  commandeContainer: {
    marginBottom: 30,
  },
  commandeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  commandeInfo: {
    fontSize: 16,
    color: '#000',
  },
  commandeStatut: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  commandePrix: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 20,
  },
});

export default MesCommandes;

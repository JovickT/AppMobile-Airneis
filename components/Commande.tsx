import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import Layout from './Layout';

interface Product {
  nom: string;
  description: string;
  prix: number;
  quantite: number;
  images: any;
}

const Commande = () => {
  const { numero, date, statut } = useLocalSearchParams(); // Récupération des paramètres d'URL
  const [produits, setProduits] = useState<Product[]>([]);
  const router = useRouter();

  // Exemple d'informations en dur
  const adresseLivraison = {
    prenom: 'John',
    nom: 'Smith',
    adresse: '13 rue de la Lune',
    codePostal: '75004',
    ville: 'Paris',
    pays: 'France',
    telephone: '+33 6 90 80 70 60',
  };

  const adresseFacturation = {
    prenom: 'John',
    nom: 'Smith',
    adresse: '13 rue de la Lune',
    codePostal: '75004',
    ville: 'Paris',
    pays: 'France',
    telephone: '+33 6 90 80 70 60',
  };

  const methodePaiement = {
    numeroCarte: '**** **** **** 4923',
  };

  useEffect(() => {
    if (numero) {
      // Charger les détails des produits en fonction du numéro de commande
      // Données en dur pour démo
      const fetchedProduits = [
        { nom: 'Produit 1', description: 'Description du produit 1', prix: 25, quantite: 2, images: require('@/assets/images/temps.png') },
        { nom: 'Produit 2', description: 'Description du produit 2', prix: 50, quantite: 1, images: require('@/assets/images/temps.png') },
      ];
      setProduits(fetchedProduits);
    }
  }, [numero]);

  const total = produits.reduce((acc, product) => acc + product.prix * product.quantite, 0);
  const tva = total * 0.2;

  const handleProductPress = (product: Product) => {
    router.push({
      pathname: '/produit',
      params: {
        nom: product.nom,
        description: product.description,
        prix: product.prix.toFixed(2),
        images: product.images,
      },
    });
  };

  return (
    <Layout>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Commande #{numero}</Text>
        <Text style={styles.title}>{date} - {statut}</Text>

        {produits.length > 0 ? (
          produits.map((product, index) => (
            <TouchableOpacity key={index} onPress={() => handleProductPress(product)} style={styles.productContainer}>
              <Image source={product.images} style={styles.productImage} />
              <View style={styles.productDetails}>
                <Text style={styles.productName}>{product.nom}</Text>
                <Text style={styles.productDescription}>{product.description}</Text>
              </View>
              <View style={styles.productPricing}>
                <Text style={styles.productPrice}>{product.prix.toFixed(2)}€</Text>
                <Text style={styles.productQuantity}>Quantité: {product.quantite}</Text>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.noProducts}>Aucun produit trouvé pour cette commande.</Text>
        )}

        <View style={styles.separator} />

        <View style={styles.summaryContainer}>
          <Text style={styles.summaryText}>Total</Text>
          <Text style={styles.summaryText}>{total.toFixed(2)}€</Text>
        </View>
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryText}>TVA</Text>
          <Text style={styles.summaryText}>{tva.toFixed(2)}€</Text>
        </View>

        <View style={styles.separator} />

        <Text style={styles.sectionTitle}>Adresse de livraison</Text>
        <Text style={styles.address}>{adresseLivraison.prenom} {adresseLivraison.nom}</Text>
        <Text style={styles.address}>{adresseLivraison.adresse}</Text>
        <Text style={styles.address}>{adresseLivraison.codePostal} - {adresseLivraison.ville}</Text>
        <Text style={styles.address}>{adresseLivraison.pays}</Text>
        <Text style={styles.address}>{adresseLivraison.telephone}</Text>

        <View style={styles.separator} />

        <Text style={styles.sectionTitle}>Adresse de facturation</Text>
        <Text style={styles.address}>{adresseFacturation.prenom} {adresseFacturation.nom}</Text>
        <Text style={styles.address}>{adresseFacturation.adresse}</Text>
        <Text style={styles.address}>{adresseFacturation.codePostal} - {adresseFacturation.ville}</Text>
        <Text style={styles.address}>{adresseFacturation.pays}</Text>
        <Text style={styles.address}>{adresseFacturation.telephone}</Text>

        <View style={styles.separator} />

        <Text style={styles.sectionTitle}>Méthode de paiement</Text>
        <Text style={styles.address}>Numéro de carte</Text>
        <Text style={styles.cardNumber}>{methodePaiement.numeroCarte}</Text>
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
  subTitle: {
    fontSize: 18,
    marginVertical: 5,
  },
  productContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  productImage: {
    width: 75,
    height: 75,
    borderRadius: 10,
    marginRight: 20,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productDescription: {
    fontSize: 14,
    color: '#888',
  },
  productPricing: {
    alignItems: 'center',
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productQuantity: {
    fontSize: 16,
    color: '#000',
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 20,
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  summaryText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  noProducts: {
    fontSize: 16,
    textAlign: 'center',
    color: '#888',
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  address: {
    fontSize: 16,
    marginBottom: 5,
  },
  cardNumber: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Commande;

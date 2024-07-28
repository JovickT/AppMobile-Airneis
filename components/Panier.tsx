import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import Layout from './Layout';

interface Product {
  nom: string;
  description: string;
  prix: number;
  quantite: number;
  image: any;
}

const initialProducts: Product[] = [
  { nom: 'Produit 1', description: 'Description du produit 1', prix: 100, quantite: 1, image: require('@/assets/images/temps.png') },
  { nom: 'Produit 2', description: 'Description du produit 2', prix: 200, quantite: 1, image: require('@/assets/images/temps.png') },
  { nom: 'Produit 3', description: 'Description du produit 3', prix: 300, quantite: 1, image: require('@/assets/images/temps.png') },
  { nom: 'Produit 4', description: 'Description du produit 4', prix: 400, quantite: 1, image: require('@/assets/images/temps.png') },
  { nom: 'Produit 5', description: 'Description du produit 5', prix: 500, quantite: 1, image: require('@/assets/images/temps.png') },
];

const Panier = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const router = useRouter();

  const handleQuantiteChange = (index: number, text: string) => {
    const newProducts = [...products];
    const quantite = parseInt(text);

    if (!isNaN(quantite) && quantite > 0) {
      newProducts[index].quantite = quantite;
    } else {
      newProducts[index].quantite = 0; // Valeur par défaut si l'entrée n'est pas valide
    }

    setProducts(newProducts);
  };

  const handleRemoveProduct = (index: number) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setProducts(newProducts);
  };

  const total = products.reduce((acc, product) => acc + product.prix * product.quantite, 0);
  const tva = total * 0.2;

  return (
    <Layout>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Panier</Text>
        {products.map((product, index) => (
          <View key={index} style={styles.productContainer}>
            <Image source={product.image} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{product.nom}</Text>
              <Text style={styles.productDescription}>{product.description}</Text>
            </View>
            <View style={styles.productPricing}>
              <Text style={styles.productPrice}>{product.prix}€</Text>
              <TextInput
                style={styles.quantiteInput}
                value={product.quantite.toString()}
                onChangeText={(text) => handleQuantiteChange(index, text)}
                keyboardType="numeric"
              />
              <TouchableOpacity onPress={() => handleRemoveProduct(index)}>
                <Image source={require('@/assets/images/temps.png')} style={styles.poubelleIcon} />
              </TouchableOpacity>
            </View>
          </View>
        ))}
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryText}>Total</Text>
          <Text style={styles.summaryText}>{total.toFixed(2)}€</Text>
        </View>
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryText}>TVA</Text>
          <Text style={styles.summaryText}>{tva.toFixed(2)}€</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/checkoutLivraison')}>
          <Text style={styles.buttonText}>Passer la commande</Text>
        </TouchableOpacity>
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
  productContainer: {
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
  quantiteInput: {
    width: 40,
    height: 30,
    borderColor: '#ccc',
    borderWidth: 1,
    textAlign: 'center',
    marginTop: 10,
  },
  poubelleIcon: {
    width: 20,
    height: 20,
    marginTop: 10,
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  summaryText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#FFD700',
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textTransform: 'uppercase',
  },
});

export default Panier;

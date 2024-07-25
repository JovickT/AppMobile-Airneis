// components/Home.tsx

import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import styles from '../assets/css/styles';
import Layout from './Layout';

const carrouselImages = [
  require('@/assets/images/carrousel.jpg'),
  require('@/assets/images/carrousel.jpg'),
  require('@/assets/images/carrousel.jpg')
];

const categories = [
  { nom: 'Lit', images: require('@/assets/images/temps.png') },
  { nom: 'Canapé', images: require('@/assets/images/temps.png') },
  { nom: 'Chaise', images: require('@/assets/images/temps.png') },
  { nom: 'Table', images: require('@/assets/images/temps.png') }
];

const products = [
  { nom: 'Table en marbre', images: require('@/assets/images/temps.png') },
  { nom: 'Chaise en bois', images: require('@/assets/images/temps.png') },
  { nom: 'Canapé en cuir', images: require('@/assets/images/temps.png') },
  { nom: 'Lit en métal', images: require('@/assets/images/temps.png') }
];

export default function Home() {
  return (
    <Layout>
      <ScrollView style={styles.container}>
        <ScrollView horizontal pagingEnabled style={styles.carousel}>
          {carrouselImages.map((img, index) => (
            <Image key={index} source={img} style={styles.carouselImage} />
          ))}
        </ScrollView>

        <Text style={styles.title}>VENANT DES HAUTE TERRE D'ÉCOSSE</Text>
        <Text style={styles.title}>NOS MEUBLES SONT IMMORTELS</Text>

        <View style={styles.itemContainer}>
          {categories.map((c, index) => (
            <View key={index} style={styles.item}>
              <Image source={c.images} style={styles.itemImage} />
              <Text style={styles.itemText}>{c.nom}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.title}>Les Highlanders du moment</Text>

        <View style={styles.itemContainer}>
          {products.map((p, index) => (
            <View key={index} style={styles.item}>
              <Image source={p.images} style={styles.itemImage} />
              <Text style={styles.itemText}>{p.nom}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </Layout>
  );
}

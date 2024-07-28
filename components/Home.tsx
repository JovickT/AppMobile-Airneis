import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import styles from '../assets/css/styles';

interface Category {
  nom: string;
  images: any;
}

interface Product {
  nom: string;
  images: any;
  prix?: string;
}

const carrouselImages = [
  require('@/assets/images/carrousel.jpg'),
  require('@/assets/images/carrousel.jpg'),
  require('@/assets/images/carrousel.jpg')
];

const categories: Category[] = [
  { nom: 'Lit', images: require('@/assets/images/temps.png') },
  { nom: 'Canapé', images: require('@/assets/images/temps.png') },
  { nom: 'Chaise', images: require('@/assets/images/temps.png') },
  { nom: 'Table', images: require('@/assets/images/temps.png') }
];

const products: Product[] = [
  { nom: 'Table en marbre', prix: '500€', images: require('@/assets/images/temps.png') },
  { nom: 'Chaise en bois', prix: '150€', images: require('@/assets/images/temps.png') },
  { nom: 'Canapé en cuir', prix: '1200€', images: require('@/assets/images/temps.png') },
  { nom: 'Lit en métal', prix: '800€', images: require('@/assets/images/temps.png') }
];

export default function Home() {
  const router = useRouter();

  const handleCategoryPress = (category: Category) => {
    router.push({
      pathname: '/categorie',
      params: { nom: category.nom, images: category.images },
    });
  };

  const handleProductPress = (product: Product) => {
    router.push({
      pathname: '/produit',
      params: { nom: product.nom, images: product.images, prix: product.prix },
    });
  };

  return (
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
          <TouchableOpacity key={index} onPress={() => handleCategoryPress(c)}>
            <View style={styles.item}>
              <Image source={c.images} style={styles.itemImage} />
              <Text style={styles.itemText}>{c.nom}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.title}>Les Highlanders du moment</Text>

      <View style={styles.itemContainer}>
        {products.map((p, index) => (
          <TouchableOpacity key={index} onPress={() => handleProductPress(p)}>
            <View style={styles.item}>
              <Image source={p.images} style={styles.itemImage} />
              <Text style={styles.itemText}>{p.nom}</Text>
              <Text style={styles.itemText}>{p.prix}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

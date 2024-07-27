import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Link, useRouter } from 'expo-router';
import logo from '@/assets/images/temps.png';
import searchIcon from '@/assets/images/temps.png';
import shopIcon from '@/assets/images/temps.png';
import burgerIcon from '@/assets/images/temps.png';
import styles from '@/assets/css/styles';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuCo, setMenuCo] = useState<string[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    // Simulate authentication and cart items
    setIsAuthenticated(true);
    setCartCount(5);

    if (isAuthenticated) {
      setMenuCo([
        'Mes paramètres',
        'Mes commandes',
        'CGU',
        'Mentions légales',
        'Contact',
        'À propos d’ÀIRNEIS',
        'Se déconnecter'
      ]);
    } else {
      setMenuCo([
        'Se connecter',
        'CGU',
        'Mentions légales',
        'Contact',
        'À propos d’ÀIRNEIS',
      ]);
    }
  }, [isAuthenticated]);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handlePanier = () => {
    router.push("/panier");
  };

  const handleNavigation = (list: string) => {
    switch (list) {
      case 'Se connecter':
        router.push("/connexion");
        break;
      case 'Se déconnecter':
        setIsAuthenticated(false);
        router.push("/");
        break;
      case 'CGU':
        router.push("/cgu");
        break;
      case 'Mentions légales':
        router.push("/mentions");
        break;
      case 'Contact':
        router.push("/contact");
        break;
      case 'À propos d’ÀIRNEIS':
        router.push("/about");
        break;
      case 'Mes commandes':
        router.push("/MesCommandes");
        break;
      default:
        console.error('ce lien n\'existe pas');
        break;
    }
  };

  return (
    <View style={styles.navbar}>
      <Link href="/">
        <Image source={logo} style={styles.logo} />
      </Link>
      <View style={styles.icons}>
        <TouchableOpacity onPress={() => {}}>
          <Image source={searchIcon} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePanier}>
          <View>
            <Image source={shopIcon} style={styles.icon} />
            <View style={styles.cartBadge}>
              <Text style={styles.cartCount}>{cartCount}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleMenu}>
          <Image source={burgerIcon} style={styles.icon} />
        </TouchableOpacity>
      </View>
      {menuOpen && (
        <View style={styles.dropdown}>
          <ScrollView>
            {menuCo.map((item, index) => (
              <TouchableOpacity key={index} onPress={() => handleNavigation(item)}>
                <Text style={styles.dropdownLink}>{item}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default Navbar;

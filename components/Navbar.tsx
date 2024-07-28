import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Link, useRouter } from 'expo-router';
import logo from '@/assets/images/logo.png';
import searchIcon from '@/assets/images/recherche.png';
import shopIcon from '@/assets/images/panier.png';
import burgerIcon from '@/assets/images/burger.png';

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
    setMenuOpen(false); // Fermer le menu après la navigation
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
        router.push("/ml");
        break;
      case 'Contact':
        router.push("/contact");
        break;
      case 'À propos d’ÀIRNEIS':
        router.push("/about");
        break;
      case 'Mes commandes':
        router.push("/mesCommandes");
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

const styles = StyleSheet.create({
  navbar: {
    paddingTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#FFD700',
    backgroundColor: '#faebd7',
    padding: 10,
    zIndex: 1000,
  },
  logo: {
    width: 70,
    height: 50,
  },
  icons: {
    flexDirection: 'row',
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  cartBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#dc3545',
    borderRadius: 10,
    padding: 2,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartCount: {
    color: '#fff',
    fontSize: 12,
  },
  dropdown: {
    position: 'absolute',
    top: 85,
    right: 0,
    backgroundColor: '#faebd7',
    borderWidth: 1,
    borderColor: '#FFD700',
    borderRadius: 5,
    padding: 10,
    zIndex: 2000,
  },
  dropdownLink: {
    padding: 10,
    paddingVertical: 5,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#FFD700',
    textAlign: 'center',
  },
});

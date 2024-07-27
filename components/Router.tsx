// Voir si je dois installer les dépendances suivante :
// npm install @react-navigation/native @react-navigation/native-stack
// expo install react-native-screens react-native-safe-area-context

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Categorie from './Categorie';
import Produit from './Produit';
import Contact from './Contact';
import Ml from './Ml';
import About from './About';
import CGU from './CGU';
// import Login from './Login';
import Connexion from './Connexion';
import Inscription from './Inscription';
// import Panier from './Panier';
// import MesCommandes from './MesCommandes';
// import Commande from './Commande';
// import CheckoutLivraison from './CheckoutLivraison';
// import CheckoutPaiement from './CheckoutPaiement';
// import CheckoutFini from './CheckoutFini';
// import ResultatRecherche from './ResultatRecherche';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Categorie" component={Categorie} />
        <Stack.Screen name="Produit" component={Produit} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Ml" component={Ml} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="CGU" component={CGU} />
        {/* <Stack.Screen name="Login" component={Login} /> */}
        <Stack.Screen name="Connexion" component={Connexion} />
        <Stack.Screen name="Inscription" component={Inscription} />
        {/* <Stack.Screen name="Panier" component={Panier} /> */}
        {/* <Stack.Screen name="MesCommandes" component={MesCommandes} /> */}
        {/* <Stack.Screen name="Commande" component={Commande} /> */}
        {/* <Stack.Screen name="CheckoutLivraison" component={CheckoutLivraison} /> */}
        {/* <Stack.Screen name="CheckoutPaiement" component={CheckoutPaiement} /> */}
        {/* <Stack.Screen name="CheckoutFini" component={CheckoutFini} /> */}
        {/* <Stack.Screen name="ResultatRecherche" component={ResultatRecherche} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;

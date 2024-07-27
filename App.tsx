// import 'react-native-gesture-handler';
// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Home from './components/Home';
// import Categorie from './components/Categorie';

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
//         <Stack.Screen name="Categorie" component={Categorie} options={{ headerShown: false }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import CheckoutLivraison from './components/Categorie';
import Categorie from './components/Categorie';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Categorie" element={<Categorie />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router> 
  );
};

export default App;


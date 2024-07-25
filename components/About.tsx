import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Dimensions, Linking } from 'react-native';
import Layout from './Layout';

const screenWidth = Dimensions.get('window').width;

const About = () => {
  return (
    <Layout>
      <ScrollView style={styles.container}>
        <Image
          source={require('../assets/images/carrousel.jpg')}
          style={styles.carouselImage}
          resizeMode="cover"
        />
        <View style={styles.innerContainer}>
          <View style={styles.profileContainer}>
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
          </View>

          <View style={styles.about}>
            <Text style={styles.title}>À propos d'ÀIRNEIS</Text>
            <Text style={styles.paragraph}>
              Bienvenue chez ÀIRNEIS, votre destination pour des meubles de qualité supérieure, conçus par des designers écossais passionnés. Notre nom, ÀIRNEIS, signifie "meuble" en gaélique écossais, un hommage à nos racines et à notre engagement envers la tradition et l'innovation.
            </Text>
            <Text style={styles.subtitle}>Qui sommes-nous ?</Text>
            <Text style={styles.paragraph}>
              ÀIRNEIS est une société écossaise qui se distingue par son engagement envers l'artisanat, la qualité et le design innovant. Depuis notre création, nous avons toujours mis l'accent sur la collaboration avec des designers écossais talentueux pour créer des pièces uniques qui reflètent l'essence de l'Écosse - robustes, élégantes et intemporelles.
            </Text>
            <Text style={styles.subtitle}>Notre histoire</Text>
            <Text style={styles.paragraph}>
              Jusqu'à récemment, nous avons opéré principalement par correspondance et à travers des magasins partenaires. Cette méthode nous a permis de bâtir une clientèle fidèle, tant localement qu'à l'international. Cependant, nous avons réalisé qu'il était temps d'évoluer et d'embrasser l'ère numérique pour offrir une expérience d'achat plus fluide et accessible à tous nos clients.
            </Text>
            <Text style={styles.subtitle}>Notre mission</Text>
            <Text style={styles.paragraph}>
              Notre mission est simple : apporter le meilleur du design écossais au monde entier. Nous croyons que chaque meuble que nous créons raconte une histoire, celle de l'héritage écossais et de l'innovation contemporaine. En lançant notre propre solution e-commerce, nous visons à atteindre une clientèle internationale tout en renforçant notre présence locale.
            </Text>
            <Text style={styles.subtitle}>Nos produits</Text>
            <Text style={styles.paragraph}>
              Chez ÀIRNEIS, chaque produit est conçu avec une attention méticuleuse aux détails et un respect profond pour les matériaux de qualité. Nous proposons une gamme diversifiée de meubles, allant des canapés luxueux aux lits confortables, en passant par des tables et des chaises élégantes. Nos meubles sont non seulement esthétiquement plaisants mais aussi durables, faits pour résister à l'épreuve du temps.
            </Text>
            <Text style={styles.subtitle}>Pourquoi choisir ÀIRNEIS ?</Text>
            <Text style={styles.paragraph}>
              1. Design Écossais Authentique :{'\n'}<Text style={styles.indent}>Nos meubles sont conçus par des designers écossais de renom, assurant une touche authentique et unique à chaque pièce.</Text>{'\n'}{'\n'}
              2. Qualité Supérieure :{'\n'}<Text style={styles.indent}>Nous utilisons des matériaux de haute qualité pour garantir la durabilité et la robustesse de nos meubles.</Text>{'\n'}{'\n'}
              3. Engagement Écologique :{'\n'}<Text style={styles.indent}>Nous sommes engagés dans des pratiques de fabrication durables, minimisant notre empreinte écologique tout en produisant des meubles d'excellence.</Text>{'\n'}{'\n'}
              4. Service Client Exceptionnel :{'\n'}<Text style={styles.indent}>Notre équipe est dédiée à fournir un service client de premier ordre, assurant que chaque achat est une expérience positive et mémorable.</Text>
            </Text>
            <Text style={styles.subtitle}>Notre Vision pour l'Avenir</Text>
            <Text style={styles.paragraph}>
              Avec le lancement de notre site d'e-commerce mobile-first, nous visons à révolutionner la façon dont nos clients interagissent avec nos produits. Nous allons également développer une application mobile Android et iOS, alignée sur la version mobile web, pour rendre l'expérience d'achat encore plus accessible et intuitive.{'\n'}{'\n'}
              En plus de notre plateforme e-commerce, nous mettons en place un backoffice web sophistiqué pour gérer le contenu de manière efficace et sécurisée. Ce système comprendra des solutions de paiement sécurisées, assurant une transaction sans souci pour nos clients.
            </Text>
            <Text style={styles.subtitle}>Rejoignez-nous dans cette aventure</Text>
            <Text style={styles.paragraph}>
              Chez ÀIRNEIS, nous sommes passionnés par le design et l'innovation. Nous sommes ravis de partager notre voyage avec vous et de vous offrir des meubles qui apporteront élégance et confort à votre maison. Rejoignez-nous dans cette aventure et découvrez l'art de vivre à l'écossaise, avec des meubles qui sont non seulement fonctionnels mais aussi inspirants.{'\n'}{'\n'}
              Merci de faire partie de la famille ÀIRNEIS. Ensemble, nous allons transformer chaque maison en un foyer élégant et accueillant, grâce à la magie du design écossais.
            </Text>
          </View>

          <View style={styles.profileContainer}>
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
};

const ProfileCard = () => (
  <View style={styles.profileCard}>
    <Image
      source={require('../assets/images/carrousel.jpg')}
      style={styles.profileImage}
      resizeMode="cover"
    />
    <View style={styles.profileInfo}>
      <Text>Metier</Text>
      <Text>Fullname</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  carouselImage: {
    width: screenWidth,
    height: 200,
  },
  innerContainer: {
    paddingHorizontal: 16,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  profileCard: {
    flex: 1,
    marginHorizontal: 8,
  },
  profileImage: {
    width: '100%',
    height: 150,
  },
  profileInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  about: {
    marginBottom: 20,
  },
  title: {
    textAlign: 'center',
    color: '#FFD700',
    fontSize: 24,
    fontStyle: 'italic',
    marginVertical: 20,
  },
  subtitle: {
    color: '#FFD700',
    fontSize: 18,
    fontStyle: 'italic',
    marginTop: 20,
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 22,
    marginVertical: 10,
  },
  indent: {
    marginLeft: 20,
  },
});

export default About;

import React from 'react';
import { View, Text, ScrollView, StyleSheet, Linking } from 'react-native';
import Layout from './Layout';

export default function Ml() {
  return (
    <Layout>
      <ScrollView style={styles.container}>
        <View style={styles.lineSeparator} />
        <View style={styles.innerContainer}>
          <Text style={styles.title}>MENTIONS LÉGALES</Text>
          <Text style={styles.subTitle}>En vigueur au 10/07/2024</Text>
          <View style={styles.mention}>
            <Text style={styles.paragraph}>
              Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la
              Confiance dans l’économie numérique, dite L.C.E.N., il est porté à la connaissance des utilisateurs et
              visiteurs, ci-après l'« Utilisateur », du site airneis.com , ci-après le « Site », les présentes mentions
              légales.
            </Text>
            <Text style={styles.paragraph}>
              La connexion et la navigation sur le Site par l’Utilisateur implique acceptation intégrale et sans
              réserve des présentes mentions légales.
            </Text>
            <Text style={styles.paragraph}>
              Ces dernières sont accessibles sur le Site à la rubrique « Mentions légales ».
            </Text>

            <Text style={styles.articleTitle}>ARTICLE 1 - L'EDITEUR</Text>
            <Text style={styles.paragraph}>
              L'édition du Site est assurée par Airneis SARL au capital de 10000 euros, immatriculée au Registre
              du Commerce et des Sociétés de Beverworth sous le numéro 36252187900034{'\n'}
              dont le siège social est situé au 36232 Korbin Crossing 0334 Beverworth,{'\n'}
              Numéro de téléphone 140874582169,{'\n'}
              Adresse e-mail : contact@airneis.com.{'\n'}
              N° de TVA intracommunautaire : EU372000041{'\n'}
              Le Directeur de la publication est H3 Hitema ci-après l'« Editeur ».
            </Text>

            <Text style={styles.articleTitle}>ARTICLE 2 - L'HEBERGEUR</Text>
            <Text style={styles.paragraph}>
              L'hébergeur du Site est la société OVH, dont le siège social est situé au 2 rue Kellermann, 59100
              Roubaix , avec le numéro de téléphone : 0952041876 + adresse mail de contact
            </Text>

            <Text style={styles.articleTitle}>ARTICLE 3 - ACCES AU SITE</Text>
            <Text style={styles.paragraph}>
              Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption
              programmée ou non et pouvant découlant d’une nécessité de maintenance.
              En cas de modification, interruption ou suspension du Site, l'Editeur ne saurait être tenu responsable.
            </Text>

            <Text style={styles.articleTitle}>ARTICLE 4 - COLLECTE DES DONNEES</Text>
            <Text style={styles.paragraph}>
              Le Site assure à l'Utilisateur une collecte et un traitement d'informations personnelles dans le respect
              de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers
              et aux libertés.{'\n'}
              En vertu de la loi Informatique et Libertés, en date du 6 janvier 1978, l'Utilisateur dispose d'un droit
              d'accès, de rectification, de suppression et d'opposition de ses données personnelles. L'Utilisateur
              exerce ce droit :{'\n'}
              - via un formulaire de contact ;{'\n'}
              Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du Site,
              sans autorisation de l’Editeur est prohibée et pourra entraînée des actions et poursuites judiciaires
              telles que notamment prévues par le Code de la propriété intellectuelle et le Code civil.
              Pour plus d’informations, se reporter aux CGU du site airneis.com accessible à la rubrique « CGU »
            </Text>

            <Text style={styles.paragraph}>
              Rédigé sur <Text style={styles.link} onPress={() => Linking.openURL('http://legalplace.fr')}>http://legalplace.fr</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  innerContainer: {
    paddingHorizontal: 16,
  },
  lineSeparator: {
    height: 50,
    backgroundColor: 'transparent',
  },
  title: {
    textAlign: 'center',
    color: '#FFD700',
    fontSize: 24,
    fontStyle: 'italic',
    marginBottom: 10,
  },
  subTitle: {
    textAlign: 'center',
    marginBottom: 20,
  },
  mention: {
    marginBottom: 20,
  },
  paragraph: {
    marginBottom: 10,
    fontSize: 14,
    lineHeight: 22,
  },
  articleTitle: {
    marginTop: 20,
    color: '#FFD700',
    fontSize: 18,
    fontStyle: 'italic',
    marginBottom: 10,
  },
  link: {
    color: '#FFD700',
    textDecorationLine: 'underline',
  },
});

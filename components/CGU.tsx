import React from 'react';
import { View, Text, ScrollView, StyleSheet, Linking } from 'react-native';
import Layout from './Layout';

export default function CGU() {
  return (
    <Layout>
      <ScrollView style={styles.container}>
        <View style={styles.lineSeparator} />
        <View style={styles.innerContainer}>
          <Text style={styles.title}>CONDITIONS GÉNÉRALES D'UTILISATION</Text>
          <Text style={styles.subTitle}>En vigueur au 10/07/2024</Text>
          <View style={styles.cgu}>
            <Text style={styles.paragraph}>
              Les présentes conditions générales d'utilisation (dites « CGU ») ont pour objet l'encadrement juridique des modalités de mise à disposition du site et des services par Airneis et de définir les conditions d’accès et d’utilisation des services par « l'Utilisateur ».
            </Text>
            <Text style={styles.paragraph}>Les présentes CGU sont accessibles sur le site à la rubrique «CGU».</Text>
            <Text style={styles.paragraph}>
              Toute inscription ou utilisation du site implique l'acceptation sans aucune réserve ni restriction des présentes CGU par l’utilisateur. Lors de l'inscription sur le site via le Formulaire d’inscription, chaque utilisateur accepte expressément les présentes CGU en cochant la case précédant le texte suivant : « Je reconnais avoir lu et compris les CGU et je les accepte ». En cas de non-acceptation des CGU stipulées dans le présent contrat, l'Utilisateur se doit de renoncer à l'accès des services proposés par le site. airneis.com se réserve le droit de modifier unilatéralement et à tout moment le contenu des présentes CGU.
            </Text>

            <Text style={styles.articleTitle}>ARTICLE 1 : LES MENTIONS LÉGALES</Text>

            <Text style={styles.paragraph}>
              L'édition du site airneis.com est assurée par la Société SARL Airneis au capital de 10000 euros, immatriculée au RCS de Beverworth sous le numéro 36252187900034, dont le siège social est situé au 36232 Korbin Crossing 0334 Beverworth
            </Text>
            <Text style={styles.paragraph}>
              Numéro de téléphone 140874582169
              Adresse e-mail : contact@airneis.com.
              Le Directeur de la publication est : H3 Hitema
            </Text>
            <Text style={styles.paragraph}>
              L'hébergeur du site airneis.com est la société OVH, dont le siège social est situé au 2 rue Kellermann, 59100 Roubaix , avec le numéro de téléphone : 0952041876.
            </Text>

            <Text style={styles.articleTitle}>ARTICLE 2 : ACCÈS AU SITE</Text>

            <Text style={styles.paragraph}>
              Le site airneis.com permet à l'Utilisateur un accès gratuit aux services suivants :
              Le site internet propose les services suivants :
              ventes de meubles
              Le site est accessible gratuitement en tout lieu à tout Utilisateur ayant un accès à Internet. Tous les frais supportés par l'Utilisateur pour accéder au service (matériel informatique, logiciels, connexion Internet, etc.) sont à sa charge.
            </Text>
            <Text style={styles.paragraph}>
              L’Utilisateur non membre n'a pas accès aux services réservés. Pour cela, il doit s’inscrire en remplissant le formulaire. En acceptant de s’inscrire aux services réservés, l’Utilisateur membre s’engage à fournir des informations sincères et exactes concernant son état civil et ses coordonnées, notamment son adresse email.
              Pour accéder aux services, l’Utilisateur doit ensuite s'identifier à l'aide de son identifiant et de son mot de passe qui lui seront communiqués après son inscription.
              Tout Utilisateur membre régulièrement inscrit pourra également solliciter sa désinscription en se rendant à la page dédiée sur son espace personnel. Celle-ci sera effective dans un délai raisonnable.
              Tout événement dû à un cas de force majeure ayant pour conséquence un dysfonctionnement du site ou serveur et sous réserve de toute interruption ou modification en cas de maintenance, n'engage pas la responsabilité de airneis.com. Dans ces cas, l’Utilisateur accepte ainsi ne pas tenir rigueur à l’éditeur de toute interruption ou suspension de service, même sans préavis.
              L'Utilisateur a la possibilité de contacter le site par messagerie électronique à l’adresse email de l’éditeur communiqué à l’ARTICLE 1.
            </Text>

            <Text style={styles.articleTitle}>ARTICLE 3 : COLLECTE DES DONNÉES</Text>

            <Text style={styles.paragraph}>
              Le site assure à l'Utilisateur une collecte et un traitement d'informations personnelles dans le respect de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés.
            </Text>
            <Text style={styles.paragraph}>
              En vertu de la loi Informatique et Libertés, en date du 6 janvier 1978, l'Utilisateur dispose d'un droit d'accès, de rectification, de suppression et d'opposition de ses données personnelles. L'Utilisateur exerce ce droit :
              - via un formulaire de contact ;
            </Text>

            <Text style={styles.articleTitle}>ARTICLE 4 : PROPRIÉTÉ INTELLECTUELLE</Text>

            <Text style={styles.paragraph}>
              Les marques, logos, signes ainsi que tous les contenus du site (textes, images, son…) font l'objet d'une protection par le Code de la propriété intellectuelle et plus particulièrement par le droit d'auteur.
            </Text>
            <Text style={styles.paragraph}>
              L'Utilisateur doit solliciter l'autorisation préalable du site pour toute reproduction, publication, copie des différents contenus. Il s'engage à une utilisation des contenus du site dans un cadre strictement privé, toute utilisation à des fins commerciales et publicitaires est strictement interdite.
            </Text>
            <Text style={styles.paragraph}>
              Toute représentation totale ou partielle de ce site par quelque procédé que ce soit, sans l’autorisation expresse de l’exploitant du site Internet constituerait une contrefaçon sanctionnée par l’article L 335-2 et suivants du Code de la propriété intellectuelle.
            </Text>
            <Text style={styles.paragraph}>
              Il est rappelé conformément à l’article L122-5 du Code de propriété intellectuelle que l’Utilisateur qui reproduit, copie ou publie le contenu protégé doit citer l’auteur et sa source.
            </Text>

            <Text style={styles.articleTitle}>ARTICLE 5 : RESPONSABILITÉ</Text>

            <Text style={styles.paragraph}>
              Les sources des informations diffusées sur le site airneis.com sont réputées fiables mais le site ne garantit pas qu’il soit exempt de défauts, d’erreurs ou d’omissions.
            </Text>
            <Text style={styles.paragraph}>
              Les informations communiquées sont présentées à titre indicatif et général sans valeur contractuelle. Malgré des mises à jour régulières, le site airneis.com ne peut être tenu responsable de la modification des dispositions administratives et juridiques survenant après la publication. De même, le site ne peut être tenue responsable de l’utilisation et de l’interprétation de l’information contenue dans ce site.
              L'Utilisateur s'assure de garder son mot de passe secret. Toute divulgation du mot de passe, quelle que soit sa forme, est interdite. Il assume les risques liés à l'utilisation de son identifiant et mot de passe. Le site décline toute responsabilité.
              Le site airneis.com ne peut être tenu pour responsable d’éventuels virus qui pourraient infecter l’ordinateur ou tout matériel informatique de l’Internaute, suite à une utilisation, à l’accès, ou au téléchargement provenant de ce site.
            </Text>
            <Text style={styles.paragraph}>
              La responsabilité du site ne peut être engagée en cas de force majeure ou du fait imprévisible et insurmontable d'un tiers.
            </Text>

            <Text style={styles.articleTitle}>ARTICLE 6 : LIENS HYPERTEXTES</Text>

            <Text style={styles.paragraph}>
              Des liens hypertextes peuvent être présents sur le site. L’Utilisateur est informé qu’en cliquant sur ces liens, il sortira du site airneis.com. Ce dernier n’a pas de contrôle sur les pages web sur lesquelles aboutissent ces liens et ne saurait, en aucun cas, être responsable de leur contenu.
            </Text>

            <Text style={styles.articleTitle}>ARTICLE 7 : COOKIES</Text>

            <Text style={styles.paragraph}>
              L’Utilisateur est informé que lors de ses visites sur le site, un cookie peut s’installer automatiquement sur son logiciel de navigation.
            </Text>
            <Text style={styles.paragraph}>
              Les cookies sont de petits fichiers stockés temporairement sur le disque dur de l’ordinateur de l’Utilisateur par votre navigateur et qui sont nécessaires à l’utilisation du site airneis.com. Les cookies ne contiennent pas d’information personnelle et ne peuvent pas être utilisés pour identifier quelqu’un.
              Un cookie contient un identifiant unique, généré aléatoirement et donc anonyme. Certains cookies expirent à la fin de la visite de l’Utilisateur, d’autres restent.
            </Text>
            <Text style={styles.paragraph}>
              L’information contenue dans les cookies est utilisée pour améliorer le site airneis.com
            </Text>
            <Text style={styles.paragraph}>
              En naviguant sur le site, L’Utilisateur les accepte.
              L’Utilisateur doit toutefois donner son consentement quant à l’utilisation de certains cookies.
              A défaut d’acceptation, l’Utilisateur est informé que certaines fonctionnalités ou pages risquent de lui être refusées.
              L’Utilisateur pourra désactiver ces cookies par l’intermédiaire des paramètres figurant au sein de son logiciel de navigation.
            </Text>

            <Text style={styles.articleTitle}>ARTICLE 8 : DROIT APPLICABLE ET JURIDICTION COMPÉTENTE</Text>

            <Text style={styles.paragraph}>
              La législation française s'applique au présent contrat. En cas d'absence de résolution amiable d'un litige né entre les parties, les tribunaux français seront seuls compétents pour en connaître.
              Pour toute question relative à l’application des présentes CGU, vous pouvez joindre l’éditeur aux coordonnées inscrites à l’ARTICLE 1.
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
  cgu: {
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

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
// Accueil
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  carousel: {
    height: 200,
    marginBottom: 16,
  },
  carouselImage: {
    width: 300,
    height: 200,
    marginRight: 10,
    borderRadius: 10,
  },
  title: {
    textAlign: 'center',
    color: '#FFD700',
    fontStyle: 'italic',
    marginTop: 16,
    fontSize: 18,
  },
  itemContainer: {
    marginTop: 16,
    marginBottom: 16,
  },
  item: {
    marginBottom: 16,
    alignItems: 'center',
  },
  itemImage: {
    width: 300,
    height: 250,
    borderRadius: 10,
  },
  itemText: {
    marginTop: 8,
    fontWeight: 'bold',
  },


// Catégorie
  categoryImage: {
    width: '100%',
    height: 200,
  },
  description: {
    margin: 10,
    fontSize: 16,
    textAlign: 'center',
  },



});

export default styles;

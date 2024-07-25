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


// Navbar
navbar: {
    paddingTop: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#FFD700',
    backgroundColor: '#faebd7',
    padding: 10,
  },
  logo: {
    width: 50,
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
    // marginTop: 45,
    top: 95,
    right: 0,
    backgroundColor: '#faebd7',
    // border: '1px solid #FFD700',
    borderRadius: 5,
    padding: 10,
  },
  dropdownLink: {
    paddingVertical: 5,
    fontWeight: 'bold',
    color: '#FFD700',
    textAlign: 'center',
  }

























































});

export default styles;

import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Text, 
  View, 
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={require('./assets/background.png')}
        resizeMode="cover"
        style={styles.foodBanner}
      >
      {/* Top Banner View */}
      <View>
        <View style={styles.locationContainer}>
           <Text style={styles.locationText}>Your Location</Text>
           <MaterialIcons name="keyboard-arrow-down" size={24} color="white" />
        </View>
        <View style={styles.cityContainer}>
           <Ionicons name="location-outline" size={24} color="white" />
           <Text style={styles.cityText}>Manchester</Text>
        </View>
        <View style={styles.searchBell}>
        <View style={styles.iconCircle}>
         <FontAwesome name="search" size={18} color="white" />
        </View>

        <View style={styles.iconCircle}>
         <EvilIcons name="bell" size={26} color="white" />
        </View>
        </View>
      </View>
      <View>
       <Text style={styles.lowerText}>
         Provide the best food for you
       </Text>
      </View>
      </ImageBackground>
      <View style={styles.categoryText}>
        <Text style={styles.findCategoryText}>Find by category</Text>
        <Text style={styles.seeAllText}>See all</Text>
      </View>
      <View style={styles.categoryImages}>
        <View style={styles.foodCategory}>
          <Image source={require('./assets/burger.png')} style={styles.foodImage} />
          <Text>Burger</Text>
        </View>
        <View style={styles.foodCategory}>
          <Image source={require('./assets/taco.png')} style={styles.foodImage} />
          <Text>Taco</Text>
        </View>
        <View style={styles.foodCategory}>
          <Image source={require('./assets/drink.png')} style={styles.foodImage} />
          <Text>Drink</Text>
        </View>
        <View style={styles.foodCategory}>
          <Image source={require('./assets/pizza.png')} style={styles.foodImage} />
          <Text>Pizza</Text>
        </View>
      </View>
      <View style={styles.foodContainer} >
        <View style={styles.favorite}>
         <Feather name="heart" size={18} color="red" />
        </View>
        <Image source={require('./assets/burger1.png')} style={styles.foodItem} />
        <Text style={styles.foodText}>Ordinary Burgers</Text>
        <View style={styles.foodRating}>
         <View style={styles.star}>
          <AntDesign name="star" size={18} color="orange" />
          <Text>4.5</Text>
         </View>
         <View style={styles.distance}>
          <Ionicons name="location-outline" size={18} color="orange" />
          <Text>190m</Text>
         </View>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>
          $17,820
         </Text>
         </View>
      </View>
      <StatusBar style='light'/>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#ffff',
  },

  foodBanner: {
    height: '58%',
    width: '100%'
  },

  locationContainer: {
    paddingTop: 50,
    paddingLeft: 30,
    flexDirection: 'row',
    gap: 5,
  },

  cityContainer: {
    marginTop: 2,
    marginLeft: 24,
    flexDirection: 'row',
    gap: 5,
  },

  locationText: {
    color: '#ffff',
    fontSize: 18,
    fontWeight: 400,
  },

  cityText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },

  searchBell: {
    position: 'absolute',
    top: 50,
    right: 24,
    flexDirection: 'row',
    gap: 12,
 },

  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
 },

 lowerText: {
  color: 'white',
  fontSize: 45,
  fontWeight: '600',
  marginTop: 20,
  paddingHorizontal: 20,
 },
 
 categoryText: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 20,
  marginBottom: 12,
  marginTop: -150
 },

 categoryImages: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  paddingHorizontal: 10,
 },

 foodCategory: {
  borderRadius: 12,
  padding: 16,
  alignItems: 'center',
  width: 80,
  backgroundColor: '#fdbe89'
 },

 foodImage: {
  width: 30,
  height: 30,
 },

 findCategoryText: {
  fontWeight: '700',
  fontSize: 15,
 },

 seeAllText: {
  color: '#ff8800',
  fontWeight: '500'
 }, 

 foodItem: {
  width: 141,
  height: 120,
  borderRadius: 20,
  position: 'relative'
 },

 foodContainer: {
  marginLeft: 20,
  marginTop: 20,
  width: 160,
  backgroundColor: '#fcf8f3',
  borderRadius: 20,
  padding: 10,
 },

 foodText: {
  marginTop: 8,
  fontSize: 14,
  fontWeight: '600',
  textAlign: 'center'
 }, 

 foodRating: {
  flexDirection: 'row',
  margin: 6,
  justifyContent: 'space-between',
 },

 star: {
  flexDirection: 'row'
 },

 distance: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 4,
 },

 price: {
  color: 'orange',
  fontSize: 20,
  fontWeight: '700'
 },

 priceContainer: {
  flexDirection: 'row',
 },

 favorite: {
  width: 28,
  height: 28,
  borderRadius: 14,
  borderColor: 'white',
  borderWidth: 1,
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute', 
  zIndex: 10,
  top: 14,
  right: 14,
  backgroundColor: 'white'
 }
});

import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Text, 
  View, 
  ImageBackground,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import FoodItem from './components/FoodItems';
import CategoryCard from './components/CategoryCards';
import {
  MaterialIcons,
  Ionicons,
  FontAwesome,
  EvilIcons,
  AntDesign,
  Feather,
} from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function App() {
  return (
    <ScrollView style={styles.mainContainer}>

     {/* Background Header Image */}

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

         {/* Top navigation icons */}

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
         <Text style={styles.lowerText}>Provide the best food for you</Text>
        </View>
      </ImageBackground>
      
      {/* Category Text */}

      <View style={styles.categoryText}>
        <Text style={styles.findCategoryText}>Find by category</Text>
        <Text style={styles.seeAllText}>See all</Text>
      </View>

      {/* Category Cards */}

      <View style={styles.categoryImages}>
        <CategoryCard name={"Burger"} image={require('./assets/burger.png')} />
        <CategoryCard name={"Taco"} image={require('./assets/taco.png')} />
        <CategoryCard name={"Drink"} image={require('./assets/drink.png')} />
        <CategoryCard name={"Pizza"} image={require('./assets/pizza.png')} />
      </View>

      {/* Food list */}

      <View style={styles.foodList}>
        <FoodItem title={"Ordinary Burgers"} image={require('./assets/burger1.png')} price={"$17,820"} distance={"190m"} rating={"4.5"} />
        <FoodItem title={"Burger With Meat"} image={require('./assets/burger2.png')} price={"$12,260"} distance={"120m"} rating={"4.9"} />
        <FoodItem title={"Small Size Burger"} image={require('./assets/burger3.png')} price={"$9,170"} distance={"80m"} rating={"3.2"} />
        <FoodItem title={"King Size Burger"} image={require('./assets/burger4.png')} price={"$20,620"} distance={"590m"} rating={"5.0"} />
      </View>

      {/* Status Bar configuration */}
      <StatusBar style='light'/>

    </ScrollView>
  );
}

{/* Style Sheet */}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#ffff',
  },

  foodBanner: {
    height: windowHeight * 0.38,
    width: '100%'
  },

  categoryImages: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  paddingHorizontal: 10,
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
    fontWeight: '400',
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
    width: windowWidth * 0.12,
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
 },

 findCategoryText: {
  fontWeight: '700',
  fontSize: 15,
 },

 seeAllText: {
  color: '#ff8800',
  fontWeight: '500'
 }, 

 foodList: {
  flexDirection: 'row',
  flexWrap: 'wrap'
 },

});
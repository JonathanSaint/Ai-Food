import { 
    View,
    Text,
    Image,
    StyleSheet,
 } from "react-native";
import {Ionicons, Feather, AntDesign} from '@expo/vector-icons';

export default function FoodItem({title, image, price, distance, rating}) {
    return (
        <View style={styles.foodContainer} >
                <View style={styles.favorite}>
                 <Feather name="heart" size={18} color="red" />
                </View>
                <Image source={image} style={styles.foodItem} />
                <Text style={styles.foodText}>{title}</Text>
                <View style={styles.foodRating}>
                 <View style={styles.star}>
                  <AntDesign name="star" size={18} color="orange" />
                  <Text>{rating}</Text>
                 </View>
                 <View style={styles.distance}>
                  <Ionicons name="location-outline" size={18} color="orange" />
                  <Text>{distance}</Text>
                 </View>
                </View>
                <View style={styles.priceContainer}>
                  <Text style={styles.price}>
                  {price}
                 </Text>
                 </View>
              </View>
    );
}

const styles = StyleSheet.create({
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
 },
});
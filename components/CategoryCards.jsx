import { 
    View,
    Text,
    Image,
    StyleSheet,
 } from "react-native";

export default function CategoryCard({name, image}) {
    return (
        <View style={styles.categoryImages}>
            <View style={styles.foodCategory}>
                <Image source={image} style={styles.foodImage} />
                <Text>{name}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    
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
});
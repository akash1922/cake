import React from "react";
import { View,Text,ImageBackground } from "react-native";
import styles from "./styles";
const Cakeitem = () => {
    return(
        <View style={styles.cakecontainer} >
        <ImageBackground source={require('../../assets/hotel.png')}
        style={styles.image}
        />
      <View style={styles.titles} >
      <Text style={styles.title}>Chocolate cake</Text>
      <Text style={styles.subtitle} >₹300</Text>
      </View>
      </View>


    );
};
export default Cakeitem;
import { StatusBar, Text, View, Button, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { styles } from "@/styles/styles";

export default function Configs() {
  return (
  <View style={styles.container}>

    <View style={styles.row}>
      <Text>SafeDoor</Text>
      <Image style={styles.img} source={require('@/assets/images/escudo.png')}/>
    </View>


    <StatusBar barStyle={'dark-content'} />
  </View>
  );
}

import { StatusBar, Text, View, Image } from "react-native";
import { styles } from "@/styles/styles";

export default function Index() {
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

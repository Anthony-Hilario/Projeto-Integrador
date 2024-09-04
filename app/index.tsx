import { StatusBar, Text, View, Image, Button } from "react-native";
import { styles } from "@/styles/styles";

export default function Index() {
  return (
  <View style={styles.container}>

    <View style={styles.row}>
      <Text>SafeDoor</Text>
      <Image style={styles.img} source={require('@/assets/images/escudo.png')}/>
    </View>

    <View style={styles.row}>
      <Button title="Liberar"/>
      <Button title="Bloquear"/>
    </View>

    <StatusBar barStyle={'dark-content'} />
  </View>
  );
}

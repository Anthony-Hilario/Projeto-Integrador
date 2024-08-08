import { StatusBar, Text, View, Button, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { styles } from "@/styles/styles";

export default function Index() {
  return (
  <View style={styles.container}>

    <View style={styles.row}>
      <Text>SafeDoor</Text>
      <Image style={styles.img} source={require('@/assets/images/escudo.png')}/>
    </View>

    <View style={styles.row}>
      <TouchableOpacity style={styles.button}>
        <Link href={"/pag2"}>
          <Button title="Entrar com QR Code"/>
      </Link>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button}>
        <Link href={"/logPage"}>
          <Button title="Log de Atividade"/>
        </Link>
      </TouchableOpacity>
    </View>    

    <StatusBar barStyle={'dark-content'} />
  </View>
  );
}

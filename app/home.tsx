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

    <View style={styles.footer}>
     <Link href={'/home'} style={styles.btnBack} >
       <TouchableOpacity>
        <Image source={require('@/assets/images/home.png')} />
       </TouchableOpacity>
     </Link>
     
     <Link href={'/qrcode'}>
        <TouchableOpacity>
          <Image source={require('@/assets/images/img-qrcode.png')} />
        </TouchableOpacity>
     </Link>

     <Link href={'/logPage'}>
        <TouchableOpacity>
          <Image source={require('@/assets/images/logs.png')} />
        </TouchableOpacity>
     </Link>

     <Link href={'/configs'}>
        <TouchableOpacity>
          <Image source={require('@/assets/images/settings.png')} />
        </TouchableOpacity>
     </Link>
    </View>

    <StatusBar barStyle={'dark-content'} />
  </View>
  );
}

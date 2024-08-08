import { Button, Image, StatusBar, Text, View } from "react-native";
import { Link } from "expo-router";
import { styles } from "@/styles/styles";

export default function Page2() {
  return (
    <View style={styles.container}>
      <Text>Escaneie o QR Code aproximando-o para a câmera</Text>
      
      <Image source={require('@/assets/images/qr-code.png')} style={styles.qrcode} />

      <Link href={'/'}>
        <Button title="Voltar" />
      </Link>

      <StatusBar barStyle={'dark-content'} />
    </View>
  );
}

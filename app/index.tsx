import { StatusBar, Text, View, Button } from "react-native";
import { styles } from "@/styles/styles";

export default function Login({ navigation, onLogin }) {
  // Função que será chamada quando o login for efetuado
  const handleLogin = () => {
    onLogin();  // Chama a função passada como prop para definir o login
    navigation.replace("SafeDoor");  // Redireciona para o menu principal
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text>SafeDoor</Text>
        <Button title="Fazer Login" onPress={handleLogin} />
      </View>
      <StatusBar barStyle={'dark-content'} />
    </View>
  );
}

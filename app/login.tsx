import { StatusBar, Text, View, Button, TouchableOpacity, TextInput } from "react-native";
import { styles } from "@/styles/styles";
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    const [user, setUser] = useState('')
    const [senha, setSenha] = useState('')
    const navigation = useNavigation();
    
        function login() {
            if(user === 'murillo' && senha === '123'){
                console.log("logado")
                navigation.navigate("index")
            }
            else{
                console.log("Não")
            }
        }
    

  return (
  <View style={styles.container}>
    <Text>Usuário</Text>
    <TouchableOpacity style={styles.touchable}>
        <TextInput placeholder="UserExample" style={styles.TextInput} value={user} onChangeText={setUser}/>
    </TouchableOpacity>

    <Text>Senha</Text>
    <TouchableOpacity style={styles.touchable}>
        <TextInput placeholder="******" secureTextEntry={true} value={senha} onChangeText={setSenha} style={styles.TextInput}/>
    </TouchableOpacity>

    <Button title="Entrar" onPress={login}/>
    <Button title="Esqueci minha Senha" onPress={() => console.log("Recuperar senha")}/>
    

    <StatusBar barStyle={'dark-content'} />
  </View>
  );
}

import { StatusBar, Text, View, Image, Button } from "react-native";
import { styles } from "@/styles/styles";
import React, { useEffect, useState } from 'react';

const SERVER_URL = 'ws://localhost:3000'; 

export default function Index() {

  const [ws, setWs] = useState(null);
  const [message, setMessage] = useState('');


  useEffect(() => {
    // Conecta ao WebSocket do servidor
    const socket = new WebSocket(SERVER_URL);

    socket.onopen = () => {
      console.log('Conectado ao WebSocket do servidor');
    };

    socket.onmessage = (event) => {
      console.log('Mensagem recebida do servidor:', event.data);
      setMessage(event.data); // Armazena a mensagem recebida para exibição
    };

    socket.onerror = (error) => {
      console.error('Erro no WebSocket:', error.message);
    };

    socket.onclose = (event) => {
      console.log('WebSocket desconectado:', event);
    };

    setWs(socket);

    // Limpa a conexão WebSocket ao desmontar o componente
    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, []);

  const enviarLiberado = () => {
    if (ws) {
      ws.send('Liberado');
    }
  };

  const enviarBloqueado = () => {
    if (ws) {
      ws.send('Bloqueado');
    }
  };

  return (
  <View style={styles.container}>

    <View style={styles.row}>
      <Text>SafeDoor</Text>
      <Image style={styles.img} source={require('@/assets/images/escudo.png')}/>
    </View>

    <View style={styles.row}>
      <Button title="Liberar" onPress={enviarLiberado}/>
      <Button title="Bloquear" onPress={enviarBloqueado}/>
    </View>

    <StatusBar barStyle={'dark-content'} />
  </View>
  );
}

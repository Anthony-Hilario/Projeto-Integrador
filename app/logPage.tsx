import { Button, StatusBar, Text, View, FlatList, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import React from "react";
import { styles } from "@/styles/styles";

const logs = [
    { id: '1', horario: '08:00', porta: '1234', usuario: 'João' },
    { id: '2', horario: '09:30', porta: '5678', usuario: 'Maria' },
    { id: '3', horario: '10:15', porta: '9101', usuario: 'Pedro' },
    // Adicione mais logs conforme necessário
];
const renderItem = ({ item }) => (
        <View style={styles.row}>
          <Text style={styles.cell}>{item.horario}</Text>
          <Text style={styles.cell}>{item.porta}</Text>
          <Text style={styles.cell}>{item.usuario}</Text>
        </View>
      );
export default function Page2() {
    
  return (
    <View style={styles.containerLog}>
     <Text>Log de Atividades</Text>

     <View style={styles.header}>
        <Text style={styles.headerText}>Horário</Text>
        <Text style={styles.headerText}>Porta</Text>
        <Text style={styles.headerText}>Usuário</Text>
      </View>
      <FlatList
        data={logs}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

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

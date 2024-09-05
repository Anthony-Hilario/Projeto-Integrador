import { StatusBar, Text, View, FlatList } from "react-native";
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


      <StatusBar barStyle={'dark-content'} />
    </View>
  );
}

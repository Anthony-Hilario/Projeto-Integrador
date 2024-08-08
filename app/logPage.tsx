import { Button, StatusBar, Text, View, FlatList, StyleSheet } from "react-native";
import { Link } from "expo-router";
import React from "react";

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
    <View style={styles.container}>
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


     <Link href={'/'} style={styles.btnBack} >
       <Button title="Voltar"/>
     </Link>

      <StatusBar barStyle={'dark-content'} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    flex: 1,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
  btnBack: {
    textAlign: 'center'
  }
});
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    TextInput:{
        color: '#FFFFFF'
    },

    touchable: {
        backgroundColor: '#000000'
    },

    qrcode: {
        width: 240,
        height: 240,
    },

    img: {
        width: 20,
        height: 20,
    },

    row: {
        flexDirection: 'row',
    },

    button: {
    backgroundColor: '#3498db',
    width: 120,
    height: 120,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    color: '#6EC19A',
    },

    buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    },
})
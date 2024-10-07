import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#262626',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
        gap: 8,
        borderRadius: 8,
        borderColor: '#333333',
        borderWidth: 1,
    },
    description: {
        color: '#F2F2F2',
        fontSize: 14,
        width: '75%'
    },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#4EA8DE',
        justifyContent: 'center',
        alignItems: 'center'
    },
    checked: {
        color: '#F2F2F2',
        backgroundColor: '#5E60CE',
        borderColor: '#5E60CE'
    },
    descriptionChecked: {
        color: '#808080',
        textDecorationLine: 'line-through',
        width: '75%'
    },
    trash:{
        width: 16,
        height: 16
    }
})
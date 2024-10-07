import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        paddingVertical:40,
    },
    form: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: 24,
        gap: 4,
    },
    input: {
        flex: 1,
        backgroundColor: '#262626',
        padding: 16,
        borderColor: '#3D3D3D',
        borderWidth: 1,
        borderRadius: 6,
        color: '#F2F2F2'
    },
    inputFocused:{
        borderColor: '#5E60CE',
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 6,
        backgroundColor:'#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
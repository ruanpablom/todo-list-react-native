import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#131016',
        padding: 24,
        paddingTop: 48,
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 42,
        marginBottom: 42,
        justifyContent: 'center',
    },
    form: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        gap: 4,
    },
    input: {
        flex: 1,
        backgroundColor: '#262626',
        padding: 16,
        borderColor: '#3D3D3D',
        borderWidth: 1,
        borderRadius: 6,
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
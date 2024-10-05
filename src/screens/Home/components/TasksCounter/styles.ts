import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    valueContainer:{
       backgroundColor :'#333333',
       paddingVertical: 2,
       paddingHorizontal: 8,
       borderRadius: 20,
    },
    valueContent:{
       color: '#D9D9D9',
       fontSize: 14,
       fontWeight: '700'
    }
})
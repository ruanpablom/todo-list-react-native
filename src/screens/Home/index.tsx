import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { TasksContainer } from "./components/TasksContainer";

export function Home() {
    const [isFocusedInput, setIsFocusedInput] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../../assets/logo.png')} />
            </View>
            <View style={styles.form}>
                <TextInput 
                    style={[styles.input, isFocusedInput && styles.inputFocused]} 
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor='#7A7A80'
                    onFocus={() => setIsFocusedInput(true)}
                    onBlur={() => setIsFocusedInput(false)}
                />
                <TouchableOpacity style={styles.button}>
                    <Image source={require('../../../assets/plus.png')} />
                </TouchableOpacity>
            </View>
            <TasksContainer />
        </View>
    )
}
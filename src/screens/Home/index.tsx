import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { TasksContainer } from "./components/TasksContainer";
import { Task } from "../../models/task";

export function Home() {
    const [tasks, setTasks] = useState<Task[]>([])
    const [isFocusedInput, setIsFocusedInput] = useState(false);
    const [newTask, setNewTask] = useState('');
    const [nextId, setNextId] = useState(0);

    function handleAddTask(){
        const task = {
            id: nextId,
            description: newTask,
            isCompleted: false
        }
        setTasks([task, ...tasks])
        setNewTask('')
        setNextId(prevState => prevState + 1)
    }

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
                    onChangeText={setNewTask}
                    value={newTask}
                />
                <TouchableOpacity 
                    style={styles.button}
                    onPress={handleAddTask}
                >
                    <Image source={require('../../../assets/plus.png')} />
                </TouchableOpacity>
            </View>
            <TasksContainer tasks={tasks} setTasks={setTasks} />
        </View>
    )
}
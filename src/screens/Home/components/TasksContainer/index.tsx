import { View } from "react-native";
import { styles } from "./styles";
import { TasksContainerHeader } from "../TasksContainerHeader";
import { TaskCard } from "../TaskCard";
import { useState } from "react";

export function TasksContainer(){
    const [tasks, setTasks] = useState([
        {id: 1, description: 'Integer urna interdum massa libero auctor neque turpis turpis semper.', isCompleted: false},
        {id: 2, description: 'Integer urna interdum massa libero auctor neque turpis turpis semper.', isCompleted: false},
        {id: 3, description: 'Integer urna interdum massa libero auctor neque turpis turpis semper.', isCompleted: false},
        {id: 4, description: 'Integer urna interdum massa libero auctor neque turpis turpis semper.', isCompleted: false},
        {id: 5, description: 'Integer urna interdum massa libero auctor neque turpis turpis semper.', isCompleted: false},
    ])

    function handleToggleTask(id: number){
        const updatedTasks = tasks.map(task => {
            if(task.id === id){
                return {
                    ...task,
                    isCompleted: !task.isCompleted
                }
            }
            return task
        })

        setTasks(updatedTasks)
    }

    function handleDeleteTask(id: number){
        const updatedTasks = tasks.filter(task => task.id !== id)

        setTasks(updatedTasks)
    }

    return(
        <View style={styles.container}>
            <TasksContainerHeader />
            <TaskCard task={tasks[0]} onToggle={() => handleToggleTask(tasks[0].id)} onDelete={() => handleDeleteTask(tasks[0].id)} />
        </View>
    )
}
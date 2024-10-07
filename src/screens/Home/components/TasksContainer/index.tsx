import { FlatList, View } from "react-native";
import { styles } from "./styles";
import { TasksContainerHeader } from "../TasksContainerHeader";
import { TaskCard } from "../TaskCard";
import { useState } from "react";
import { TasksEmpty } from "../TasksEmpty";
import { Task } from "../../../../models/task";

type TasksContainerProps = {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export function TasksContainer({tasks, setTasks}: TasksContainerProps){
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

        updatedTasks.sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted))

        setTasks(updatedTasks)
    }

    function handleDeleteTask(id: number){
        const updatedTasks = tasks.filter(task => task.id !== id)

        setTasks(updatedTasks)
    }

    const tasksCounter = tasks.reduce((acc, task) => {
        acc.created += 1;
        if (task.isCompleted) {
            acc.completed += 1;
        }
        return acc;
    }, {created: 0, completed: 0})

    return(
        <View style={styles.container}>
            <TasksContainerHeader tasksCounter={tasksCounter} />
            <FlatList 
                data={tasks}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                keyExtractor={item => String(item.id)}
                renderItem={({item}) => (
                    <TaskCard 
                        task={item} 
                        onToggle={() => handleToggleTask(item.id)} 
                        onDelete={() => handleDeleteTask(item.id)} 
                    />
                )}
                ListEmptyComponent={() => (
                    <TasksEmpty />
                )}
            />
            {/* <TaskCard task={tasks[0]} onToggle={() => handleToggleTask(tasks[0].id)} onDelete={() => handleDeleteTask(tasks[0].id)} /> */}
        </View>
    )
}
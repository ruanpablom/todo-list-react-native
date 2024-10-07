import { Text, View } from "react-native";
import { styles } from "./styles";
import { TasksCounter } from "../TasksCounter";

type TasksContainerHeaderProps = {
    tasksCounter: {
        created: number;
        completed: number;
    }
}

export function TasksContainerHeader({tasksCounter}: TasksContainerHeaderProps){
    return(
        <View style={styles.container}>
            <TasksCounter label="Criadas" value={tasksCounter.created} color="#4EA8DE" />
            <TasksCounter label="Concluídas" value={tasksCounter.completed} color="#8284FA" />
        </View>
    )
}
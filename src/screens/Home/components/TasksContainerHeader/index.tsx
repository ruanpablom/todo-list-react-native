import { Text, View } from "react-native";
import { styles } from "./styles";
import { TasksCounter } from "../TasksCounter";

export function TasksContainerHeader(){
    return(
        <View style={styles.container}>
            <TasksCounter label="Criadas" value={0} color="#4EA8DE" />
            <TasksCounter label="Concluídas" value={0} color="#8284FA" />
        </View>
    )
}
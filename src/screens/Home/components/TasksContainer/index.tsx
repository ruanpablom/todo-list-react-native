import { View } from "react-native";
import { styles } from "./styles";
import { TasksContainerHeader } from "../TasksContainerHeader";

export function TasksContainer(){
    return(
        <View style={styles.container}>
            <TasksContainerHeader />
        </View>
    )
}
import { Text, TouchableOpacity, View, Image } from "react-native";
import { styles } from "./styles";
import { Task } from "../../../../models/task";

type TaskCardProps = {
    task: Task;
    onToggle: () => void;
    onDelete: () => void;
}

export function TaskCard({task, onToggle, onDelete}: TaskCardProps) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.checkbox, task.isCompleted && styles.checked]}
                onPress={onToggle}
            >
                {task.isCompleted && <Text style={styles.checked}>✓</Text>}
            </TouchableOpacity>
            
            <Text style={[task.isCompleted ? styles.descriptionChecked : styles.description]}>{task.description}</Text>
            <TouchableOpacity
                onPress={onDelete}
            >
                <Image style={styles.trash} source={require('../../../../../assets/trash.png')} />
            </TouchableOpacity>
        </View>
    )
}
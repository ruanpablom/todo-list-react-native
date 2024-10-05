import { Text, View } from "react-native";
import { styles } from "./styles";

type TasksCounterProps = {
    label: string;
    value: number;
    color?: string;
}

export function TasksCounter({label, value, color}: TasksCounterProps){
    return(
        <View style={styles.container}>
            <Text style={{color: color, fontWeight: 700, fontSize: 14}}>{label}</Text>
            <View style={styles.valueContainer}>
                <Text style={styles.valueContent}>{value}</Text>
            </View>
        </View>
    )
}
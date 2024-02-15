import { Text, View } from "react-native";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>
        Quarta-feira, 14 de fevereiro de 2024.
      </Text>
    </View>
  );
}

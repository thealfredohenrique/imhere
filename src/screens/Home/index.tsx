import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export function Home() {
  function handleParticipantAdd() {
    console.log("Hi.");
  }

  function handleParticipantRemove(name: string) {
    console.log(`Hello ${name}.`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>
        Quarta-feira, 14 de fevereiro de 2024.
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Participant
        name="Alfredo Henrique"
        onRemove={() => handleParticipantRemove("Alfredo Henrique")}
      />
    </View>
  );
}

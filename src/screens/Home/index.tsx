import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export function Home() {
  const participants = [
    "Alpha",
    "Aline",
    "Débora",
    "Stephanie",
    "Julia",
    "Bianca",
    "Camilla",
    "Carol",
    "Maria",
    "Ômega",
  ];

  function handleParticipantAdd() {
    if (participants.includes("Julia")) {
      return Alert.alert(
        "Adicionar Participante",
        "Já existe um participante na lista com esse nome."
      );
    }
  }

  function handleParticipantRemove(name: string) {
    Alert.alert(
      "Remover Participante",
      `Deseja remover o participante ${name}?`,
      [
        {
          text: "Sim",
          onPress: () => Alert.alert("Apagado."),
        },
        {
          text: "Não",
          style: "cancel",
        },
      ]
    );
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

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes à sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  );
}

import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { styles } from "./styles";
import { theme } from "../../theme";

export function BMIInput() {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputHeaderText}>Peso em kg</Text>
      <TextInput
        style={styles.textInputContainer}
        keyboardType="numeric"
        placeholder="Kg"
      ></TextInput>
      <Text style={styles.inputHeaderText}>Altura em metros</Text>
      <TextInput
        style={styles.textInputContainer}
        keyboardType="numeric"
        placeholder="Metros"
      ></TextInput>
      <View style={styles.confirmButton}>
        <Button title="Calcular" color={theme.colors.greenCeltics} />
      </View>
    </View>
  );
}

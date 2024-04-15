import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { styles } from "./styles";
import { theme } from "../../theme";
import { useState } from "react";

export function BMIInput(props) {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputHeaderText}>Weight in kg</Text>
      <TextInput
        style={styles.textInputContainer}
        keyboardType="numeric"
        placeholder="Kg"
        onChangeText={setWeight}
        value={weight}
      ></TextInput>
      <Text style={styles.inputHeaderText}>Height in meters</Text>
      <TextInput
        style={styles.textInputContainer}
        keyboardType="numeric"
        placeholder="Meters (ex: 1.70)"
        onChangeText={setHeight}
        value={height}
      ></TextInput>
      <View style={styles.confirmButton}>
        <Button
          title="Calculate"
          color={theme.colors.greenCeltics}
          onPress={props.onClickButton.bind(this, weight, height)}
        />
      </View>
    </View>
  );
}

import { View, Text } from "react-native";
import { styles } from "./styles";
import { BMIInput } from "../../components/BMIInput";

export function Home() {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Calculadora - IMC</Text>
        <View style={styles.titleLineStyle}></View>
      </View>
      <BMIInput></BMIInput>
    </View>
  );
}

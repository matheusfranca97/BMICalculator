import { View, Text } from "react-native";
import { styles } from "./styles";
import { BMIInput } from "../../components/BMIInput";
import { useState } from "react";

export function Home() {
  const [bmiValue, setBmiValue] = useState(0);

  function calculateBMI(weight, height) {
    var floatWeight = parseFloat(weight.replace(",", "."));
    console.log(floatWeight);
    var floatHeight = parseFloat(height.replace(",", "."));
    console.log(floatHeight);

    setBmiValue(floatWeight / (floatHeight * floatHeight));
    console.log("calculate BMI: " + bmiValue);
  }

  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Calculadora - IMC</Text>
        <View style={styles.titleLineStyle}></View>
      </View>
      <BMIInput onClickButton={calculateBMI} />
    </View>
  );
}

//export default Home;

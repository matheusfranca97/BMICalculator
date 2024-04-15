import { View, Text } from "react-native";
import { styles } from "./styles";
import { BMIInput } from "../../components/BMIInput";
import { useEffect, useState } from "react";
import { BMIResult } from "../../components/BMIResult";

export function Home() {
  const [bmiValue, setBmiValue] = useState(0);
  const [bmiType, setBmiType] = useState("");
  const [resultTextIsVisible, setResultTextIsVisible] = useState(false);

  function calculateBMI(weight, height) {
    if (weight == "" || height == "") {
      setResultTextIsVisible(false);
      return;
    }

    var floatWeight = parseFloat(weight.replace(",", "."));
    var floatHeight = parseFloat(height.replace(",", "."));

    var bmiResult = floatWeight / (floatHeight * floatHeight);

    setBmiValue(bmiResult);
    checkBMIType(bmiResult);

    setResultTextIsVisible(true);
  }

  function checkBMIType(bmiResult) {
    if (bmiResult < 18.5) {
      setBmiType("Underweight ");
    } else if (bmiResult >= 18.5 && bmiResult < 25) {
      setBmiType("Normal weight");
    } else if (bmiResult >= 25 && bmiResult < 30) {
      setBmiType("Overweight");
    } else {
      setBmiType("Obesity");
    }
    console.log("calculei o tipo");
  }
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>BMI Calculator</Text>
        <View style={styles.titleLineStyle}></View>
      </View>
      <BMIInput onClickButton={calculateBMI} />
      <BMIResult
        visible={resultTextIsVisible}
        bmiTextValue={bmiValue.toFixed(2)}
        bmiTypeValue={bmiType}
      />
    </View>
  );
}

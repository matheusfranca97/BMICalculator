import { useState } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { theme } from "../../theme";

export function BMIResult(props) {
  return (
    <>
      {props.visible && (
        <View style={styles.resultContainer}>
          <View style={styles.resultLineStyle}></View>
          <Text style={styles.resultText}>
            Your BMI is{" "}
            <Text style={{ color: theme.colors.greenCeltics }}>
              {props.bmiTextValue}
            </Text>
          </Text>
          <Text style={styles.resultTextType}> {props.bmiTypeValue}</Text>
        </View>
      )}
    </>
  );
}

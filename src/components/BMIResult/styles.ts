import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  resultContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  resultText: {
    fontFamily: "Poppins-Medium",
    fontSize: 30,
  },
  resultNumberText: {
    fontFamily: "Poppins-Medium",
    fontSize: 30,
  },
  resultLineStyle: {
    height: 3,
    backgroundColor: theme.colors.greenCeltics,
    width: "100%",
    borderRadius: 5,
    marginVertical: 20,
  },

  resultTextType: {
    fontFamily: "Poppins-Regular",
  },
});

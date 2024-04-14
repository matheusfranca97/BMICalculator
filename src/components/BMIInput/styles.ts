import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    //justifyContent: "space-around",
  },
  inputHeaderText: {
    fontFamily: "Poppins-Medium",
  },
  textInputContainer: {
    width: "100%",
    height: 40,
    textAlign: "center",
    fontFamily: "Poppins-Regular",
    backgroundColor: theme.colors.backgroundInputColor,
  },
  confirmButton: {
    width: "100%",
    marginTop: 20,
  },
});

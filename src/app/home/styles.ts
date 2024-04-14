import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    //alignItems: "center",
    backgroundColor: theme.colors.backgroundAppColor,
    padding: 30,
  },

  titleContainer: {
    flexDirection: "column",
    //alignItems: "center",
    paddingBottom: 20,
  },

  titleText: {
    fontFamily: "Poppins-Medium",
    fontSize: 30,
  },

  titleLineStyle: {
    height: 3,
    backgroundColor: theme.colors.greenCeltics,
    width: 120,
    borderRadius: 5,
    marginStart: 0,
  },
});

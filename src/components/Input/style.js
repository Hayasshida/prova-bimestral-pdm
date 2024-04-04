import { StyleSheet } from "react-native";
import { fonts } from "../../theme/fonts";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#336f6599",
    borderRadius: 8,
    minHeight: 44,
    // marginTop: 8,
    // fontSize: 20,
    padding: 12,
    // marginBottom: 30,
    width: '100%',
    flexDirection: "row"
  },
  label: {
    fontFamily: fonts.type.ralewayBold,
    color: colors.primary,
    marginBottom: 8,
  },
  inputControl: {
    color: "#222",
    fontSize: 20,
},
})
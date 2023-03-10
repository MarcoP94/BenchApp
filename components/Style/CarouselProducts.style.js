import { StyleSheet, Dimensions } from "react-native";

const productWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 10,
    backgroundColor: "white",
    width: productWidth,
  },
});

export default styles;

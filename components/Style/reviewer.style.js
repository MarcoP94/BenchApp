import { StyleSheet, Dimensions } from "react-native";

const productWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 10,
    backgroundColor: "white",
    padding: 10,
    width: productWidth,
  },
  containerUser: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
    width: productWidth,
    verticalAlign: "center",
    alignContent:"center",
    alignItems:"center"
  },

  name: {
    fontSize: 15,
    fontWeight: "500",
  },
  image: {
    backgroundColor: "grey",
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "white",
    width: 50,
    height: 50,
  },
  text: {
    fontSize: 15,
    padding:10
  },
});

export default styles;

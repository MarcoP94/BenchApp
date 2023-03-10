import { StyleSheet, Dimensions } from "react-native";

const productWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop:10,
    backgroundColor: "white",
    width:productWidth
  },
  row: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
    width:productWidth,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  nameContainer: {
    fontSize: 20,
    
  },
  attributeValue: {
    fontWeight: "600",
    fontSize: 20,
    width:150

  },
  attributeName: {
    width:150
  },
});

export default styles;

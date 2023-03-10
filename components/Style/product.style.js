import { StyleSheet, Dimensions } from "react-native";
const productWidth = Dimensions.get("window").width / 2 - 20;
const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    padding: 5,
    width: productWidth,
    height: 350,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 0,
    verticalAlign: "center",
  },
  priceContainer: { display: "flex", flexDirection: "row", flexWrap: "wrap" },
  name: {
    fontSize: 20,
    color: "black",
  },
  price: {
    fontSize: 20,
    fontWeight: '500',
  },
  image: {
    width: productWidth - 2,
    height: 200,
    backgroundColor: "white",
  },
  salePrice: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
});

export default styles;

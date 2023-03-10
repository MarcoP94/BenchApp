import { StyleSheet, Dimensions } from "react-native";

const productWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 0,
    flex: 1,
  },
  containerSeller: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: productWidth,
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  containerProduct: {
    marginTop: 10,
    backgroundColor: "white",
    width: productWidth,
    padding: 20,
    justifyContent: "center",
  },
  imgSeller: {
    height: 30,
    width: 50,
  },
  sellerName: {
    
    fontWeight: "400",
    alignItems: "center",
    textAlign: "center",
  },
  image: {
    width: productWidth,
    height: productWidth,
  },
  goToSeller: {
    marginLeft: "auto",
    padding: 5,
    marginRight: 0,
    backgroundColor: "white",
  },
  goToSellereText: {
    color: "blue",
  },
  nameContainer: {
    display: "flex",
    flexDirection: "row",
    fontSize: 20,
    alignItems: "center",
  },
  productName: {
    fontWeight: "bold",
    fontSize: 20,
    padding:10
  },
  salePrice: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
  title:{
    fontSize: 20,
  },
  boxContainer: {
    padding: 10,
    marginTop:10,
    backgroundColor: "white",
  },
  price:{
    fontSize:20
  },
  text:{
    padding:10,
    width:productWidth-10
  }

});

export default styles;

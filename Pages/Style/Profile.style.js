import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: 150,
    alignItems: "center",
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  name: {
    fontWeight: "bold",
  },
  userImg: {
    backgroundColor: "grey",
    borderWidth: 1,
    borderRadius: 100,
    borderColor: "white",
    width: 100,
    height: 100,
  },
 
});

export default styles;

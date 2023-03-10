import {  View, Text } from "react-native";
import styles from "./Style/productDetails.style";

const ProductDetails = (data) => {
  return (
    <View style={styles.container}>
      <Text style={styles.nameContainer}>Details</Text>
      {data.data.map((item) => (
        <View style={styles.row} key={item.id}>
          <View>
            <Text style={styles.attributeName}>{item.name}</Text>
          </View>
          <View>
            <Text style={styles.attributeValue}>
              {item.options.map((val)=>val +" ")}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default ProductDetails;

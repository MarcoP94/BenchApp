import { View, Text, Image } from "react-native";
import { StarRatingDisplay } from "react-native-star-rating-widget";

import styles from "./Style/product.style";

const Product = (props) => {
  return (
    <View style={styles.container} key={props.id}>
      <Image source={{ uri: props.imgUrl }} style={styles.image}></Image>
      <Text style={styles.name}>{props.name}</Text>
      {+props.rating > 1 && (
        <StarRatingDisplay rating={props.rating} starSize={10} />
      )}
      <View style={styles.priceContainer}>
        {!!props.salePrice && (
          <Text style={styles.price}>{props.salePrice}€</Text>
        )}
        <Text style={!!props.salePrice ? styles.salePrice : styles.price}>
          {props.price}€
        </Text>
      </View>
    </View>
  );
};

export default Product;

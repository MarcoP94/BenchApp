import { useRef, useState, useCallback, useEffect } from "react";
import { View, FlatList, Animated, TouchableOpacity } from "react-native";
import WooCommerceAPI from "react-native-woocommerce-api";
import styles from "./Style/CarouselProducts.style";
import Product from "./Product";

const WooCommerce = new WooCommerceAPI({
  url: "https://icodewithyou.com", // Your store URL
  ssl: true,
  consumerKey: "ck_27873cff39e10522e0e77dbb8b427d31145149c9", // Your consumer key
  consumerSecret: "cs_43559c6a69a5b162e214cbea9d20c499cae4e800", // Your consumer secret
  wpAPI: true, // Enable the WP REST API integration
  version: "wc/v3", // WooCommerce WP REST API version
  queryStringAuth: true,
});

const CarouselProducts = (props) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [current, setCurrentIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [products, useProducts] = useState(null);

  const getProducts = useCallback(() => {
    WooCommerce.get("products")
      .then((data) => {
        useProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={(item) => (
          <TouchableOpacity
            style={styles.opContainer}
            onPress={() => props.navigation.push("ProductPage", item)}
          >
            <Product
              price={item.item.regular_price}
              id={item.item.id}
              imgUrl={!!item.item.images[0] ? item.item.images[0].src : ""}
              name={item.item.name}
              salePrice={item.item.sale_price}
            />
          </TouchableOpacity>
        )}
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      />
    </View>
  );
};

export default CarouselProducts;

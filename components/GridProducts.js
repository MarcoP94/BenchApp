import { ScrollView, Text, TouchableOpacity, FlatList } from "react-native";
import Product from "./Product";
import styles from "./Style/GridProducts.styles";
import WooCommerceAPI from "react-native-woocommerce-api";
import { useCallback, useEffect, useMemo, useState } from "react";
import WooCommerceS from "./woo";

const WooCommerce = WooCommerceS;

const GridProducts = (props) => {
  const [products, useProducts] = useState();

  const getProducts = useCallback(() => {
    WooCommerce.get("products", props.search)
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
    <ScrollView>
      <Text style={styles.title}>{props.title}</Text>
      <FlatList
        nestedScrollEnabled
        style={styles.flatContainer}
        data={products}
        numColumns={2}
        renderItem={(item) => (
          <TouchableOpacity
            style={styles.opContainer}
            onPress={() => props.navigation.navigate("ProductPage", item)}
          >
            <Product
              price={item.item.regular_price}
              id={item.item.id}
              imgUrl={!!item.item.images[0] ? item.item.images[0].src : ""}
              name={item.item.name}
              salePrice={item.item.sale_price}
              rating={item.item.average_rating}
            ></Product>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
};

export default GridProducts;

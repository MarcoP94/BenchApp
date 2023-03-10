import { View, Text, Image, ScrollView, Pressable } from "react-native";
import CarouselProducts from "../components/CarouselProducts";
import ProductDetails from "../components/ProductDetails";
import { useState, useEffect, useCallback } from "react";
import WooCommerceAPI from "react-native-woocommerce-api";

import styles from "./Style/ProductPage.style";
import ReviewBox from "../components/ReviewBox";
import { StarRatingDisplay } from "react-native-star-rating-widget";
const WooCommerce = new WooCommerceAPI({
  url: "https://icodewithyou.com", // Your store URL
  ssl: true,
  consumerKey: "ck_27873cff39e10522e0e77dbb8b427d31145149c9", // Your consumer key
  consumerSecret: "cs_43559c6a69a5b162e214cbea9d20c499cae4e800", // Your consumer secret
  wpAPI: true, // Enable the WP REST API integration
  version: "wc/v3", // WooCommerce WP REST API version
  queryStringAuth: true,
});

const ProductPage = ({ navigation, route }) => {
  const [productData, useProduct] = useState({
    on_sale: null,
    attributes: [],
    images: [
      "http://icodewithyou.com/wp-content/uploads/woocommerce-placeholder.png",
    ],
  });

  const getProduct = useCallback(() => {
    WooCommerce.get(`products/${route.params.item.id}`)
      .then((data) => {
        useProduct(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getProduct();
  }, [getProduct]);
  return (
    <ScrollView style={styles.container} key={route.params.item.id}>
      
      <View style={styles.containerSeller}>
        
        <Image
          source={{
            uri: !!productData.images[0] ? productData.images[0].src : "",
          }}
          style={styles.imgSeller}
        />
        <Text style={styles.sellerName}>Seller name</Text>

        <Pressable style={styles.goToSeller}>
          <Text style={styles.goToSellereText}>seller page</Text>
        </Pressable>
      </View>
      <Image
        source={{
          uri: !!productData.images[0] ? productData.images[0].src : "",
        }}
        style={styles.image}
      ></Image>
      <View style={styles.containerProduct}>
      <StarRatingDisplay rating={productData.average_rating} starSize={12} />
        <View style={styles.nameContainer}>
          <Text>Name:</Text>
          <Text style={styles.productName}>{productData.name}</Text>
        </View>
        
        <View style={{ display: "flex", flexDirection: "row" }}>
          {!!productData.on_sale && (
            <Text style={styles.price}>{productData.sale_price}€</Text>
          )}
          <Text style={!!productData.on_sale ? styles.salePrice : styles.price}>
            {productData.regular_price}€
          </Text>
        </View>
      </View>
      <ProductDetails data={productData.attributes} />
      <View style={styles.boxContainer}>
        <Text style={styles.title}>Other information</Text>
        <Text style={styles.text}>{productData.description}</Text>
      </View>
      <View style={styles.boxContainer}>
        <Text style={styles.title}>Related products</Text>
        <CarouselProducts navigation={navigation} />
      </View>

      <ReviewBox id={route.params.item.id}></ReviewBox>
    </ScrollView>
  );
};

export default ProductPage;

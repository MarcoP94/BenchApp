import WooCommerceAPI from "react-native-woocommerce-api";

const WooCommerce = new WooCommerceAPI({
  url: "https://icodewithyou.com", // Your store URL
  ssl: true,
  consumerKey: "ck_27873cff39e10522e0e77dbb8b427d31145149c9", // Your consumer key
  consumerSecret: "cs_43559c6a69a5b162e214cbea9d20c499cae4e800", // Your consumer secret
  wpAPI: true, // Enable the WP REST API integration
  version: "wc/v3", // WooCommerce WP REST API version
  queryStringAuth: true,
});

export default WooCommerce;

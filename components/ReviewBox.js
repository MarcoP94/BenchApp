import { useEffect, useState, useCallback } from "react";
import { View, Text, ScrollView } from "react-native";
import Reviewer from "./Reviewer";
import WooCommerce from "./woo";

const ReviewBox = (props) => {
  const [reviews, useReviews] = useState([]);

  const getReviews = useCallback(() => {
    WooCommerce.get(`products/reviews`, { product: props.id })
      .then((data) => {
        useReviews(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getReviews();
  }, [getReviews]);
  return (
    <View style={{ backgroundColor: "white", padding: 10, marginTop: 10 }}>
      <Text style={{ fontSize: 20 }}>Reviews</Text>
      {reviews.map((item) => {
        return (
          <Reviewer
            reviewer_avatar_urls={item.reviewer_avatar_urls["24"]}
            reviewer={item.reviewer}
            review={item.review}
            rating={item.rating}
            key={item.id}
          ></Reviewer>
        );
      })}
    </View>
  );
};

export default ReviewBox;

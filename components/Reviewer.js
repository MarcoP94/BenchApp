import { View, Text, Image } from "react-native";

import { StarRatingDisplay } from "react-native-star-rating-widget";
import styles from "./Style/reviewer.style";

const Reviewer = (props) => {
  return (
    <View key={props.id} style={styles.container}>
      <View style={styles.containerUser}>
        <Image
          source={{
            uri: props.reviewer_avatar_urls,
          }}
          style={styles.image}
        />
        <Text style={styles.name}>
          {props.reviewer}
         
        </Text>
      </View>
      <StarRatingDisplay rating={props.rating} starSize={10} />
      <Text style={styles.text}>{props.review}</Text>
    </View>
  );
};

export default Reviewer;

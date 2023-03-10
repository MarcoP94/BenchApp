import { ScrollView } from "react-native";

import { useEffect, useLayoutEffect } from "react";
import GridProducts from "../components/GridProducts";
import SearchOptions from "../UIX/SearchOptions";

const Home = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        placeHolder: "Search",
      },
    });
  }, [navigation]);
  useEffect(() => {
    navigation.setOptions({});
  }, [navigation]);

  return (
    <ScrollView>
      <GridProducts
        title={"Best Sellers"}
        navigation={navigation}
        search={{ orderby: "rating", per_page: 4 }}
      />
      <GridProducts title={"On Sale"} navigation={navigation} search={{per_page: 4 }}/>
    </ScrollView>
  );
};

export default Home;

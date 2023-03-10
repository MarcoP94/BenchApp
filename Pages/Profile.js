import { Text, View, SafeAreaView, Button } from "react-native";

import styles from "./Style/Profile.style";

const Profile = ({navigation}) => {
  const navHandler=()=>{
    navigation.goBack()
  }
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.userImg}></View>
        <Text style={styles.name}>Username</Text>
      </View>
      <Button title="go back" onPress={navHandler}/>
    </SafeAreaView>
    
  );
};

export default Profile;

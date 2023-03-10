import { useState } from "react";
import { Text, View, TextInput,TouchableOpacity,StatusBar } from "react-native";



const Login = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  return (
    <View style={styles.container}>
    <StatusBar style="auto" />
    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="username"
        placeholderTextColor="#003f5c"
        onChangeText={(email) => setUserName(email)}
      /> 
    </View> 
    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Password."
        placeholderTextColor="#003f5c"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      /> 
    </View> 
    <TouchableOpacity>
      <Text style={styles.forgot_button}>Forgot Password?</Text> 
    </TouchableOpacity> 
    <TouchableOpacity style={styles.loginBtn}>
      <Text style={styles.loginText}>LOGIN</Text> 
    </TouchableOpacity> 
  </View>
  );
};

export default Login;

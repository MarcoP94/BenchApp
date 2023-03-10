import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Pages/Home";
import ProductPage from "../Pages/ProductPage";

const Stack = createNativeStackNavigator();

const StackHomeNav = () => {
  return (
    
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={({ route }) => ({ title: "Welcome, UserName" })}/>
        <Stack.Screen name="ProductPage" component={ProductPage} options={({ route }) => ({ title: route.params.item.name })}/>
      </Stack.Navigator>
    
  );
};

export default StackHomeNav;

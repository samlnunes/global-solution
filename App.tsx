import { Chat, Home, Login, Medicines } from "./src/pages";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Toast from "react-native-toast-message";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Início">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Início"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Medicamentos"
          component={Medicines}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>

      <Toast position="top" topOffset={50} />
    </NavigationContainer>
  );
}

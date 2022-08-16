import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { TailwindProvider } from "tailwindcss-react-native";
import QuestionScreen from "./screens/QuestionScreen";
import ScoreScreen from "./screens/ScoreScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen name="questions" component={QuestionScreen} />
          <Stack.Screen name="score" component={ScoreScreen} />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}

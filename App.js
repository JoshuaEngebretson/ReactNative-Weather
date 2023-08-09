import {
	StyleSheet,
	Text,
	View,
	StatusBar,
	SafeAreaView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ForecastList from "./components/ForecastList";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar
				backgroundColor="teal"
				animated
				barStyle={"default"}
				hidden={false}
			/>
			<ForecastList />
			<NavigationContainer>
				{/* Similar to a Router */}
				<Stack.Navigator initialRouteName="Weekly Forecast">
					{/* Similar to Route */}
					<Stack.Screen
						name="Weekly Forecast"
						component={ForecastList}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

import { View, Text } from "react-native";

export default function ForecastDetails({ route }) {
	const { name, temperature, number } = route.params;
	return (
		<View>
			<Text>
				{name} - {temperature}
			</Text>
		</View>
	);
}

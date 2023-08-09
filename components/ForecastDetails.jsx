import { View, Text } from "react-native";

export default function ForecastDetails({
	temperature,
	name,
	number,
}) {
	return (
		<View>
			<Text>
				{name} {temperature}
			</Text>
		</View>
	);
}

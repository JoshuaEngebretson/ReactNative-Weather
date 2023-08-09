import { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";

export default function ForecastList() {
	// Similar to useHistory()
	const navigation = useNavigation();

	const [forecast, setForecast] = useState([
		{
			temperature: 80,
			name: "Mostly Sunny",
			number: 1,
		},
		{
			temperature: 91,
			name: "Sunny",
			number: 2,
		},
		{
			temperature: 60,
			name: "Mostly Cloudy",
			number: 3,
		},
		{
			temperature: 75,
			name: "Rainy",
			number: 4,
		},
	]);

	const [location, setLocation] = useState();
	const getLocation = async () => {
		let { status } =
			await Location.requestForegroundPermissionsAsync();
		if (status !== "granted") {
			console.log("permission not granted");
			return;
		}
		let currentLocation = await Location.getCurrentPositionAsync(
			{}
		);
		setLocation(currentLocation);
	};

	return (
		<View style={{ height: "100%" }}>
			{/* Similar to .map to display data */}
			<FlatList
				data={forecast}
				renderItem={({ item }) => (
					<TouchableOpacity
						style={{
							padding: 20,
							borderColor: "gray",
							borderBottomWidth: 1,
						}}
						onPress={() => {
							console.log(
								`You pressed a button for '${item.name}'!`
							);
							//                    name    props
							navigation.navigate("Details", item);
						}}
					>
						<Text>
							{item.name} - {item.temperature}
						</Text>
					</TouchableOpacity>
				)}
				style={{ width: "100%" }}
			/>
		</View>
	);
}

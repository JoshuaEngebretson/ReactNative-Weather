import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
	const [timesPressed, setTimesPressed] = useState(0);

	let textLog = "";
	if (timesPressed > 1) {
		textLog = timesPressed + "x onPress";
	} else if (timesPressed > 0) {
		textLog = "onPress";
	}

	return (
		<View style={styles.container}>
			<Text>Hello World!</Text>
			<Pressable
				onPress={() => {
					setTimesPressed((current) => current + 1);
				}}
				style={({ pressed }) => [
					{
						backgroundColor: pressed
							? "rgb(210, 230, 255)"
							: "white",
					},
					styles.wrapperCustom,
				]}
			>
				{({ pressed }) => (
					<Text>{pressed ? "Pressed!" : "Press Me"}</Text>
				)}
			</Pressable>
			<View style={styles.logBox}>
				<Text testId="pressable_press_console">
					{textLog}
				</Text>
			</View>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	wrapperCustom: {
		borderRadius: 8,
		padding: 6,
	},
	text: {
		fontSize: 16,
	},
	logBox: {
		padding: 20,
		margin: 10,
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: "#f0f0f0",
		backgroundColor: "#f9f9f9",
	},
});

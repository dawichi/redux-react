import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default ({ desc, onPress }) => {
	return (
		<TouchableOpacity onPress={onPress} style={styles.container}>
			<Text style={styles.text}>{desc}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 15,
		height: 60,
		justifyContent: 'center',
		backgroundColor: '#eee',
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
	},
	text: {
		fontSize: 18,
	}
})

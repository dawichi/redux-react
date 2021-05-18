import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

export default ({ onChange, value, onSubmit }) => {
	return (
		<TextInput
			style={styles.input}
			placeholder="Create new todo..."
			onChangeText={onChange}
			value={value}
			onSubmitEditing={onSubmit}
		/>
	)
}

const styles = StyleSheet.create({
	input: {
		backgroundColor: '#eee',
		height: 40,
		alignSelf: 'stretch',
		borderColor: '#ccc',
		paddingLeft: 10,
	}
})

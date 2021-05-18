import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import { ListItem, Input } from './components'
import { complete, submit } from './reducers/todos'

const App = ({ data, complete, submit }) => {

	const [value, setValue] = useState('')

	const handleChange = (val) => {
		setValue(val)
	}

	const handleSubmit = () => {
		submit(value)
		setValue('')
	}

	return (
		<View style={styles.container}>
			<Input onChange={handleChange} value={value} onSubmit={handleSubmit} />
			<FlatList
				style={styles.list}
				data={data}
				keyExtractor={x => String(x.id)}
				renderItem={({ item }) =>
					<ListItem
						onPress={() => complete(item.id)}
						desc={item.desc}
						completed={item.completed}
					/>
				}
			/>
		</View>
	)
}

const mapStateToProps = state => {
	// NOTE: Don't modify data here, only call data
	// Heavy operations must be done inside App()
	return { data: state.todos}
}

const mapDispatchToProps = dispatch => ({
	complete: (id) => dispatch(complete(id)),
	submit: (val) => dispatch(submit(val)),
})

const styles = StyleSheet.create({
	container: {
		marginTop: 50,
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
	},
	list: {
		alignSelf: 'stretch',
	},
})


export default connect(mapStateToProps, mapDispatchToProps)(App)

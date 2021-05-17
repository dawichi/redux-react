import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import { ListItem } from './components'

const data = [
	{ id: 1, desc: 'faketodo1', completed: false },
	{ id: 2, desc: 'faketodo2', completed: false },
]

const App = () => {
	return (
		<View style={styles.container}>
			<FlatList
				style={styles.list}
				data={data}
				keyExtractor={x => String(x.id)}
				renderItem={({ item }) =>
					<ListItem
						onPress={() => {}}
						desc={item.desc}
					/>
				}
			/>
		</View>
	)
}

const mapStateToProps = state => {
	console.log(state)
	return state
}

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


export default connect(mapStateToProps)(App)

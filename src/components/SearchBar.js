import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
	return (
		<View style={styles.background}>
			<Text>
				<Feather name='search' size={30} color='black' />
				Search Bar
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	background: {
		backgroundColor: '#CCC',
		height: 45,
		borderRadius: 5,
		marginHorizontal: 15,
	},
});

export default SearchBar;

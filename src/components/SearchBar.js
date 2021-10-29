import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
	return (
		<View style={styles.backgroundStyle}>
			<Feather name='search' size={30} color='black' />
			<TextInput placeholder='Chercher' style={styles.inputStyle} />
		</View>
	);
};

const styles = StyleSheet.create({
	backgroundStyle: {
		backgroundColor: '#CCC',
		height: 45,
		borderRadius: 5,
		marginHorizontal: 15,
		flexDirection: 'row',
	},
	inputStyle: {
		borderColor: 'black',
		borderWidth: 1,
		flex: 1,
	},
});

export default SearchBar;

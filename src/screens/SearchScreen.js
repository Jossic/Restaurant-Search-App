import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
	const [term, setTerm] = useState('');
	const [results, setResults] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');

	const searchApi = async () => {
		try {
			const response = await yelp.get('/search', {
				params: {
					limit: 50,
					term,
					location: 'new york',
				},
			});
			setResults(response.data.businesses);
		} catch (error) {
			setErrorMessage('Une erreur est survenue');
		}
	};

	return (
		<View>
			<SearchBar
				term={term}
				onTermChange={setTerm}
				onTermSubmit={searchApi}
			/>
			{errorMessage ? <Text>{errorMessage}</Text> : null}
			<Text>{results.length} résultats trouvés</Text>
		</View>
	);
};

export default SearchScreen;

const styles = StyleSheet.create({});

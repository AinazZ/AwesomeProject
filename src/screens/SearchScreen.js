import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';

import yelp from '../api/yelp';

const SearchScreen = ({ navigation }) => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async () => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        } catch(error) {
            setErrorMessage('Something went wrong');
        }
    };

    useEffect(() => {
        searchApi('pasta');
    }, []);

    return (
        <View>
            <SearchBar term={term} onChangeTerm={setTerm} onSubmitTerm={searchApi} />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;

import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';

const SearchScreen = ({ navigation }) => {
    const [term, setTerm] = useState('');

    return (
        <View>
            <SearchBar 
                term={term} 
                onChangeTerm={newTerm => setTerm(newTerm)}
                onSubmitTerm={() => console.log('term was submitted')} />
            <Text>Search Screen</Text>
            <Text>{term}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;

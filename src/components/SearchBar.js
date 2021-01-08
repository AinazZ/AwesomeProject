import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchBar = ({ term, onChangeTerm, onSubmitTerm }) => {
    return (
        <View style={styles.backgroundStyle}>
            <Icon name="search" style={styles.iconStyle} />
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Search" 
                style={styles.inputStyle}
                value={term}
                onChangeText={onChangeTerm}
                onEndEditing={onSubmitTerm} />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        color: 'black',
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;

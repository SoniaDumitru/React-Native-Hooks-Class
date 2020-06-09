import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    return(
        <View>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}>
            </SearchBar>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found: {results.length} results</Text>
            <ResultsList />
            <ResultsList />
            <ResultsList />
        </View>
    );
};

// Call searchApi when component is first rendered = BAD CODE :) 

const styles = StyleSheet.create({

});

export default SearchScreen;

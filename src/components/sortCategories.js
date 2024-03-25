import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { sortCategoryData } from '../constants';

const SortCategories = () => {
    const [activeSort, setActiveSort] = useState('Popular');

    return (
        <View style={styles.container}>
            {sortCategoryData.map((sort, index) => {
                let isActive = sort === activeSort;
                let activeButtonStyle = isActive ? { backgroundColor: 'white', shadowColor: 'black', shadowOpacity: 0.2, shadowRadius: 2, shadowOffset: { width: 0, height: 2 } } : {};

                return (
                    <TouchableOpacity key={index} style={[styles.touchable, activeButtonStyle]} onPress={() => setActiveSort(sort)}>
                        <Text className="font-semibold" style={{ fontSize: 14, color: isActive ? '#e32f45' : '#748c94' }}>{sort}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = {
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginHorizontal: 10,
        backgroundColor: '#E2E8F0',
        borderRadius: 999,
        paddingVertical: 4,
        paddingHorizontal: 16,
    },
    touchable: {
        padding: 8,
        paddingHorizontal: 12,
        borderRadius: 999,
        flexDirection: 'row',
        alignItems: 'center',
    },
};

export default SortCategories;
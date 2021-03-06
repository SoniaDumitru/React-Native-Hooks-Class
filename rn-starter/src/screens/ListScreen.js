import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'sonia', age: 10 },
        { name: 'diana', age: 10  },
        { name: 'lili', age: 10  },
        { name: 'sonia', age: 10  },
        { name: 'diana', age: 10  },
        { name: 'sonia', age: 10  },
        { name: 'diana', age: 10  },
        { name: 'lili', age: 10  },
        { name: 'sonia', age: 10  },
        { name: 'diana', age: 10  },
        { name: 'sonia', age: 10  },
        { name: 'diana', age: 10  },
        { name: 'sonia', age: 10  },
        { name: 'diana', age: 10  },
        { name: 'lili', age: 10  },
        { name: 'sonia', age: 10  },
        { name: 'diana', age: 10  }
    ]
    return (
        <FlatList 
            showsHorizontalScrollIndicator={false}
            keyExtractor={(friend) => friend.name}
            data={friends} 
            renderItem={({item}) => {
            return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
            }}
        />
    )
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;
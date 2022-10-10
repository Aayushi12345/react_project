import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  Button,
  Image,
} from 'react-native';

// get data from this URL!
const movieURL = 'https://api.sampleapis.com/coffee/hot';

const FetchDataButtonClick = () => {
  // managing state with 'useState'
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  // similar to 'componentDidMount', gets called once
  useEffect(() => {
    getMoviesAsync();
  }, []);

  //   Also get call asynchronous function
  const getMoviesAsync = async () => {
    try {
      let response = await fetch(movieURL);
      let json = await response.json();
      setData(json);
      setLoading(false);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* While fetching show the indicator, else show response*/}
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          {/* Title from URL */}
          <Button
            title="Flat Lists"
            color="#841584"
            onPress={() => getMoviesAsync()}
          />

          <FlatList
            data={data}
            keyExtractor={({id}, index) => id}
            renderItem={({item}) => (
              <View style={{paddingBottom: 10}}>
                <Image
                  style={{width: 200, height: 200}}
                  source={{uri: item.image}}
                />

                <Text style={styles.movieText}>
                  {item.id.toString()},{item.description}, {item.title}
                </Text>
              </View>
            )}
          />
          {/* Show the description */}
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 48,
  },
  movieText: {
    fontSize: 26,
    fontWeight: '200',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  description: {
    textAlign: 'center',
    marginBottom: 18,
    fontWeight: '200',
    color: 'green',
  },
});
export default FetchDataButtonClick;

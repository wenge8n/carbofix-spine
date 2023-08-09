import React from 'react';
import {Text, View} from 'react-native';
import Pdf from 'react-native-pdf';
import styles from './styles';

const PDFViewer = ({route}) => {
  return (
    <View style={styles.container}>
      <Pdf
        source={{
          uri: route.params.uri,
          cache: true,
        }}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onError={error => {
          console.log(error);
        }}
        style={styles.pdf}
        renderActivityIndicator={progress => (
          <Text>{(progress * 100).toFixed()}%</Text>
        )}
        trustAllCerts={false}
      />
    </View>
  );
};

export default PDFViewer;

import React from 'react';
import {View, Button} from 'react-native';
import styles from './styles';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        title="file-sample_150kB"
        onPress={() =>
          navigation.navigate('PDFViewer', {
            uri: 'https://file-examples.com/storage/fe1dbaea7664d369bb6e226/2017/10/file-sample_150kB.pdf',
          })
        }
      />

      <Button
        title="file-example_PDF_1MB"
        onPress={() =>
          navigation.navigate('PDFViewer', {
            uri: 'https://file-examples.com/storage/fe1dbaea7664d369bb6e226/2017/10/file-example_PDF_1MB.pdf',
          })
        }
      />
    </View>
  );
};

export default Home;

import React from 'react';
import {View, Button} from 'react-native';
import styles from './styles';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        title="file-example_PDF_1MB"
        onPress={() =>
          navigation.navigate('PDFViewer', {
            uri: 'https://file-examples.com/storage/fe1dbaea7664d369bb6e226/2017/10/file-example_PDF_1MB.pdf',
          })
        }
      />

      <Button
        title="Radiation Oncology CarboClear X Pedicle Presentation - Short 27.7.2023-Video Test"
        onPress={() =>
          navigation.navigate('PDFViewer', {
            uri: 'https://carbofix.box.com/shared/static/igc22s3iu0pbvrj5mjufmsyj7tbmhrba.pdf',
          })
        }
      />
    </View>
  );
};

export default Home;

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

      <Button
        title="IFU - TEC 2531_003_US - CarboClear Cervical Plate System - 2023-01-15"
        onPress={() =>
          navigation.navigate('PDFViewer', {
            uri: 'https://carbofix.app.box.com/s/24n7on69zvau35r1qsudhvcfvjhy90sg/file/1144342694850',
          })
        }
      />

      <Button
        title="Radiation Oncology CarboClear X Pedicle Presentation - Short 27.7.2023-Video Test"
        onPress={() =>
          navigation.navigate('PDFViewer', {
            uri: 'https://carbofix.app.box.com/s/igc22s3iu0pbvrj5mjufmsyj7tbmhrba',
          })
        }
      />

      <Button
        title="Oncology CarboClear X Pedicle Screws Sales Call Hub 1.8.2023-Video Included"
        onPress={() =>
          navigation.navigate('PDFViewer', {
            uri: 'https://carbofix.app.box.com/s/0mikwab40psmgs6uksxtn5szucc99nke',
          })
        }
      />
    </View>
  );
};

export default Home;

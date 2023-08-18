import React from 'react';
import {Platform, Text, View} from 'react-native';
import Pdf from 'react-native-pdf';
import PSPDFKitView from 'react-native-pspdfkit';
import styles from './styles';

const DOCUMENT =
  Platform.OS === 'ios' ? 'Sample.pdf' : 'file:///android_asset/Sample.pdf';

const PDFViewer = ({route}) => {
  return (
    <View style={styles.container}>
      {false ? (
        <Pdf
          source={{
            uri: route.params.uri,
            cache: true,
          }}
          onLoadComplete={numberOfPages => {
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
      ) : (
        <PSPDFKitView
          document={DOCUMENT}
          showNavigationButtonInToolbar={false}
          showCloseButton={false}
          configuration={{
            showThumbnailBar: 'scrollable',
            pageTransition: 'scrollContinuous',
            scrollDirection: 'vertical',
          }}
          style={styles.pdf}
        />
      )}
    </View>
  );
};

export default PDFViewer;

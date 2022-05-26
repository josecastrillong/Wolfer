/* eslint-disable max-len */
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from '@react-pdf/renderer';
// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
    color: '#000000',
    fontFamily: 'Helvetica',
    padding: 20,
  },
  title: {
    margin: 10,
    padding: 10,
    textAlign: 'center',
  },
  text: {
    margin: 10,
    padding: 10,
    textAlign: 'justify',
  },
  viewer: {
    width: window.innerWidth, // the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
});

// Create Document Component
function Contract() {
  const date = new Date();

  return (
    <PDFViewer style={styles.viewer}>
      {/* Start of the document */}
      <Document>
        {/* render a single page */}
        <Page size="A4" style={styles.page}>
          <View style={styles.title}>
            <Text>CONTRATO DE COMPRA DE BLOQUES</Text>
          </View>
          <View style={styles.text}>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quos natus molestias quis possimus sequi omnis labore pariatur, illum ipsum expedita fugiat corporis veritatis incidunt maiores veniam quae ad ut?</Text>
          </View>
          <View style={styles.text}>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quos natus molestias quis possimus sequi omnis labore pariatur, illum ipsum expedita fugiat corporis veritatis incidunt maiores veniam quae ad ut?</Text>
          </View>
          <View style={styles.text}>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quos natus molestias quis possimus sequi omnis labore pariatur, illum ipsum expedita fugiat corporis veritatis incidunt maiores veniam quae ad ut?</Text>
          </View>
          <View style={styles.text}>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quos natus molestias quis possimus sequi omnis labore pariatur, illum ipsum expedita fugiat corporis veritatis incidunt maiores veniam quae ad ut?</Text>
          </View>
          <View style={styles.text}>
            <Text>
              Este contrato se generó en a fecha
              {' '}
              {date.toLocaleDateString()}
            </Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default Contract;

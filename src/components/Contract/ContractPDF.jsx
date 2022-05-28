/* eslint-disable max-len */
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from '@react-pdf/renderer';
import styles from './styles.module.css';

// Create styles
const styleMU = StyleSheet.create({
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
    Width: '80%',
    Height: '100%',
  },
});

// Create Document Component
function Contract() {
  const date = new Date();

  return (
    <div className={styles.container}>
      <PDFViewer style={styleMU.viewer}>
        {/* Start of the document */}
        <Document>
          {/* render a single page */}
          <Page size="A4" style={styleMU.page}>
            <View style={styleMU.title}>
              <Text>CONTRATO DE COMPRA DE BLOQUES</Text>
            </View>
            <View style={styleMU.text}>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quos natus molestias quis possimus sequi omnis labore pariatur, illum ipsum expedita fugiat corporis veritatis incidunt maiores veniam quae ad ut?</Text>
            </View>
            <View style={styleMU.text}>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quos natus molestias quis possimus sequi omnis labore pariatur, illum ipsum expedita fugiat corporis veritatis incidunt maiores veniam quae ad ut?</Text>
            </View>
            <View style={styleMU.text}>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quos natus molestias quis possimus sequi omnis labore pariatur, illum ipsum expedita fugiat corporis veritatis incidunt maiores veniam quae ad ut?</Text>
            </View>
            <View style={styleMU.text}>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quos natus molestias quis possimus sequi omnis labore pariatur, illum ipsum expedita fugiat corporis veritatis incidunt maiores veniam quae ad ut?</Text>
            </View>
            <View style={styleMU.text}>
              <Text>
                Este contrato se generó en a fecha
                {' '}
                {date.toLocaleDateString()}
              </Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </div>

  );
}

export default Contract;

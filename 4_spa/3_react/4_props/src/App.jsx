import reactLogo from './assets/react.svg'; // <=== so machen wir das, mit dem direkten link
import viteLogo from '/vite.svg'; // <=== das ist nicht der beste weg

import { 
  Header,
  Page
} from './components';

function App() {

  const students = [
    'Chrissi',
    'Claire',
    'Danny',
    'Ines',
    'Jeery',
    'Lara',
    'Marie',
    'Mehmet',
    'Minas',
    'Ming',
    'Naheeda',
    'Natalia',
    'Nell',
    'Sab',
    'Sabine',
    'Sebastian',
    'Simia',
    'Wael',
    'Xiangyu',
    'Zahra',
    'Zedan',
  ];

  return (
    <>
      {/* um props zu übergeben, schreiben wir sie als argumente in unser JSX element */}
      {/* equivalent zu Header({ title: "Hallo Welt" }); */}

      {/* bei mehreren props ist es übersichtlicher, sie untereiannder zu schreiben */}
      <Header 
        title="Hallo Welt" 
        subTitle="Ich bin der Subtitle!"
      />

      {/* wir setzen unseren Page komponenten ein */}
      <Page
        title="Unterseite"
        bild={reactLogo}
        studentsList={students}
      />
    </>
  );
}

export default App

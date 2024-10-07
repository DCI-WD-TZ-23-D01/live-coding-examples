import reactLogo from './assets/react.svg'; // <=== so machen wir das, mit dem direkten link
import viteLogo from '/vite.svg'; // <=== das ist nicht der beste weg

import {
  Header,
  Page,
  Footer,
  List
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

      <List color="purple">
        {
          students.map((student, i) => (
            <li key={i}>{student}</li>
          ))
        }
      </List>

      <List>
        {
          [1, 2, 3, 4, 5].map((num, i) => (
            <li key={i}>{num}</li>
          ))
        }
      </List>

      <Footer color="tomato" size={4}>
        {/* Die kinder vom footer werden mit children IN den footer übergeben. */}
        <p>HALLO</p>
      </Footer>

      <Footer color="red">
        {/* Die kinder vom footer werden mit children IN den footer übergeben. */}
        <p>JUHU</p>
      </Footer>

      <Footer color="lightblue">
        {/* Die kinder vom footer werden mit children IN den footer übergeben. */}
        <p>Irgendwas anderes</p>
      </Footer>

      <Footer>
        meinen text
      </Footer>

      <p>
        meinen text
      </p>
    </>
  );
}

export default App

import reactLogo from './assets/react.svg'; // <=== so machen wir das, mit dem direkten link
import viteLogo from '/vite.svg'; // <=== das ist nicht der beste weg

import { 
  Header
} from './components';

function App() {

  return (
    <>
      {/* um props zu übergeben, schreiben wir sie als argumente in unser JSX element */}
      {/* equivalent zu Header({ title: "Hallo Welt" }); */}
      <Header title="Hallo Welt" subTitle="Ich bin der Subtitle!"/>
      <Header title="Hallo Claire"/>

      {/* bei mehreren props ist es übersichtlicher, sie untereiannder zu schreiben */}
      <Header 
        title="Hallo Christian" 
      />
    </>
  );
}

export default App

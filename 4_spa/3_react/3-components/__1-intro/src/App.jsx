import { Header } from './components';
import Pingu from './assets/pingu.jpeg';

function App() {
  return (
    <>
      <h1>Komponenten</h1>


      <p>
        Wenn wir komponenten erstellen, gibt es eine bestimmte konvention wie wir diese erstellen, verschiedene andere tutorials mögen dies anders machen, aber ich zeige euch wie ich es in produktion gelernt habe.
      </p>

      <p>
        Innerhalb unsere ./src ordners, erstellen wir einen ordner namens "components"
      </p>

      <p>
        in diesem ordner erstellen wir eine datei namens "index.js", diese nutzen wir als sogenannte "gateway datei", sie ermöglicht uns, unsere imports kürzer zu fassen. anstelle das wir also hingehen müssen und sagen "importiere komponentname aus ordner /components/komponentname/komponentname", können wir dadurch sagen "importiere komponentname aus /components" 
      </p>

      <p>
        Die konvention von der ich vorhin sprach ist, das wir für jeden komponenten einen ordner mit dem komponentennamen erstellen, da drin dann jeweils eine datei mit dem komponentennamen, und eine style datei mit dem komponentennamen. Komponenten werden immer in PascalCase, also mit großem anfangsbuchstaben geschrieben.
      </p>

      <p>
        Dies bedeutet, das die dateien immer so heißen wie der komponent, auch die css klassen und die hauptfunktion des komponenten heißt gleich.
      </p>

      <p>
        Die JSX datei, können wir in unsere gateway datei importieren.
      </p>

      <hr />

      {/* um einen komponenten zu nutzen, schreiben wir seine namen, in html-mäßige klammern, wir rufen ihn sozusagen als element auf */}
      <Header/>
    </>
  )
}

export default App

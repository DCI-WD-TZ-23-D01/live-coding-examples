// Ein komponent besteht aus einer funktion:
// function App() { 
// oder:
const App = () => {

    // innerhalb der funktion schreiben wir unseren javascript code, um zum beispiel daten zu bekommen, inhalte zu verändern, oder listen anzulegen

    // wir erstellen eine liste an usern:
    const userList = [
        {
            firstName: "Max",
            lastName: "Mustermann",
            age: 17
        },
        {
            firstName: "James",
            lastName: "Bond",
            age: 45
        },
        {
            firstName: "Michael",
            lastName: "Knight",
            age: 35
        }
    ];

    const isValid = true;

    const isAdult = (age) => {
        return age > 18;
    };

    // in den return schreiben wir in JSX unseren html/react code:
    return (
        // <></> oder <React.Fragment></React.Fragment> ist eine möglichkeit um in JSX innerhalb eines code blocks mehrere html elemente auf einer ebene zu platzieren.
        <>
            <h2>JavaScript in JSX nutzen</h2>

            <p>
                Wenn wir JavaScript in unserem react code innerhalb des JSX returns nutzen wollen, schreiben wir unseren code in geschwungene klammern, also code blöcke. 
            </p>

            <ul>
                <li><b>WICHTIG:</b> wir müssen auf semikolons verzichten</li>
                <li><b>WICHTIG:</b> die rückgabe wird immer als string ausgegeben</li>
            </ul>

            <b>Beispiel:</b> { 5 + 7 }

            <p>Die berechnung wird ausgeführt und als string zurückgegeben.</p>

            <p>
                { userList[0].firstName } { userList[0].lastName } is:&nbsp; {/* &nbsp; => leerzeichen */}
                {
                    // auswertungen schreiben wir immer als ternary
                    isAdult(userList[0].age) ? "old enough" : "not old enough"
                }
            </p>

            <h2>Kommentare in JSX</h2>

            <p>
                Kommentare werden immer in brackets eingeleitet, und dann im multiline oder jsDoc style geschrieben. innerhalb von code-blocken verhalten sich kommentare genau wie in javascript.
            </p>

            <p>
                In JSX funktieren die gleichen abkürzungen für kommentar,e, wie auch in javascript, also STRG+K / C
            </p>

            {/* ich bin nur eine zeile lang */}

            {/*
              * JSDOC STYLE
              *
              *
              * 
              * 
              * 
              */}

            {/* 
                Ich
                bin
                mehrere
                zeilen
                lang
            */}

            {
                // einzeiler gehen nur, wenn die klammer nicht in der selben zeile ist.
            }

            <h2>For schleifen in JSX = MAP</h2>

            <p>
                Wenn wir durch etwas loopen wollen, und den inhalt ausgeben wollen, nutzen wir immer map. Wir geben jedem element einen KEY, damit jeder eintrag definitiv innerhalb von react nummeriert ist, und der code weiss wo sich ein element befindet.
            </p>

            <ul>
            {
                // innerhalb des map's returnen wir unser gelooptes element mit den gewünschten inhalten:
                // userList.map((user, i) => {
                //     return <li key={i}>{ user.firstName } { user.lastName }</li>
                // })
                userList.map((user, i) => (
                    // im obersten element eines loops geben wir IMMER key an.
                    <li key={i}>
                        <h4>{ user.firstName } { user.lastName }</h4>
                        <p>Ist { user.age } jahre alt</p>
                    </li>
                ))
            }
            </ul>

            <h2>Conditional rendering oder "zeige dinge nur, wenn du darfst!"</h2>

            <p>
                Conditional Rendering funktioniert in react genau wie in der dom, wir sagen "Wenn X zutrifft, zeige etwas an, wenn Y zutrifft, zeige etwas anderes"
            </p>

            <h3>Markiere volljährige mitglieder:</h3>

            <ul>
                {
                    userList.map((user, i) => (
                        <li 
                            key={i}
                            style={
                                // der style block ist der gleiche wie in der DOM, es ist ein objekt, das wir einfügen und direkt bearbeiten können.
                                {
                                    width: "200px",
                                    color: "blue",
                                    backgroundColor: isAdult(user.age) ? 'lime' : 'tomato',
                                    borderRadius: "5px",
                                    marginBottom: "10px"
                                }
                            }
                        >
                            {i + 1}: { user.firstName } { user.lastName }
                        </li>
                    ))
                }
            </ul>

            <p>
                Wir können mit diesen ternaries auch die ansicht ganzer html elemente steuern:
            </p>

            {
                // um html/jsx in einem ternary zu returnen setzen wir runde klammern in die abfragen:
                isValid ? 
                (
                    <div style={{ background: "lime", width: "200px", padding: "20px" }}>
                        <p>isValid is true</p>
                    </div>
                ) : (
                    <div style={{ background: "tomato", width: "200px", padding: "20px" }}>
                        <p>isValid is false</p>
                    </div>
                )
            }

            { isValid ? 'true' : 'false' }

            <p>
                mit && können wir auch NUR das true nutzen:
            </p>

            {
                isValid && (<div style={{ background: "orange"}}>ICH BIN DAAAAA!</div>)
            }

            <p>Wichtig ist, das wir die unterschiede der klammern in JSX bedenken:</p>

            <ul>
                <li>() => html elemente innerhalb von javascript returnen</li>
                <li>{ "{}" } => Ein javascript code block innerhalb von JSX</li>
            </ul>

            <p>Beispiel onClick:</p>

            <button onClick={(e) => alert(e.target.tagName)}>Klick mich!</button>
        </>
    )
}

export default App

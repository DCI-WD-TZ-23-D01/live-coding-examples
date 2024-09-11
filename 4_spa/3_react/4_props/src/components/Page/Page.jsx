import './Page.css';

export const Page = ({
    title, // wir legen eine prop für den "title" an
    bild,
    studentsList, // das array mit den studenten
}) => {

    console.log(studentsList);

    return (
        <main className="Page">
            <h3>{title}</h3>
            <img src={bild} alt="" />

            {
                // if (studentsList) {...}
                studentsList && (
                    <>
                        <p>Wieviele studenten hat die klasse: {studentsList.length}</p>

                        <ul>
                            {
                                // studentsList ist ein array, wir mappen also durch jeden eintrag, und übergeben den inhalt der jeweiligen position als "student", und die position als "i"
                                studentsList.map((student, i) => (
                                    <li key={i}>{student}</li>
                                ))
                            }
                        </ul>

                    </>
                )
            }
        </main>
    )
}

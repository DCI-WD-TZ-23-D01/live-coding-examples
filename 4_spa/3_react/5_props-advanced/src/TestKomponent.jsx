import React from 'react'

// um parameter zu übergeben, von denen wir nicht wissen, welche es sein werden, nutzen wir den rest operator "...props", in javascript nannten wir diesen operator immer: 
// ...rest

export const TestKomponent = ({ text, ...props }) => {
    console.log(props)
    return (
        // um zum beispiel style zu übergeben, können wir den ...props rest operator in unsere oberste div innerhalb des komponenten einfügen, und so alles übergeben, was wir noch angeben wollen. durch unsere übergabe von "styles", sind die styles, die wir im elternkomponenten angegeben haben, also jetzt teil der oberen div im komponenten.
        <div {...props}>
            <div style={{ background: "tomato", margin: "1rem"}}>
                {text}
            </div>
        </div>
    )
}

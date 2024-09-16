// um die leere Header.jsx mit dem komponentenkonstrukt Header zu füllen, nutze ich eines der folgenden kommandos: 

// rfc = ein default exportierter funktions komponent mit dem automatischen namen Header
// rfce = der selbe komponent, aber mit dem export am ende
// rfcp = (DEPRACATED) der selbe komponent mit proptypes / nicht mehr erlaubt.
// rafc = (mein stil) auch in produktion meist genutzt, gut für biblotheken.
// rafce = der selbe komponent als arrow function mit default export am ende

import React from 'react';

export const Header = () => {
    return (
        <div>Header</div>
    )
}

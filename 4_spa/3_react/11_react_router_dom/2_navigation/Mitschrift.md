# Navigation mit React Router

## Routen

Es gibt vier verschiedene Arten von Routen:

- statische Route: z.B. "/contacts"
- Index-Route: Standard-Seite für eine Parentseite
- Wildcard-Seite
- (Morgen)

## Navigation

Es gibt drei verschiedene Arten von Navigation:

- `<Link />` bzw. `<NavLink />` - **aktiv:** wir müssen drauf klicken, damit etwas passiert
- `<Navigate />` - arbeitet **passiv:** wird ausgeführt, wenn Komponente angezeigt (gerendert) wird / _"Funktionale Komponente"_ (weil sie etwas tut, anstatt etwas anzuzeigen)
- `useNavigate` Hook - wird durch **JS-Programmierung** ausgelöst (im JS-Bereich, also vor return)

### useNavigate Hook

```js
import { useNavigate } from "react-router-dom";

// ...

const navigate = useNavigate(); 
// "navigate" ist der Name, der sich durchgesetzt hat
```

## Extra-Infos: Hooks

- "Plugins" / "Extensions" (Erweiterungen) für Komponenten
- fangen alle mit "use" an
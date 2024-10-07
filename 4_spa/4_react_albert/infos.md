import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
plugins: [react()],
resolve: {
alias: {
"@styles": path.resolve(**dirname, "./src/styles/scss"),
"@components": path.resolve(**dirname, "./src/components"),
"@pages": path.resolve(\_\_dirname, "./src/pages"),
},
},
})
vorsicht mit den pfaden die sind hierbei wichtig:
Die Ordnerstruktur müsste wie folgt aussehen in eurem ./src Ordner:
src/styles/scss/
src/components/
src/pages/
achtet darauf das Ende jeder Zeile entsprechend eurer Pfade anzupassen :slightly_smiling_face:
Somit könnt ihr zukünftig eure styles oder components etc leichter importieren wie z.B. mit
import '@styles/meineDatei.scss'
oder
import Header from '@components/Header.jsx' (edited)

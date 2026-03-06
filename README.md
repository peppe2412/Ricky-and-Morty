# 🛸 Rick and Morty Explorer

Un'applicazione web (Single Page Application) sviluppata in React che permette di esplorare l'universo di Rick and Morty interagendo con la [Rick and Morty API](https://rickandmortyapi.com/) ufficiale.

## 📖 Descrizione del Progetto

Il progetto funge da enciclopedia/wiki interattiva per la serie animata Rick and Morty. Gli utenti possono:
- Visualizzare ed esplorare l'elenco dei **Personaggi**, filtrandoli in base a stato (vivo/morto/sconosciuto), specie e genere.
- Consultare i dettagli di un singolo **Personaggio**.
- Esplorare gli **Episodi** della serie e vederne i dettagli.
- Esplorare le **Location** (Luoghi) e i relativi dettagli.
- Navigare fluidamente grazie a un'interfaccia utente arricchita da animazioni allo scroll e da un design moderno e responsivo.

## 🚀 Tecnologie Utilizzate

Questo progetto è stato costruito utilizzando un moderno ecosistema di sviluppo front-end:

- **[React](https://react.dev/) (v19)**: Libreria JavaScript core per la costruzione di interfacce utente dinamiche basata su componenti.
- **[Vite](https://vitejs.dev/) (v7)**: Strumento di build e server di sviluppo modernissimo, configurato per React, che garantisce tempi di caricamento e Hot Module Replacement (HMR) fulminei.
- **[React Router](https://reactrouter.com/) (v7)**: Per la gestione del routing lato client (SPA), permettendo la navigazione istantanea tra le pagine dell'applicativo (personaggi, episodi, ecc.) inclusa la gestione degli errori 404 (Not Found).
- **[Tailwind CSS](https://tailwindcss.com/) (v4)**: Framework CSS Utility-first che permette di realizzare stili rapidi, personalizzati e completamente responsivi direttamente nel markup.
- **[DaisyUI](https://daisyui.com/) (v5)**: Plugin per Tailwind CSS che arricchisce il framework con componenti UI semantici pre-costruiti e temi pronti all'uso.
- **[Axios](https://axios-http.com/)**: Client HTTP basato su Promise utilizzato per semplificare e centralizzare le richieste asincrone verso le REST API pubbliche di Rick and Morty.
- **[AOS - Animate On Scroll](https://michalsnik.github.io/aos/)**: Libreria leggera utilizzata per gestire accattivanti animazioni degli elementi visivi durante lo scroll della pagina.

## 📁 Struttura del Progetto

La directory principale di sviluppo `src` è organizzata nel seguente modo:

- `/api/` - Contiene la logica e i metodi configurati con Axios per effettuare richieste centralizzate all'API.
- `/assets/` - Immagini statiche e risorse multimediali impiegate nell'interfaccia.
- `/components/` - Componenti React "dumb" o riutilizzabili (Navigazione, Layout, Card di visualizzazione, ecc.).
- `/pages/` - Componenti primari che definiscono la view per ogni specifica rotta (Home, SingleCharacter, Episodes, Locations, e NotFound).
- `/routing/` - Configurazione centralizzata dei path di React Router.

## ⚙️ Come eseguire il progetto in locale

1. Clona il repository sul tuo computer.
2. Assicurati di avere [Node.js](https://nodejs.org/) installato.
3. Apri un terminale nella cartella del progetto e installa le dipendenze:
   ```bash
   npm install
   ```
4. Avvia il server di sviluppo in locale:
   ```bash
   npm run dev
   ```
5. Apri il browser all'indirizzo indicato dal terminale (tipicamente `http://localhost:5173`).

## 🛠️ Comandi Disponibili

- `npm run dev`: Avvia il web server di sviluppo locale.
- `npm run build`: Compila l'app e la ottimizza per la produzione all'interno della cartella `dist`.
- `npm run preview`: Avvia un server locale per testare e visualizzare l'anteprima della build di produzione appena generata.
- `npm run lint`: Esegue ESLint per scansionare il codice e indicare potenziali problemi di sintassi o standard.

## 📝 API di Riferimento
I dati testuali e le immagini mostrate all'interno dell'app provengono dalla documentazione pubblica: [The Rick and Morty API](https://rickandmortyapi.com/documentation).

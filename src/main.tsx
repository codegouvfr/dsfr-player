/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import ReactDOM from "react-dom/client"
import "animate.css";
import { startReactDsfr } from "@codegouvfr/react-dsfr";
import { useEffect } from "react";
import { ReactNode } from "react";
import { Evt } from "evt";
import { useRerenderOnStateChange } from "evt/hooks";
import { getColors } from "@codegouvfr/react-dsfr";
import { useConst } from "powerhooks/useConst";
startReactDsfr({ defaultColorScheme: "light" });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

function App() {

  const evtText = useConst(() => Evt.create<Omit<Sentence, "duration"> & { i: number; }>({
    text: "",
    effect: undefined,
    i: -1
  }));

  useEffect(() => {

    (async () => {

      await new Promise(resolve => setTimeout(resolve, 500));

      for (let i = 0; i < sentences.length; i++) {

        const { text, effect, duration } = sentences[i];

        evtText.state = { text, effect, i };

        await new Promise(resolve => setTimeout(resolve, duration));

      }

    })();

  }, []);

  useRerenderOnStateChange(evtText);

  const { text, effect, i } = evtText.state;

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
      }}
    >
      <h1 key={i} className={`animate__animated ${effect ?? ""}`}>
        {text}
      </h1>
    </div>
  );
}

type Sentence = {
  text: ReactNode;
  effect?: string;
  duration: number;
};

const { decisions } = getColors(false);

const sentences: Sentence[] = [
  {
    text: "The",
    duration: 300
  },
  {
    text: "CodeGouv",
    duration: 500
  },
  {
    text: "team",
    duration: 300
  },
  {
    text: "is",
    duration: 300
  },
  {
    text: "introducing",
    duration: 300
  },
  {
    text: <>The 🇫🇷 Design System <br /> <span style={{ color: decisions.text.title.blueFrance.default }} >React lib</span></>,
    duration: 3000
  },
  {
    text: "you've all been waiting for...",
    effect: "animate__bounceIn",
    duration: 2000
  },
  {
    text: "TypeScript first",
    duration: 1000
  },
  {
    text: <><code>fr-*</code> classes autocompletion</>,
    duration: 1200
  },
  {
    text: "Always up to date",
    duration: 1000
  },
  {
    text: "Unmatched developer experience",
    effect: "animate__bounceIn",
    duration: 1500
  },
  {
    text: "Live sandboxes for every components",
    duration: 1000
  },
  {
    text: "Great documentation",
    duration: 1000
  },
  {
    text: "works with ...",
    duration: 500
  },
  {
    text: "Create React App",
    effect: "animate__bounceOut",
    duration: 1000
  },
  {
    text: "Vite",
    effect: "animate__bounceOut",
    duration: 1000
  },
  {
    text: "Next.js",
    effect: "animate__bounceIn",
    duration: 1000
  },
  {
    text: "Server Side Rendering",
    duration: 1000
  },
  {
    text: "Works without JavaScript",
    duration: 1000
  },
  {
    text: "Auto import of icons",
    duration: 1000
  },
  {
    text: "Remixicon support",
    duration: 1000
  },
  {
    text: "CSS in JSS",
    duration: 1000
  },
  {
    text: "i18n",
    duration: 1000
  },
  {
    text: "Routing libraries integration",
    duration: 1000
  },
  {
    text: "React Router",
    effect: "animate__bounceOut",
    duration: 1000
  },
  {
    text: "Type Route",
    effect: "animate__bounceOut",
    duration: 1000
  },
  {
    text: "TanStack Router",
    effect: "animate__bounceOut",
    duration: 1000
  },
  {
    text: "We got you covered",
    duration: 1000
  },
  {
    text: "MUI support",
    duration: 1000
  },
  //Video MUI
  {
    text: "Join the revolution",
    duration: 1000
  },
  {
    text: "@codegouvfr/react-dsfr",
    effect: "animate__fadeIn",
    duration: 1000
  },
];



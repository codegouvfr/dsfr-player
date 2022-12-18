/* eslint-disable react-hooks/exhaustive-deps */
import ReactDOM from "react-dom/client"
import { useEffect } from "react";
import "animate.css";
import { startReactDsfr, getColors, useIsDark, $clientSideIsDark } from "@codegouvfr/react-dsfr";
import { createMuiDsfrThemeProvider } from "@codegouvfr/react-dsfr/mui";
import CircularProgress from '@mui/material/CircularProgress';
import { DsfrPlayer } from "./DsfrPlayer";
import { useStyles } from "tss-react/dsfr";
import { keyframes } from "tss-react";
import reactLogoSvgUrl from "./reactLogo.svg";
import marianneImgUrl from "./marianne.png";

startReactDsfr({ defaultColorScheme: "system" });

const { MuiDsfrThemeProvider } = createMuiDsfrThemeProvider();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <MuiDsfrThemeProvider>
        <App />
    </MuiDsfrThemeProvider>,
);

function App() {

    const { css } = useStyles();

    const { setIsDark } = useIsDark();

    useEffect(
        () => {
            setIsDark(false);
        },
        []
    );

    return (
        <DsfrPlayer
            //specificIndex={8}
            rootFontSize="1.2rem"
            items={[
                {
                    type: "text",
                    text: "The",
                    duration: 300
                },
                {
                    type: "text",
                    text: "CodeGouv",
                    duration: 500
                },
                {
                    type: "text",
                    text: "team",
                    duration: 300
                },
                {
                    type: "text",
                    text: "is",
                    duration: 300
                },
                {
                    type: "text",
                    text: "introducing",
                    duration: 300
                },
                {
                    type: "bullet points",
                    bulletPoints: [
                        {
                            text: <>The 🇫🇷 Design System</>,
                            duration: 500
                        },
                        {
                            text: <>
                                <div className={css({
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                })}>
                                    <img
                                        src={reactLogoSvgUrl}
                                        className={css({
                                            height: "5rem",
                                            pointerEvents: "none",
                                            "@media (prefers-reduced-motion: no-preference)": {
                                                animation: `${keyframes`
                                                from {
                                                  transform: rotate(0deg);
                                                }
                                                to {
                                                  transform: rotate(360deg);
                                                }
                                              `} infinite 20s linear`
                                            }

                                        })}
                                    />
                                    <span>Library</span>
                                </div>

                            </>,
                            animation: "animate__fadeIn",
                            duration: 1800
                        }
                    ],
                    spacing: "2rem",
                },
                {
                    type: "text",
                    text: <>you've all been waiting for&nbsp;&nbsp;<CircularProgress size="2rem" /></>,
                    animation: "animate__bounceIn",
                    duration: 2000
                },
                {
                    type: "bullet points",
                    bulletPoints: [
                        {
                            text: "TypeScript first",
                            duration: 1000
                        },
                        {
                            text: <><code>fr-*</code> classes autocompletion</>,
                            duration: 1000
                        },
                        {
                            text: "Always up to date",
                            duration: 1000
                        }
                    ]
                },
                {
                    type: "text",
                    text: "Unmatched developer experience",
                    animation: "animate__bounceIn",
                    duration: 1500
                },
                {
                    type: "text",
                    text: "Live sandboxes for every components",
                    duration: 1000
                },
                {
                    type: "text",
                    text: "Great documentation",
                    duration: 1000
                },
                {
                    type: "bullet points",
                    bulletPoints: [
                        {
                            text: "Perfect dark mode integration",
                            duration: 1000
                        },
                        {
                            text: "No white flash",
                            animation: "animate__fadeIn",
                            duration: 1500
                        }
                    ],
                    spacing: "2rem",
                    effect: () => {

                        setTimeout(()=> {

                            setIsDark(!$clientSideIsDark.current);

                        }, 700);


                        return () => {

                            setIsDark(!$clientSideIsDark.current);

                        };
                    }

                },
                {
                    type: "text",
                    text: "works with ...",
                    duration: 500
                },
                {
                    type: "text",
                    text: "Create React App",
                    animation: "animate__bounceOut",
                    duration: 1000
                },
                {
                    type: "text",
                    text: "Vite",
                    animation: "animate__bounceOut",
                    duration: 1000
                },
                {
                    type: "text",
                    text: "Next.js",
                    animation: "animate__bounceIn",
                    duration: 1000
                },
                {
                    type: "text",
                    text: "Server Side Rendering",
                    duration: 1000
                },
                {
                    type: "text",
                    text: "Works without JavaScript",
                    duration: 1000
                },
                {
                    type: "text",
                    text: "Auto import of icons",
                    duration: 1000
                },
                {
                    type: "text",
                    text: "Remixicon support",
                    duration: 1000
                },
                {
                    type: "text",
                    text: "CSS in JSS",
                    duration: 1000
                },
                {
                    type: "text",
                    text: "i18n",
                    duration: 1000
                },
                {
                    type: "text",
                    text: "Routing libraries integration",
                    duration: 1000
                },
                {
                    type: "text",
                    text: "React Router",
                    animation: "animate__bounceOut",
                    duration: 1000
                },
                {
                    type: "text",
                    text: "Type Route",
                    animation: "animate__bounceOut",
                    duration: 1000
                },
                {
                    type: "text",
                    text: "TanStack Router",
                    animation: "animate__bounceOut",
                    duration: 1000
                },
                {
                    type: "text",
                    text: "We got you covered",
                    duration: 1000
                },
                {
                    type: "text",
                    text: "MUI support",
                    duration: 1000
                },
                //Video MUI
                {
                    type: "text",
                    text: "Join the revolution",
                    duration: 1000
                },
                {
                    type: "text",
                    text: "@codegouvfr/react-dsfr",
                    animation: "animate__fadeIn",
                    duration: 3000
                },
                {
                    type: "image",
                    imgUrl: marianneImgUrl,
                    duration: 5000,
                    width: 600
                },
                {
                    type: "music credentials",
                    title: "Teardrops",
                    band: "Bring Me The Horizon",
                    duration: 1000
                },

            ]}
        />
    );

}


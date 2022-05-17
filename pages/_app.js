import "../styles/global.css";

export default function App({ Component, pageProps }) {
  // console.log('dddddddddddddddddddddd: ', Component, pageProps)
  return <Component {...pageProps} />;
}

// 파일 경로: src/pages/_app.js
import "../components/styles/globals.css"; // 글로벌 CSS를 여기서 한 번만 불러옵니다.

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

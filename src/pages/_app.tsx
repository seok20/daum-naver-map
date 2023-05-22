/*
 * Created on Sat May 20 2023
 * Author : HyeonSeok-Lee
 * GitHub : https://github.com/seok20
 * Email : pine9805@kakao.com
 */

import { AppProps } from "next/app";
import { NavermapsProvider } from "react-naver-maps";

function MyApp({ Component, pageProps }: AppProps) {
  const naverAPIKEY = process.env.NEXT_PUBLIC_NAVER_API_KEY || "";
  return (
    <NavermapsProvider ncpClientId={naverAPIKEY}>
      <Component {...pageProps} />
    </NavermapsProvider>
  );
}

export default MyApp;

import { AppProps } from 'next/app'
import { FC } from 'react'
import GlobalStyles from '../styles/global'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

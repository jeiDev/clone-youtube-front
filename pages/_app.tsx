import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SettingContextConsumer, SettingContextProvider } from '~/contexts/hooks/setting.context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SettingContextProvider>
      <SettingContextConsumer>
        {(context) => {
          return (
            <>
              <link rel="stylesheet" href={`/assets/css/variables/${context.theme}.css`} />
              <Component {...pageProps} />
            </>
          )
        }}
      </SettingContextConsumer>

    </SettingContextProvider>
  )
}

export default MyApp


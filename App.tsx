import { StatusBar, Text, View } from 'react-native'
import { ThemeProvider } from 'styled-components'

import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans'

import theme from '@theme/index'
import { Loading } from '@components/Loading'

const App = () => {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar translucent barStyle={'light-content'} />
      {!fontsLoaded ? (
        <View style={{ flex: 1, backgroundColor: theme.Colors.red_700 }} />
      ) : (
        <Loading />
      )}
    </ThemeProvider>
  )
}

export default App

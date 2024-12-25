import { MantineProvider } from "@mantine/core";
import ThePage from "./page/thePage.tsx";
import {theme} from "./theme.ts";
import '@mantine/core/styles.css'
function App() {
  return (
      <MantineProvider theme={theme} >
        <ThePage></ThePage>
      </MantineProvider>
  )
}

export default App

import { Grid, GridItem, Show, useBreakpointValue } from '@chakra-ui/react'
import NavBar from './components/NavBar'

function App() {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });
  return (
    <>
      <Grid templateAreas={{
        base:`"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <GridItem area="main" bg="dodgerblue">
          Main
        </GridItem>
        <Show when={isLargeScreen}>
          <GridItem area="aside" bg="gold">
            Aside
          </GridItem>
        </Show>
      </Grid>
    </>
  )
}

export default App

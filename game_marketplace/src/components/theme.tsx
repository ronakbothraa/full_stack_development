import { ColorModeProvider } from "./ui/color-mode.tsx";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider>{children}</ColorModeProvider>
    </ChakraProvider>
  )
}
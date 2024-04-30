import { ThemeProvider } from "styled-components";
import { Button } from "@/components/Button";
import { defaultTheme } from "@/styles/themes/default";
import { GlobalStyle } from "@/styles/themes/global";

export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary" />
      <GlobalStyle />
    </ThemeProvider>
  );
}

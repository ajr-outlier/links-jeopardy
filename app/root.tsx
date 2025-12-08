import "@mantine/core/styles.css";
import "./fonts/styles.css";

import { ColorSchemeScript, MantineProvider, createTheme } from "@mantine/core";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";

const theme = createTheme({
  fontFamily: "Filicudi",
  headings: {
    fontFamily: "Headoh",
  },
});

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

import ReactDOM from "react-dom/client";
import "@mantine/core/styles.css";
import { App } from "./app";
import { MantineProvider } from "@mantine/core";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { config } from "./shared/config";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <App />
      </MantineProvider>
    </QueryClientProvider>
  </WagmiProvider>
);

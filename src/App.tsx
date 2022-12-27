import { RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";

import { router } from "@/routes";
import NotificationContextProvider from "./contexts/NotificationContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NotificationContextProvider>
        <div className="App">
          <RouterProvider router={router} />
        </div>
      </NotificationContextProvider>
    </QueryClientProvider>
  );
}

export default App;

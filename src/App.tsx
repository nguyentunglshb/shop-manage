import { RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";

import { router } from "@/routes";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
  );
}

export default App;

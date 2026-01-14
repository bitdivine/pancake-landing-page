import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="flex min-h-screen items-center justify-center">
                <h1 className="text-[clamp(4rem,15vw,12rem)] font-bold tracking-tight">pancake</h1>
            </div>
        </QueryClientProvider>
    );
}

export default App;

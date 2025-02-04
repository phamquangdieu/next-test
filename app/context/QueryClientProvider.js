'use client';

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

export const QueryClientContext = ({ children }) => {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}
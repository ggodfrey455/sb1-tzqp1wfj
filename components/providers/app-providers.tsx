import { BundleProvider } from './bundle-provider';

interface AppProvidersProps {
  children: React.ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <BundleProvider>
      {children}
    </BundleProvider>
  );
}
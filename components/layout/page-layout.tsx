import { PageHeader } from './page-header';
import { PageContainer } from './page-container';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  image?: string;
}

export function PageLayout({ children, title, description, image }: PageLayoutProps) {
  return (
    <PageContainer>
      <PageHeader 
        title={title} 
        description={description} 
        image={image} 
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {children}
      </div>
    </PageContainer>
  );
}
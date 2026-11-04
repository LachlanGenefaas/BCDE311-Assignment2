import Header from "./Header.tsx";
import PageFooter from "./PageFooter.tsx";

interface FAQPageProps {
  headerImage: string;
  footerImage: string;
}

export default function FAQPage({ headerImage, footerImage }: FAQPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header image={headerImage} />

      <PageFooter image={footerImage} />
    </div>
  );
}

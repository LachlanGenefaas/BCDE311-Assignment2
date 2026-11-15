import Header from "./Header.tsx";
import PageFooter from "./PageFooter.tsx";

interface ProstateQuizPageProps {
  headerImage: string;
  footerImage: string;
}

export default function ProstateQuizPage({
  headerImage,
  footerImage,
}: ProstateQuizPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header image={headerImage} />
      <main className="page-heading">
        <h1>Prostate Quiz</h1>
        <div className="info-page-introduction">
          <p>Test your knowledge about prostate health and prostate cancer.</p>
        </div>
      </main>
      <PageFooter image={footerImage} />
    </div>
  );
}

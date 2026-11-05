import Header from "./Header.tsx";
import PageFooter from "./PageFooter.tsx";


interface TreatmentsPageProps {
  headerImage: string;
  footerImage: string;
}

export default function TreatmentsPage({ headerImage, footerImage }: TreatmentsPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header image={headerImage} />
      <main className="page-heading">
        <h1>Treatments</h1>

        <h1>On This Page</h1>
        <ul>
          <li><a>Active Surveillance</a></li>
          <li><a>Surgery for prostate cancer</a></li>
          <li><a>Radiation treatment for prostate cancer</a></li>
        </ul>

        <h1>Active Surveillance</h1>
        <h1>Surgery for prostate cancer</h1>
        <h1>Radiation treatment for prostate cancer</h1>




      </main>
      <PageFooter image={footerImage} />
    </div>
  );
}

import Header from "./Header.tsx";
import PageFooter from "./PageFooter.tsx";
import type { ReactNode } from "react";

interface InfoPageProps {
  headerImage: string;
  footerImage: string;
  title: string;
  introduction: ReactNode;
  sections?: Array<{
    heading: string;
    content: ReactNode;
  }>;
}

export default function InfoPage({
  headerImage,
  footerImage,
  title,
  introduction,
  sections = [],
}: InfoPageProps) {
  const sectionIds = sections.map((section, index) => {
    const slug = section.heading
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    return slug ? `${slug}-${index + 1}` : `section-${index + 1}`;
  });

  return (
    <div className="min-h-screen bg-white">
      <Header image={headerImage} />
      <main className="page-heading">
        <h1>{title}</h1>
        <div className="info-page-introduction">{introduction}</div>
        {sections.length > 0 && (
          <nav className="table-of-contents" aria-label="Table of contents">
            <h1>On This Page</h1>
            <ul>
              {sections.map((section, index) => (
                <li key={section.heading}>
                  <a href={`#${sectionIds[index]}`}>{section.heading}</a>
                </li>
              ))}
            </ul>
          </nav>
        )}
        {sections.map((section, index) => (
          <section className="info-page-section" key={section.heading}>
            <h2 id={sectionIds[index]}>{section.heading}</h2>
            <div className="info-page-content">{section.content}</div>
          </section>
        ))}
      </main>
      <PageFooter image={footerImage} />
    </div>
  );
}

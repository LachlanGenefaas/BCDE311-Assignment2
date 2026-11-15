import Header from "./Header.tsx";
import PageFooter from "./PageFooter.tsx";
import LinkCard from "./LinkCard.tsx";
import Test1 from "../assets/Test1.jpg";
import FAQ1 from "../assets/FAQ1.jpg";
import ProstateCancer1 from "../assets/ProstateCancer1.jpg";
import ProstateCancer2 from "../assets/ProstateCancer2.jpg";
import ProstateCancer3 from "../assets/ProstateCancer3.jpg";
import ProstateCancer4 from "../assets/ProstateCancer4.jpg";
import ProstateCancer5 from "../assets/ProstateCancer5.jpg";
import ProstateQuiz1 from "../assets/ProstateQuiz1.jpg"
import ProstFit1 from "../assets/ProstFit1.jpg";
import SupportGroups1 from "../assets/SupportGroups1.jpg";
import Treatments1 from "../assets/Treatments1.jpg";
import Donate1 from "../assets/Donate1.jpg"

interface UsefulLinksPageProps {
  headerImage: string;
  footerImage: string;
}

const links = [
  { image: FAQ1, title: "FAQs", link: "/faq" },
  { image: Treatments1, title: "Treatments", link: "/treatments" },
  { image: ProstateCancer1, title: "What is Prostate Cancer?", link: "/prostate-cancer" },
  { image: ProstateCancer2, title: "About the Prostate", link: "/about-the-prostate" },
  { image: Test1, title: "Getting Tested", link: "/getting-tested" },
  { image: SupportGroups1, title: "Support Groups", link: "/support-groups" },
  { image: ProstFit1, title: "Prost-Fit", link: "/prost-fit" },
  { image: ProstateCancer3, title: "Rainbow Blue", link: "/rainbow-blue" },
  { image: ProstateCancer4, title: "PCFNZ Support Services", link: "/support-services" },
  { image: ProstateCancer5, title: "About Us", link: "/about" },
  { image: Donate1, title: "Donate", link: "/donate" },
  { image: ProstateQuiz1, title: "Prostate Quiz", link: "/prostate-quiz" },
];

export default function UsefulLinksPage({
  headerImage,
  footerImage,
}: UsefulLinksPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header image={headerImage} />
      <main>
        <h1 className="text-center mb-4">Useful Links</h1>
        <div className="mx-auto mb-12 grid w-full max-w-[1280px] grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((item) => (
            <LinkCard key={item.link} {...item} />
          ))}
        </div>
      </main>
      <PageFooter image={footerImage} />
    </div>
  );
}

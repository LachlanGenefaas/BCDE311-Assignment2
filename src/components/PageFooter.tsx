import { Link } from "react-router-dom";
import iconImg from "../assets/Icon.png";

interface PageFooterProps {
  image: string;
}

export default function PageFooter({ image: _image }: PageFooterProps) {
  return (
    <footer className="mt-12 flex w-full flex-col items-center justify-between gap-6 bg-[var(--colour-header)] px-4 py-5 text-[#1d2d3d] md:flex-row md:items-start md:px-8 lg:px-10">
      <div className="flex min-w-0 w-full flex-col items-center gap-3 md:w-[260px] md:flex-none md:items-start">
        <div className="flex w-full items-center justify-center md:justify-start">
          <Link to="/" aria-label="Return to home page">
            <img
              src={iconImg}
              alt="Footer logo"
              className="h-auto w-full max-w-[260px] object-contain"
            />
          </Link>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-medium md:text-base">
          <span>Call #0800 477 678</span>
          <span>Email: info@prostate.org.nz</span>
        </div>
      </div>

      <nav
        aria-label="Footer navigation"
        className="flex w-full flex-col items-center gap-2 text-sm font-medium md:w-auto md:items-end md:text-base"
      >
        <div className="flex flex-wrap items-center justify-center gap-2 md:justify-end md:gap-6">
          <Link to="/useful-links" className="link">
            Useful Links
          </Link>
          <Link to="/faq" className="link">
            FAQs
          </Link>
          <Link to="/about" className="link">
            About Us
          </Link>
          <Link to="/donate" className="link">
            Donate
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:justify-end md:gap-6">
          <Link to="/getting-tested" className="link">
            Getting Tested
          </Link>
          <Link to="/prostate-quiz" className="link">
            Prostate Quiz
          </Link>
          <Link to="/about-the-prostate" className="link">
            The Prostate
          </Link>
        </div>
      </nav>
    </footer>
  );
}

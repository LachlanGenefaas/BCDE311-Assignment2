import { Link } from "react-router-dom";

interface PageFooterProps {
  image: string;
}

export default function PageFooter({ image }: PageFooterProps) {
  return (
    <footer className="mt-12 flex w-full items-center justify-between gap-6 bg-[var(--colour-header)] px-4 py-5 text-[#1d2d3d] md:px-8 lg:px-10">
      <div className="flex min-w-0 flex-1 flex-col items-center gap-3 md:items-start">
        <div className="flex w-full items-center justify-center md:justify-start">
          <Link to="/" aria-label="Return to home page">
            <img
              src={image}
              alt="Footer logo"
              className="h-16 w-16 object-contain md:h-20 md:w-20"
            />
          </Link>
        </div>

        <div className="flex flex-wrap gap-4 text-sm font-medium md:text-base">
          <span>Call #00000000</span>
          <span>Email: prostate@.com</span>
        </div>
      </div>

      <div className="flex flex-col items-start gap-2 pt-2 text-sm font-medium md:items-end md:text-base">
        <div className="flex flex-wrap items-center gap-4 md:gap-6">
          <Link to="/faq" className="text-[#1d2d3d] no-underline hover:underline">
            FAQs
          </Link>
          <Link to="/about" className="text-[#1d2d3d] no-underline hover:underline">
            About Us
          </Link>
          <Link
            to="/donate"
            className="border border-[#1d2d3d] bg-transparent px-4 py-1 font-semibold text-[#1d2d3d] no-underline hover:underline"
          >
            Donate
          </Link>
        </div>

        <div className="flex flex-wrap gap-4 md:gap-6">
          <a href="#" className="text-[#1d2d3d] no-underline hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="text-[#1d2d3d] no-underline hover:underline">
            Contact Us
          </a>
          <a href="#" className="text-[#1d2d3d] no-underline hover:underline">
            The Prostate
          </a>
        </div>
      </div>
    </footer>
  );
}

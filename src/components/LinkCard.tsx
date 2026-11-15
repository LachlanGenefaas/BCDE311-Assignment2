import { Link } from "react-router-dom";

interface LinkCardProps {
  image: string;
  title: string;
  link: string;
}

export default function LinkCard({ image, title, link }: LinkCardProps) {
  return (
    <Link
      to={link}
      className="LinkCard link-card-link flex aspect-[6/6] w-full max-w-[400px] flex-col items-center gap-2 rounded-4xl border-12 border-[var(--colour-primary)] px-3 pt-3 [@media(min-width:900px)]:flex-[1_1_400px]"
    >
      <div className="h-[58%] w-full overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={title}
          className="block h-full w-full object-cover"
        />
      </div>
      <h3 className="mb-0 flex min-h-0 flex-1 w-full items-center justify-center text-center">
        {title}
      </h3>
    </Link>
  );
}

export default function Event({
  image,
  imageAlt = "Event image",
  title,
  date,
  time,
  admission,
  description,
  buttonLink = "#",
}) {
  return (
    <div className="event-layout">
      <div className="event-image-wrap">
        <img
          className="event-image"
          src={image}
          alt={imageAlt}
        />
      </div>

      <div className="event-details">
        <h2>{title}</h2>

        <div className="event-meta">
          <span>{date}</span>
          <span>{time}</span>
          <span>Admission: {admission}</span>
        </div>

        <div className="event-description">{description}</div>

        <a
          href={buttonLink}
          className="event-button mb-4"
          role="button"
        >
          Join Here
        </a>

        <div className="border-1 border-[#254a77]"></div>
      </div>
    </div>
  );
}
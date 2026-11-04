export default function Event({ image }) {
  return (
    <div className="event-layout">
      <div className="event-image-wrap">
        <img
          className="event-image"
          src={image}
          alt="Cyclist riding with a flag"
        />
      </div>

      <div className="event-details">
        <h2>Pedal4Prostate</h2>

        <div className="event-meta">
          <span>Oct 11</span>
          <span>07:00 - 15:00</span>
          <span>Admission: 0.0</span>
        </div>
        

              <p>
                  
                  The ride is 4 hours. The support you fundraise for lasts a lifetime.

                  Sign up today at pedal4prostate.org.nz

              </p>
              

              <button type="button" className="event-button mb-4">
                  
          Join Here
              </button>
              
        <div className="border-1 border-[#254a77]"></div>
      </div>
    </div>
  );
}
export default function FactBar() {
  return (
    <div className="fact-bar bg-[var(--colour-yellow)]">
      <div className="fact-bar-item">
        <p className="fact-bar-number">740</p>
        <p className="fact-bar-label">Deaths Annually</p>
      </div>

      <div className="fact-bar-item">
        <p className="fact-bar-number">12</p>
        <p className="fact-bar-label">Diagnosed Daily</p>
      </div>

      <div className="fact-bar-item">
        <p className="fact-bar-number">4,500</p>
        <p className="fact-bar-label">Diagnosed Annually</p>
      </div>

      <div className="fact-bar-item">
        <p className="fact-bar-number">2nd</p>
        <p className="fact-bar-label">In Cancer Deaths</p>
      </div>
    </div>
  );
}

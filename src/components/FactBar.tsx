export default function FactBar() {
  return (
    <div className="flex h-28 items-center justify-evenly gap-6 bg-[var(--colour-yellow)] px-4 py-2">
      <div className="flex flex-col items-center justify-center text-center">
        <p className="font-bold text-3xl">740</p>
        <p className="font-medium text-lg">Deaths Annually</p>
      </div>

      <div className="flex flex-col items-center justify-center text-center">
        <p className="font-bold text-3xl">12</p>
        <p className="font-medium text-lg">Diagnosed Daily</p>
      </div>

      <div className="flex flex-col items-center justify-center text-center">
        <p className="font-bold text-3xl">4,500</p>
        <p className="font-medium text-lg">Diagnosed Annually</p>
      </div>

      <div className="flex flex-col items-center justify-center text-center">
        <p className="font-bold text-3xl">2nd</p>
        <p className="font-medium text-lg">In Cancer Deaths</p>
      </div>
    </div>
  );
}

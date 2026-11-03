
export default function FactBar() {
  return (
    <div className="flex flex-row flex-1 bg-[var(--colour-yellow)] !justify-evenly  p-4 flex flex-col items-center justify-center gap-8">
      <div>
        <p className="font-bold text-3xl" >740</p>
        <p className="font-medium text-lg">Deaths Annually</p>
      </div>

      <div>
        <p className="font-bold text-3xl" >12</p>
        <p className="font-medium text-lg">Diagnosed Daily</p>
      </div>

      <div>
        <p className="font-bold text-3xl" >4,500</p>
        <p className="font-medium text-lg">Diagnosed Annually</p>
      </div>

      <div>
        <p className="font-bold text-3xl" >2nd</p>
        <p className="font-medium text-lg">In Cancer Deaths</p>
      </div>

    </div>
  );
}

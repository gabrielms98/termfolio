import { IcRoundMailOutline } from "./icons/Mail";

function Dock() {
  return (
    <section className="absolute bottom-2 left-1/2 -translate-x-1/2 border border-[#454B57] rounded-lg px-2 py-1 flex gap-1 items-center divide-x divide-[#454B57] z-50">
      <div className="flex justify-center items-center">
        <button className="hover:-translate-y-3 transition-transform">
          <IcRoundMailOutline className="w-10" />
        </button>
      </div>
      <div className="pl-1">oasietan</div>
    </section>
  );
}

export default Dock;

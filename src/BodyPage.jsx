import Body from "./components/Body";
import BodyTop from "./components/BodyTop";
export default function BodyPage() {
  return (
    <div className="flex flex-col h-4/5 px-5  gap-5 pb-3">
      <BodyTop />
      <Body/>
    </div>
  );
}

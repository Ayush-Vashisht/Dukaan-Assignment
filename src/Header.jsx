import HeaderLeft from "./components/HeaderLeft";
import HeaderRight from "./components/HeaderRight";
import HeaderSearch from "./components/HeaderSearch";
export default function Header() {
  return (
    <div className="h-1/5 flex  items-center justify-between p-5 border-b-2 bg-white ">
      <HeaderLeft />
      <HeaderSearch />
      <HeaderRight />
    </div>
  );
}

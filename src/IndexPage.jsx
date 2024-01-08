import Bodypage from "./BodyPage";
import Header from "./Header";
import Navpage from "./NavPage";

export default function IndexPage() {
  return (
    <>
      <div className="flex min-w-screen min-h-screen bg-gray-100 ">
        <div className="w-1/6 ">
          <Navpage />
        </div>
        <div className=" w-5/6 flex flex-col">
          <div>
            <Header />
          </div>
          <div>
            <Bodypage />
          </div>
        </div>
      </div>
    </>
  );
}

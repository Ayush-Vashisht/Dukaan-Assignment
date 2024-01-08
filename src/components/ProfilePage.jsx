import { Link } from "react-router-dom";
import Image from "../logo.jpg";

export default function ProfilePage() {
  return (
    <>
      <div className="flex gap-2 p-4">
        <div className="">
          <img src={Image} alt="" className="w-10 h-10 items-center" />
        </div>
        <div className="text-white text-xs ">
          <span className="block font-semibold">Nishyan</span>
          <Link
            to={"/"}
            className="block text-xs underline underline-offset-1 mt-1"
          >
            visit store
          </Link>
        </div>
        <div className="ml-10 mt-4 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3"
            stroke="white"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

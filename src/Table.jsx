import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Data from "./Data";
import BodyFooter from "./components/BodyFooter";
export default function Table() {
  return (
    <div>
      <div className="flex justify-between items-center p-2 bg-gray-200 rounded-sm text-xs text-gray-700">
        <div>Order ID</div>
        <div>
          Order date
          <ArrowDropDownIcon />
        </div>
        <div>Order amount</div>
        <div className="flex items-center  justify-center gap-1  ">
          Transaction fees
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-3 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
            />
          </svg>
        </div>
      </div>
      <Data />
      <BodyFooter />
    </div>
  );
}

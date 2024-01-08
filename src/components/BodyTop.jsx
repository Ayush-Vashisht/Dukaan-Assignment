import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Card from "../Card";
export default function BodyTop() {
  return (
    <>
      <div className="flex justify-between items-center ">
        <div className="font-semibold">Overview</div>
        <div className="border border-solid px-2 py-1 text-sm rounded-sm cursor-pointer">
          Last Month <KeyboardArrowDownIcon />
        </div>
      </div>
      <div className="flex gap-5">
        <Card>
          <span className="block text-gray-500">Online Orders</span>
          <span className="block font-semibold text-3xl">231</span>
        </Card>

        <Card>
          <span className="block text-gray-500">Amount received</span>
          <span className="block font-semibold text-3xl">₹23,92,312.19</span>
        </Card>
      </div>
    </>
  );
}

import SwapVertIcon from "@mui/icons-material/SwapVert";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import Table from "../Table";
export default function Body() {
  return (
    <>
      <div className="font-semibold text-xl">Transactions | This month</div>
      <div className=" shadow shadow-md flex flex-col p-5 gap-5 rounded-md bg-white">
        <div className="flex justify-between items-center ">
          <div className="text-sm">
            <input
              type="text"
              placeholder="Search by orderID..."
              className=" border border-solid px-1 py-1 w-1/4 text-sm  "
            />
          </div>
          <div className="flex gap-2 cursor-pointer">
            <div className="border border-solid px-2 py-1 rounded-md text-gray-500">
              sort <SwapVertIcon />
            </div>
            <div className="border border-solid px-2 py-1 rounded-md text-gray-500">
              <FileDownloadOutlinedIcon />
            </div>
          </div>
        </div>
        <div>
          <Table />
        </div>
      </div>
    </>
  );
}

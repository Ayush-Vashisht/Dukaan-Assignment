import CampaignIcon from "@mui/icons-material/Campaign";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
export default function HeaderRight() {
  return (
    <>
      <div className="flex gap-2 cursor-pointer">
        <div className="bg-gray-300 p-1 rounded-2xl">
          <CampaignIcon />
        </div>
        <div className="bg-gray-300 p-1 rounded-2xl">
          <ArrowDropDownIcon />
        </div>
      </div>
    </>
  );
}

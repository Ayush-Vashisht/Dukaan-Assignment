import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import DiscountOutlinedIcon from "@mui/icons-material/DiscountOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import ElectricBoltOutlinedIcon from "@mui/icons-material/ElectricBoltOutlined";
import GridViewIcon from "@mui/icons-material/GridView";
export default function NavComponentPage() {
  return (
    <>
      <div className="mt-5 text-white flex flex-col gap-4 h-screen">
        <Link
          to={""}
          className="flex hover:bg-[#353d54ff] hover:font-bold px-5 py-1 rounded-md"
        >
          <HomeOutlinedIcon />
          <span className="ml-2 justify-center">Home</span>
        </Link>
        <Link
          to={""}
          className="flex hover:bg-[#353d54ff] hover:font-bold px-5 py-1 rounded-md"
        >
          <AssignmentIcon />
          <span className="ml-2 justify-center">Orders</span>
        </Link>
        <Link
          to={""}
          className="flex hover:bg-[#353d54ff] hover:font-bold px-5 py-1 rounded-md"
        >
          <GridViewIcon />
          <span className="ml-2 justify-center">Products</span>
        </Link>
        <Link
          to={""}
          className="flex hover:bg-[#353d54ff] hover:font-bold px-5 py-1 rounded-md"
        >
          <LocalShippingOutlinedIcon />
          <span className="ml-2 justify-center">Delivery</span>
        </Link>
        <Link
          to={""}
          className="flex hover:bg-[#353d54ff] hover:font-bold px-5 py-1 rounded-md"
        >
          <CampaignOutlinedIcon />
          <span className="ml-2 justify-center">Marketing</span>
        </Link>
        <Link
          to={""}
          className="flex hover:bg-[#353d54ff] hover:font-bold px-5 py-1 rounded-md"
        >
          <BarChartOutlinedIcon />
          <span className="ml-2 justify-center">Analytics</span>
        </Link>
        <Link
          to={""}
          className="flex hover:bg-[#353d54ff] hover:font-bold px-5 py-1 rounded-md"
        >
          <PaymentsOutlinedIcon />
          <span className="ml-2 justify-center">Payment</span>
        </Link>
        <Link
          to={""}
          className="flex hover:bg-[#353d54ff] hover:font-bold px-5 py-1 rounded-md"
        >
          <NearMeOutlinedIcon />
          <span className="ml-2 justify-center">Tools</span>
        </Link>
        <Link
          to={""}
          className="flex hover:bg-[#353d54ff] hover:font-bold px-5 py-1 rounded-md"
        >
          <DiscountOutlinedIcon />
          <span className="ml-2 justify-center">Discounts</span>
        </Link>
        <Link
          to={""}
          className="flex hover:bg-[#353d54ff] hover:font-bold px-5 py-1 rounded-md"
        >
          <PeopleAltOutlinedIcon />
          <span className="ml-2 justify-center">Audience</span>
        </Link>
        <Link
          to={""}
          className="flex hover:bg-[#353d54ff] hover:font-bold px-5 py-1 rounded-md"
        >
          <ColorLensOutlinedIcon />
          <span className="ml-2 justify-center">Appearance</span>
        </Link>
        <Link
          to={""}
          className="flex hover:bg-[#353d54ff] hover:font-bold px-5 py-1 rounded-md"
        >
          <ElectricBoltOutlinedIcon />
          <span className="ml-2 justify-center">Plugins</span>
        </Link>
      </div>
    </>
  );
}

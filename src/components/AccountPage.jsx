import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
export default function AccountPage() {
  return (
    <>
      <div className=" bg-[#363d54ff] text-white flex  items-center gap-1 p-2 mb-2 mx-2 cursor-pointer">
        <div className="block ">
          <AccountBalanceWalletOutlinedIcon />
        </div>
        <div className="flex flex-col text-xs">
          <span className="block">Available credits</span>
          <span className="block font-semibold">222.10</span>
        </div>
      </div>
    </>
  );
}

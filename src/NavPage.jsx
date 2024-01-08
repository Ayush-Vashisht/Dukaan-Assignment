import ProfilePage from "./components/ProfilePage";
import NavComponentPage from "./components/NavComponentPage";
import AccountPage from "./components/AccountPage";
export default function Navpage() {
  return (
    <>
      <div className="bg-[#1e2640ff] h-full flex flex-col p-1 gap-2 justify-between">
        <div>
          <ProfilePage />
          <NavComponentPage />
        </div>
        <AccountPage />
      </div>
    </>
  );
}

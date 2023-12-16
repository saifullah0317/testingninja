import Sidebar from "../components/Sidebar";
// import DashboardNavbar from "../components/DashboardNavbar";
import Dashboard from "../components/Dashboard";
export default function DashboardLayout({
  children
}) {
  return (
    <section>
        {/* <DashboardNavbar/>
        <Sidebar/> */}
        <Dashboard/>
        <div className="p-4 sm:ml-64">
            {children}
        </div>
    </section>
  );
}

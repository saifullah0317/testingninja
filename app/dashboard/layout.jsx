import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";
export default function DashboardLayout({
  children
}) {
  return (
    <section>
        <DashboardNavbar/>
        <Sidebar/>
        <div className="p-4 sm:ml-64 mt-10">
            {children}
        </div>
    </section>
  );
}

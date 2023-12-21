import Dashboard from "../components/Dashboard";
export default function DashboardLayout({
  children
}) {
  return (
    <section>
        <Dashboard/>
        <div className="p-4 sm:ml-64 bg-sgray-100">
            {children}
        </div>
    </section>
  );
}

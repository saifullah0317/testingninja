import Dashboard from "../components/oldDashboard";
export default function check({
  children
}) {
  return (
    <section>
        <Dashboard/>
        <div className="p-4 sm:ml-64 mt-10">
            {children}
        </div>
    </section>
  );
}

import { Icon } from "@iconify/react";
import Card from "../../organisms/Card/Card";
import DashboardTable from "../../organisms/Table/DashboardTable";

function DashboardPage() {
  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <div className="w-screen p-8">
      <div className="space-y-6">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold text-white">Today's Guestlist</h1>
            <span className="text-white">{formattedDate}</span>
          </div>
          <button className="border p-2 rounded-md flex flex-row border-white gap-2">
            <Icon
              icon="lucide:download"
              width="24"
              height="24"
              style={{ color: "white" }} // Use a hex code to match your image's dark green/grey
            />
            <span className="text-white">Export CSV</span>
          </button>
        </div>
        <div className="flex flex-row gap-4">
          <Card title="Total Guest" value="5" color="#3333" />
          <Card title="Total Guest" value="5" color="#3333" />
          <Card title="Total Guest" value="5" color="#3333" />
          <Card title="Total Guest" value="5" color="#3333" />
        </div>
        <DashboardTable />
      </div>
    </div>
  );
}

export default DashboardPage;

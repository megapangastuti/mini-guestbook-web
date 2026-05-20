import { Icon } from "@iconify/react";
import Card from "../../organisms/Card/Card";
import { useEffect, useState } from "react";
import { getAllVisit } from "../../../services/visit.service";
import type { Visit } from "../../../types/visit/visit.types";

function DashboardPage() {
  const [visits, setVisits] = useState<Visit[]>([]);
  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const statusColor: Record<string, string> = {
    WAITING: "bg-yellow-500/20 text-yellow-300",
    CALLED: "bg-blue-500/20 text-blue-300",
    FINISHED: "bg-green-500/20 text-green-300",
  };

  useEffect(() => {
    fetchVisit();
  }, []);

  const fetchVisit = async () => {
    try {
      const getPayload = {
        page: 1,
        per_page: 10,
        search_value: "",
        search_by: "visit_code",
      };
      const res = await getAllVisit(getPayload);
      console.log("data : ", res);
      setVisits(res);
    } catch (error) {
      console.log("Failed to fetch data", error);
    } finally {
      console.log("stop loading");
    }
  };
  return (
    <div className="w-screen p-8">
      <div className="space-y-6">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold text-white">Today's Guestlist</h1>
            <span className="text-white">{formattedDate}</span>
          </div>
          <button className="border p-2 rounded-md flex flex-row border-white gap-2">
            <Icon icon="lucide:download" width="24" height="24" style={{ color: "white" }} />
            <span className="text-white">Export CSV</span>
          </button>
        </div>
        <div className="flex flex-row gap-4">
          <Card title="Total Guest" value="5" color="#3333" />
          <Card title="Waiting" value="5" color="#3333" />
          <Card title="On Call" value="5" color="#3333" />
          <Card title="Finished" value="5" color="#3333" />
        </div>
        <div
          className="
    bg-white/10
    backdrop-blur-lg
    border border-white/20
    rounded-md
    shadow-2xl
    overflow-hidden
    text-white
  "
        >
          <table className="w-full text-md border-collapse">
            <thead className="bg-white/20">
              <tr>
                <th className="p-3 w-fit text-left">No.</th>
                <th className="p-3 w-fit text-left">Code</th>
                <th className="p-3 w-fit text-center">Visit Time</th>
                <th className="p-3 w-fit text-left">Guest Name</th>
                <th className="p-3 w-fit text-left">Company</th>
                <th className="p-3 w-fit text-left">Purpose</th>
                <th className="p-3 w-fit text-center">Status</th>
                <th className="p-3 w-fit text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {visits.map((item, index) => (
                <tr key={item.id} className="border-t border-white/10 hover:bg-white/10 transition">
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{item.visit_code}</td>
                  <td className="p-3 text-center">
                    {item.check_in_at
                      ? new Date(item.check_in_at).toLocaleTimeString("id-ID", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })
                      : "-"}
                  </td>
                  <td className="p-3">{item.visitor_name}</td>
                  <td className="p-3">{item.company}</td>
                  <td className="p-3">{item.purpose}</td>
                  <td className="p-3 flex flex-row justify-center items-center">
                    <Icon icon="mdi:circle" className={`${statusColor[item.status]} text-xs`} />
                    <span className={`p-2 text-center rounded-full text-[11px] font-medium ${statusColor[item.status]}`}>{item.status}</span>
                  </td>
                  <td className="p-3 flex flex-row justify-center gap-2">
                    <button>
                      <Icon icon="heroicons-outline:phone" className="text-xl" />
                    </button>
                    <button>
                      <Icon icon="lucide:eye" className="text-xl" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;

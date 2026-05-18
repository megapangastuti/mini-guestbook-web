import { Icon } from "@iconify/react";
import { visitors } from "../../../data/dashboard/visitors.data";

function DashboardTable() {
  const data = visitors;
  return (
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
            <th className="p-3 text-left">No.</th>
            <th className="p-3 text-left">Visit Time</th>
            <th className="p-3 text-left">Guest Name</th>
            <th className="p-3 text-left">Company</th>
            <th className="p-3 text-left">Purpose</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={item.id} className="border-t border-white/10 hover:bg-white/10 transition">
              <td className="p-3">{index + 1}</td>
              <td className="p-3">
                {new Date(item.check_in_at).toLocaleTimeString("id-ID", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </td>
              <td className="p-3">{item.name}</td>
              <td className="p-3">{item.company}</td>
              <td className="p-3">{item.purpose}</td>
              <td className="p-3">{item.status}</td>
              <td className="p-3 flex flex-row justify-center gap-2">
                {/* <div className="flex gap-2"> */}
                <button>
                  <Icon icon="heroicons-outline:phone" className="text-xl" />
                </button>
                <button>
                  <Icon icon="lucide:eye" className="text-xl" />
                </button>
                {/* </div> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DashboardTable;

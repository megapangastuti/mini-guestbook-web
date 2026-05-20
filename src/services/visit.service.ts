import type { GetVisitPayload } from "../types/visit/visit.types";
import { api } from "./api";

export async function getAllVisit(data: GetVisitPayload) {
  const res = await api.post("/visits/read", data);
  return res.data.data;
}

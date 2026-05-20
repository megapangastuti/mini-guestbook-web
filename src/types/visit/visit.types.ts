export interface Visitor {
  id: string;
  name: string;
  email: string;
  phone: string;
  created_at: Date;
  updated_at: Date;
}

type purpose = "MEETING" | "INTERVIEW" | "DELIVERY" | "CONSULTATION" | "GENERAL";
type status = "WAITING" | "CALLED" | "FINISHED";

export interface Visit {
  id: string;
  visit_code: string;
  visitor_id: string;
  visitor_name: string;
  email: string;
  phone: string;
  company: string;
  purpose: purpose;
  notes: string;
  status: status;
  check_in_at: Date | null;
  called_at: Date | null;
  finished_at: Date | null;
  created_at: Date | null;
  updated_at: Date | null;
}

export interface GetVisitPayload {
  page: number;
  per_page: number;
  search_value: string;
  search_by: string;
}

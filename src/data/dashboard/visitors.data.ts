export type VisitorStatus = "WAITING" | "CALLED" | "FINISHED";

export type VisitPurpose = "MEETING" | "INTERVIEW" | "DELIVERY" | "CONSULTATION" | "GENERAL";

export interface Visitor {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
  company: string | null;
  purpose: VisitPurpose;
  notes: string | null;
  status: VisitorStatus;
  check_in_at: string;
  called_at: string | null;
  finished_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface PaginationMeta {
  page: number;
  limit: number;
  total_data: number;
  total_page: number;
  has_next_page: boolean;
  has_prev_page: boolean;
}

export interface PaginatedVisitors {
  data: Visitor[];
  pagination: PaginationMeta;
}

export const visitors: Visitor[] = [
  {
    id: "VIS-001",
    name: "Kurir JNE",
    email: "kurir@jne.co.id",
    phone: "081234567890",
    company: "JNE Express",
    purpose: "DELIVERY",
    notes: "Mengirim dokumen kontrak",
    status: "WAITING",
    check_in_at: "2026-05-18T10:45:00",
    called_at: null,
    finished_at: null,
    created_at: "2026-05-18T10:45:00",
    updated_at: "2026-05-18T10:45:00",
  },

  {
    id: "VIS-002",
    name: "Siti Aminah",
    email: "siti.aminah@email.com",
    phone: "082233445566",
    company: null,
    purpose: "GENERAL",
    notes: "Bertemu customer service",
    status: "WAITING",
    check_in_at: "2026-05-18T10:22:00",
    called_at: null,
    finished_at: null,
    created_at: "2026-05-18T10:22:00",
    updated_at: "2026-05-18T10:22:00",
  },

  {
    id: "VIS-003",
    name: "Rio Pratama",
    email: "rio@teknologi.id",
    phone: "081998877665",
    company: "CV Teknologi Nusantara",
    purpose: "CONSULTATION",
    notes: "Meeting kerja sama project",
    status: "CALLED",
    check_in_at: "2026-05-18T10:05:00",
    called_at: "2026-05-18T10:15:00",
    finished_at: null,
    created_at: "2026-05-18T10:05:00",
    updated_at: "2026-05-18T10:15:00",
  },

  {
    id: "VIS-004",
    name: "Linda Kusuma",
    email: "linda.k@gmail.com",
    phone: "081122334455",
    company: "Freelance",
    purpose: "INTERVIEW",
    notes: "Interview posisi UI/UX Designer",
    status: "FINISHED",
    check_in_at: "2026-05-18T09:30:00",
    called_at: "2026-05-18T09:40:00",
    finished_at: "2026-05-18T10:00:00",
    created_at: "2026-05-18T09:30:00",
    updated_at: "2026-05-18T10:00:00",
  },

  {
    id: "VIS-005",
    name: "Ahmad Fauzi",
    email: "ahmad.fauzi@mitra.co.id",
    phone: "081377788899",
    company: "PT Mitra Sejahtera",
    purpose: "MEETING",
    notes: "Meeting dengan divisi marketing",
    status: "FINISHED",
    check_in_at: "2026-05-18T08:15:00",
    called_at: "2026-05-18T08:25:00",
    finished_at: "2026-05-18T09:00:00",
    created_at: "2026-05-18T08:15:00",
    updated_at: "2026-05-18T09:00:00",
  },

  {
    id: "VIS-006",
    name: "Dewi Lestari",
    email: "dewi@email.com",
    phone: "081234000111",
    company: "PT Digital Solusi",
    purpose: "MEETING",
    notes: "Presentasi produk",
    status: "WAITING",
    check_in_at: "2026-05-18T11:00:00",
    called_at: null,
    finished_at: null,
    created_at: "2026-05-18T11:00:00",
    updated_at: "2026-05-18T11:00:00",
  },

  {
    id: "VIS-007",
    name: "Bambang Setiawan",
    email: "bambang@mail.com",
    phone: "081211223344",
    company: "Freelancer",
    purpose: "GENERAL",
    notes: "Menanyakan informasi layanan",
    status: "WAITING",
    check_in_at: "2026-05-18T11:10:00",
    called_at: null,
    finished_at: null,
    created_at: "2026-05-18T11:10:00",
    updated_at: "2026-05-18T11:10:00",
  },

  {
    id: "VIS-008",
    name: "Rina Maharani",
    email: "rina@startup.id",
    phone: "082244556677",
    company: "Startup Nusantara",
    purpose: "CONSULTATION",
    notes: "Diskusi kerja sama bisnis",
    status: "CALLED",
    check_in_at: "2026-05-18T11:15:00",
    called_at: "2026-05-18T11:20:00",
    finished_at: null,
    created_at: "2026-05-18T11:15:00",
    updated_at: "2026-05-18T11:20:00",
  },
];

/**
 * Pagination Helper
 */
export const getPaginatedVisitors = (page: number = 1, limit: number = 5): PaginatedVisitors => {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const paginatedData = visitors.slice(startIndex, endIndex);

  const totalData = visitors.length;
  const totalPage = Math.ceil(totalData / limit);

  return {
    data: paginatedData,

    pagination: {
      page,
      limit,
      total_data: totalData,
      total_page: totalPage,
      has_next_page: page < totalPage,
      has_prev_page: page > 1,
    },
  };
};

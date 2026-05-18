export type MenuType = {
  name: string;
  path: string;
  icon: string;
};

export const adminMenus: MenuType[] = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: "/src/assets/icons/house-chimney-outline.svg",
  },
  {
    name: "Users",
    path: "/users",
    icon: "/src/assets/icons/icons-users.png",
  },
  {
    name: "Visitor",
    path: "/visitors",
    icon: "/src/assets/icons/icons-visitors.png",
  },
  {
    name: "Visit",
    path: "/visits",
    icon: "/src/assets/icons/icons-visits.png",
  },
  {
    name: "Profile",
    path: "/profile",
    icon: "/src/assets/icons/user-outline.svg",
  },
];

export const receptionistMenus: MenuType[] = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: "/src/assets/icons/house-chimney-outline.svg",
  },
  {
    name: "Visitor",
    path: "/visitors",
    icon: "/src/assets/icons/icons-visitors.png",
  },
  {
    name: "Visit",
    path: "/visits",
    icon: "/src/assets/icons/icons-visits.png",
  },
  {
    name: "Profile",
    path: "/profile",
    icon: "/src/assets/icons/user-outline.svg",
  },
];

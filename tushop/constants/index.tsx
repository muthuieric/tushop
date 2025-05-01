import {
  ChartColumn,
  Container,
  LayoutDashboardIcon,
  Package,
  Package2,
  PackageOpen,
  PackageSearch,
  Receipt,
  SquareStack,
  TabletSmartphone,
  User,
  Users,
} from "lucide-react";
import Link from "next/link";

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

export const sidebarLinks = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <LayoutDashboardIcon size={20} />,
  },
  {
    title: "Inventory",
    path: "/inventory",
    icon: <Package size={20} />,
  },
  {
    title: "Products",
    path: "/products",
    icon: <PackageSearch size={20} />,
  },
  {
    title: "Transactions",
    path: "/transactions",
    icon: <Receipt size={20} />,
  },
];

export const landingPageNavbarLinks = [
  {
    title: "Home",
    path: "#home",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Features",
    path: "#features",
  },
  {
    title: "FAQ",
    path: "#faq",
  },
];

export const aboutWalkthrough = [
  {
    title: "User Registration",
    description: "Set up your warehouse team with secure role-based accounts",
    icon: <User size={28} fill="#222222" stroke="#222222" />,
  },
  {
    title: "Warehouse Setup",
    description: "Configure your storage locations and inventory categories",
    icon: <Container size={28} stroke="#222222" />,
  },
  {
    title: "Real-time Tracking",
    description: "Begin monitoring stock movements with live updates",
    icon: <Package2 size={28} stroke="#222222" />,
  },
];

export const featuresList = [
  {
    title: "Inventory Control",
    description: "Track all stock items with real-time quantity updates",
    icon: <PackageOpen size={24} />,
  },
  {
    title: "Role-Based Access",
    description: "Granular permissions",
    icon: <Users size={24} />,
  },
  {
    title: "Operations Dashboard",
    description: "Monitor key warehouse metrics and performance indicators",
    icon: <LayoutDashboardIcon size={24} />,
  },
  {
    title: "Mobile Warehouse",
    description: "Access the system from any device ",
    icon: <TabletSmartphone size={24} />,
  },
  {
    title: "Analytics Reports",
    description: "Visualize inventory turnover, stock levels and order fulfillment rates",
    icon: <ChartColumn size={24} />,
  },
  {
    title: "Smart Categorization",
    description: "Organize products by category and supplier",
    icon: <SquareStack size={24} />,
  },
];

export const faqList = [
  {
    id: "Q1",
    question: "What problems does this WMS solve?",
    answer: "Our system eliminates manual errors, provides real-time inventory visibility, and streamlines warehouse operations for logistics businesses.",
  },
  {
    id: "Q2",
    question: "Is there mobile access for warehouse staff?",
    answer: "Yes, our responsive web app works on all mobile devices, with dedicated scanning interfaces for barcode/RFID input.",
  },
  {
    id: "Q3",
    question: "How do we get started?",
    answer: (
      <p>
        Begin your free trial at{" "}
        <Link href={"/register"} className="text-main-500 underline">
          our registration page
        </Link>
        .
      </p>
    ),
  },
  // {
  //   id: "Q4",
  //   question: "Can we track supplier performance?",
  //   answer: "Yes, the system automatically tracks delivery times, order accuracy, and supplier reliability metrics.",
  // },
  // {
  //   id: "Q5",
  //   question: "How many warehouses can we manage?",
  //   answer: "The system supports unlimited warehouses with centralized reporting and control.",
  // },
  {
    id: "Q6",
    question: "What training is provided?",
    answer: "We offer comprehensive onboarding, video tutorials, and 24/7 support to ensure smooth adoption.",
  },
];

// export const userRole = [
//   { name: "WAREHOUSE_STAFF" }, 
//   { name: "WAREHOUSE_MANAGER" }, 
//   { name: "SYSTEM_ADMIN" }
// ];

export const userRole = [{ name: "USER" }, { name: "ADMIN" }];



export const transactionStatus = [
  {
    name: "Pending",
    value: "PENDING",
  },
  {
    name: "In Progress",
    value: "IN_PROGRESS",
  },
  {
    name: "Completed",
    value: "COMPLETED",
  },
  {
    name: "Cancelled",
    value: "CANCELLED",
  },
];
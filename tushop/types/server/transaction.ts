import { Status, Transaction } from "@prisma/client";

export type TransactionsCountType = {
  totalPending?: number;
  totalIn_progress?: number;
  totalCompleted?: number;
  totalCancelled?: number;
};

export type TransactionsTableType = {
  id: string;
  date: Date;
  status: Status;
  fullname: string; 
  email: string; 
  product: string;
  productId: string;
  quantity: number;
  inventoryId: string;
  total: number;
  userId: string;
  currentUserRole: string;
};

export type TransactionsInsightsType = {
  date: Date;
  total: number;
};

export type RecentTransactionsType = Omit<
  Transaction,
  "createdAt" | "updatedAt" | "productId" | "quantity"
> & {
  productName: string;
  categoryName: string;
};

export type TotalTransactionChartsDataProps = {
  status: string;
  total: number;
};

export type TotalTransactionByStatusChartProps = {
  thisWeekTransactions: number;
  chartData: TotalTransactionChartsDataProps[];
};

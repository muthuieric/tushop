import prisma from "@/lib/db";
import {
  TransactionsTableType,
} from "@/types/server/transaction";


export async function getTransactionTableData(
    userId: string,
  ): Promise<TransactionsTableType[]> {
    try {
      const transactions = await prisma.transaction.findMany({
        where: {
          userId, // Restrict to transactions created by the user
          product: {
            Inventory: {
              users: {
                some: {
                  userId,
                },
              },
            },
          },
        },
        include: {
          product: {
            select: {
              id: true,
              name: true,
              inventoryId: true,
            },
          },
          user: {
            select: {
              id: true,
              fullname: true,
              email: true,
            },
          },
        },
        orderBy: {
          date: "asc",
        },
      });
  
      // Fetch all inventory memberships for the user in one query to avoid N+1 queries
      const inventoryMembers = await prisma.inventoryMember.findMany({
        where: {
          userId,
          inventoryId: {
            in: transactions.map((t) => t.product.inventoryId),
          },
        },
        select: {
          inventoryId: true,
          role: true,
        },
      });
  
      // Create a map for quick lookup of user roles
      const inventoryMemberMap = new Map(
        inventoryMembers.map((member) => [member.inventoryId, member.role]),
      );
  
      const results = transactions.map((transaction) => ({
        id: transaction.id,
        date: transaction.date,
        status: transaction.status,
        fullname: transaction.user.fullname ?? "Unknown",
        email: transaction.user.email ?? "N/A",
        product: transaction.product.name,
        productId: transaction.productId,
        quantity: transaction.quantity,
        inventoryId: transaction.product.inventoryId,
        total: transaction.totalPrice,
        userId: transaction.user.id,
        currentUserRole: inventoryMemberMap.get(transaction.product.inventoryId) ?? "USER",
      }));
  
      return results;
    } catch (error: any) {
      throw new Error(`Failed to fetch transaction table data for user ${userId}: ${error.message}`);
    }
  }
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import CatalogList from "@/components/list/CatalogList";
import AddTransactionDialog from "@/components/dialogs/AddTransactionDialog";
import { getUserInventories } from "@/server/inventory";
import {
  getHighestSellingProducts,
  getInventoriesProductCount,
  getInventoriesProductsValue,
  getLowStocksProducts,
  getProductsInUserInventories,
} from "@/server/product";
import { ChevronRight } from "lucide-react";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { TransactionsColumns as columns } from "@/components/tables/transactions/transactions-columns";
import { DataTable } from "@/components/ui/data-table";
import {
  getTransactionTableData,
} from "@/server/uniquetransaction";

export const metadata: Metadata = {
  title: "Products",
};

async function ProductsPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin");
  }

  const userId = session.user.id;

  const [
    products,
  ] = await Promise.all([
    getProductsInUserInventories(userId),
    getUserInventories(userId),
    getInventoriesProductCount(userId),
    getLowStocksProducts(userId),
    getHighestSellingProducts(userId),
    getInventoriesProductsValue(userId),
  ]);


  const [transactionsTableData] =
    await Promise.all([
      getTransactionTableData(userId),
    ]);



  return (
    <section className="space-y-6">
      <div className="">
        {/* Catalog List */}
        <div className="bg-main-card space-y-4 rounded-md p-6 md:col-span-4 lg:col-span-8 lg:row-span-full">
          <div className="section-header flex items-center justify-between">
            <h4>Products List</h4>
            <div className="flex justify-end">
        <AddTransactionDialog userId={userId} />
      </div>
          </div>
          <div className="h-[90%] w-full overflow-hidden">
            <CatalogList products={products} size={6} />
          </div>
        </div>

        <div className="bg-main-card space-y-4 rounded-md p-6">
            <div>
              <h4 className="section-header">Transactions</h4>
            </div>
            <div>
              <DataTable
                columns={columns}
                data={transactionsTableData}
                className="border-none"
              />
          </div>
      </div>
      
    
     
      </div>
    </section>
  );
}

export default ProductsPage;

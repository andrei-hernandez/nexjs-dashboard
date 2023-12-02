import { Metadata } from 'next';
import CustomersTable from '@/app/ui/customers/table';
import { Suspense } from 'react';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { fetchFilteredCustomers } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page({ searchParams }:
  Readonly<{
    searchParams?: {
      query?: string,
      search?: string
      page?: string,
    }
  }>) {

  const query = searchParams?.search ?? '';
  const customers = await fetchFilteredCustomers(query);

  return (
    <Suspense key={query} fallback={<InvoicesTableSkeleton />}>
      <CustomersTable customers={customers} />
    </Suspense>
  )
}
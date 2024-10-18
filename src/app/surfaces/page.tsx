/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/** @format */
"use client";

import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import PageTitle from "@/components/PageTitle";

type Props = {};
type Payment = {
  // name: string;
  // email: string;
  // lastOrder: string;
  // method: string;
};

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "1",
    header: "Tên",
  },
  {
    accessorKey: "2",
    header: "Mô Tả",
  },
  {
    accessorKey: "3",
    header: "Cập Nhật",
  },
  {
    accessorKey: "4",
    header: "Action",
  },
];

const data: Payment[] = [
  // {
  //   name: "John Doe",
  //   email: "john@example.com",
  //   lastOrder: "2023-01-01",
  //   method: "Credit Card",
  // },
];

export default function surfacePage({ }: Props) {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Quản Lý Bề Mặt" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}

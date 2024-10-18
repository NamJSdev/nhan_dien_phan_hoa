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
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "lastOrder",
    header: "Role",
  },
  {
    accessorKey: "method",
    header: "Mô Tả",
  },
  {
    accessorKey: "action",
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

export default function UserPage({ }: Props) {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Quản Lý Tài Khoản User" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}

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
    header: "Ảnh Hoa",
  },
  {
    accessorKey: "2",
    header: "Tên",
  },
  {
    accessorKey: "3",
    header: "Tên Khoa Học",
  },
  {
    accessorKey: "4",
    header: "Kích Thước",
  },
  {
    accessorKey: "5",
    header: "Bộ",
  },
  {
    accessorKey: "6",
    header: "Họ",
  },
  {
    accessorKey: "7",
    header: "Chi",
  },
  {
    accessorKey: "8",
    header: "Hình Dạng",
  },
  {
    accessorKey: "9",
    header: "Khẩu Độ",
  },
  {
    accessorKey: "10",
    header: "Phấn Hoa",
  },
  {
    accessorKey: "11",
    header: "Cập Nhật",
  },
  {
    accessorKey: "",
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

export default function Home({ }: Props) {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Loài Hoa" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
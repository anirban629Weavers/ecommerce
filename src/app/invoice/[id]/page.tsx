"use client";
import React from "react";
import InvoiceComponent from "@/components/InvoiceComponent";
import axios from "axios";
import { useSearchParams } from "next/navigation";

const SingleInvoice = ({ params }: { params: { id: string } }) => {
  // const searchParams = useSearchParams();
  // const id = searchParams.get("invoice-id");
  return <InvoiceComponent id={params.id} />;
};

// export async function generateStaticParams() {
//   let orderIds;
//   try {
//     const response = await axios.get(
//       `http://localhost:3000/${STATIC_ID_ORDERS}`
//     );
//     orderIds = response.data.orderIds;
//   } catch (error) {
//     console.log(error);
//   }
//   let ids = orderIds.map((id: string) => {
//     return { id: id };
//   });
//   return ids;
// }

export default SingleInvoice;

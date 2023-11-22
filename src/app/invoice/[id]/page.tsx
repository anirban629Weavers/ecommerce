"use client";
import React from "react";
import InvoiceComponent from "@/components/InvoiceComponent";
import axios from "axios";
import { STATIC_ID_ORDERS } from "@/configs/url.config";

const SingleInvoice = ({ params }: { params: { id: string } }) => {
  return <InvoiceComponent id={params.id} />;
};
// export async function generateStaticParams() {
//   let idArr = [];
//   try {
//     const response = await axios.get(
//       `http://localhost:3000/${STATIC_ID_ORDERS}`
//     );
//     idArr = response.data.orders.map((id: string) => ({ id: id }));
//   } catch (error) {
//     console.log(error);
//   }
//   console.log(idArr);
//   return idArr;
// }
export default SingleInvoice;

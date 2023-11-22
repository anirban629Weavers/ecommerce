import React from "react";
import InvoiceComponent from "@/components/InvoiceComponent";
import axios from "axios";
import { STATIC_ID_ORDERS } from "@/configs/url.config";

const SingleInvoice = ({ params }: { params: { id: string } }) => {
  return <InvoiceComponent id={params.id} />;
};

export async function generateStaticParams() {
  let orderIds;
  try {
    const response = await axios.get(
      `http://localhost:3000/${STATIC_ID_ORDERS}`
    );
    orderIds = response.data.orderIds;
  } catch (error) {
    console.log(error);
  }
  let ids = orderIds.map((id: string) => {
    return { id: id };
  });
  return ids;
}

export default SingleInvoice;

"use client";
import React from "react";
import InvoiceComponent from "@/components/InvoiceComponent";

const SingleInvoice = ({ params }: { params: { id: string } }) => {
  return <InvoiceComponent id={params.id} />;
};

export default SingleInvoice;

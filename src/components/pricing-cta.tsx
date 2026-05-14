"use client";

import { CreemCheckout } from "@creem_io/nextjs";
import { Button } from "@/components/ui/button";

const PRO_MONTHLY_ID = process.env.NEXT_PUBLIC_CREEM_PRO_PRODUCT_ID || "prod_placeholder";
const PRO_YEARLY_ID = process.env.NEXT_PUBLIC_CREEM_PRO_YEARLY_PRODUCT_ID || PRO_MONTHLY_ID;

export function ProCTA({ label, yearly }: { label: string; yearly?: boolean }) {
  const productId = yearly ? PRO_YEARLY_ID : PRO_MONTHLY_ID;

  return (
    <CreemCheckout productId={productId} successUrl="/thank-you" checkoutPath="/api/checkout">
      <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white" size="lg">
        {label}
      </Button>
    </CreemCheckout>
  );
}

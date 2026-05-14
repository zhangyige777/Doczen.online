import { Webhook } from "@creem_io/nextjs";

export const POST = Webhook({
  webhookSecret: process.env.CREEM_WEBHOOK_SECRET!,

  onCheckoutCompleted: async ({ customer, product }) => {
    console.log("[Creem] Checkout completed:", { customer: customer?.email, product: product.name });
    // TODO: store customer.subscription_id in your database mapped to clerk user id
  },

  onGrantAccess: async ({ customer, metadata }) => {
    console.log("[Creem] Grant access:", { customer: customer?.email, metadata });
    // TODO: set user role to "pro" in your database
  },

  onRevokeAccess: async ({ customer, metadata }) => {
    console.log("[Creem] Revoke access:", { customer: customer?.email, metadata });
    // TODO: set user role back to "free" in your database
  },
});

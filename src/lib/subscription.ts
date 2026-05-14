const SUB_KEY = "doczen-subscription";

export interface SubscriptionState {
  plan: "free" | "pro";
  subscribedAt: string | null; // ISO date
  pagesLimit: number; // 20 for free, 200 for pro
  productId?: string;
}

export function getSubscription(): SubscriptionState {
  if (typeof window === "undefined") {
    return { plan: "free", subscribedAt: null, pagesLimit: 20 };
  }
  try {
    const raw = localStorage.getItem(SUB_KEY);
    if (raw) return JSON.parse(raw) as SubscriptionState;
  } catch { /* ignore */ }
  return { plan: "free", subscribedAt: null, pagesLimit: 20 };
}

export function setSubscription(data: Partial<SubscriptionState>) {
  if (typeof window === "undefined") return;
  const current = getSubscription();
  const updated: SubscriptionState = { ...current, ...data };
  localStorage.setItem(SUB_KEY, JSON.stringify(updated));
}

export function getPagesUsed(): number {
  if (typeof window === "undefined") return 0;
  try {
    const raw = localStorage.getItem("doczen-audit-log");
    if (raw) {
      const log = JSON.parse(raw) as { pages: number }[];
      return log.reduce((sum, e) => sum + e.pages, 0);
    }
  } catch { /* ignore */ }
  return 0;
}

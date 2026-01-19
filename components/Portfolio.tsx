import { getPortfolioItems } from "@/lib/actions";
import PortfolioClient from "./PortfolioClient";

export default async function Portfolio() {
  const items = await getPortfolioItems();

  // We serialize the data to ensure Date objects don't cause hydration issues
  return <PortfolioClient initialItems={JSON.parse(JSON.stringify(items))} />;
}
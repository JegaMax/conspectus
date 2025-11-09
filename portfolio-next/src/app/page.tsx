import { getPortfolioContent } from "@/lib/getPortfolioContent";
import { PortfolioPage } from "@/components/PortfolioPage";

export const revalidate = 3600;

export default async function Home() {
  const content = await getPortfolioContent();
  return <PortfolioPage data={content} />;
}

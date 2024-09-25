import { Lusitana, Montserrat } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "800"],
});

export const lusitana = Lusitana({ subsets: ["latin"], weight: ["700"] });

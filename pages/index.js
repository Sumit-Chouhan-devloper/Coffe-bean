import Image from "next/image";
import { Inter } from "next/font/google";
import Services from "@/components/Services";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <>
   <Services/>
   <Footer/>
   </>
  );
}

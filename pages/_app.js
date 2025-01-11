import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <div className="bg-[#282b29]"> 
  <Navbar />
  <Component {...pageProps} />
  <Footer />
  </div > 
}

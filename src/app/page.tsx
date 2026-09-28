import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductThinking } from "@/components/ProductThinking";
import { RevealObserver } from "@/components/RevealObserver";
import { SelectedWork } from "@/components/SelectedWork";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <SelectedWork />
        <About />
        <ProductThinking />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}

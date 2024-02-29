import Experiences from "./components/Experiences/Experiences";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import UnderConstruction from "./components/modal/UnderConstruction";

export default function Home() {
  return (
    <main className="relative bg-gray-900 p-4 lg:px-16 lg:py-8 flex flex-col gap-12 lg:gap-16">
      <Header />
      <Experiences />
      <Projects />
    </main>
  );
}

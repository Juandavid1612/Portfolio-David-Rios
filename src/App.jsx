import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SelectedGames from "./components/SelectedGames";
import GameSection from "./components/GameSection";
import AboutDeveloper from "./components/AboutDeveloper";
import Footer from "./components/Footer";
import { games } from "./data/games";

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-paper">
      <Navbar />
      <main>
        <Hero />
        <SelectedGames />
        {games.map((game, i) => (
          <GameSection key={game.id} game={game} reverse={i % 2 === 1} tinted={i % 2 === 0} />
        ))}
        <AboutDeveloper />
      </main>
      <Footer />
    </div>
  );
}

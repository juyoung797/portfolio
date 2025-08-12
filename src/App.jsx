import Header from "./components/Header";
import portfolioData from "./portfolio-data.json";

const App = () => {
  return (
    <div className="bg-red-100 min-h-screen">
      <Header profile={portfolioData.profile} />
      <footer className="py-8 px-4 text-center">
        <p className="text-sm">
          © 2025 {portfolioData.profile.name}. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;

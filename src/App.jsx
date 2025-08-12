import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import portfolioData from "./portfolio-data.json";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";

const App = () => {
  return (
    <div className="min-h-screen">
      <Header profile={portfolioData.profile} />
      <AboutSection profile={portfolioData.profile}/>
      <SkillsSection skills={portfolioData.skills}/>
      <ProjectsSection projects={portfolioData.projects}/>
      <ExperienceSection
        experience={portfolioData.experience}
        education={portfolioData.education}
        certifications={portfolioData.certifications}
      />
      <footer className="py-8 px-4 text-center">
        <p className="text-sm">
          © 2025 {portfolioData.profile.name}. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;

import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import portfolioData from "./portfolio-data.json";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import WritingSection from "./components/WritingSection";
import Up from "./components/Up";
import ContactSection from "./components/ContactSection";

const App = () => {
  return (
    <>
      <div className="min-h-screen font-sans">
        <Header profile={portfolioData.profile} />
        <AboutSection profile={portfolioData.profile} />
        <SkillsSection skills={portfolioData.skills} />
        <ProjectsSection projects={portfolioData.projects} />
        <ExperienceSection
          experience={portfolioData.experience}
          education={portfolioData.education}
          certifications={portfolioData.certifications}
        />
        <WritingSection
          writing={portfolioData.writing}
          talks={portfolioData.talks}
          openSource={portfolioData.open_source}
        />
        <ContactSection
          contact={portfolioData.contact}
        />
        <footer className="py-8 px-4 text-center">
          <p className="text-sm">
            © 2025 정주영. All rights reserved.
          </p>
        </footer>
        <Up />
      </div>
    </>
  );
};

export default App;

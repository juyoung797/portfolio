import { Card, Badge } from "@radix-ui/themes";

const SkillsSection = ({ skills }) => {
  const skillCategories = [
    { title: "Backend", skills: skills.backend },
    { title: "Database", skills: skills.databases },
    { title: "Infra & DevOps", skills: skills.infra_devops },
    { title: "Frontend", skills: skills.frontend },
    { title: "Testing", skills: skills.testing },
    { title: "Observability", skills: skills.observability },
    { title: "Tools", skills: skills.tools },
  ];
  return (
    <section id="skills" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <Card key={index} size="2">
            <h3  className="text-xl font-semibold mb-4 text-blue-600">{category.title}</h3>

            <div className="flex flex-wrap gap-2">
              {category.skills?.map((skill, skillIndex) => (
                <Badge key={skillIndex}>{skill}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
      </div>
    </section>
  );
};

export default SkillsSection;

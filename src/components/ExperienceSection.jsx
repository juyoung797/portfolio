import { Card, Badge } from "@radix-ui/themes";
import { FaBuilding, FaCalendarDays } from "react-icons/fa6";
import { MdSchool } from "react-icons/md";

const ExperienceSection = ({ experience, education, certifications }) => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
          Experience & Education
        </h2>

        <div className="mb-10">
          <h3 className="mb-6">Work Experience</h3>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <Card key={index} size="2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h4 className="flex items-center gap-2 mb-1">
                      <FaBuilding className="w-4 h-4" />
                      {exp.company} - {exp.role}
                    </h4>
                  </div>
                  <div className="flex items-center text-sm gap-2">
                    <FaCalendarDays className="w-4 h-4" />
                    {exp.period}
                  </div>
                </div>

                <p className="mb-4">{exp.summary}</p>

                <div className="mb-4">
                  <h5 className="mb-3">주요 성과</h5>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, index) => (
                      <li key={index} className="text-sm pl-4">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h3 className="mb-6">Education</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div className="flex gap-3 items-center">
                    <MdSchool />
                    <h4>{edu.school}</h4>
                    <p>{edu.degree}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FaCalendarDays className="w-4 h-4" />
                    {edu.period}
                  </div>
                </div>

                <ul className="space-y-1">
                  {edu.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="text-sm pl-4">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h3 className="mb-6">Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <Card key={index} size="2">
                <h4 className="mb-2">{cert.name}</h4>
                <p className="text-sm">{cert.year}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

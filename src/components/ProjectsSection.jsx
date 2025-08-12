import { Badge, Card, Button } from "@radix-ui/themes";
import {
  FaRegClock,
  FaRegUser,
  FaArrowTrendUp,
  FaGithub,
  FaLink,
} from "react-icons/fa6";

const ProjectsSection = ({ projects }) => {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
          projects
        </h2>

        <div className="space-y-8">
          {projects?.map((project) => (
            <Card key={project.id} size="3">
              <div className="flex flex-col lg:flex-row lg:gap-8">
                <div className="lg:flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="mb-2 sm:mb-0">{project.name}</h3>

                    <div className="flex items-center gap-2 text-sm">
                      <FaRegClock />
                      {project.period}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Badge>{project.role}</Badge>
                  </div>

                  <p className="mb-4">{project.summary}</p>

                  <div className="mb-6">
                    <h4 className="mb-3">주요 성과</h4>
                    <ul className=" space-y-2">
                      {project.responsibilities.map((responsibility, index) => (
                        <li key={index} className="text-sm pl-4">
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.metrics && (
                    <div className="mb-3">
                      <h4 className="mb-3">성과 지표</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                        {project.metrics.users && (
                          <div className="flex itmes-center gap-2">
                            <FaRegUser className="w-4 h-4" />
                            <span className="text-sm">
                              {project.metrics.users.toLocaleString()} users
                            </span>
                          </div>
                        )}
                        {project.metrics.teams && (
                          <div className="flex itmes-center gap-2">
                            <FaRegUser className="w-4 h-4" />
                            <span className="text-sm">
                              {project.metrics.teams} teams
                            </span>
                          </div>
                        )}
                        {project.metrics.monthly_active_users && (
                          <div className="flex itmes-center gap-2">
                            <FaArrowTrendUp className="w-4 h-4" />
                            <span className="text-sm">
                              {project.metrics.monthly_active_users} MAU
                            </span>
                          </div>
                        )}
                        {project.metrics.peak_rps && (
                          <div className="flex itmes-center gap-2">
                            <FaArrowTrendUp className="w-4 h-4" />
                            <span className="text-sm">
                              {project.metrics.peak_rps} RPS
                            </span>
                          </div>
                        )}
                        {project.metrics.p95_latency_ms && (
                          <div className="flex itmes-center gap-2">
                            <FaRegClock className="w-4 h-4" />
                            <span className="text-sm">
                              p95: {project.metrics.p95_latency_ms}ms
                            </span>
                          </div>
                        )}
                        {project.metrics.availability && (
                          <div className="flex itmes-center gap-2">
                            <FaArrowTrendUp className="w-4 h-4" />
                            <span className="text-sm">
                              {project.metrics.availability} uptime
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {Object.entries(project.stack).map(
                          ([category, techs]) =>
                            techs?.map((tech, techIndex) => (
                              <Badge
                                key={`${category}-${techIndex}`}
                                variant="outline"
                                className="text-xs"
                              >
                                {tech}
                              </Badge>
                            ))
                        )}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.links.repo && (
                          <Button asChild variant="outline" size="1">
                            <a
                              href={project.links.repo}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaGithub className="w-4 h-4 mr-2" />
                              Repository
                            </a>
                          </Button>
                        )}

                        {project.links.repo_backend && (
                          <Button asChild variant="outline" size="1">
                            <a
                              href={project.links.repo_backend}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaGithub className="w-4 h-4 mr-2" />
                              Backend
                            </a>
                          </Button>
                        )}

                        {project.links.repo_frontend && (
                          <Button asChild variant="outline" size="1">
                            <a
                              href={project.links.repo_frontend}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaGithub className="w-4 h-4 mr-2" />
                              Frontend
                            </a>
                          </Button>
                        )}

                        {project.links.demo_url && (
                          <Button asChild variant="outline" size="1">
                            <a
                              href={project.links.demo_url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaLink className="w-4 h-4 mr-2" />
                              Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

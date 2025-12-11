import { Card, Badge } from "@radix-ui/themes";

import { FaLocationDot } from "react-icons/fa6";

const AboutSection = ({ profile }) => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">About</h2>

        <Card size="3" className="glass ">
          <div className="flex items-center gap-2 mb-6">
            <FaLocationDot className="w-4 h-4"/>
            {profile.location}
          </div>

          <p className="text-lg leading-relaxed mb-6 font-sans">{profile.summary}</p>

          <div>
            <h3 className="mb-4">관심 분야</h3>
            <div className="flex flex-wrap gap-2">
              {profile.interests.map((interest, index) => (
                <Badge key={index} variant="secondary">
                  {interest}
                </Badge>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;

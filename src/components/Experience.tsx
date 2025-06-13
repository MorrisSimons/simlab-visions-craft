import { Calendar, MapPin, Building } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
const Experience = () => {
  const experiences = [{
    title: "Senior Casino Game Producer",
    company: "T.A.G (under construction)",
    period: "Feb 2025 - Present",
    location: "Stockholm County, Sweden",
    description: "Structuring production flows and work processes from concept to finished entertainment product. Building quality games that provide excitement and perform on all levels."
  }, {
    title: "Owner | Creative Director",
    company: "Simlab AB",
    period: "Sep 2004 - Mar 2025",
    location: "Stockholm, Sweden",
    description: "Casino games for major clients including SlotAmerica, Winterstone, SG, Williams Interactive, and more. Produced games like Heavy Metal Knox, Wild Safari, and Eye Of The Nile."
  }, {
    title: "Special Resource",
    company: "ELK Studios",
    period: "Feb 2022 - Feb 2025",
    location: "Stockholm",
    description: "Product development, mechanics, concept and functional design support. Product owner for Freeway 7 and Jeff & Scully games."
  }, {
    title: "Partner | Cofounder | Creative Director",
    company: "Excubitor Games AB",
    period: "Sep 2017 - Dec 2023",
    location: "Stockholm, Sweden",
    description: "Science and Art for Casino Games. Produced multiple successful games including True Casino series, Rush Rush, and Mighty Tiger."
  }];
  const clients = ["SlotAmerica", "ELK Studios", "Winterstone", "SG Interactive", "Williams Interactive", "Jadestone", "Functional Games", "Paf.com", "Aspect Gaming", "Golden Hero", "MTV", "Viasat", "TV3"];
  return <section className="relative px-0 py-[90px]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Three decades of creative excellence across gaming, advertising, and entertainment
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Recent Experience</h3>
            {experiences.map((exp, index) => <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white text-lg">{exp.title}</CardTitle>
                  <CardDescription className="text-blue-300 font-semibold">
                    {exp.company}
                  </CardDescription>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                </CardContent>
              </Card>)}
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Notable Clients</h3>
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 h-fit">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Building className="w-5 h-5 text-blue-400" />
                  Industry Partners
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {clients.map((client, index) => <span key={index} className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white px-3 py-1 rounded-full text-sm border border-white/10">
                      {client}
                    </span>)}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 mt-6">
              <CardHeader>
                <CardTitle className="text-white">Education & Background</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p className="mb-2"><strong>Berghs School of Communication</strong></p>
                <p className="text-sm mb-4">Art Direction, 1984-1986</p>
                <p className="mb-2"><strong>Svenska Tecknare</strong></p>
                <p className="text-sm">Board Member & Nomination Committee (2011-2016)</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default Experience;
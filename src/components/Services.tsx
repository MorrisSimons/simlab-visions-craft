import { Target, Lightbulb, Cog, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
const Services = () => {
  const services = [{
    icon: Target,
    title: "Game Production",
    description: "End-to-end casino game development from concept to launch, ensuring quality and performance across all platforms."
  }, {
    icon: Lightbulb,
    title: "Creative Direction",
    description: "Strategic creative vision and artistic direction for entertainment products that captivate and engage audiences."
  }, {
    icon: Cog,
    title: "Process Optimization",
    description: "Structuring production flows and work processes to maximize efficiency and deliver exceptional results."
  }, {
    icon: TrendingUp,
    title: "Performance Excellence",
    description: "Building entertainment products that not only excite but perform exceptionally on all commercial levels."
  }];
  return <section className="relative px-0 py-[90px]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Services & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Delivering exceptional entertainment products with 30+ years of industry experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-center leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Services;
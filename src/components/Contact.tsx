
import { Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Create Something Amazing
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to develop your next successful entertainment product? Let's discuss your project.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Get In Touch</CardTitle>
              <CardDescription className="text-gray-300">
                Available for consulting, game production, and creative direction projects.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Greater Stockholm Metropolitan Area</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>Available via LinkedIn</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Linkedin className="w-5 h-5 text-blue-400" />
                <span>329 followers • 267 connections</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Current Focus</CardTitle>
              <CardDescription className="text-gray-300">
                What I'm working on right now and what's coming next.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg border border-white/10">
                <h4 className="text-white font-semibold mb-2">T.A.G Project</h4>
                <p className="text-gray-300 text-sm">
                  Currently structuring production flows and building quality entertainment products.
                </p>
              </div>
              <div className="p-4 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-lg border border-white/10">
                <h4 className="text-white font-semibold mb-2">New Book Release</h4>
                <p className="text-gray-300 text-sm">
                  Recently completed a 5-year writing project - a personal journey of transformation.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Linkedin className="mr-2 w-5 h-5" />
            Connect on LinkedIn
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;

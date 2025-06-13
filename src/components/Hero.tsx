
import { ArrowRight, Gamepad2, Palette, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 text-white overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-purple-500/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-green-500/20 rounded-full animate-pulse delay-500"></div>
      
      <div className="container mx-auto text-center relative z-10 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
            SimLab
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 mb-4">
            with <span className="text-white font-semibold">Mats Simons</span>
          </div>
          <p className="text-2xl md:text-3xl font-light text-blue-200 mb-8">
            Making clients rich and sometimes famous
          </p>
        </div>
        
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Senior Casino Game Producer with 30+ years of experience in creative direction, 
          game development, and advertising. Specializing in premium casino games and 
          entertainment products that perform on all levels.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Gamepad2 className="w-5 h-5 text-blue-400" />
            <span>Game Production</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Palette className="w-5 h-5 text-purple-400" />
            <span>Creative Direction</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Users className="w-5 h-5 text-green-400" />
            <span>Team Leadership</span>
          </div>
        </div>
        
        <Button 
          size="lg" 
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Explore My Work
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Target, Globe, TrendingUp } from "lucide-react";

const Portfolio = () => {
  const achievements = [
    {
      number: "150+",
      title: "Successful Games Released",
      description: "Over 15 years of designing and producing customized slot machines, video poker games, lotteries and scratch tickets"
    },
    {
      number: "100",
      title: "Games for SlotAmerica",
      description: "Four extremely successful years producing games for this major social casino platform"
    },
    {
      number: "#31",
      title: "Big in Japan",
      description: "Imperial Colours holds the 31st place on the Japanese chart of slotcatalog.com one year after release"
    },
    {
      number: "€119,000",
      title: "Weekly Revenue",
      description: "Dreamgirl generates weekly GGR and remains PAF's most popular game since 2005"
    }
  ];

  const featuredGames = [
    {
      title: "Flame Baby",
      client: "Aspect Gaming",
      year: "2021",
      description: "Hot summer release that turned up the heat in the Asian market",
      image: "/lovable-uploads/36b37350-539c-42ff-8b9c-07bf2ba66dfe.png"
    },
    {
      title: "True Casino Series",
      client: "Aspect Gaming",
      year: "2021",
      description: "First True Casino game released in Asia with more games in the series following",
      image: "/lovable-uploads/64152173-b039-41f4-9335-39b1ce299fd1.png"
    },
    {
      title: "Imperial Colours",
      client: "Golden Hero",
      year: "2019",
      description: "Big hit in Japan, maintaining top 31 position on Japanese slot charts",
      image: "/lovable-uploads/341ad9cb-e840-4ac5-ab72-370015ea7be0.png"
    },
    {
      title: "Mighty Tiger",
      client: "Aspect Gaming",
      year: "2020",
      description: "Popular Asian-themed slot with impressive visual design and mechanics",
      image: "/lovable-uploads/65fd59d0-932f-4dde-8d85-9409325566eb.png"
    }
  ];

  const highlights = [
    "Customized games designed for specific target groups based on style, gender, age, lifestyle, country and region",
    "Historic success with Dreamgirl (2005) - still PAF's most popular game generating €119,000 weekly",
    "Expansion into African market with dedicated game series development",
    "Partnership with Golden Hero for Asian market penetration",
    "Conversion of classic games to HTML5 and mobile platforms"
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Portfolio & Achievements
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            150+ successful games delivered across global markets with proven commercial performance
          </p>
        </div>

        {/* Key Achievements */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card 
              key={index}
              className="bg-white/5 backdrop-blur-sm border-white/10 text-center hover:bg-white/10 transition-all duration-300"
            >
              <CardHeader>
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-2">
                  {achievement.number}
                </div>
                <CardTitle className="text-white text-lg">{achievement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-sm">
                  {achievement.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Games */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Featured Games</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredGames.map((game, index) => (
              <Card 
                key={index}
                className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="max-w-full max-h-full object-contain rounded"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-white">{game.title}</CardTitle>
                    <Badge variant="secondary" className="bg-blue-600/20 text-blue-300 border-blue-500/30">
                      {game.year}
                    </Badge>
                  </div>
                  <CardDescription className="text-purple-300 font-semibold">
                    {game.client}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{game.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Highlights */}
        <Card className="bg-white/5 backdrop-blur-sm border-white/10">
          <CardHeader>
            <CardTitle className="text-white text-2xl flex items-center gap-2">
              <Trophy className="w-6 h-6 text-yellow-400" />
              Key Success Factors
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm leading-relaxed">{highlight}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Portfolio;

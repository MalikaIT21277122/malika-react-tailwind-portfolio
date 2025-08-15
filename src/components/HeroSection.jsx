import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          {/* Profile Image */}
          <div className="flex justify-center">
            <img
              src="/profilephoto/propic.jpg"
              alt="Malika Degaldoruwa"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-primary object-cover opacity-0 animate-fade-in"
            />
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Malika
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Degaldoruwa
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I build intelligent and engaging software solutions using modern
            technologies. With experience in full-stack development, AI/ML
            integration, and user-focused design, I deliver applications that
            are both functional and impactful. Currently seeking an Associate
            Software Engineer position to contribute my skills and grow within
            a dynamic team.
          </p>

          {/* Button */}
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

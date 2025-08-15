import { useState } from "react";
import { ArrowRight, CheckCircle2, X, ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    id: 1,
    title: "CodeFlow AI – Research Project",
    description:
      "An AI-powered solution designed to enhance software project management through predictive analytics and intelligent recommendations.",
    images: [
      "/projects/codeflow.png",
      "/projects/codeflow1.png",
      "/projects/codeflow2.png",
      "/projects/codeflow3.png",
      "/projects/codeflow4.png",
      "/projects/codeflow5.png",
    ],
    tags: ["React", "Node.js", "MongoDB", "Flask", "Machine Learning", "Gemini AI"],
    bullets: [
      "Developed a web-based system to optimize software project management using predictive analytics and gamified UI strategies.",
      "Implemented AI modules: project timeline prediction, defect estimation, task duration forecasting (COCOMO-inspired), and best team member allocation via online APIs.",
      "Authored and presented the paper “Enhancing Software Project Management Through Predictive Analytics and Gamified User Interfaces” at the 16th IEEE ICCCNT 2025.",
      "Presented at the 27th National ICT Awards (NBQSA Sri Lanka), Tertiary Student Project – Business Category.",
    ],
    githubUrl: "https://github.com/it21250156/ProjectManagementTool",
    demoUrl: "https://mysliit-my.sharepoint.com/personal/it21250156_my_sliit_lk/_layouts/15/stream.aspx?id=%2Fpersonal%2Fit21250156%5Fmy%5Fsliit%5Flk%2FDocuments%2FRP%20Demo%20Video%2FRP%5FDemo%2Emp4&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Eb0acb90c%2Dd4b5%2D4c57%2D94ec%2D8d2bb9b2886a-demo.com",
  },
  {
    id: 2,
    title: "EasyReach App (Kotlin)",
    description:
      "An Android application built to improve the shopping experience for visually impaired individuals through voice navigation and accessibility tools.",
    images: [
      "/projects/easyreach.png",
      "/projects/easyreach1.png",
    ],
    tags: ["Kotlin", "Android", "Voice Recognition", "Firebase"],
    bullets: [
      "Built CRUD features for shop owners to add, update, and delete products.",
      "Created an admin console to manage in-store navigation directions.",
      "Integrated voice recognition for hands-free product location guidance.",
      "Published research accepted by European Chemical Bulletin.",
    ],
    githubUrl: "https://github.com/it21250156/EasyReach",
  },
  {
    id: 3,
    title: "Gems & Jewelry Web App (MERN)",
    description:
      "A client-focused feedback management system tailored for the gems and jewelry industry.",
    images: [
      "/projects/CeylonGems.png",
      "/projects/CeylonGems1.png",
      "/projects/CeylonGems2.png",
      "/projects/CeylonGems3.png",
      "/projects/CeylonGems4.png",
      "/projects/CeylonGems5.png",
      "/projects/CeylonGems6.png",
      "/projects/CeylonGems7.png",
    ],
    tags: ["MongoDB", "Express", "React", "Node.js"],
    bullets: [
      "Collaborated with a client to gather requirements and iterative feedback.",
      "Developed a feedback form with star rating, validation, and error handling.",
      "Implemented feedback listing and filtering by search term and timestamp.",
    ],
    githubUrl: "https://github.com/it21250156/CeylonNaturalGems",
  },
];

export const ProjectsSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeImages, setActiveImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 450,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    adaptiveHeight: true,
  };

  const openModal = (images, startIndex = 0) => {
    setActiveImages(images);
    setCurrentIndex(startIndex);
    setModalOpen(true);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % activeImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + activeImages.length) % activeImages.length);
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of impactful projects, ranging from research-driven solutions to client-focused applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              {/* Image / Slider */}
              <div
                className="h-48 overflow-hidden cursor-pointer"
                onClick={() =>
                  openModal(project.images ? project.images : [project.image])
                }
              >
                {project.images ? (
                  <Slider {...sliderSettings}>
                    {project.images.map((img, idx) => (
                      <div key={idx}>
                        <img
                          src={img}
                          alt={`${project.title} ${idx + 1}`}
                          className="w-full h-48 object-cover"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </Slider>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {project.bullets?.length > 0 && (
                  <ul className="space-y-2 mb-4">
                    {project.bullets.map((point, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="text-primary shrink-0" size={16} />
                        <span className="text-sm text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Links */}
                <div className="flex space-x-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/MalikaIT21277122"
            rel="noopener noreferrer"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={() => setModalOpen(false)}
          >
            <X size={28} />
          </button>
          <button
            className="absolute left-4 text-white hover:text-gray-300"
            onClick={prevImage}
          >
            <ChevronLeft size={36} />
          </button>
          <img
            src={activeImages[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="max-h-[90vh] max-w-full object-contain rounded-lg"
          />
          <button
            className="absolute right-4 text-white hover:text-gray-300"
            onClick={nextImage}
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </section>
  );
};

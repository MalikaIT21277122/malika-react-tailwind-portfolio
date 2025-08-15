import { ExternalLink } from "lucide-react";

const researchItems = [
    {
        id: 1,
        title: "Enhancing Software Project Management Through Predictive Analytics and Gamified UI",
        description:
            "Published at the IEEE ICCCNT 2025 conference, focusing on AI-powered predictive analytics for better project management.",
        image: "/research/icccnt-publication.png",
        paperUrl: "/papers/ICCCNT2025.pdf",
        certUrl: "/papers/ICCCNT_Certificate.pdf",
    },
    {
        id: 2,
        title: "Easy Reach Store: Shopping Application for Visually Challenged",
        description:
            "Co-authored research paper published in the European Chemical Bulletin journal, detailing an accessible shopping app for the visually impaired.",
        image: "/research/ecb-publication.jpg",
        paperUrl: "/papers/EasyReach_ECB.pdf",
        certUrl: "/papers/ECB_Certificate.pdf",
    },
];

export const ResearchSection = () => {
    return (
        <section id="research" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Published <span className="text-primary">Research</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    My contributions to academic research, published in international conferences and journals.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {researchItems.map((paper) => (
                        <div
                            key={paper.id}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            {/* Image */}
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={paper.image}
                                    alt={paper.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{paper.title}</h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    {paper.description}
                                </p>

                                {/* Buttons in center */}
                                <div className="flex justify-center gap-3">
                                    <a
                                        href={paper.paperUrl}
                                        download
                                        className="px-3 py-1 text-xs rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-1"
                                    >
                                        Research Paper <ExternalLink size={14} />
                                    </a>
                                    <a
                                        href={paper.certUrl}
                                        download
                                        className="px-3 py-1 text-xs rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-1"
                                    >
                                        Certificate <ExternalLink size={14} />
                                    </a>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

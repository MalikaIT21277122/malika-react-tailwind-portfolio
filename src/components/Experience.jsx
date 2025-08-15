const experiences = [
    {
        id: 1,
        title: "Seylan Admin Web Application",
        projectType: "Full-stack development",
        tools: ["Java", "Spring Boot", "JSP", "MySQL", "GitLab", "Wildfly"],
        image: "/experience/seylan-admin.png",
        intro: "Enhanced Seylan Bank’s internal admin platform, focusing on performance, security, and operational efficiency.",
        bullets: [
            "Developed a bulk branch manager import feature using CSV uploads, reducing manual entry time significantly.",
            "Implemented robust file validation and backend processing to ensure data accuracy.",
            "Built a dual authentication system across 35+ admin pages for sensitive data changes.",
            "Applied secure encoding methods to protect sensitive information in the database."
        ],
        outcome: "Improved operational speed, minimized errors, and strengthened security protocols."
    },
    {
        id: 2,
        title: "Digiface Web Application",
        projectType: "Issue resolution & enhancement",
        tools: ["Java", "JSP", "GitLab"],
        image: "/experience/digiface.jpg",
        intro: "Collaborated with QA to resolve critical backend and frontend issues in a live production web application.",
        bullets: [
            "Patched bugs impacting user workflows and data presentation.",
            "Optimized JSP pages for improved responsiveness.",
            "Enhanced backend request handling to stabilize deployments."
        ],
        outcome: "Boosted application stability, responsiveness, and user satisfaction."
    },
    {
        id: 3,
        title: "eKYC Report Generator Module",
        projectType: "Backend automation & reporting",
        tools: ["Spring Boot", "Jaspersoft Studio", "MS SQL", "Maven"],
        image: "/experience/ekyc-report.png",
        intro: "Developed advanced backend modules for automated report generation in Seylan Bank’s eKYC platform.",
        bullets: [
            "Created a database listener to trigger real-time report generation.",
            "Integrated JasperReports to design dynamic, high-accuracy mandate forms.",
            "Built Joint Account and Sole Partnership forms linked directly to live data."
        ],
        outcome: "Reduced manual workload, ensured compliance, and increased operational efficiency."
    }
];

import { CheckCircle2 } from "lucide-react";

export const Experience = () => {
    return (
        <section id="experience" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Professional <span className="text-primary">Experience</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Highlights from my internship at Epic Lanka Pvt. Ltd., working on impactful projects for enterprise clients.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {experiences.map((exp, key) => (
                        <div
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={exp.image}
                                    alt={exp.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {exp.tools.map((tool, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                                <p className="text-sm text-muted-foreground mb-3">
                                    <strong>Project Type:</strong> {exp.projectType}
                                </p>
                                <p className="text-muted-foreground text-sm mb-4">{exp.intro}</p>

                                <ul className="space-y-2 mb-4">
                                    {exp.bullets.map((point, idx) => (
                                        <li key={idx} className="flex items-center gap-2">
                                            <CheckCircle2
                                                className="text-primary shrink-0"
                                                size={16}
                                            />
                                            <span className="text-sm text-muted-foreground">{point}</span>
                                        </li>
                                    ))}
                                </ul>


                                <p className="text-sm text-foreground font-medium">{exp.outcome}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

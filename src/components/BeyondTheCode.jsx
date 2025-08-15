import { ExternalLink } from "lucide-react";
import { SiTiktok, SiYoutube } from "react-icons/si"; 
import { useState } from "react";

const beyondItems = [
  {
    id: 1,
    title: "Basketball",
    description:
      "Played and led the school basketball team as Vice Captain up to Under-20 level. Secured Central Province runner-up title three times.",
    images: [
      "/beyond/basketball1.JPG",
      "/beyond/basketball2.JPG",
      "/beyond/basketball3.JPG",
    ],
  },
  {
    id: 2,
    title: "Drummer",
    description:
      "Share professional drum covers on social media, perform with bands, and take on freelance event gigs.",
    images: ["/beyond/drumming-tiktok-screenshot.png"],
    socials: {
      youtube: "https://youtube.com/@malikadegaldoruwa4839?si=chQMpD1npNvow_E4",
      tiktok: "https://www.tiktok.com/@malikadegaldoruwa?is_from_webapp=1&sender_device=pc",
    },
  },
];

export const BeyondSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeImages, setActiveImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (images, index) => {
    setActiveImages(images);
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % activeImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + activeImages.length) % activeImages.length);
  };

  return (
    <section id="beyond" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Beyond <span className="text-primary">the Code</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A glimpse into my passions and interests outside of software engineering.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {beyondItems.map((item) => (
            <div
              key={item.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              {/* Images */}
              <div className="h-48 overflow-hidden flex">
                {item.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${item.title} ${idx + 1}`}
                    className="w-full object-cover cursor-pointer transition-transform duration-500 group-hover:scale-110"
                    onClick={() => openModal(item.images, idx)}
                  />
                ))}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{item.description}</p>

                {/* Social Icons for Drummer */}
                {item.socials && (
                  <div className="flex space-x-4">
                    {item.socials.youtube && (
                      <a
                        href={item.socials.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors"
                      >
                        <SiYoutube size={20} />
                      </a>
                    )}
                    {item.socials.tiktok && (
                      <a
                        href={item.socials.tiktok}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors"
                      >
                        <SiTiktok size={20} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={() => setModalOpen(false)}
          >
            ✕
          </button>
          <button
            className="absolute left-4 text-white hover:text-gray-300"
            onClick={prevImage}
          >
            ‹
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
            ›
          </button>
        </div>
      )}
    </section>
  );
};

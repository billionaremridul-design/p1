import galleryReception from "@/assets/gallery-reception.jpeg";
import galleryTreatment from "@/assets/gallery-treatment.jpeg";
import galleryExterior from "@/assets/gallery-exterior.jpeg";
import galleryEquipmentAsset from "@/assets/gallery-equipment-new.jpeg.asset.json";
const galleryEquipment = galleryEquipmentAsset.url;
import galleryWaiting from "@/assets/gallery-waiting.jpeg";
import gallerySterilization from "@/assets/gallery-sterilization.jpeg";

const images = [
  { src: galleryReception, label: "Modern Reception" },
  { src: galleryTreatment, label: "Treatment Suite" },
  { src: galleryEquipment, label: "Digital Imaging" },
  { src: galleryExterior, label: "Clinic Exterior" },
  { src: galleryWaiting, label: "Waiting Lounge" },
  { src: gallerySterilization, label: "Sterilization Lab" },
];

const GallerySection = () => (
  <section id="gallery" className="section-padding">
    <div className="container mx-auto">
      <h2 className="section-heading text-center">Experience Our World-Class Facility</h2>
      <p className="section-subheading text-center mb-12">State-of-the-art technology meets patient comfort</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img) => (
          <div key={img.label} className="gallery-item relative aspect-[4/3] rounded-xl">
            <img src={img.src} alt={img.label} className="w-full h-full object-cover rounded-xl" />
            <div className="gallery-overlay rounded-xl">
              <span className="text-primary-foreground font-display font-semibold text-lg">{img.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;

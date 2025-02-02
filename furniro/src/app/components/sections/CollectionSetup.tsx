import Image from "next/image";
import CollectionImage1 from "@/app/public/assets/images/featured/Rectangle 37.png";
import CollectionImage2 from "@/app/public/assets/images/featured/Rectangle 40.png";
import CollectionImage3 from "@/app/public/assets/images/featured/Rectangle 43.png";
import CollectionImage4 from "@/app/public/assets/images/featured/Rectangle 45.png";
import CollectionImage5 from "@/app/public/assets/images/featured/Rectangle 39.png";
import CollectionImage6 from "@/app/public/assets/images/featured/Rectangle 41.png";
import CollectionImage7 from "@/app/public/assets/images/featured/Rectangle 44.png";
import CollectionImage8 from "@/app/public/assets/images/featured/Rectangle 38.png";

const CollectionSetup = () => {
  return (
    <section className="max-w-[1440px] mx-auto py-8 px-4">
      <div className="text-center mb-4">
        <h5 className="text-md font-semibold text-gray-600">
          Share your setup with
        </h5>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">
          #FuniroFurniture
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
        {[
          CollectionImage1,
          CollectionImage2,
          CollectionImage3,
          CollectionImage4,
          CollectionImage5,
          CollectionImage6,
          CollectionImage7,
          CollectionImage8,
        ].map((image, index) => (
          <div key={index} className="relative w-full">
            <Image
              src={image}
              alt={`Setup ${index + 1}`}
              layout="responsive"
              width={300}
              height={350}
              objectFit="cover"
              className="rounded-md shadow-md transform transition duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollectionSetup;

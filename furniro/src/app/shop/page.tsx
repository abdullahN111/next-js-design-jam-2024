import SecondaryHeader from "@/app/components/shared/SecondaryHeader";
import ShopFilter from "@/app/components/sections/ShopFilter";
import ShopButtons from "@/app/components/sections/ShopButtons";
import ProductCard from "@/app/components/cards/ProductCard";
import ServiceBar from "@/app/components/shared/ServiceBar";

const page = () => {
  return (
    <section className="max-w-[1440px] mx-auto">
      <SecondaryHeader routeName="Shop" />
      <ShopFilter />
      <ProductCard />
      <ShopButtons />
      <ServiceBar />
    </section>
  );
};

export default page;

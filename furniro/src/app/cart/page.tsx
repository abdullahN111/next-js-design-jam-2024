import Cart from "@/app/components/sections/Cart";
import SecondaryHeader from "@/app/components/shared/SecondaryHeader";
import ServiceBar from "@/app/components/shared/ServiceBar";
import AuthGuard from "@/app/components/AuthGuard";

const page = () => {
  return (
    <AuthGuard>
      <section className="max-w-[1440px] mx-auto">
        <SecondaryHeader routeName="Cart" />
        <Cart />
        <ServiceBar />
      </section>
    </AuthGuard>
  );
};

export default page;

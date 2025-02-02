import SecondaryHeader from "@/app/components/shared/SecondaryHeader";
import ServiceBar from "@/app/components/shared/ServiceBar";
import PaymentDetails from "@/app/components/PaymentDetails";
import PaymentMethod from "@/app/components/PaymentMethod";

const Page = () => {
  return (
    <section className="max-w-[1440px] mx-auto font-poppins">
      <SecondaryHeader routeName="Checkout" />
      <div className="py-10 px-2 lg:px-24 flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-6">
        <PaymentMethod />
        <PaymentDetails />
      </div>
      <ServiceBar />
    </section>
  );
};

export default Page;

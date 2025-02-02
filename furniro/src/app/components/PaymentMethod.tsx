import { FaAngleDown } from "react-icons/fa";

const PaymentMethod = () => {
  return (
    <div className="w-full sm:w-[600px] py-16 px-4 sm:px-8 lg:px-16">
    <h2 className="text-[32px] sm:text-[34px] font-semibold mb-8">
      Billing Details
    </h2>
    <form className="flex flex-col gap-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col gap-[17px] w-full sm:w-[48%]">
          <label className="text-base font-semibold" htmlFor="firstname">
            First Name
          </label>
          <input
            type="text"
            className="border border-[#9F9F9F] rounded-lg focus:outline-none h-[70px] w-full text-base px-[14px]"
            id="firstname"
            name="firstname"
          />
        </div>
        <div className="flex flex-col gap-[17px] w-full sm:w-[48%]">
          <label className="text-base font-semibold" htmlFor="lastname">
            Last Name
          </label>
          <input
            type="text"
            className="border border-[#9F9F9F] rounded-lg focus:outline-none h-[70px] w-full text-base px-[14px]"
            id="lastname"
            name="lastname"
          />
        </div>
      </div>

      <div className="flex flex-col gap-[17px] w-full">
        <label className="text-base font-semibold" htmlFor="company">
          Company Name (Optional)
        </label>
        <input
          type="text"
          className="border border-[#9F9F9F] rounded-lg focus:outline-none h-[70px] w-full text-base px-[14px]"
          id="company"
          name="company"
        />
      </div>

      <div className="flex flex-col gap-[17px] relative w-full">
        <label className="text-base font-semibold" htmlFor="country">
          Country / Region
        </label>
        <div className="relative">
          <select
            id="country"
            name="country"
            className="border border-[#9F9F9F] rounded-lg focus:outline-none h-[70px] w-full text-base px-5 appearance-none"
          >
            <option
              className="text-[#9F9F9F] text-base"
              value=""
              disabled
              selected
            >
              Select Country
            </option>
            <option value="Pakistan">Pakistan</option>
            <option value="India">India</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Sri Lanka">Sri Lanka</option>
          </select>
          <span className="text-xl absolute right-6 top-1/2 transform -translate-y-1/2 cursor-pointer">
            <FaAngleDown />
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-[17px] w-full">
        <label
          className="text-base font-semibold"
          htmlFor="streetaddress"
        >
          Street Address
        </label>
        <input
          type="text"
          className="border border-[#9F9F9F] rounded-lg focus:outline-none h-[70px] w-full text-base px-[14px]"
          id="streetaddress"
          name="streetaddress"
        />
      </div>
      <div className="flex flex-col gap-[17px] w-full">
        <label className="text-base font-semibold" htmlFor="city">
          Town / City
        </label>
        <input
          type="text"
          className="border border-[#9F9F9F] rounded-lg focus:outline-none h-[70px] w-full text-base px-[14px]"
          id="city"
          name="city"
        />
      </div>
      <div className="flex flex-col gap-[17px] relative w-full">
        <label className="text-base font-semibold" htmlFor="country">
          Province
        </label>
        <div className="relative">
          <select
            id="country"
            name="country"
            className="border border-[#9F9F9F] rounded-lg focus:outline-none h-[70px] w-full text-base px-5 appearance-none"
          >
            <option
              className="text-[#9F9F9F] text-base"
              value=""
              disabled
              selected
            >
              Western Province
            </option>
            <option value="Pakistan">Sindh</option>
            <option value="India">Punjab</option>
            <option value="Bangladesh">KPK</option>
            <option value="Sri Lanka">Balochistan</option>
          </select>
          <span className="text-xl absolute right-6 top-1/2 transform -translate-y-1/2 cursor-pointer">
            <FaAngleDown />
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-[17px] w-full">
        <label className="text-base font-semibold" htmlFor="zipcode">
          ZIP Code
        </label>
        <input
          type="text"
          className="border border-[#9F9F9F] rounded-lg focus:outline-none h-[70px] w-full text-base px-[14px]"
          id="zipcode"
          name="zipcode"
        />
      </div>
      <div className="flex flex-col gap-[17px] w-full">
        <label className="text-base font-semibold" htmlFor="phone">
          Phone
        </label>
        <input
          type="tel"
          className="border border-[#9F9F9F] rounded-lg focus:outline-none h-[70px] w-full text-base px-[14px]"
          id="phone"
          name="phone"
        />
      </div>
      <div className="flex flex-col gap-[17px] w-full">
        <label className="text-base font-semibold" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          className="border border-[#9F9F9F] rounded-lg focus:outline-none h-[70px] w-full text-base px-[14px]"
          id="email"
          name="email"
        />
      </div>
      <div className="flex flex-col gap-[17px] w-full mt-4">
        <input
          type="text"
          className="border border-[#9F9F9F] rounded-lg focus:outline-none h-[70px] w-full text-base text-[#9F9F9F] px-[14px]"
          id="addinfo"
          name="addinfo"
          placeholder="Additional Information"
        />
      </div>
    </form>
  </div>
  )
}

export default PaymentMethod
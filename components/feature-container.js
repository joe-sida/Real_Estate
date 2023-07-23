import InfoCard from "./info-card";

const FeatureContainer = () => {
  return (
    <div className="self-stretch bg-primary-50 flex flex-col py-[70px] px-0 items-center justify-start text-center text-21xl text-primary-800 font-body-regular-600">
      <div className="self-stretch flex flex-col pt-[75px] px-0 pb-0 box-border items-center justify-start gap-[54px] max-w-[95%px]">
        <div className="self-stretch flex flex-col py-0 px-[30px] box-border items-center justify-start gap-[24px] max-w-[95%px]">
          <div className="self-stretch relative leading-[48px] font-semibold">
            Properties by Area
          </div>
          <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[86px] text-5xl text-gray-700">
          <InfoCard
            homeSaleRentId="/icon.svg"
            homeSaleRentText="Sell your home"
          />
          <InfoCard
            homeSaleRentId="/icon1.svg"
            homeSaleRentText="Rent your home"
            propPadding="22px 16px"
            propWidth="312px"
          />
          <InfoCard
            homeSaleRentId="/icon2.svg"
            homeSaleRentText="Buy a home"
            propPadding="22px"
            propWidth="unset"
          />
          <div className="rounded bg-gray-white shadow-[0px_24px_68px_rgba(59,_77,_129,_0.08)] w-[312px] flex flex-col py-[22px] px-5 box-border items-start justify-start min-w-[300px] max-w-[340px] text-left text-base">
            <div className="flex flex-col items-start justify-start gap-[24px]">
              <img
                className="relative w-[78px] h-[78px] overflow-hidden shrink-0"
                alt=""
                src="/icon3.svg"
              />
              <div className="flex flex-col items-start justify-start gap-[24px]">
                <div className="relative text-5xl leading-[32px] font-semibold text-center">
                  Free marketing
                </div>
                <div className="relative leading-[24px] text-lightslategray flex items-end w-[268px]">
                  We do a free evaluation to be sure you want to start selling.
                </div>
                <div className="relative leading-[24px] text-primary-500">
                  Read more
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureContainer;

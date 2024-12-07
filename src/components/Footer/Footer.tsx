import React from "react";
const Footer = () => {
  return (
    <footer className="bg-custom-blue text-[#EBF0FC] py-8">
      <div className="container mx-auto max-w-[1100px] px-4">
        <div className="flex">
          <div className="flex flex-col w-[45%] ">
            <h3 className="text-lg font-semibold mb-3">
              لیدما؛ دستیار آنلاین فروش متنی بر سفارش
            </h3>
            <p className="text-sm leading-[1.7] text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید
              سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم
              ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
              از طراحان گرافیک است.
            </p>
          </div>
          <div className="flex flex-col w-1/3 mr-9">
            <h3 className="text-lg font-semibold mb-3">دسترسی سریع</h3>
            <ul className="text-sm leading-[2.5]">
              <li>انواع چاپ</li>
              <li>هدایای تبلیغاتی</li>
              <li>طراحی تخصصی</li>
              <li>چند رسانه ای</li>
            </ul>
          </div>
          <div className="flex flex-col w-1/3 ml-5">
            <h3 className="text-lg font-semibold mb-3">اطلاعات تماس</h3>
            <ul className="text-sm leading-[2.2] list-disc list-inside">
              <li>آدرس: تهران -پرديس - کد پستی ۱۵۱۵۷۸۷۸۷</li>
              <li>تلفن پشتیبانی: ۱۲۳۴۵۶۷۸۹-۰۲۱</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 text-sm border-t border-t-[#6A73C3]">
          <p className="mt-2">ارائه شده توسط لدیما - © ۲۰۲۴</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <>
      <p className="absolute text-right font-iranSans font-[900] text-[#000000] leading-[31.3px] text-[20px] w-[301px] h-[31px] top-[114px] left-[37px] tablet:w-[452px] tablet:h-[47px] tablet:top-[153px] tablet:left-[191px] tablet:text-[30px] tablet:leading-[46.96px] laptop:w-[602px] laptop:h-[63px] laptop:top-[200px] laptop:left-[419px] laptop:text-[40px] laptop:leading-[62.61px]">
        لیست قیمت لحظه‌ای ارزهای دیجیتال‌
      </p>
      <p className="absolute text-right font-iranSans font-[900] text-[#000000] leading-[31.3px] text-[20px] w-[254px] h-[31px] top-[1255px] left-[100px] tablet:w-[305px] tablet:h-[38px] tablet:top-[1277px] tablet:left-[478px] tablet:text-[24px] tablet:leading-[37.57px] laptop:w-[305px] laptop:h-[38px] laptop:top-[1635px] laptop:left-[985px] laptop:text-[24px] laptop:leading-[37.57px]">
        {" "}
        توضیحات کلی در مورد رمز ارزها{" "}
      </p>
      <p className="absolute text-right font-iranSans font-[400] text-[#000000] leading-[24px] text-[12px] w-[334px] h-[384px] top-[1305px] left-[20px] tablet:w-[733px] tablet:h-[252px] tablet:top-[1340px] tablet:left-[50px] tablet:text-[14px] tablet:leading-[28px] laptop:w-[1140px] laptop:h-[192px] laptop:top-[1714px] laptop:left-[150px] laptop:text-[16px] laptop:leading-[32px]">
        {" "}
        رمز ارز ها از پروتکل های رمزگرافیکی و یا کد های فوق العاده پیچیده برای
        رمز گذاری دیتاهای حساس و انتقال آن ها استفاده می کنند تا معاملات امنی را
        فراهم کنند. توسعه دهندگان رمز ارزها این پروتکل ها را بر پایه اصول پیچیده
        ریاضیات و مهندسی کامپیوتر بنا کرده اند که آن ها را غیرقابل نفوذ می کند.
        این پروتکل ها همچنین هویت افراد استفاده کننده از رمز ارز ها را مخفی نگه
        می دارد و ردیابی و پیدا کردن آن ها را برای هر کسی و هر دولتی دشوار می
        کند. رمز ارزها همچنین برای کنترل شدن غیر متمرکز خود شناخته می شوند. این
        به آن معناست که تمام فعالیت ها و ارزش های این بازار توسط همان کد های
        پیچیده کنترل و ارزیابی می شوند و بانک ها و یا مقامات دولت ها کنترلی روی
        آن ها ندارند. ارزهای دیجیتال امکان معامله شدن توسط ارزهای واقعی را نیز
        دارا می باشند و شما می توانید در بعضی از مارکت های خاص و صرافی های
        شناخته شده، مانند بایننس (Binance)، ارز های دیجیتال خود را
        با دلار، پوند، یورو و غیره جایگزین کنید. خطر اصلی در همین مرحله اتفاق می
        افتد جایی که هکر ها و بدافزار ها امکان بلوکه کردن پول شما را در حین این
        انتقال دارا هستند.{" "}
      </p>
      <Image
        src="/Group 806.svg"
        alt="image"
        width={10}
        height={10}
        className="absolute w-[335px] h-[325px] top-[1715px] left-[20px] tablet:w-[731px] tablet:h-[411.31px] tablet:top-[1645px] tablet:left-[52px] laptop:w-[750px] laptop:h-[422px] laptop:top-[1972px] laptop:left-[345px] "
      />
      <p className="absolute text-right font-iranSans font-[400] text-[#000000] leading-[24px] text-[12px] w-[330px] h-[408px] top-[2080px] left-[23px] tablet:w-[732px] tablet:h-[252px] tablet:top-[2109px] tablet:left-[51px] tablet:text-[14px] tablet:leading-[28px] laptop:w-[1140px] laptop:h-[192px] laptop:top-[2460px] laptop:left-[150px] laptop:text-[16px] laptop:leading-[32px]">
        رمز ارز ها از پروتکل های رمزگرافیکی و یا کد های فوق العاده پیچیده برای
        رمز گذاری دیتاهای حساس و انتقال آن ها استفاده می کنند تا معاملات امنی را
        فراهم کنند. توسعه دهندگان رمز ارزها این پروتکل ها را بر پایه اصول پیچیده
        ریاضیات و مهندسی کامپیوتر بنا کرده اند که آن ها را غیرقابل نفوذ می کند.
        این پروتکل ها همچنین هویت افراد استفاده کننده از رمز ارز ها را مخفی نگه
        می دارد و ردیابی و پیدا کردن آن ها را برای هر کسی و هر دولتی دشوار می
        کند. رمز ارزها همچنین برای کنترل شدن غیر متمرکز خود شناخته می شوند. این
        به آن معناست که تمام فعالیت ها و ارزش های این بازار توسط همان کد های
        پیچیده کنترل و ارزیابی می شوند و بانک ها و یا مقامات دولت ها کنترلی روی
        آن ها ندارند. ارزهای دیجیتال امکان معامله شدن توسط ارزهای واقعی را نیز
        دارا می باشند و شما می توانید در بعضی از مارکت های خاص و صرافی های
        شناخته شده، مانند بایننس (Binance)، ارز های دیجیتال خود را
        با دلار، پوند، یورو و غیره جایگزین کنید. خطر اصلی در همین مرحله اتفاق می
        افتد جایی که هکر ها و بدافزار ها امکان بلوکه کردن پول شما را در حین این
        انتقال دارا هستند.
      </p>
      <Link
        href="/price"
        className="absolute w-[80px] text-center rounded-[30px] bg-blue-500 h-[30px] top-[500px] left-[500px]"
      >
        <button className="text-center">معامله</button>
      </Link>
    </>
  );
}

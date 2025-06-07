import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Navbar() {
  const t = useTranslations("Navigation");
  const navbarFields = [
    t("reem"),
    t("about"),
    t("services"),
    t("contact"),
    t("menu"),
  ];

  return (
    <div className="h-[10vh] w-full flex justify-between items-center lg:px-5 xl:px-10">
      {navbarFields.map((field, index) => {
        if (index === 0) {
          return (
            <Link
              key={index}
              className="font-koulen text-4xl text-white"
              href={"/"}
            >
              {field}
            </Link>
          );
        } else if (index === navbarFields.length - 1) {
          return (
            <div key={index} className="flex gap-2 items-center">
              <div className="flex flex-col gap-1 cursor-pointer">
                <div className="w-6 h-[2px] bg-white" />
                <div className="w-6 h-[2px] bg-white" />
              </div>
              <p className="font-koulen text-4xl text-white">{field}</p>
            </div>
          );
        } else {
          return (
            <Link
              key={index}
              className="font-koulen text-xl text-white"
              href={`#${field.toLowerCase()}`}
            >
              {field}
            </Link>
          );
        }
      })}
    </div>
  );
}

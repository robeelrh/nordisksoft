import { useTranslations } from "next-intl";
import EmailInput from "./EmailInput";
import { Link } from "@/i18n/navigation";
import "@fontsource/koulen";

export default function FooterSection() {
  const t = useTranslations("Footer");
  const LINKS = [
    {
      text: t("links.about"),
      link: "/",
    },
    {
      text: t("links.projects"),
      link: "/",
    },
    {
      text: t("links.blog"),
      link: "/",
    },
    {
      text: t("links.content"),
      link: "/",
    },
    {
      text: t("links.privacy"),
      link: "/",
    },
    {
      text: t("links.terms"),
      link: "/",
    },
    {
      text: t("links.error404"),
      link: "/",
    },
    {
      text: t("links.behance"),
      link: "/",
    },
    {
      text: t("links.twitter"),
      link: "/",
    },
    {
      text: t("links.instagram"),
      link: "/",
    },
    {
      text: t("links.dribbble"),
      link: "/",
    },
  ];

  const firstColumnLinks = LINKS.slice(0, LINKS.length / 2 + 2);
  const secondColumnLinks = LINKS.slice(LINKS.length / 2 + 2);

  return (
    <section className="h-[50vh] lg:m-2 xl:m-5 bg-[#F4F4F5]">
      <div className="w-11/12 h-11/12 mx-auto flex">
        <div className="flex-1/3 flex flex-col">
          <p className="lg:text-[160px] xl:text-[200px] font-koulen leading-none m-0 p-0 my-auto">
            REEM
          </p>
          <div className="lg:space-y-1 xl:space-y-3 font-inter font-medium">
            <p className="lg:text-md xl:text-lg">{t("contact.phone")}</p>
            <p className="lg:text-2xl xl:text-3xl">{t("contact.email")}</p>
          </div>
        </div>

        <div className="flex-4/6 flex flex-col justify-between font-inter font-medium">
          <div className="flex my-auto">
            <div className="flex flex-col lg:gap-2 xl:gap-4">
              <div className="lg:text-2xl xl:text-3xl">
                {t("newsletterTitle")}
              </div>
              <div className="text-[#11111180] lg:text-md xl:text-lg w-[85%]">
                {t("newsletterDescription")}
              </div>
              <EmailInput />
            </div>
            <div className="flex lg:gap-6 xl:gap-10">
              <div className="flex flex-col gap-2">
                {firstColumnLinks.map((link, index) => (
                  <Link key={index} href={link.link}>
                    {link.text}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                {secondColumnLinks.map((link, index) => (
                  <Link key={index + firstColumnLinks.length} href={link.link}>
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <p className="text-[#11111180] w-[80%]">{t("description")}</p>
        </div>
      </div>
    </section>
  );
}

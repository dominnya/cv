import { useTranslation } from "@/app/i18n";
import { Button } from "@/components/Button";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";

export default async function Home({
  params: { lang },
}: Readonly<{
  params: {
    lang: string;
  };
}>) {
  const { t } = await useTranslation(lang, "home");
  return (
    <div className="w-full h-full max-w-[50rem] flex flex-col gap-10 items-center justify-center lg:flex-row">
      <div className="flex flex-col gap-5 select-none max-w-[27.5rem] lg:max-w-[20rem]">
        <Heading>{t("hiHRs")}</Heading>
        <Paragraph>{t("description")}</Paragraph>
        <Paragraph>{t("thanksForAttention")}</Paragraph>
      </div>
      <div className="w-full flex flex-col gap-4 min-h-[12.25rem] max-w-[27.5rem]">
        <Button
          href={`/resume/${lang}.pdf`}
          className="grow"
          title={t("myResume.title")}
          hasForwardIcon
        >
          {t("myResume.description")}
        </Button>
        <div className="flex gap-4 grow">
          <Button
            href="https://github.com/domin-mnd"
            className="grow"
            title={t("github")}
            iconName="github"
          />
          <Button
            href="https://t.me/dominnya"
            className="grow"
            title={t("dmMe")}
            iconName="telegram"
            active
          />
        </div>
      </div>
    </div>
  );
}

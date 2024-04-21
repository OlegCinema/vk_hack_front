export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "ПроТЕГ",
  description:
    "Бери, впиши, узнай! Сервис классификации новостей по тематикам",
  mainNav: [
    {
      title: "Главная",
      href: "/",
    },
    {
      title: "Тестирование",
      href: "/test-models",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}

import { FooterSection, HomeLightHeroItem, DarkHeroItems, IGuideItem, HowToLightHeroItem } from "./types";
import { ChartImg, GDPRImg, LaptopImg, MessageImg, MonoblockImg, FormsImg, Subscribers, AffiliateImg, SubscriberImg, TransactionalImg, EmailImg, BillingImg, PostallImg} from "@/shared/assets";

export const homeLightHeroListItems: HomeLightHeroItem[] = [
  {
    category: "forms",
    title: "It takes minutes to start attracting new subscribers",
    description:
      "Customize any aspect of your signup form with zero hassle. All design elements and text are designed to help improve conversion rates. So you don't have to worry about what's working and what's not.",
    list: [
      "GDPR compliant check boxes & custom privacy policy",
      "Add forms to your website with HTML or Javascript",
      "Use conversion-boosting features like progress bars",
      "Customize forms to any language",
    ],
    button: "How Forms Work",
    img: GDPRImg,
    path: "/path/to/page1",
    isImgLeft: true,
  },
  {
    category: "CAMPAIGNS",
    title: "Quickly create and deploy email campaigns",
    description:
      "With an easy-to-use email editor that lets you start typing right away, you won't waste hours fiddling with display settings. Get straight to writing your next email.",
    list: [
      "Plain text editor",
      "Custom personalizations",
      "Subscriber segmenting and tags",
    ],
    button: "How Subscribers Work",
    img: LaptopImg,
    path: "/path/to/page2",
    isImgLeft: false,
  },
  {
    category: "EMAIL MARKETING AUTOMATIONS",
    title: "Craft Personalized Email Journeys",
    description:
      "Elevate your email marketing with Maildroppa's intelligent automations. From tailored drip campaigns to dynamic content based on subscriber actions, automate effortlessly.",
    list: [
      "React dynamically to subscriber actions",
      "Segment and personalize with fields and tags",
      "Send event reminders & anniversary greetings",
      "Engage with drip campaigns & welcome series",
    ],
    button: "How Automations Work",
    img: ChartImg,
    path: "/path/to/page1",
    isImgLeft: true,
  },
];
export const howToLightHeroListItems: HowToLightHeroItem[] = [
  {
    title: '<span style="background-color: #4eb9f4; color: white; padding: 4px 16px; border-radius: 8px;">Forms</span> designed to convert',
    description: "Create professional forms in minutes. Add extra conversion-boosting elements like progress bars and subscriber counters to increase conversion rates. So you can effortlessly attract an audience.",
    list: [
      "Easy customization of form fields, design, and language",
      "Three form types: popup, slider, and in-line",
      "GDPR compliant by default",
      "Custom opt-in and welcome emails",
    ],
    button: "How Automations Work",
    img: FormsImg,
    path: "/path/to/page1",
    isImgLeft: true,
  },
  {
    title: 'Simple subscriber <span style="background-color: #4eb9f4; color: white; padding: 4px 16px; border-radius: 8px;">segmenting</span> and <span style="background-color: #4eb9f4; color: white; padding: 4px 16px; border-radius: 8px;">tagging</span>',
    description: "Segment recipients using filters, the custom fields you've created, and the tags you've added. With a segmented subscriber base, it's easy to write more relevant content. And relevant content is what ultimately gets the sale.",
    button: "How Subscribers Work",
    img: Subscribers,
    path: "/path/to/page2",
    isImgLeft: false,
  },
  {
    title: 'Get straight to writing in your <span style="background-color: #4eb9f4; color: white; padding: 4px 16px; border-radius: 8px;">stripped-down editor</span>',
    description:
      "Maildroppa's default editor looks just like the email editor in your inbox. It requires no learn time, it's just you, your thoughts, and the page. Whether you're writing a newsletter to assist with marketing efforts, sales, or even just to keep yourself accountable, Maildroppa will help you get there faster.",
    button: "How Email Editor Work",
    img: LaptopImg,
    path: "/path/to/page1",
    isImgLeft: true,
  },
];


export const darkHeroItems: DarkHeroItems[] = [
  {
    title: "Quality Email Marketing & Automation for Small Businesses",
    description:
      "Maildroppa: German-engineered precision without the premium price. Designed for founders building the future. Simple to use, powerful in action.",
    list: [
      "Advanced automation flows",
      "Optimized for engagement & conversions",
      "Superior delivery rates",
      "GDPR compliant by default",
    ],
    primaryButton: "Sign Up Free",
    img: MonoblockImg,
    path: "/path/to/page1",
    isImgLeft: false,
  },
  {
    title: "Creating a newsletter takes minutes",
    description:
      "Maildroppa is built specifically to help busy founders win the email channel. We've taken email marketing, stripped it down to what's necessary, and given you intuitive tools that help you grow your audience.",
    list: [
      "Forms that convert",
      "Reporting and tracking",
      "Subscriber segments and tags",
      "Privacy-first capabilities",
      "Easy GDPR compliance",
      "Better delivery rates",
    ],
    img: MessageImg,
    path: "/path/to/page2",
    isImgLeft: false,
  },
];

export const mockFooterData: FooterSection[] = [
  {
    title: "Product",
    list: [
      { item: "Pricing", path: "/home/pricing" },
      { item: "Sign Up Free", path: "/home/sign-up-free" },
      { item: "Affiliate Program", path: "/home/affiliate-program" },
    ],
  },
  {
    title: "Features",
    list: [
      { item: "Core Features", path: "/" },
      { item: "Reporting and tracking", path: "/" },
      { item: "Subscriber segments and tags", path: "/" },
      { item: "Better delivery rates", path: "/" },
    ],
  },
  {
    title: "Company",
    list: [
      { item: "About Us", path: "/company/about-us" },
      { item: "Data Protection", path: "/company/data-protection" },
      { item: "Acceptable Use Policy", path: "/company/" },
      { item: "Imprint", path: "/company/Imprint" },
    ],
  },
  {
    title: "Support",
    list: [
      { item: "Maildroppa Academy", path: "/support/maildroppa-academy" },
      { item: "Guides", path: "/support" },
    ],
  },
];

export const mockGuideData: IGuideItem[] = [
  {
    title: "Email Automations",
    description: "Maildroppa allows you to fully automate your email marketing in minutes without any programming knowledge.",
    img: EmailImg,
  },
  {
    title: "Transactional Emails",
    description: "Create and manage emails that you send using Email Automations.",
    img: TransactionalImg,
  },
  {
    title: "Affiliate Partner Program",
    description: "The Maildroppa Affiliate Partner Program lets you earn a commission of 30% for 24 months for every new customer you refer to Maildroppa.",
    img: AffiliateImg,
  },
  {
    title: "Subscriber Fields and Tags",
    description: "The Subscriber Fields and Tags page allows you to manage all your subscriber fields and tags.",
    img: SubscriberImg,
  },
  {
    title: "Postal Address",
    description: "When sending newsletter campaigns through Maildroppa, it is necessary to provide a valid postal address for your company.",
    img: PostallImg,
  },
  {
    title: "Billing Details",
    description: "We need your billing details when you sign up for a paid Maildroppa plan, or an affiliate partnership.",
    img: BillingImg,
  }

];
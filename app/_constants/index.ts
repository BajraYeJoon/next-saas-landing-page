import logo1 from "@/public/aws.svg";
import logo2 from "@/public/adobe.svg";
import logo3 from "@/public/disney.svg";
import logo4 from "@/public/microsoft.svg";

import ben1 from "@/public/ben1.webp";
import ben2 from "@/public/ben2.webp";
import ben3 from "@/public/ben3.webp";
import ben4 from "@/public/ben4.webp";

import p1 from "@/public/p1.webp";
import p2 from "@/public/p2.webp";
import p3 from "@/public/p3.webp";
import p4 from "@/public/p4.jpg";

export const navLists = ["Home", "About", "Services", "Contact"];

export const logos = [
  {
    id: 1,
    src: logo1,
    alt: "Logo 1",
  },
  {
    id: 2,
    src: logo2,
    alt: "Logo 2",
  },
  {
    id: 3,
    src: logo3,
    alt: "Logo 3",
  },
  {
    id: 4,
    src: logo4,
    alt: "Logo 4",
  },
];

export const features = [
  {
    title: "Integration ecosystem",
    description:
      "Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.",
  },
  {
    title: "Goal setting and tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure data encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

export const aboutus = [
  {
    title: "Reclaim Time",
    description:
      "Ditch the app overload and endless customization! Our intuitive platform is easy to learn and use, so you can get started quickly and focus on what truly matters – accomplishing your tasks. No more wasting precious time figuring out complicated features or switching between multiple apps.",
    img: ben1,
  },
  {
    title: "Reduce Stress and Anxiety",
    description:
      "Stop worrying about missed deadlines, forgotten errands, or unclear task ownership. Our smart reminders and clear organization tools keep you on top of everything. Focus on the work at hand with the peace of mind that comes from knowing nothing will slip through the cracks.",
    img: ben2,
  },
  {
    title: "Boost Collaboration",
    description:
      "Working with others shouldn't feel like a game of telephone. Our platform fosters seamless teamwork by allowing you to easily share lists, assign tasks to colleagues, and track progress in real-time. No more confusion or missed communication – ensure everyone's on the same page and working towards shared goals.",
    img: ben3,
  },
  {
    title: "Gain Momentum and Confidence",
    description:
      "Seeing your progress visually is incredibly motivating. Our platform lets you watch your tasks getting completed, building momentum and boosting your confidence as you chip away at your to-do list. Celebrate accomplishments and stay motivated to achieve your goals.",
    img: ben4,
  },
];

export const testimonials = [
  {
    quote:
      "This task management software has revolutionized how our team works. The productivity has skyrocketed!",
    name: "John Doe",
    role: "CEO, Example Company",
    image: p1,
  },
  {
    quote:
      "The user-friendly interface and powerful features make it a joy to use. It's a game-changer for our project management.",
    name: "Jenn Smith",
    role: "Project Manager, XYZ Corporation",
    image: p2,
  },
  {
    quote:
      "The software's ability to seamlessly integrate with our existing systems was impressive. It's now an indispensable part of our workflow.",
    name: "Robert Johnson",
    role: "CTO, ABC Enterprises",
    image: p3,
  },
  {
    quote:
      "The customer support is top-notch. Any queries or issues we had were promptly addressed. Highly recommended!",
    name: "Garrett John",
    role: "Backend Developer, Tech Solutions",
    image: p4,
  },
];

export const plans = [
  {
    id: "individual",
    name: "Individual",
    description:
      "Perfect for personal task management. Includes access to all basic features.",
    price: "Free",
  },
  {
    id: "small",
    name: "Small Team",
    description:
      "Ideal for small teams looking to boost productivity. Includes advanced collaboration features.",
    price: "$49.99/month",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description:
      "Designed for large organizations with complex needs. Includes priority support and custom integrations.",
    price: "Contact us for pricing",
  },
];

export const faqData = [
  {
    id: "item-1",
    question: "Does the system allow for task delegation to team members?",
    answer:
      "Absolutely. Our task management solution is designed to facilitate team collaboration. You can easily assign tasks to other team members, and they will receive notifications about their new responsibilities. This feature is particularly useful for managers and team leaders who need to distribute work efficiently.",
  },
  {
    id: "item-2",
    question: "Is it possible to set deadlines for tasks within the system?",
    answer:
      "Yes, our system allows you to set specific due dates for each task. This feature is designed to help you manage your time effectively and ensure that all tasks are completed within their respective deadlines. You can also set reminders to ensure that you never miss a deadline.",
  },
  {
    id: "item-3",
    question:
      "Does the system support task categorization for better organization?",
    answer:
      "Yes, our task management solution supports task categorization. You can categorize tasks into different projects, tags, or even custom categories that suit your needs. This feature is designed to help you keep your tasks organized and easily searchable, making it easier to manage large projects or multiple workflows.",
  },
];

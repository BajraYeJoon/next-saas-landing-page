import Link from "next/link";

interface ButtonProps {
  text: string;
  additionalClasses?: string;
}

const Button = ({ text, additionalClasses }: ButtonProps) => (
  <Link href="/signin">
    <button
      type="button"
      className={`py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 transition-all cursor-pointer ${additionalClasses}`}
    >
      {text}
    </button>
  </Link>
);

export default Button;

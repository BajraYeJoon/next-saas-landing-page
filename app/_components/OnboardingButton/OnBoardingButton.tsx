interface ButtonProps {
  onClick: () => void;
  disabled: boolean;
  text: string | undefined;
}

const OnBoardingButton = ({ onClick, disabled, text }: ButtonProps) =>
  text && (
    <button
      onClick={onClick}
      disabled={disabled}
      className="group relative inline-block overflow-hidden border border-slate-300 px-8 py-3 focus:outline-none focus:ring"
      type="submit"
    >
      <span className="absolute inset-y-0 left-0 w-[2px] bg-slate-300  transition-all group-hover:w-full group-active:border-slate-300 "></span>

      <span className="relative text-sm font-medium border-slate-300  transition-colors group-hover:text-black">
        {text}
      </span>
    </button>
  );

export default OnBoardingButton;

import { ReactNode } from "react";

export const MaxWidth = ({
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className="mx-auto w-full max-w-md md:max-w-screen-xl sm:px-10 px-5">
      {children}
    </div>
  );
};

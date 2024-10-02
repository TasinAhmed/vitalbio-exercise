import clsx from "clsx";
import { ReactNode } from "react";

const Card = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={clsx(className, "p-12 bg-[#1D1D1D] rounded-3xl")}>
      {children}
    </div>
  );
};
export default Card;

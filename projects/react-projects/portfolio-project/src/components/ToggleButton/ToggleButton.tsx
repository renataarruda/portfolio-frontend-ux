import type { MouseEventHandler, ReactNode } from "react";

  interface Props {
    children: ReactNode;
    onClick: MouseEventHandler<HTMLButtonElement>;
  }

const ToggleButton = ({ children, onClick }: Props) => {

  return (
    <button onClick={onClick}>{children}</button>
  );
};

export default ToggleButton;

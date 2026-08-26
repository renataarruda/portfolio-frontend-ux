import type { MouseEventHandler, ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const GenericButton = ({ onClick, children }: Props) => {
  return (
    <div>
      <button onClick={onClick} style={{ cursor: "pointer" }}>
        {children}
      </button>
      {/* </a> */}
    </div>
  );
};

export default GenericButton;

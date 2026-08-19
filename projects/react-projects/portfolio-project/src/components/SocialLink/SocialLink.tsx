import type { ElementType } from "react";

interface Props {
  redeSocial: string;
  Icon: ElementType;
}

const SocialLink = ({ redeSocial, Icon }: Props) => {
  return (
    <div>
      <a href={redeSocial}>
        <Icon size={30}/>
      </a>
    </div>
  );
};

export default SocialLink;

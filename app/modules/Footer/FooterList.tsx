import { Link } from "@remix-run/react";
import { ILink } from "~/shared/interfaces";

interface Props {
  heading: string;
  links: ILink[];
}

export const FooterList: React.FC<Props> = ({ heading, links }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col gap-4">
        <h2 className="text-xl leading-6 uppercase font-light">{heading}</h2>
        <ul className="flex flex-col gap-4">
          {links.map((link) => (
            <li
              className="text-[#7E7E7E] hover:text-white transition-colors leading-7"
              key={link.href}
            >
              <Link to={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

import TwitterIcon from '../icons/TwitterIcon';
import InstagramIcon from '../icons/InstagramIcon';
import FacebookIcon from '../icons/FacebookIcon';

import { AUTHOR_LINKEDIN } from './constants';

const dataForSocialList = [
  { Icon: TwitterIcon, href: AUTHOR_LINKEDIN },
  { Icon: InstagramIcon, href: AUTHOR_LINKEDIN },
  { Icon: FacebookIcon, href: AUTHOR_LINKEDIN },
];

interface SocialListProps {
  className?: string;
}

export default function SocialList({ className }: SocialListProps) {
  return (
    <ul className={`flex gap-[12px] ${className ? className : ''}`}>
      {dataForSocialList.map(({ Icon, href }, index) => (
        <li key={index}>
          <a
            href={href}
            className="group flex py-[18px] px-[18px] rounded-full border-borderLight border-[1px] transition-colors hover:bg-bgBody hover:border-bgBody active:bg-textAccent active:border-textAccent"
          >
            <Icon
              width={24}
              height={24}
              className="group-hover:stroke-textDark group-active:stroke-textLight"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}

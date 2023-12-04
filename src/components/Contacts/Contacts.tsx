import MyLink, { MY_LINK_VIEW } from '@/UI/MyLink';

import { AUTHORS_GITHUB, PHONE_NUMBER } from './constants';

import MarkerIcon from '../icons/MarkerIcon';
import PhoneIcon from '../icons/PhoneIcon';
import ClockIcon from '../icons/ClockIcon';

export default function Contacts() {
  return (
    <section>
      <h4 className="heading-3 mb-[40px]">Contact us</h4>

      <ul className="flex flex-col justify-start mb-[40px] text-semibold">
        <li className="mb-[16px]">
          <MyLink
            className="gap-2 w-fit"
            href={AUTHORS_GITHUB}
            as="a"
            view={MY_LINK_VIEW.LIGHT}
          >
            <MarkerIcon width={20} height={20} />
            8558 Green Rd., LA
          </MyLink>
        </li>

        <li className="mb-[16px]">
          <MyLink
            className="gap-2 w-fit"
            href={`tel:${PHONE_NUMBER.LINK}`}
            as="a"
            view={MY_LINK_VIEW.LIGHT}
          >
            <PhoneIcon width={20} height={20} />
            {PHONE_NUMBER.TEXT}
          </MyLink>
        </li>

        <li>
          <p className="flex gap-2">
            <ClockIcon width={20} height={20} />
            Mon-Sat: 9:00 AM – 23:00 PM
          </p>
        </li>
      </ul>

      <p className="flex items-center gap-2 italic">
        Prod. by:{' '}
        <MyLink
          className="text-lg"
          href={AUTHORS_GITHUB}
          as="a"
          view={MY_LINK_VIEW.LIGHT}
        >
          KohnoA
        </MyLink>
      </p>
    </section>
  );
}

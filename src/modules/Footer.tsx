import Title from '@/UI/Title';
import Contacts from '@/components/Contacts';
import SocialList from '@/components/SocialList';
import { MAIN_SECTIONS_ID } from '@/constants/routes';

export default function Footer() {
  return (
    <footer id={MAIN_SECTIONS_ID.CONTACT_US} className="container mb-[40px]">
      <div className="flex items-center gap-[100px] py-[100px] px-[100px] text-textLight bg-bgContainer rounded-[40px] max-xl:flex-col max-xl:px-[60px] max-xl:items-start">
        <div>
          <Title level={2} size={2} className="flex flex-col gap-2">
            Sip, Savor, Smile.
            <span className="text-textAccent italic">It’s coffee time!</span>
          </Title>

          <SocialList />
        </div>

        <Contacts />
      </div>
    </footer>
  );
}

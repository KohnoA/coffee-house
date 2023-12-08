import Title from '@/UI/Title';
import Contacts from '@/components/Contacts';
import SocialList from '@/components/SocialList';

export default function Footer() {
  return (
    <footer className="container mb-[40px]">
      <div className="flex wrap items-center gap-[100px] py-[100px] px-[100px] text-textLight bg-bgContainer rounded-[40px]">
        <div>
          <Title level={2} className="flex flex-col gap-2">
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

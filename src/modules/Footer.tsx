import Contacts from '@/components/Contacts';
import SocialList from '@/components/SocialList';

export default function Footer() {
  return (
    <footer className="container mb-[40px]">
      <div className="flex items-center gap-[100px] py-[100px] px-[100px] text-textLight bg-bgContainer rounded-[40px]">
        <div>
          <h2 className="heading-2 flex flex-col mb-[40px]">
            Sip, Savor, Smile.
            <span className="text-textAccent italic">It’s coffee time!</span>
          </h2>

          <SocialList />
        </div>

        <Contacts />
      </div>
    </footer>
  );
}

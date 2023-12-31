import Button from '@/UI/Button';
import Title from '@/UI/Title';
import { AUTHOR_LINKEDIN } from '@/components/SocialList/constants';
import AppleIcon from '@/components/icons/AppleIcon';
import GooglePlayIcon from '@/components/icons/GooglePlayIcon';
import Image from 'next/image';
import bgImage from '@/../public/images/mobile-screens.png';
import { MAIN_SECTIONS_ID } from '@/constants/routes';

export default function Ecosystem() {
  return (
    <section
      id={MAIN_SECTIONS_ID.MOBILE_APP}
      className="grid grid-cols-2 gap-[100px] mb-[100px] lg:grid-cols-1 lg:justify-items-center md:gap-[40px]"
    >
      <div className="flex flex-col justify-center items-start">
        <Title level={2} size={2}>
          <span className="italic text-textAccent">Download</span> our apps to start
          ordering
        </Title>

        <p className="mb-[40px]">
          Download the Resource app today and experience the comfort of ordering your
          favorite coffee from wherever you are
        </p>

        <div className="flex flex-wrap gap-[20px]">
          <Button
            className="group flex items-center gap-[8px] min-w-[200px]"
            as="a"
            href={AUTHOR_LINKEDIN}
          >
            <AppleIcon
              className="transition-all group-hover:fill-textLight"
              width={36}
              height={36}
            />
            <p className="flex flex-col gap-[2px]">
              <span className="caption">Available on the</span> App Store
            </p>
          </Button>

          <Button
            className="group flex items-center gap-[8px] min-w-[200px]"
            as="a"
            href={AUTHOR_LINKEDIN}
          >
            <GooglePlayIcon
              className="transition-all group-hover:fill-textLight"
              width={36}
              height={36}
            />
            <p className="flex flex-col gap-[2px]">
              <span className="caption">Available on</span> Google Play
            </p>
          </Button>
        </div>
      </div>

      <Image
        className="h-auto"
        src={bgImage}
        width={630}
        height={630}
        sizes="630px"
        alt="Modile App"
      />
    </section>
  );
}

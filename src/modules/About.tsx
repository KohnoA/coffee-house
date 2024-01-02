import Title from '@/UI/Title';
import Image from 'next/image';
import { MAIN_SECTIONS_ID } from '@/constants/routes';

import aboutImg1 from '@/../public/images/about-1.jpg';
import aboutImg2 from '@/../public/images/about-2.jpg';
import aboutImg3 from '@/../public/images/about-3.jpg';
import aboutImg4 from '@/../public/images/about-4.jpg';

const IMAGE_LIST = [aboutImg1, aboutImg2, aboutImg3, aboutImg4];

export default function About() {
  return (
    <section id={MAIN_SECTIONS_ID.ABOUT} className="mb-[100px]">
      <Title level={2} size={2}>
        Resource is{' '}
        <span className="text-textAccent italic">the perfect and cozy place</span> where
        you can enjoy a variety of hot beverages, relax, catch up with friends, or get
        some work done.
      </Title>

      <ul className="min-h-[1060px] grid grid-cols-2 grid-rows-7 grid-flow-column-dense gap-[40px] max-lg:min-h-[1220px] max-lg:grid-cols-1 max-lg:grid-rows-2">
        {IMAGE_LIST.map((img, index) => (
          <li
            key={img.src}
            className="relative group rounded-2xl overflow-hidden cursor-pointer row-[span_4] even:row-[span_3] max-lg:row-[span_1] max-lg:even:hidden"
          >
            <Image
              className="object-cover transition-transform scale-110 group-hover:scale-100"
              blurDataURL={img.blurDataURL}
              placeholder="blur"
              src={img}
              sizes="660px"
              fill
              alt={`Picture about us ${index + 1}`}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

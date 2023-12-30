import Button from '@/UI/Button';
import Title from '@/UI/Title';
import { APP_ROUTES } from '@/constants/routes';
import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container flex flex-col justify-center items-center min-h-[calc(100vh-100px)]">
      <Title level={2} className="heading-1 !mb-[5px]">
        404
      </Title>
      <p className="heading-2 mb-[40px]">
        <span className="italic text-textAccent">Page</span> Not Found
      </p>
      <Button as={Link} href={APP_ROUTES.MAIN}>
        Return To Main
      </Button>
    </section>
  );
}

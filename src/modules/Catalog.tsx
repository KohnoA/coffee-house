import Title from '@/UI/Title';
import Button from '@/UI/Button';

interface CatalogProps {}

export async function getCategories(): Promise<
  { category: string; icon: string }[]
> {
  const CATEGORIES_ICONS: { [key: string]: string } = {
    coffee: '☕',
    tea: '🫖',
    dessert: '🍰',
  };

  const { default: response } = await import('@/db/products.json');
  const uniqueCategories = response.reduce((acc: string[], next) => {
    const { category } = next;

    if (!acc.includes(category)) acc.push(category);

    return acc;
  }, []);

  return uniqueCategories.map((category) => ({
    category,
    icon: CATEGORIES_ICONS[category],
  }));
}

export default async function Catalog({}: CatalogProps) {
  const categories = await getCategories();

  return (
    <section>
      <div className="flex flex-col justify-center items-center mb-[40px]">
        <Title level={2} size={2} className="max-w-[800px] text-center">
          Behind each of our cups hides an{' '}
          <span className="italic text-textAccent">amazing surprise</span>
        </Title>

        <ul className="flex gap-[16px]">
          <li>
            <Button className="group flex items-center gap-[8px] py-[8px] pl-[8px] pr-[16px] border-borderLight hover:border-bgContainer">
              <span className="flex justify-center items-center w-[30px] h-[30px] p-[5px] rounded-full bg-borderLight group-hover:bg-bgBody">
                ☕
              </span>{' '}
              Coffee
            </Button>
          </li>
          <li>
            <Button className="group flex items-center gap-[8px] py-[8px] pl-[8px] pr-[16px] border-borderLight hover:border-bgContainer">
              <span className="flex justify-center items-center w-[30px] h-[30px] p-[5px] rounded-full bg-borderLight group-hover:bg-bgBody">
                🫖
              </span>{' '}
              Tea
            </Button>
          </li>
          <li>
            <Button className="group flex items-center gap-[8px] py-[8px] pl-[8px] pr-[16px] border-borderLight hover:border-bgContainer">
              <span className="flex justify-center items-center w-[30px] h-[30px] p-[5px] rounded-full bg-borderLight group-hover:bg-bgBody">
                🍰
              </span>{' '}
              Dessert
            </Button>
          </li>
        </ul>
      </div>
      <div>
        {categories.map(({ category, icon }) => (
          <p key={category}>
            <span>{icon}</span> {category}
          </p>
        ))}
      </div>
    </section>
  );
}

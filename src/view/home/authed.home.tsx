import Card from '@/components/card/person.card';
import {Search} from '@/components/section/heroSearch';
import {AdsPerson} from '@/components/slider/adsPerson';

export default function IndexPage() {
  return (
    <div>
      <Search />
      <AdsPerson />
      <Card />
    </div>
  );
}

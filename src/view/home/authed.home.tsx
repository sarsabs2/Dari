import Card from '@/components/card/person.card';
import {NavigationBottom} from '@/components/navbar/navigation.bottom';
import {Search} from '@/components/section/heroSearch';

export default function IndexPage() {
  return (
    <div>
      <Search />
      <Card />
      <NavigationBottom />
    </div>
  );
}

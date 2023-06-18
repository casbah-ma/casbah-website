import Link from 'next/link';
import { BreadWrapper, Child, Parent } from './Breadcrumb.styles';
import RightArrow from '../../icons/RightArrow';

const Breadcrumb = ({ parent, slug }) => {
  return (
    <BreadWrapper>
      <Link href={`/${parent}`}>
        <Parent>{parent}</Parent>
      </Link>
      <RightArrow />
      <Child>{slug}</Child>
    </BreadWrapper>
  );
};

export default Breadcrumb;

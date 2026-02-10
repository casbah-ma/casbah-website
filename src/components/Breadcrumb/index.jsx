import Link from 'next/link';
import { BreadWrapper, Child, Parent } from './Breadcrumb.styles';
import RightArrow from '../../icons/RightArrow';

const Breadcrumb = ({ parent, title }) => {
  return (
    <BreadWrapper>
      <Link href={`/${parent}`}>
        <Parent>{parent}</Parent>
      </Link>
      <RightArrow />
      <Child>{title}</Child>
    </BreadWrapper>
  );
};

export default Breadcrumb;

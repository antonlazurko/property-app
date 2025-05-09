import Link from 'next/link';
import { ReactNode } from 'react';

interface InfoBoxProps {
  children: ReactNode;
  heading: string;
  linkFor: string;
  linkTitle: string;
  backgroundColor?: string;
  textColor?: string;
  linkBgColor?: string;
}

const InfoBox = ({
  children,
  heading,
  linkFor,
  linkTitle,
  linkBgColor = 'bg-black',
  backgroundColor = 'bg-gray-100',
  textColor = 'text-gray-800',
}: InfoBoxProps) => {
  return (
    <div className={`${backgroundColor} ${textColor} p-6 rounded-lg shadow-md`}>
      <h2 className="text-2xl font-bold">{heading}</h2>
      <p className="mt-2 mb-4">{children}</p>
      <Link
        href={linkFor}
        className={`${linkBgColor} inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700`}
      >
        {linkTitle}
      </Link>
    </div>
  );
};

export default InfoBox;

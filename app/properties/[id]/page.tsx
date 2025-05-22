import PropertyDetails from '@/components/PropertyDetails';
import PropertyHeaderImage from '@/components/PropertyHeaderImage';
import connectDB from '@/config/db';
import Property from '@/models/Property';
import { IProperty } from '@/types/property';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';

interface IPropertyPageParams {
  id: string;
}

interface IPropertyPageProps {
  params: Promise<IPropertyPageParams>;
}

const PropertyPage = async ({ params }: IPropertyPageProps) => {
  const { id } = await params;
  await connectDB();
  let property: IProperty | null = null;
  try {
    property = await Property.findById(id).lean<IProperty>();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('Unknown error occurred');
    }
  }

  if (!property) {
    return notFound();
  }

  return (
    <>
      <PropertyHeaderImage image={property.images[0]} />
      <section>
        <div className="container m-auto py-6 px-6">
          <Link href="/properties" className="text-blue-500 hover:text-blue-600 flex items-center">
            <FaArrowLeft className="mr-2"></FaArrowLeft> Back to Properties
          </Link>
        </div>
      </section>
      <section className="bg-blue-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <PropertyDetails property={property} />
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertyPage;

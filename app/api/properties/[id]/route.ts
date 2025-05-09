import { NextRequest } from 'next/server';
import connectDB from '@/config/db';
import Property from '@/models/Property';
import { IProperty } from '@/types/property';

type Params = Promise<{ id: string }>;

export const GET = async (req: NextRequest, props: { params: Params }): Promise<Response> => {
  const { id } = await props.params;

  try {
    await connectDB();
    const property: IProperty | null = await Property.findById(id);

    if (!property) {
      return new Response('Property not found', { status: 404 });
    }

    return new Response(JSON.stringify(property), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching property:', error);
    return new Response('Failed to fetch property', { status: 500 });
  }
};

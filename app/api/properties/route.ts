import connectDB from '@/config/db';
import Property from '@/models/Property';
import { IProperty } from '@/types/property';

export const GET = async () => {
  try {
    connectDB();
    const properties: IProperty[] = await Property.find({});
    return new Response(JSON.stringify(properties), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching properties:', error);
    return new Response('Failed to fetch properties', { status: 500 });
  }
};

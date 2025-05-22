'use server';
import Property from "@/models/Property";
import { IProperty } from "@/types/property";
import { getSessionUser } from '@/utils/getSessionUser';
import { redirect } from 'next/navigation';

async function addProperty(formData: FormData) {
    const sessionData = await getSessionUser();

    if (!sessionData) {
        throw new Error('User is not authenticated');
    }
    const { userId } = sessionData;

    const property: Omit<IProperty, '_id' | 'createdAt' | 'updatedAt'> = {
        owner: userId,
        name: formData.get('name') as string,
        type: formData.get('type') as string,
        description: formData.get('description') as string,
        location: {
            street: formData.get('street') as string,
            city: formData.get('city') as string,
            state: formData.get('state') as string,
            zipcode: formData.get('zipcode') as string,
        },
        beds: Number(formData.get('beds')),
        baths: Number(formData.get('baths')),
        square_feet: Number(formData.get('square_feet')),
        amenities: formData.getAll('amenities').filter(val => typeof val === 'string') as string[],
        rates: {
            nightly: Number(formData.get('nightly')) || undefined,
            weekly: Number(formData.get('weekly')) || undefined,
            monthly: Number(formData.get('monthly')) || undefined,
        },
        seller_info: {
            name: formData.get('seller_name') as string || undefined,
            phone: formData.get('seller_phone') as string || undefined,
            email: formData.get('seller_email') as string || undefined,
        },
        images: formData.getAll('images')
            .filter((img): img is File => img instanceof File && img.name !== '')
            .map(img => img.name) as string[],
        is_featured: formData.get('is_featured') === 'true',
    };
    const newProperty = new Property(property);
    await newProperty.save();
    redirect(`/properties/${newProperty._id}`);
}
export default addProperty;
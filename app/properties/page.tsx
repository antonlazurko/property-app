import PropertyCard from "@/components/PropertyCard";
import connectDB from "@/config/db";
import Property from "@/models/Property";

export interface IProperty {
    _id: string;
    owner: string;
    name: string;
    type: string;
    description: string;
    location: {
        street: string;
        city: string;
        state: string;
        zipcode: string;
    };
    beds: number;
    baths: number;
    square_feet: number;
    amenities: string[];
    rates?: {
        nightly?: number;
        weekly?: number;
        monthly?: number;
    };
    seller_info?: {
        name?: string;
        phone?: string;
        email?: string;
    };
    images: string[];
    is_featured?: boolean;
    createdAt?: string;
    updatedAt?: string;
}


const PropertiesPage = async() => {
    await connectDB();
    const result = await Property.find({}).lean<IProperty[]>();

    const properties: IProperty[] = result.map((item) => ({
        ...item,
        _id: item._id.toString(),
        owner: item.owner.toString()
    }));


    return(
    <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto px-x py-6">
            { properties.length === 0 && <p>No properties found</p>}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                properties.map((property) => (<PropertyCard key={property._id} property={property} />))}
            </div>
        </div>
    </section>
)};

export default PropertiesPage;
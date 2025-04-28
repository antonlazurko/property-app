interface IPropertyPageParams {
    id: string;
}
interface IPropertyPageSearchParams {
    name: string;
}

interface IPropertyPageProps {
    params: Promise<IPropertyPageParams>;
    searchParams: Promise<IPropertyPageSearchParams>
}

const PropertyPage = async ({ params, searchParams }: IPropertyPageProps) => {
    const { id } = await params;
    const { name } = await searchParams;
    console.log('id', id);
    console.log('name', name);

    return <div>Property: #{id}</div>;
};

export default PropertyPage;
interface IPropertyPageParams {
    id: string;
}

interface IPropertyPageProps {
    params: Promise<IPropertyPageParams>;
}

const PropertyPage = async ({ params }: IPropertyPageProps) => {
    const { id } = await params;
    return <div>Property: #{id}</div>;
};

export default PropertyPage;

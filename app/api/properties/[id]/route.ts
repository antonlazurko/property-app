import connectDB from "@/config/db"
import Property from "@/models/Property"
import { IProperty } from "@/types/property";


interface RequestParams {
    params: {
        id: string;
    };
}

export const GET = async (request: Request, { params }: RequestParams): Promise<Response> => {
    try {
        connectDB();
        const property: IProperty | null = await Property.findById(params.id);
        if (!property) {
            return new Response("Property not found", { status: 404 })
        }
        return new Response(JSON.stringify(property), { status: 200, headers: { "Content-Type": "application/json" } });
    } catch (error) {
        console.error("Error fetching properties:", error);
        return new Response("Failed to fetch properties", { status: 500 });
    }
};
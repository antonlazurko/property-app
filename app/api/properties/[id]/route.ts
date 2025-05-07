import { NextRequest } from "next/server";
import connectDB from "@/config/db";
import Property from "@/models/Property";
import { IProperty } from "@/types/property";

interface Params {
  id: string;
}

export const GET = async (
  request: NextRequest,
  { params }: { params: Params }
): Promise<Response> => {
  try {
    await connectDB();
    const property: IProperty | null = await Property.findById(params.id);
    if (!property) {
      return new Response("Property not found", { status: 404 });
    }
    return new Response(JSON.stringify(property), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching property:", error);
    return new Response("Failed to fetch property", { status: 500 });
  }
};
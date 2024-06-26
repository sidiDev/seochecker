import { NextResponse } from "next/server";
import e from "@/dbschema/edgeql-js";
import { client } from "@/edgedb";

// Handler for POST requests
export async function POST(request: Request) {
  const { id } = await request.json();
  // Delete Everything
  const query = e.delete(e.Ideas, () => ({
    filter_single: { id },
  }));

  const result = await query.run(client);
  console.log(result);

  // Returning JSON response
  return NextResponse.json({
    deleted: true,
  });
}

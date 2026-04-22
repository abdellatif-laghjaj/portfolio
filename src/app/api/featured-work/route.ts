import { NextResponse } from "next/server";
import { featureWork } from "@/lib/data";

export const GET = async () => {
  return NextResponse.json(
    {
      featureWork,
    },
    {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    },
  );
};

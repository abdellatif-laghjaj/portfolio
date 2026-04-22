import { NextResponse } from "next/server";
import {
  experienceData,
  educationData,
  certifications,
  projectOverview,
} from "@/lib/data";

export const GET = async () => {
  return NextResponse.json(
    {
      experienceData,
      educationData,
      certifications,
      projectOverview,
    },
    {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    },
  );
};

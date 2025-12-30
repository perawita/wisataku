import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const adm4 = searchParams.get("adm4");

  if (!adm4) {
    return NextResponse.json({ error: "adm4 required" }, { status: 400 });
  }

  try {
    const res = await fetch(
      `https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4=${adm4}`,
      { cache: "no-store" }
    );

    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "BMKG fetch failed" },
      { status: 500 }
    );
  }
}

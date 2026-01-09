import dbConnect from '@/lib/dbConnect';
import Place from '@/models/Place';
import { NextResponse, NextRequest } from 'next/server';

export async function GET() {
  await dbConnect();
  try {
    const places = await Place.find({});
    return NextResponse.json(places);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  await dbConnect();
  try {
    const body = await request.json();
    const place = await Place.create(body);
    return NextResponse.json(place, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
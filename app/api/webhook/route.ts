import { NextRequest, NextResponse } from 'next/server';

import { endpoint } from 'lib/shopify';
export async function GET(req: NextRequest): Promise<Response> {
  console.log(req);
  return NextResponse.json({ status: 500, message: endpoint });
}

export async function POST(req: NextRequest): Promise<Response> {
  console.log(req);
  return NextResponse.json({ status: 500, message: endpoint });
}

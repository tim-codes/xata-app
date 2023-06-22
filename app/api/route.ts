import { NextResponse } from 'next/server';
import { getXataClient } from '@/lib/xata';

export async function POST(request: Request) {
  const { name } = (await request.json()) as { name: string };
  const xata = getXataClient();
  const user = await xata.db.users.create({ name });

  return NextResponse.json({ user });
}

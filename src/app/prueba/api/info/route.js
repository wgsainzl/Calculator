import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { operation, expression } = await req.json();
    const url = `https://newton.now.sh/api/v2/${operation}/${expression}`;

    const res = await fetch(url);

    if (!res.ok) {
      return NextResponse.error(new Error('Failed to fetch data'));
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.error(new Error('Error processing request'));
  }
}

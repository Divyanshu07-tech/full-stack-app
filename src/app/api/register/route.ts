import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { hash } from 'bcryptjs';

export async function POST(req: Request) {
  try {
    const bodyText = await req.text();
    console.log('Raw Body:', bodyText);

    let body;
    try {
      body = JSON.parse(bodyText);
    } catch (err) {
      console.error('JSON Parse Error:', err);
      return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
    }

    const { name, email, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db('Divyanshu_database');

    const existingUser = await db.collection('users').findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    const hashedPassword = await hash(password, 10);
    await db.collection('users').insertOne({
      name,
      email,
      password: hashedPassword,
      role: 'user',
    });

    return NextResponse.json({ message: 'User registered successfully' }, { status: 201 });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
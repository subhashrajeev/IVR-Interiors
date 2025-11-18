import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, message } = body;

    // Validate required fields
    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create contact data object
    const contactData = {
      id: Date.now().toString(),
      name,
      phone,
      email,
      message,
      timestamp: new Date().toISOString(),
    };

    // Define file path
    const dataDir = path.join(process.cwd(), 'data');
    const filePath = path.join(dataDir, 'contacts.json');

    // Ensure data directory exists
    try {
      await fs.access(dataDir);
    } catch {
      await fs.mkdir(dataDir, { recursive: true });
    }

    // Read existing contacts or create new array
    let contacts = [];
    try {
      const fileContent = await fs.readFile(filePath, 'utf-8');
      contacts = JSON.parse(fileContent);
    } catch {
      // File doesn't exist or is empty, start with empty array
      contacts = [];
    }

    // Add new contact
    contacts.push(contactData);

    // Write updated contacts back to file
    await fs.writeFile(filePath, JSON.stringify(contacts, null, 2));

    // Return success response
    return NextResponse.json(
      { message: 'Contact form submitted successfully', data: contactData },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ 
        error: 'Invalid file type. Only PDF and DOC files are supported.' 
      }, { status: 400 });
    }

    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      return NextResponse.json({ 
        error: 'File too large. Maximum size is 10MB.' 
      }, { status: 400 });
    }

    await new Promise(resolve => setTimeout(resolve, 1000));

    const extractedText = 'JOHN DOE\nSoftware Engineer\nSkills: React, TypeScript, Node.js';
    const skills = ['React', 'TypeScript', 'Node.js'];

    const response = {
      success: true,
      fileId: Date.now().toString(),
      fileName: file.name,
      fileSize: file.size,
      extractedText,
      skills,
      processingTime: 1.2
    };

    return NextResponse.json(response);

  } catch (error) {
    console.error('Resume upload error:', error);
    return NextResponse.json({ 
      error: 'Failed to process resume' 
    }, { status: 500 });
  }
}
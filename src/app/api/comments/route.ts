// src/app/api/comments/route.ts

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const response = await fetch(`${process.env.STRAPI_API_URL}/api/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: body }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to create comment" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error creating comment:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}


export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const blogId = searchParams.get('blogId');
    const page = searchParams.get('page') || '1';
    const pageSize = searchParams.get('pageSize') || '4';

    if (!blogId) {
      return NextResponse.json({ error: "Blog ID is required" }, { status: 400 });
    }

    const response = await fetch(
      `${process.env.STRAPI_API_URL}/api/comments?filters[blogs][id][$eq]=${blogId}&filters[isApproved][$eq]=true&sort=createdAt:desc&pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch comments" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json({
      comments: data.data || [],
      total: data.meta?.pagination?.total || 0
    });
  } catch (error) {
    console.error("Error fetching comments:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
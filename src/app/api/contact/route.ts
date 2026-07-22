import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Direct Web3Forms submission to Gmail address (thejaswipt@gmail.com)
    // replyto is set to customer's email address so you can click 'Reply' directly in Gmail
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
      },
      body: JSON.stringify({
        access_key: "9e663a8a-fa39-4458-91bd-3424dd4c8f5d",
        name,
        email,
        replyto: email,
        subject: `💌 New Customer Inquiry from ${name}`,
        message: `You received a new message from your Yarnbloom Crochet website!\n\nCustomer Details:\n------------------\nName: ${name}\nEmail: ${email}\n\nMessage Content:\n${message}\n\n------------------\nNote: Hit 'Reply' in Gmail to reply directly to ${email}.`,
        from_name: `${name} (Yarnbloom Website)`,
        to_email: "thejaswipt@gmail.com",
      }),
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({
        success: true,
        message: "Message successfully sent to thejaswipt@gmail.com",
        data,
      });
    } else {
      console.error("Web3Forms API Error:", data);
      return NextResponse.json(
        { success: false, error: data.message || "Failed to deliver email" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error in contact API route:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email message" },
      { status: 500 }
    );
  }
}

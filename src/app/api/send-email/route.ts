import { NextResponse } from "next/server";
import { Resend } from "resend";
import { BRAND, CONTACT, DOCTOR } from "@/lib/constants";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, preferredDate, preferredTime, message } = body;

    // Validate required fields
    if (!name || !phone || !service || !preferredDate || !preferredTime) {
      return NextResponse.json(
        { error: "Missing required appointment fields" },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.APPOINTMENT_RECIPIENT_EMAIL || CONTACT.email;

    if (!apiKey) {
      // If key is not yet set in environment, simulate successful booking output in development
      console.warn("RESEND_API_KEY is not configured in .env.local. Simulating email send.");
      return NextResponse.json({
        success: true,
        simulated: true,
        message: "Appointment request received successfully! (Simulated - set RESEND_API_KEY in .env.local for real emails)",
      });
    }

    const resend = new Resend(apiKey);

    // Send notification email to the clinic
    const emailResult = await resend.emails.send({
      from: `${BRAND.name} Booking <onboarding@resend.dev>`,
      to: [toEmail],
      subject: `New Appointment Request: ${name} - ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 16px; padding: 24px; color: #111827;">
          <h2 style="color: #162554; border-bottom: 2px solid #4F7DF8; padding-bottom: 8px;">New Appointment Booking</h2>
          <p>You have received a new appointment request from your website:</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr><td style="padding: 8px 0; font-weight: bold; width: 35%;">Patient Name:</td><td>${name}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Phone Number:</td><td><a href="tel:${phone}">${phone}</a></td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td>${email || "Not provided"}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Requested Service:</td><td style="color: #4F7DF8; font-weight: bold;">${service}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Preferred Date:</td><td>${preferredDate}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Preferred Time:</td><td>${preferredTime}</td></tr>
            ${message ? `<tr><td style="padding: 8px 0; font-weight: bold;">Patient Notes:</td><td>${message}</td></tr>` : ""}
          </table>

          <div style="margin-top: 24px; padding: 16px; background-color: #EEF5FF; border-radius: 12px; font-size: 13px; color: #162554;">
            Please contact the patient to confirm their appointment slot.
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data: emailResult });
  } catch (error: any) {
    console.error("Error sending appointment email:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to send email" },
      { status: 500 }
    );
  }
}

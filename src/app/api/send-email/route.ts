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
        { error: "Missing required appointment fields (Name, Phone, Service, Date, Time)" },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM_EMAIL || "noreply@mail.glaceyt.com";
    const clinicEmail = process.env.APPOINTMENT_RECIPIENT_EMAIL || CONTACT.email;

    if (!apiKey) {
      console.warn("RESEND_API_KEY is not configured in .env.local. Simulating email send.");
      return NextResponse.json({
        success: true,
        simulated: true,
        userEmailSent: Boolean(email),
        message: "Appointment request received successfully! (Simulated mode)",
      });
    }

    const resend = new Resend(apiKey);
    const sender = `${BRAND.name} <${fromEmail}>`;

    // 1. Send notification email to the clinic staff
    const clinicEmailPromise = resend.emails.send({
      from: sender,
      to: [clinicEmail],
      subject: `🚨 New Appointment Request: ${name} - ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #E2E8F0; border-radius: 16px; padding: 24px; color: #0F172A; background-color: #FFFFFF;">
          <div style="text-align: center; padding-bottom: 16px; border-bottom: 2px solid #4F7DF8;">
            <h2 style="color: #162554; margin: 0; font-size: 22px;">${BRAND.name}</h2>
            <p style="color: #4F7DF8; font-size: 13px; font-weight: bold; margin-top: 4px; text-transform: uppercase;">New Patient Appointment Booking</p>
          </div>

          <p style="font-size: 15px; color: #334155; margin-top: 20px;">You have received a new appointment request from the website:</p>
          
          <div style="background-color: #F8FAFC; border-radius: 12px; padding: 16px; margin: 16px 0;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #64748B; width: 35%;">Patient Name:</td>
                <td style="padding: 8px 0; font-weight: bold; color: #0F172A;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #64748B;">Phone Number:</td>
                <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #4F7DF8; font-weight: bold; text-decoration: none;">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #64748B;">Email Address:</td>
                <td style="padding: 8px 0; color: #0F172A;">${email || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #64748B;">Requested Service:</td>
                <td style="padding: 8px 0; color: #4F7DF8; font-weight: bold;">${service}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #64748B;">Preferred Date:</td>
                <td style="padding: 8px 0; font-weight: bold; color: #0F172A;">${preferredDate}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #64748B;">Preferred Time:</td>
                <td style="padding: 8px 0; font-weight: bold; color: #0F172A;">${preferredTime}</td>
              </tr>
              ${
                message
                  ? `<tr>
                      <td style="padding: 8px 0; font-weight: bold; color: #64748B;">Patient Symptoms / Notes:</td>
                      <td style="padding: 8px 0; color: #334155; font-style: italic;">${message}</td>
                    </tr>`
                  : ""
              }
            </table>
          </div>

          <div style="padding: 14px; background-color: #EEF5FF; border-left: 4px solid #4F7DF8; border-radius: 8px; font-size: 13px; color: #162554;">
            <strong>Action Required:</strong> Call the patient on <strong><a href="tel:${phone}" style="color:#162554;">${phone}</a></strong> to confirm their final appointment time slot.
          </div>
        </div>
      `,
    });

    // 2. Send confirmation email to the patient (if email was provided)
    let patientEmailPromise: Promise<any> | null = null;

    if (email && email.trim() !== "") {
      patientEmailPromise = resend.emails.send({
        from: sender,
        to: [email.trim()],
        subject: `Appointment Booking Request Received - ${BRAND.name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #E2E8F0; border-radius: 16px; padding: 24px; color: #0F172A; background-color: #FFFFFF;">
            <div style="text-align: center; padding-bottom: 16px; border-bottom: 2px solid #4F7DF8;">
              <h2 style="color: #162554; margin: 0; font-size: 24px;">${BRAND.name}</h2>
              <p style="color: #4F7DF8; font-size: 13px; font-weight: bold; margin-top: 4px; text-transform: uppercase;">Appointment Request Received</p>
            </div>

            <p style="font-size: 15px; color: #334155; margin-top: 20px;">Dear <strong>${name}</strong>,</p>
            
            <p style="font-size: 14px; color: #475569; leading-height: 1.6;">
              Thank you for requesting an appointment with <strong>${DOCTOR.name}</strong> (${DOCTOR.title}, ${DOCTOR.experienceYears}+ Years Experience). We have received your booking request details.
            </p>

            <div style="background-color: #EEF5FF; border-radius: 12px; padding: 20px; margin: 20px 0;">
              <h3 style="color: #162554; margin-top: 0; margin-bottom: 12px; font-size: 16px;">Booking Summary</h3>
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr>
                  <td style="padding: 6px 0; color: #475569; font-weight: bold; width: 35%;">Treatment / Service:</td>
                  <td style="padding: 6px 0; color: #4F7DF8; font-weight: bold;">${service}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #475569; font-weight: bold;">Requested Date:</td>
                  <td style="padding: 6px 0; color: #0F172A;">${preferredDate}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #475569; font-weight: bold;">Requested Time:</td>
                  <td style="padding: 6px 0; color: #0F172A;">${preferredTime}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #475569; font-weight: bold;">Contact Phone:</td>
                  <td style="padding: 6px 0; color: #0F172A;">${phone}</td>
                </tr>
              </table>
            </div>

            <div style="padding: 14px; background-color: #F8FAFC; border-radius: 10px; font-size: 13px; color: #334155; margin-bottom: 20px;">
              <strong>What Happens Next?</strong> Our receptionist team will review your requested slot and call you at <strong>${phone}</strong> shortly to confirm your exact appointment time.
            </div>

            <div style="border-top: 1px solid #E2E8F0; pt-16; margin-top: 24px; padding-top: 16px; font-size: 12px; color: #64748B;">
              <p style="margin: 4px 0;"><strong>Clinic Location:</strong> ${CONTACT.address.full}</p>
              <p style="margin: 4px 0;"><strong>Clinic Phone:</strong> ${CONTACT.phone}</p>
              <p style="margin: 4px 0;"><strong>Google Maps:</strong> <a href="${CONTACT.googleMapsLink}" style="color: #4F7DF8;">Get Directions</a></p>
            </div>
          </div>
        `,
      });
    }

    // Execute email sends
    const [clinicRes, patientRes] = await Promise.allSettled([
      clinicEmailPromise,
      patientEmailPromise ? patientEmailPromise : Promise.resolve(null),
    ]);

    const clinicSuccess = clinicRes.status === "fulfilled";
    const patientSuccess = patientRes.status === "fulfilled" && Boolean(patientRes.value);

    return NextResponse.json({
      success: clinicSuccess,
      userEmailSent: patientSuccess,
      clinicEmailResult: clinicRes.status === "fulfilled" ? clinicRes.value : null,
      patientEmailResult: patientRes.status === "fulfilled" ? patientRes.value : null,
      message: patientSuccess
        ? "Appointment request sent! Notification emailed to clinic and confirmation emailed to patient."
        : "Appointment request sent! Notification emailed to clinic.",
    });
  } catch (error: any) {
    console.error("Error sending appointment emails via Resend:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to send appointment emails" },
      { status: 500 }
    );
  }
}


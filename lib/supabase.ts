import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

// Initialize client only if URL and Key are provided
export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  subject?: string;
}

export async function submitContactForm(data: ContactFormData) {
  try {
    // If Supabase credentials are configured in .env.local
    if (supabase) {
      const { error } = await supabase.from("contact_submissions").insert([
        {
          name: data.name,
          email: data.email,
          message: data.message,
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) {
        console.error("Supabase submission error:", error);
        return { success: false, message: error.message };
      }

      return { success: true, message: "Thank you! Your message has been sent successfully." };
    }

    // Graceful fallback for local development before Supabase keys are populated
    console.log("Mock Contact Form Submission (Supabase keys not set in .env.local):", data);
    
    // Simulate a brief network delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    return {
      success: true,
      message: "Message received! (Demo Mode: Add NEXT_PUBLIC_SUPABASE_URL to connect live Supabase DB)",
    };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "An unknown error occurred.";
    console.error("Failed to submit contact form:", err);
    return { success: false, message: errorMsg };
  }
}

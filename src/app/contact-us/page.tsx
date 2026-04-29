"use client";

import { Roboto } from "next/font/google";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["600"],
});

// ── Zod schema ──────────────────────────────────────────────
const contactSchema = z.object({
    firstName: z
        .string()
        .min(2, "First name must be at least 2 characters")
        .max(50, "First name is too long"),
    lastName: z
        .string()
        .min(2, "Last name must be at least 2 characters")
        .max(50, "Last name is too long"),
    email: z
        .string()
        .email("Please enter a valid email address"),
    phone: z
        .string()
        .regex(/^\d{3}-\d{3}-\d{4}$/, "Format must be 000-000-0000")
        .optional()
        .or(z.literal("")),
    message: z
        .string()
        .min(10, "Message must be at least 10 characters")
        .max(1000, "Message is too long (max 1000 characters)"),
});

type ContactFormData = z.infer<typeof contactSchema>;

// ── Reusable field component ─────────────────────────────────
interface FieldProps {
    label: string;
    required?: boolean;
    error?: string;
    children: React.ReactNode;
}

function Field({ label, required, error, children }: FieldProps) {
    return (
        <div className="flex flex-col gap-1">
            <label className="text-[13px] font-semibold text-[#222]">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            {children}
            {error && (
                <p className="text-[12px] text-red-500 mt-0.5">{error}</p>
            )}
        </div>
    );
}

const inputClass =
    "w-full border border-[#d1d5db] rounded-lg px-4 py-[10px] text-[14px] text-[#333] placeholder-[#aaa] focus:outline-none focus:border-[#04589C] focus:ring-1 focus:ring-[#04589C] transition";

// ── Page ────────────────────────────────────────────────────
export default function ContactUs() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
        },
    });

    const onSubmit = async (data: ContactFormData) => {
        // Aquí conectas tu endpoint / servicio de email
        console.log("Form submitted:", data);
        // Simula delay de envío
        await new Promise((r) => setTimeout(r, 800));
        reset();
    };

    return (
        <main>
            {/* HERO */}
            <section className="relative w-full h-[45vh]">
                <img
                    src="/assets/hero_contactus.webp"
                    alt="Contact Us hero"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0" />
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
                    <img
                        src="/assets/icono_contact1.svg"
                        alt="icono contact"
                        className="w-[40px] h-auto mb-2 hero-fadein"
                    />
                    <h1 className="text-[72px] leading-tight font-epitaph text-white hero-fadein">
                        CONTACT US
                    </h1>
                    <p className="text-[40px] font-kautiva font-bold text-white mt-2 hero-fadein-delay-1">
                        Kafenio
                    </p>
                </div>
            </section>

            {/* CONTACT SECTION */}
            <section
                className="w-full py-[80px] px-6 flex flex-col items-center text-center bg-[#e4d6c3]"
            >
                {/* Icono */}
                <img
                    src="/assets/icono_contact2.svg"
                    alt="icon"
                    className="w-[100px] h-auto mb-4"
                />

                {/* Título */}
                <h2 className="text-[48px] leading-tight font-epitaph text-[#5d4421]">
                    LET'S STAY IN TOUCH
                </h2>

                {/* Subtítulo */}
                <p className="text-[32px] font-bold font-kautiva text-[#85431a] mt-2">
                    We'd Love To Hear From You
                </p>

                {/* Descripción */}
                <p className="text-[16px] leading-[26px] text-[#525252] max-w-[720px] mt-3">
                    <strong>Got a question, special request, or just want to say hi?</strong><br />
                    Send us a message below and our team will get back to you soon. Whether it's about catering, events,
                    or your next visit, we're always happy to connect.
                </p>

                {/* Formulario */}
                <div className="bg-white rounded-2xl shadow-md mt-10 w-full max-w-[610px] px-8 py-10 text-left">

                    {isSubmitSuccessful ? (
                        <div className="flex flex-col items-center text-center gap-4 py-8">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <circle cx="24" cy="24" r="24" fill="#04589C" fillOpacity="0.1" />
                                <path d="M14 24L21 31L34 17" stroke="#04589C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <h3 className="text-[24px] font-epitaph text-[#04589C]">Message Sent!</h3>
                            <p className="text-[15px] text-[#525252]">Thank you for reaching out. We'll get back to you soon.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">

                            {/* First + Last name */}
                            <div className="grid grid-cols-2 gap-4">
                                <Field label="First Name" required error={errors.firstName?.message}>
                                    <input
                                        {...register("firstName")}
                                        placeholder="First name"
                                        className={inputClass}
                                    />
                                </Field>
                                <Field label="Last Name" required error={errors.lastName?.message}>
                                    <input
                                        {...register("lastName")}
                                        placeholder="Last name"
                                        className={inputClass}
                                    />
                                </Field>
                            </div>

                            {/* Email + Phone */}
                            <div className="grid grid-cols-2 gap-4">
                                <Field label="Email" required error={errors.email?.message}>
                                    <input
                                        {...register("email")}
                                        type="email"
                                        placeholder="Example@mail.com"
                                        className={inputClass}
                                    />
                                </Field>
                                <Field label="Phone Number" error={errors.phone?.message}>
                                    <input
                                        {...register("phone")}
                                        placeholder="000-000-0000"
                                        className={inputClass}
                                    />
                                </Field>
                            </div>

                            {/* Message */}
                            <Field label="Message" required error={errors.message?.message}>
                                <textarea
                                    {...register("message")}
                                    placeholder="Your Message Here"
                                    rows={5}
                                    className={`${inputClass} resize-none`}
                                />
                            </Field>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`${roboto.className} bg-[#05589c] text-white w-[150px] h-[42px] self-center rounded-[8px] font-semibold text-[16px] hover:opacity-90 transition disabled:opacity-60 mt-2`}
                            >
                                {isSubmitting ? "Sending..." : "Send"}
                            </button>

                        </form>
                    )}
                </div>
            </section>

            <section className="relative w-full h-[28px]">
                <img
                    src="/assets/divisor_contactus.svg"
                    alt="divider"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </section>
            {/* FIND US */}
            <section className="w-full py-[80px] bg-[url('/assets/fondo_giftcard.webp')] bg-cover bg-center flex justify-center px-6">

                <div className=" bg-[url('/assets/fondo_findus.png')] bg-no-repeat bg-contain bg-center max-w-[1100px] w-full flex items-center gap-[60px] p-[60px]">

                    {/* Texto izquierda */}
                    <div className="flex flex-col gap-4 min-w-[320px]">

                        {/* Icono */}
                        <img src="/assets/icon_find.svg" alt="icon" className="w-[38px] h-auto" />

                        {/* Título */}
                        <h2 className="text-[48px] leading-tight font-epitaph text-[#85431a]">
                            FIND US
                        </h2>

                        {/* Location */}
                        <div>
                            <p className="text-[24px] font-bold font-kautiva text-[#ab5622]">Location</p>
                            <div className="flex items-start gap-2 mt-1">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.5 11.2998C10.837 11.2998 10.2011 11.0364 9.73223 10.5676C9.26339 10.0987 9 9.46285 9 8.7998C9 8.13676 9.26339 7.50088 9.73223 7.03204C10.2011 6.5632 10.837 6.2998 11.5 6.2998C12.163 6.2998 12.7989 6.5632 13.2678 7.03204C13.7366 7.50088 14 8.13676 14 8.7998C14 9.12811 13.9353 9.4532 13.8097 9.75651C13.6841 10.0598 13.4999 10.3354 13.2678 10.5676C13.0356 10.7997 12.76 10.9839 12.4567 11.1095C12.1534 11.2351 11.8283 11.2998 11.5 11.2998ZM11.5 1.7998C9.64348 1.7998 7.86301 2.5373 6.55025 3.85006C5.2375 5.16281 4.5 6.94329 4.5 8.7998C4.5 14.0498 11.5 21.7998 11.5 21.7998C11.5 21.7998 18.5 14.0498 18.5 8.7998C18.5 6.94329 17.7625 5.16281 16.4497 3.85006C15.137 2.5373 13.3565 1.7998 11.5 1.7998Z" fill="#f17930" />
                                </svg>
                                <p className="text-[16px] leading-[20px] text-[#333] font-bold">
                                    2700 E College Ave #3000, Decatur, GA 30030,<br />United States
                                </p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div>
                            <p className="text-[24px] font-bold font-kautiva text-[#ab5622]">Phone</p>
                            <div className="flex items-center gap-2 mt-1">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.62 10.79C8.06 13.59 10.41 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="#f17930" />
                                </svg>
                                <p className="text-[16px] leading-[20px] text-[#333] font-bold">678-515-3700</p>
                            </div>
                        </div>

                        {/* Opening Hours */}
                        <div>
                            <p className="text-[24px] font-bold font-kautiva text-[#ab5622]">Opening Hours</p>
                            <p className="text-[16px] leading-[26px] text-[#3d3d3d] mt-1">
                                <span className="font-bold">Monday to Saturday</span> 9 am to 9 pm<br />
                                <span className="font-bold">Sunday</span> 9 am to 3 pm
                            </p>
                        </div>

                        {/* Botón */}
                        <a
                            href="https://maps.app.goo.gl/78srAW178dbCs2pW9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${roboto.className} bg-[#04589C] text-white px-[20px] py-[10px] h-[42px] rounded-lg font-semibold text-[20px] leading-[20px] flex items-center gap-2 w-fit hover:opacity-90 transition mt-2`}
                        >
                            Open In Map
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M15.3025 11.0285L2 11.0285L2 8.97146L15.3025 8.97146L11.1214 4.45436L12.4872 3L19 10L12.4872 17L11.1214 15.5456L15.3025 11.0285Z" fill="white" />
                            </svg>
                        </a>
                    </div>

                    {/* Mapa derecha */}
                    <div className="flex-1 rounded-2xl overflow-hidden h-[420px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.4419279243434!2d-84.27833129999999!3d33.775084299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f507f2e441c751%3A0xf9b29f3014538356!2sKafenio%20Avondale!5e0!3m2!1ses-419!2scr!4v1776889049384!5m2!1ses-419!2scr"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                </div>

            </section>
        </main>
    );
}

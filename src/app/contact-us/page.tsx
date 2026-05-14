"use client";

import { useForm } from "react-hook-form";
import OpeningHours from "@/app/components/OpeningHours";
import LocationInfo from "@/app/components/LocationInfo";
import FadeIn from "@/app/components/FadeIn";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

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
        console.log("Form submitted:", data);
        await new Promise((r) => setTimeout(r, 800));
        reset();
    };

    return (
        <main>
            {/* HERO */}
            <section className="relative w-full h-[400px] md:h-[45vh]">
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
                        className="w-[28px] md:w-[34px] lg:w-[40px] h-auto mb-2 hero-fadein"
                    />
                    <h1 className="text-[48px] md:text-[58px] lg:text-[72px] leading-tight font-epitaph text-white hero-fadein">
                        CONTACT US
                    </h1>
                    <p className="text-[32px] md:text-[32px] lg:text-[40px] font-kautiva font-bold text-white mt-2 hero-fadein-delay-1">
                        Kafenio
                    </p>
                </div>
            </section>

            {/* CONTACT SECTION */}
            <section className="w-full py-[50px] md:py-[80px] px-6 flex flex-col items-center text-center bg-[#e4d6c3]">
                <FadeIn className="flex flex-col items-center text-center w-full">
                    <img
                        src="/assets/icono_contact2.svg"
                        alt="icon"
                        className="w-[70px] md:w-[85px] lg:w-[100px] h-auto mb-4"
                    />
                    <h2 className="text-[34px] md:text-[42px] lg:text-[48px] leading-tight font-epitaph text-[#5d4421]">
                        LET'S STAY IN TOUCH
                    </h2>
                    <p className="text-[20px] md:text-[26px] lg:text-[32px] font-bold font-kautiva text-[#85431a] mt-2 leading-[1.2]">
                        We'd Love To Hear From You
                    </p>
                    <p className="text-[16px] md:text-[16px] leading-[24px] md:leading-[26px] text-[#525252] max-w-[720px] mt-3">
                        <strong>Got a question, special request, or just want to say hi?</strong><br />
                        Send us a message below and our team will get back to you soon. Whether it's about catering, events,
                        or your next visit, we're always happy to connect.
                    </p>

                    <div className="bg-white shadow-md mt-8 md:mt-10 w-full max-w-[610px] px-6 md:px-8 py-8 md:py-10 text-left">
                        {isSubmitSuccessful ? (
                            <div className="flex flex-col items-center text-center gap-4 py-8">
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                    <circle cx="24" cy="24" r="24" fill="#04589C" fillOpacity="0.1" />
                                    <path d="M14 24L21 31L34 17" stroke="#04589C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <h3 className="text-[22px] md:text-[24px] font-epitaph text-[#04589C]">Message Sent!</h3>
                                <p className="text-[14px] md:text-[15px] text-[#525252]">Thank you for reaching out. We'll get back to you soon.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                <Field label="Message" required error={errors.message?.message}>
                                    <textarea
                                        {...register("message")}
                                        placeholder="Your Message Here"
                                        rows={5}
                                        className={`${inputClass} resize-none`}
                                    />
                                </Field>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`bg-[#05589c] text-white w-full h-[42px] rounded-[8px] font-semibold text-[16px] hover:opacity-90 transition disabled:opacity-60 mt-2`}
                                >
                                    {isSubmitting ? "Sending..." : "Send"}
                                </button>
                            </form>
                        )}
                    </div>
                </FadeIn>
            </section>

            {/* DIVISOR */}
            <section className="mt-[-3px] relative w-full h-[28px]">
                <img
                    src="/assets/divisor_contactus.svg"
                    alt="divider"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </section>

            {/* FIND US */}
            <section className="mt-[-2px] w-full py-[50px] md:py-[60px] lg:py-[80px] bg-[url('/assets/fondo_giftcard.webp')] bg-cover bg-center lg:bg-fixed flex justify-center px-6">
                <FadeIn className="w-full max-w-[1100px]">
                    <div
                        className="bg-[url('/assets/fondo_findusmobile.webp')] lg:bg-[url('/assets/fondo_findus.png')] bg-no-repeat bg-contain lg:bg-contain bg-center w-full mx-3 lg:mx-0 flex flex-col lg:flex-row items-center gap-[16px] lg:gap-[60px] p-6 md:p-14 lg:p-[80px]"
                    >
                        <div className="flex flex-col gap-3 lg:gap-4 w-full lg:min-w-[320px] lg:max-w-[400px] items-center lg:items-start text-center lg:text-left">
                            <img src="/assets/icon_find.svg" alt="icon" className="w-[32px] md:w-[36px] lg:w-[38px] h-auto" />
                            <h2 className="text-[34px] sm:text-[36px] md:text-[42px] lg:text-[48px] leading-tight font-epitaph text-[#85431a]">
                                FIND US
                            </h2>
                            <LocationInfo />
                            <OpeningHours />
                            <a
                                href="https://maps.app.goo.gl/78srAW178dbCs2pW9"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`bg-[#04589C] text-white px-[20px] py-[10px] h-[42px] rounded-none font-semibold text-[16px] sm:text-[18px] lg:text-[20px] leading-[20px] flex items-center gap-2 w-fit hover:opacity-90 transition mt-2`}
                            >
                                Open In Map
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0">
                                    <path d="M15.3025 11.0285L2 11.0285L2 8.97146L15.3025 8.97146L11.1214 4.45436L12.4872 3L19 10L12.4872 17L11.1214 15.5456L15.3025 11.0285Z" fill="white" />
                                </svg>
                            </a>
                        </div>
                        <div className="w-[75%] mx-auto overflow-hidden h-[90px] md:flex-1 md:w-full md:h-[300px] lg:h-[420px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.4419279243434!2d-84.27833129999999!3d33.775084299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f507f2e441c751%3A0xf9b29f3014538356!2sKafenio%20Avondale!5e0!3m2!1ses-419!2scr!4v1776889049384!5m2!1ses-419!2scr"
                                title="Kafenio location on Google Maps"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </FadeIn>
            </section>
        </main>
    );
}

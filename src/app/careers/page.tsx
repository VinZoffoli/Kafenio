"use client";

import { Roboto } from "next/font/google";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FadeIn from "@/app/components/FadeIn";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["600"],
});

const careersSchema = z.object({
    firstName: z
        .string()
        .min(2, "First name must be at least 2 characters")
        .max(50, "First name is too long"),
    email: z
        .string()
        .email("Please enter a valid email address"),
    phone: z
        .string()
        .regex(/^\d{3}-\d{3}-\d{4}$/, "Format must be 000-000-0000"),
    residence: z
        .string()
        .min(2, "Please tell us where you live")
        .max(100, "Too long"),
    position: z
        .string()
        .min(1, "Please select a position"),
    experience: z
        .string()
        .min(2, "Please describe your experience")
        .max(200, "Too long"),
    pastExperience: z
        .string()
        .max(1000, "Too long (max 1000 characters)")
        .optional()
        .or(z.literal("")),
    coverLetter: z
        .string()
        .max(1000, "Too long (max 1000 characters)")
        .optional()
        .or(z.literal("")),
    resume: z
        .any()
        .refine(
            (files) => !files || files.length === 0 || files[0]?.size <= 5 * 1024 * 1024,
            "File must be under 5MB"
        )
        .refine(
            (files) =>
                !files ||
                files.length === 0 ||
                ["application/pdf", "application/msword",
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                ].includes(files[0]?.type),
            "Only PDF or Word documents are accepted"
        )
        .optional(),
});

type CareersFormData = z.infer<typeof careersSchema>;

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

const positions = [
    "Server",
    "Barista / Cashier",
    "Line Cook",
    "Prep Cook",
    "Dishwasher",
    "Host / Hostess",
    "Shift Supervisor",
    "Other",
];

export default function Careers() {
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = useForm<CareersFormData>({
        resolver: zodResolver(careersSchema),
        defaultValues: {
            firstName: "",
            email: "",
            phone: "",
            residence: "",
            position: "",
            experience: "",
            pastExperience: "",
            coverLetter: "",
        },
    });

    const resumeFile = watch("resume");
    const fileName = resumeFile?.[0]?.name;

    const onSubmit = async (data: CareersFormData) => {
        console.log("Careers form submitted:", data);
        await new Promise((r) => setTimeout(r, 800));
        reset();
    };

    return (
        <main>
            {/* HERO */}
            <section className="relative w-full h-[400px] md:h-[45vh]">
                <img
                    src="/assets/hero_careers.webp"
                    alt="Careers hero"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0" />
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
                    <img
                        src="/assets/icono_careers1.svg"
                        alt="icono contact"
                        className="w-[28px] md:w-[34px] lg:w-[40px] h-auto mb-2 hero-fadein"
                    />
                    <h1 className="text-[48px] md:text-[58px] lg:text-[72px] leading-tight font-epitaph text-white hero-fadein">
                        CAREERS
                    </h1>
                    <p className="text-[32px] md:text-[32px] lg:text-[40px] font-kautiva font-bold text-white mt-2 hero-fadein-delay-1">
                        Kafenio
                    </p>
                </div>
            </section>

            {/* FORM SECTION */}
            <section
                className="w-full py-[50px] md:py-[80px] px-6 flex flex-col items-center text-center"
                style={{
                    backgroundImage: "url('/assets/fondo_giftcard.webp')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: 'fixed',
                }}
            >
                <FadeIn className="flex flex-col items-center text-center w-full">
                    <img
                        src="/assets/icono_careers2.svg"
                        alt="icon"
                        className="w-[70px] md:w-[85px] lg:w-[100px] h-auto mb-4"
                    />
                    <h2 className="text-[36px] md:text-[42px] lg:text-[48px] leading-tight font-epitaph text-[#04589C]">
                        JOIN THE KAFENIO CREW
                    </h2>
                    <p className="text-[20px] md:text-[26px] lg:text-[32px] font-bold font-kautiva text-[#85431a] mt-2 leading-[1.2]">
                        Good Vibes, Great Food, And A Team That Feels Like Family.
                    </p>

                    <div className="bg-white shadow-md mt-8 md:mt-10 w-full max-w-[610px] px-6 md:px-8 py-8 md:py-10 text-left">
                        {isSubmitSuccessful ? (
                            <div className="flex flex-col items-center text-center gap-4 py-8">
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                    <circle cx="24" cy="24" r="24" fill="#04589C" fillOpacity="0.1" />
                                    <path d="M14 24L21 31L34 17" stroke="#04589C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <h3 className="text-[22px] md:text-[24px] font-epitaph text-[#04589C]">Application Sent!</h3>
                                <p className="text-[14px] md:text-[15px] text-[#525252]">Thank you for your interest in joining the Kafenio crew. We'll be in touch soon!</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
                                <Field label="First Name" required error={errors.firstName?.message}>
                                    <input
                                        {...register("firstName")}
                                        placeholder="First name"
                                        className={inputClass}
                                    />
                                </Field>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4">
                                    <Field label="Email" required error={errors.email?.message}>
                                        <input
                                            {...register("email")}
                                            type="email"
                                            placeholder="Example@mail.com"
                                            className={inputClass}
                                        />
                                    </Field>
                                    <Field label="Phone Number" required error={errors.phone?.message}>
                                        <input
                                            {...register("phone")}
                                            placeholder="000-000-0000"
                                            className={inputClass}
                                        />
                                    </Field>
                                </div>
                                <Field label="Place of residence" required error={errors.residence?.message}>
                                    <input
                                        {...register("residence")}
                                        placeholder="Tell us where you live"
                                        className={inputClass}
                                    />
                                </Field>
                                <Field label="Applying for" required error={errors.position?.message}>
                                    <select
                                        {...register("position")}
                                        className={`${inputClass} bg-white appearance-none`}
                                    >
                                        <option value="">Position</option>
                                        {positions.map((p) => (
                                            <option key={p} value={p}>{p}</option>
                                        ))}
                                    </select>
                                </Field>
                                <Field label="Service Industry Experience" required error={errors.experience?.message}>
                                    <input
                                        {...register("experience")}
                                        placeholder="Ex. 3 years serving"
                                        className={inputClass}
                                    />
                                </Field>
                                <Field label="Past applicable experience the job" error={errors.pastExperience?.message}>
                                    <textarea
                                        {...register("pastExperience")}
                                        placeholder="Tell us about your experience"
                                        rows={4}
                                        className={`${inputClass} resize-none`}
                                    />
                                </Field>
                                <Field label="Cover Letter" error={errors.coverLetter?.message}>
                                    <input
                                        {...register("coverLetter")}
                                        placeholder="Tell us something about you"
                                        className={inputClass}
                                    />
                                </Field>
                                <Field label="Resume" error={errors.resume?.message as string}>
                                    <label className="flex flex-col items-center justify-center gap-2 border border-dashed border-[#d1d5db] rounded-lg px-4 py-6 md:py-8 cursor-pointer hover:border-[#04589C] transition text-center">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                                            <path d="M12 16V8M12 8L9 11M12 8L15 11" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M3 15V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V15" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                        <span className="text-[13px] text-[#aaa]">
                                            {fileName ? fileName : "Click or drag a file to this area to upload."}
                                        </span>
                                        <input
                                            {...register("resume")}
                                            type="file"
                                            accept=".pdf,.doc,.docx"
                                            className="hidden"
                                        />
                                    </label>
                                </Field>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`${roboto.className} bg-[#05589c] text-white w-full h-[42px] rounded-[8px] font-semibold text-[16px] hover:opacity-90 transition disabled:opacity-60 mt-2`}
                                >
                                    {isSubmitting ? "Sending..." : "Send"}
                                </button>
                            </form>
                        )}
                    </div>
                </FadeIn>
            </section>
        </main>
    );
}

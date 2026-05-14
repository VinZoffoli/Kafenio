"use client";

import { useEffect, useState } from "react";
import { supabase, supabaseClientId } from "@/lib/supabase";

type LocationData = {
    address: string | null;
    phone: string | null;
};

const FALLBACK: LocationData = {
    address: "2700 E College Ave #3000,\nDecatur, GA 30030, United States",
    phone: null,
};

export default function LocationInfo() {
    const [data, setData] = useState<LocationData>(FALLBACK);

    useEffect(() => {
        let isMounted = true;
        async function load() {
            const { data: rows } = await supabase
                .from("locations")
                .select("address, phone")
                .eq("restaurant_id", supabaseClientId)
                .limit(1);

            if (rows?.[0] && isMounted) {
                setData({
                    address: rows[0].address ?? FALLBACK.address,
                    phone: rows[0].phone ?? FALLBACK.phone,
                });
            }
        }
        load();
        return () => { isMounted = false; };
    }, []);

    const addressLines = (data.address ?? "").split("\n");

    return (
        <>
            <div className="w-full flex flex-col items-center lg:items-start">
                <p className="text-[20px] md:text-[22px] lg:text-[24px] font-bold font-kautiva text-[#ab5622]">Location</p>
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-1 lg:gap-2 mt-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                        <path d="M11.5 11.2998C10.837 11.2998 10.2011 11.0364 9.73223 10.5676C9.26339 10.0987 9 9.46285 9 8.7998C9 8.13676 9.26339 7.50088 9.73223 7.03204C10.2011 6.5632 10.837 6.2998 11.5 6.2998C12.163 6.2998 12.7989 6.5632 13.2678 7.03204C13.7366 7.50088 14 8.13676 14 8.7998C14 9.12811 13.9353 9.4532 13.8097 9.75651C13.6841 10.0598 13.4999 10.3354 13.2678 10.5676C13.0356 10.7997 12.76 10.9839 12.4567 11.1095C12.1534 11.2351 11.8283 11.2998 11.5 11.2998ZM11.5 1.7998C9.64348 1.7998 7.86301 2.5373 6.55025 3.85006C5.2375 5.16281 4.5 6.94329 4.5 8.7998C4.5 14.0498 11.5 21.7998 11.5 21.7998C11.5 21.7998 18.5 14.0498 18.5 8.7998C18.5 6.94329 17.7625 5.16281 16.4497 3.85006C15.137 2.5373 13.3565 1.7998 11.5 1.7998Z" fill="#f17930" />
                    </svg>
                    <p className="text-[14px] lg:text-[16px] leading-[20px] text-[#333] font-bold">
                        {addressLines.map((line, i) => (
                            <span key={i}>{line}{i < addressLines.length - 1 && <br />}</span>
                        ))}
                    </p>
                </div>
            </div>

            {data.phone && (
                <div className="w-full flex flex-col items-center lg:items-start">
                    <p className="text-[20px] md:text-[22px] lg:text-[24px] font-bold font-kautiva text-[#ab5622]">Phone</p>
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-1 lg:gap-2 mt-1">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                            <path d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.32 18.76 15.53 20 15.53C20.55 15.53 21 15.98 21 16.53V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.71 6.45 9.09 7.57C9.2 7.92 9.12 8.31 8.84 8.59L6.62 10.79Z" fill="#f17930" />
                        </svg>
                        <a href={`tel:${data.phone}`} className="text-[14px] lg:text-[16px] leading-[20px] text-[#333] font-bold hover:underline">
                            {data.phone}
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}

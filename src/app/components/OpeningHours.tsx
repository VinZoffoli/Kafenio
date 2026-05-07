"use client";

import { useEffect, useState } from "react";
import { supabase, supabaseClientId } from "@/lib/supabase";

type HourRow = {
    day_of_week: number;
    open_time: string;
    close_time: string;
    is_closed: boolean;
};

type HourGroup = {
    label: string;
    hours: string;
};

const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function formatTime(time: string): string {
    const [h, m] = time.split(":").map(Number);
    const period = h >= 12 ? "pm" : "am";
    const hour = h > 12 ? h - 12 : h === 0 ? 12 : h;
    return m === 0 ? `${hour} ${period}` : `${hour}:${m.toString().padStart(2, "0")} ${period}`;
}

function groupHours(rows: HourRow[]): HourGroup[] {
    // Sort Mon→Sat→Sun (Sunday at end)
    const sorted = [...rows].sort((a, b) => {
        const aDay = a.day_of_week === 0 ? 7 : a.day_of_week;
        const bDay = b.day_of_week === 0 ? 7 : b.day_of_week;
        return aDay - bDay;
    });

    const groups: { days: string[]; hours: string }[] = [];

    for (const row of sorted) {
        const hoursLabel = row.is_closed
            ? "Closed"
            : `${formatTime(row.open_time)} to ${formatTime(row.close_time)}`;
        const dayName = DAY_NAMES[row.day_of_week];
        const last = groups[groups.length - 1];

        if (last && last.hours === hoursLabel) {
            last.days.push(dayName);
        } else {
            groups.push({ days: [dayName], hours: hoursLabel });
        }
    }

    return groups.map((g) => ({
        label: g.days.length === 1 ? g.days[0] : `${g.days[0]} to ${g.days[g.days.length - 1]}`,
        hours: g.hours,
    }));
}

export default function OpeningHours() {
    const [groups, setGroups] = useState<HourGroup[]>([]);

    useEffect(() => {
        let isMounted = true;

        async function load() {
            const { data: locations } = await supabase
                .from("locations")
                .select("id")
                .eq("restaurant_id", supabaseClientId)
                .limit(1);

            const locationId = locations?.[0]?.id;
            if (!locationId || !isMounted) return;

            const { data: hours } = await supabase
                .from("location_hours")
                .select("day_of_week, open_time, close_time, is_closed")
                .eq("location_id", locationId)
                .order("day_of_week");

            if (hours && isMounted) {
                setGroups(groupHours(hours as HourRow[]));
            }
        }

        load();
        return () => { isMounted = false; };
    }, []);

    return (
        <div className="w-full flex flex-col items-center lg:items-start">
            <p className="text-[20px] md:text-[22px] lg:text-[24px] font-bold font-kautiva text-[#ab5622]">
                Opening Hours
            </p>
            <p className="text-[14px] lg:text-[16px] leading-[24px] lg:leading-[26px] text-[#3d3d3d] mt-1">
                {groups.length === 0 ? (
                    <>
                        <span className="font-bold">Monday to Saturday</span> 9 am to 9 pm<br />
                        <span className="font-bold">Sunday</span> 9 am to 3 pm
                    </>
                ) : (
                    groups.map((g, i) => (
                        <span key={i}>
                            <span className="font-bold">{g.label}</span> {g.hours}
                            {i < groups.length - 1 && <br />}
                        </span>
                    ))
                )}
            </p>
        </div>
    );
}

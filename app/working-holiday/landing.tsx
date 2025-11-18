"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { CountryProvider, useCountry } from "@/components/country-provider";
import { WorkingHolidayCountryPage } from "@/components/working-holiday/country-page";
import { WORKING_HOLIDAY_COUNTRIES } from "@/lib/working-holiday-countries";

const globalConfig = WORKING_HOLIDAY_COUNTRIES.global;

function WorkingHolidayLandingInner() {
  const router = useRouter();
  const { country, hasConfirmed, hydrated } = useCountry();

  useEffect(() => {
    if (!hydrated || !hasConfirmed) return;
    if (country.code === "global") return;
    router.replace(`/working-holiday/${country.code}`);
  }, [country.code, hasConfirmed, hydrated, router]);

  return (
    <WorkingHolidayCountryPage config={globalConfig} showCountryGrid />
  );
}

export function WorkingHolidayLanding() {
  return (
    <CountryProvider initialCountryCode="global">
      <WorkingHolidayLandingInner />
    </CountryProvider>
  );
}

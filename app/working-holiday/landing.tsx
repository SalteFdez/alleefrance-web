"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { CountryProvider, useCountry } from "@/components/country-provider";
import { WorkingHolidayGlobalLanding } from "@/components/working-holiday/global-landing";

function WorkingHolidayLandingInner() {
  const router = useRouter();
  const { country, hasConfirmed, hydrated } = useCountry();

  useEffect(() => {
    if (!hydrated || !hasConfirmed) return;
    if (country.code === "global") return;
    router.replace(`/working-holiday/${country.code}`);
  }, [country.code, hasConfirmed, hydrated, router]);

  return (
    <WorkingHolidayGlobalLanding />
  );
}

export function WorkingHolidayLanding() {
  return (
    <CountryProvider initialCountryCode="global">
      <WorkingHolidayLandingInner />
    </CountryProvider>
  );
}

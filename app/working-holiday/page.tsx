import type { Metadata } from "next";
import { WORKING_HOLIDAY_COUNTRIES } from "@/lib/working-holiday-countries";
import { WorkingHolidayLanding } from "./landing";

const globalConfig = WORKING_HOLIDAY_COUNTRIES.global;

export const metadata: Metadata = {
  title: globalConfig.seoTitle,
  description: globalConfig.seoDescription,
};

export default function WorkingHolidayPage() {
  return <WorkingHolidayLanding />;
}

import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { locales } from "./consts";

export const { Link, usePathname } = createSharedPathnamesNavigation({
  locales,
});

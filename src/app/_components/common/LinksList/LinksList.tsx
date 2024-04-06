import Link from "next/link";
import { NavLink } from "@/app/_components/common/LinksList/types";
import { v4 as uuid } from "uuid";

interface LinksListProps {
  links: NavLink[];
  flow?: "row" | "column";
}

export default function LinksList({ links, flow = "row" }: LinksListProps) {
  //   TODO: implement link active state
  const classes =
    flow === "row"
      ? "flex gap-10 justify-between content-center text-slate-500"
      : "flex gap-5 flex-col text-slate-500";
  return (
    <ul className={classes}>
      {links.map((link) => {
        return (
          <li key={uuid()}>
            <Link
              aria-label={"Перехід на сторінку " + link.title}
              className={
                link.isActive ? "text-blue-600 text-base" : "text-base"
              }
              href={link.path}
            >
              {link.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

import Link from "next/link";

export type DomainType = {
  domain: string;
  name: string;
};

export default function Card({ domain, name }: DomainType) {
  return (
    <li className="w-full h-full rounded-xl border shadow-sm overflow-hidden hover:shadow-none hover:border-indigo-600 duration-200">
      <Link
        className="h-full"
        target="_blank"
        href={`https://www.namecheap.com/domains/registration/results/?domain=${domain}`}
      >
        <div className="p-10 h-28 flex items-center justify-center text-neutral-800 font-medium">
          {name}
        </div>
        <div className="bg-neutral-50 border-t px-4 py-3 text-sm text-neutral-600 hover:text-neutral-800">
          {domain.toLowerCase()}
        </div>
      </Link>
    </li>
  );
}

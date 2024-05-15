import { Link } from "@inertiajs/react";
import React from "react";

const Pagination = ({ links }) => {
    return (
        <nav className="my-5">
            <ul className="flex justify-center">
                {links.map(({ url, label, active }) => (
                    <li key={label} className="mx-1">
                        <Link preserveScroll className={`px-4 py-2 bg-slate-200 ${active ? 'bg-slate-900 text-white' : ''} ${!url ? 'cursor-not-allowed' : ''}`} dangerouslySetInnerHTML={{ __html:label }} href={url}></Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;

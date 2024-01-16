import React, { ReactNode } from 'react';
import Link from 'next/link';

type Props = {
    children: ReactNode;
};

const Layout = ({ children }: Props) => (
    <div className="font-helvetica bg-lakersPurple text-lakersGold p-8">
        <header>
            <h1 className="text-4xl font-bold">Tribute to Kobe Bryant</h1>
            <nav>
                <Link href="/"><a>Home</a></Link>
                <Link href="/blog/legend"><a>Why Kobe is a Legend</a></Link>
                <Link href="/blog/mamba-mentality"><a>Mamba Mentality</a></Link>
                <Link href="/blog/achievements"><a>Top Achievements</a></Link>
            </nav>
        </header>
        <main>{children}</main>
    </div>
);

export default Layout;

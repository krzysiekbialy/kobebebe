import Link from 'next/link';
import { useAmp } from 'next/amp';

export const config = { amp: 'hybrid' };

export default function Home() {
    return (
        <div className="bg-lakersPurple text-lakersGold p-8">
            <h1 className="text-4xl font-bold">Tribute to Kobe Bryant</h1>
            <nav>
                <ul>
                    <li><Link href="/blog/legend"><a>Why Kobe is a Legend</a></Link></li>
                    <li><Link href="/blog/mamba-mentality"><a>Mamba Mentality</a></Link></li>
                    <li><Link href="/blog/achievements"><a>Top Achievements</a></Link></li>
                </ul>
            </nav>
        </div>
    );
}
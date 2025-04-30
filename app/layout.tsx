import '@/assets/styles/globals.css'
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Property App',
    keywords: 'rent, buy, sell, property, real estate',
    description: 'A property app for buying, selling, and renting properties',
};

import {ReactNode} from 'react'

interface IMainLayoutProps{
    children: ReactNode;
}

const MainLayout = ({ children }: IMainLayoutProps) => {
    return (
        <html lang="en">
            <body className="bg-gray-100 text-gray-900">
                <NavBar />
                <main className="container mx-auto">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
};
export default MainLayout;
import React from 'react';
import Link from 'next/link';
import { CardStyle, SubTitle, Nav } from './LayoutStyle';

export default function Layout({ children }) {
    return (
        <>
            <Nav className="navBar">
                <Link href="/">
                    <a>Cars</a>
                </Link>
            </Nav>
            <SubTitle>
                List of Cars
            </SubTitle>
            <CardStyle>
                {children}
            </CardStyle>
        </>
    );
};
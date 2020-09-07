import React from 'react';
import { useRouter } from 'next/router';
import { CarDetail } from '../../components/CarDetail/CarDetail';
import Link from 'next/link';
import Modal from 'react-modal';
import { Div, Title, Year, Img, Detail } from './CarBoxStyle';

// Declare the props from the data
interface CarProps {
    imgUrl?: string,
    title: string,
    year: string,
    color?: string,
    kilometers?: string,
    gear?: string,
    fuel?: string
}

Modal.setAppElement("#__next");

export const CarBox: React.FC<CarProps> = ({ imgUrl, title, year, color, kilometers, gear, fuel }) => {
    const router = useRouter();
    
    return (
        <Div>
            <Title>{title}</Title>
            <Year>{year}</Year>
            <Img src={imgUrl} alt="img" />
            <Link 
                href={`/?title=${title}`}
                as={`/car/${title}`}
            >
                <Detail>
                    Detail
                </Detail>
            </Link>
            <Modal isOpen={!!router.query.title} onRequestClose={() => router.push('/')}>
                <CarDetail
                    title={title}
                    year={year}
                    imgUrl={imgUrl}
                    color={color}
                    kilometers={kilometers}
                    gear={gear}
                    fuel={fuel}
                /> 
            </Modal>
        </Div>
    );
}
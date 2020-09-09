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


// set the modal to show on #__next
Modal.setAppElement("#__next");

// Create the CarBox receiving the props from the data
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
            {/* Check if the modal is opened or closed */}
            <Modal isOpen={!!router.query.title} onRequestClose={() => {
                router.push('/');
            }}>
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
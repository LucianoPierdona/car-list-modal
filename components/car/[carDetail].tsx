import { useRouter } from 'next/router';
import Layout from '../Layout/Layout';
import { CarDetail } from '../CarDetail/CarDetail';

export default function CarPage() {
    const router = useRouter();
    const { imgUrl, title, year, color, kilometers, gear, fuel } = router.query;

    return (
        <Layout>
            <CarDetail
                title={title}
                year={year}
                imgUrl={imgUrl}
                color={color}
                kilometers={kilometers}
                gear={gear}
                fuel={fuel}
            /> 
        </Layout>
    );
};

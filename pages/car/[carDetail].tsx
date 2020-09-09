import { useRouter } from 'next/router';
import Layout from '../../components/Layout/Layout';
import { CarDetail } from '../../components/CarDetail/CarDetail';

// Receive the props to show in the modal
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

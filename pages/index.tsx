import Layout from '../components/Layout/Layout'
import { CarBox } from './CarBox/CarBox'
import { data } from '../src/data'

export default function Home() {
  return (
    <div>
      <Layout>
        {data.cars.map((car) => {
          const { color, kilometers, gear, fuel } = car.details;

          return <CarBox
            key={car.imgUrl}
            title={car.title}
            year={car.year}
            imgUrl={car.imgUrl}
            color={color}
            kilometers={kilometers}
            gear={gear}
            fuel={fuel}
          />
        })}
      </Layout>      
    </div>
  )
}

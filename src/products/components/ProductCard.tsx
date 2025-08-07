import { Card, Image } from "@nextui-org/react";



export const ProductCard = () => {
  return (
    <Card
      className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
      <div className="w-full md:w-1/3 bg-white grid place-items-center">
        <Image src="https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?_gl=1*14lmkkh*_ga*MTY2NjY3MTEyMC4xNzU0NTM5NDYx*_ga_8JE65Q40S6*czE3NTQ1Mzk0NjEkbzEkZzEkdDE3NTQ1Mzk0NzIkajQ5JGwwJGgw"
          alt="tailwind logo"
          width={300}
          height={400}
          className="rounded-xl p-5 sm:p-0 bg-white" />
      </div>
      <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
        <div className="flex justify-between item-center">
          <p className="text-gray-500 font-medium hidden md:block">Vacations</p>
        </div>
        <h3 className="font-black text-gray-800 md:text-2xl text-xl">The Majestic and Wonderful Bahamas</h3>

        <p className="md:text-lg text-gray-500 text-base">The best kept secret of The Bahamas is the country’s sheer
          size and diversity. With 16 major islands, The Bahamas is an unmatched destination</p>

        <p className="text-xl font-black text-gray-800">
          $110
          <span className="font-normal text-gray-600 text-base"> +impuesto</span>
        </p>
      </div>
    </Card>

  );
}

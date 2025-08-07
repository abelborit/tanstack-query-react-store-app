import { Button, Image, Input, Textarea } from "@nextui-org/react";

export const NewProduct = () => {

  

  return (
    <div className="w-full flex-col">
      <h1 className="text-2xl font-bold">Nuevo producto</h1>

      <form className="w-full">

        <div className="flex justify-around items-center">
          
          <div className="flex-col w-[500px]">

            <Input className="mt-2" type="text" label="Titulo del producto" />
            <Input className="mt-2" type="number" label="Precio del producto" />
            <Input className="mt-2" type="url" label="Url del producto" />
            <Textarea className="mt-2" label="Descripcion del producto" />
            <select className="rounded-md p-3 mt-2 bg-gray-800 w-full">
              <option value="men's clothing">Men's clothing</option>
              <option value="women's clothing">Women's clothing</option>
              <option value="jewelery">Jewelery</option>
              <option value="electronics">Electronics</option>
            </select>

            <br />
            <Button className="mt-2" color="primary">Crear</Button>
          </div>

          <div className="bg-white rounded-2xl p-10 flex items-center" style={{
            width: '500px',
            height: '600px',
          }}>

            <Image
              src="https://images.pexels.com/photos/13534751/pexels-photo-13534751.jpeg?_gl=1*1aa14c3*_ga*MTY2NjY3MTEyMC4xNzU0NTM5NDYx*_ga_8JE65Q40S6*czE3NTQ1Mzk0NjEkbzEkZzEkdDE3NTQ1Mzk1MTgkajMkbDAkaDA."
            />
          </div>
          
        </div>


      </form>

    </div>
  )
}
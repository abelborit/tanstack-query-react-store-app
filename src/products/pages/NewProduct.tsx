import { Button, Image, Input, Textarea } from "@nextui-org/react";
// import { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface NewProductProps {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export const NewProduct = () => {
  // const [tempImage, setTempImage] = useState("");

  /* algo importante de "react-hook-form" es que evita hacer re-renderizaciones innecesarias, por ejemplo en este caso estamos colocando el "watch", entonces, cada que se actualice el valor que le pasemo como -- watch("image") -- solo se cambiará ese valor y no todo el formulario y eso nos sirve para lanzar un efecto o usar el nuevo valor directamente no sea necesario */
  const { control, handleSubmit /* , register */, watch } =
    useForm<NewProductProps>({
      defaultValues: {
        title: "Teclado Prueba X200",
        price: 200.2,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod reiciendis culpa quis omnis corrupti modi ad tempore ratione perspiciatis sequi.",
        category: "men's clothing",
        image:
          "https://metroio.vtexassets.com/arquivos/ids/459926-1200-auto?v=638285828805600000&width=1200&height=auto&aspect=true",
      },
    });

  /* para que se actualice cada que la imagen cambie (para tener el contenido actualizado) */
  const newImage = watch("image");
  // console.log("newImage", newImage);

  /* se puede hacer de esta forma con un useState y un useEffect o sino usando el valor directamente */
  // useEffect(() => {
  //   setTempImage(newImage);
  // }, [newImage]);

  const onSubmit: SubmitHandler<NewProductProps> = (dataForm) => {
    console.log(dataForm);
  };

  return (
    <div className="w-full flex-col">
      <h1 className="text-2xl font-bold">Nuevo producto</h1>

      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-around items-center">
          <div className="flex-col w-[500px]">
            <Controller
              control={control}
              name="title"
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  value={field.value}
                  onChange={field.onChange}
                  className="mt-2"
                  type="text"
                  label="Titulo del producto"
                />
              )}
            />

            <Controller
              control={control}
              name="price"
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  value={field.value?.toString()}
                  onChange={(event) =>
                    field.onChange(Number(event.target.value))
                  }
                  className="mt-2"
                  type="number"
                  label="Precio del producto"
                />
              )}
            />
            {/* usualmente se usa la función "register" de "useForm" pero en este caso que estamos usando componentes inputs personalizados de una librería de diseño como "@nextui-org/react" entonces no funciona bien porque aparece un error como que el cambio no está siendo controlado correctamente o similar entonces por eso haremos uso del "control" */}
            {/* darse cuenta que usando la función "register" de "useForm" podemos convertir el valor de string a number en caso sea necesario, pero con el "Controller" hay que hacer una funcionalidad extra en el "onChange" */}
            {/* <Input
              {...register("price", { valueAsNumber: true })}
              type="number"
              label="Precio del producto"
            /> */}

            <Controller
              control={control}
              name="image"
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  value={field.value}
                  onChange={field.onChange}
                  className="mt-2"
                  type="url"
                  label="Url del producto"
                />
              )}
            />

            <Controller
              control={control}
              name="description"
              rules={{ required: true }}
              render={({ field }) => (
                <Textarea
                  value={field.value}
                  onChange={field.onChange}
                  className="mt-2"
                  label="Descripcion del producto"
                />
              )}
            />

            <Controller
              control={control}
              name="category"
              rules={{ required: true }}
              render={({ field }) => (
                <select
                  value={field.value}
                  onChange={field.onChange}
                  className="rounded-md p-3 mt-2 bg-gray-800 w-full cursor-pointer"
                >
                  <option value="men's clothing">Men's clothing</option>
                  <option value="women's clothing">Women's clothing</option>
                  <option value="jewelery">Jewelery</option>
                  <option value="electronics">Electronics</option>
                </select>
              )}
            />

            <br />
            <Button type="submit" className="mt-2" color="primary">
              Crear
            </Button>
          </div>

          <div
            className="bg-white rounded-2xl p-10 flex items-center"
            style={{
              width: "500px",
              height: "600px",
            }}
          >
            {/* <Image src={tempImage} /> */}
            <Image src={newImage} />
          </div>
        </div>
      </form>
    </div>
  );
};

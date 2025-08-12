import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProductAction } from "../services/createProduct.actions";
import { ProductInterface } from "../interfaces/products.interface";

export const useCreateProductMutation = () => {
  const queryClient = useQueryClient();

  const productMutation = useMutation({
    mutationFn: createProductAction,

    /* hacer actualizaciones optimistas */
    onMutate: (data) => {
      console.log("onMutate - Optimistic Update", { data });

      /* estaremos colocando un id superficial desde el frontend para luego cambiarlo con el id verdadero que viene del backend */
      const optimisticProduct: ProductInterface = {
        id: Math.random(),
        ...data.newProduct,
      };
      console.log({ optimisticProduct });

      /* almacenar el producto en el cache del query client */
      queryClient.setQueryData<ProductInterface[]>(
        ["products", { filterKey: data.newProduct.category }],
        (oldState) => {
          /* el "oldState" puede que sea undefined porque puede ser que nunca se haya solicitado el query de -- ["products", { filterKey: data.category }] -- entonces por eso estamos haciendo una validación primero */
          if (!oldState) {
            return [optimisticProduct];
          }

          return [...oldState, optimisticProduct];
        }
      );

      return {
        optimisticProduct,
      };
    },

    onSuccess: (data, variables, context) => {
      /* el "context" es básicamente la información que nos va a regresar el "onMutate" que nos ayudará a poder conectar ambos métodos de "onMutate" y "onSuccess" */
      console.log("onSuccess", { data, variables, context });

      /* haremos la invalidación de un query, en este caso será según la categoría como el de -- filterKey: "women's clothing", -- o -- filterKey: "men's clothing", -- y aquí usaremos el "useQueryClient" que me da acceso a todo el cliente de "@tanstack/react-query" para encontrar la query que necesito para que por ejemplo, en este caso, al momento de insertar un nuevo producto en X categoría, por ejemplo en -- filterKey: "women's clothing", -- entonces se invalide esa data "fresca" que teníamos y realice una nueva petición para poder visualizar también el nuevo producto y evitar estar refrescando la página manualmente */
      /* NOTA: pero el detalle con esto, ya sea hacerlo de forma automática o manual, trae igual algunos detalles a considerar, porque por ejemplo, si de por sí la petición trae 50 productos o items, entonces se realizará de nuevo la petición con esos 50 + el nuevo producto, lo cual puede resultar un poco pesado en alguna situaciones, pero para eso se puede realizar otra funcionalidad como las "actualizaciones optimistas" */
      // queryClient.invalidateQueries({
      //   queryKey: ["products", { filterKey: data.category }],
      // });

      /* remover del cache el "optimisticProduct" que creamos porque no es necesario y no queremos que se almacene en nuestro cache */
      queryClient.removeQueries({
        queryKey: ["products", { productId: context.optimisticProduct.id }],
      });

      /* aquí no haremos la invalidación del query para hacer de nuevo una petición, sino lo que haremos es agregar el nuevo producto o la nueva data a la data ya existente */
      queryClient.setQueryData<ProductInterface[]>(
        ["products", { filterKey: data.category }],
        (oldState) => {
          /* el "oldState" puede que sea undefined porque puede ser que nunca se haya solicitado el query de -- ["products", { filterKey: data.category }] -- entonces por eso estamos haciendo una validación primero */
          if (!oldState) {
            return [data];
          }

          /* regresar el nuevo producto (el que viene desde backend) y no colocar el producto con el id superficial que le colocamos desde frontend porque se supone que en este punto la petición ya se hizo satisfactoriamente y podemos usar la data correcta */
          return oldState.map((cacheProduct) => {
            return cacheProduct.id === context.optimisticProduct.id
              ? data
              : cacheProduct;
          });
        }
      );
    },
    onSettled: (data, error, variables, context) => {
      console.log("onSettled", { data, error, variables, context });
    },
  });

  return { productMutation };
};

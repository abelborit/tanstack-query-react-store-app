import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProductAction } from "../services/createProduct.actions";

export const useCreateProductMutation = () => {
  /* haremos la invalidación de un query, en este caso será según la categoría como el de -- filterKey: "women's clothing", -- o -- filterKey: "men's clothing", -- y aquí usaremos el "useQueryClient" que me da acceso a todo el cliente de "@tanstack/react-query" para encontrar la query que necesito para que por ejemplo, en este caso, al momento de insertar un nuevo producto en X categoría, por ejemplo en -- filterKey: "women's clothing", -- entonces se invalide esa data "fresca" que teníamos y realice una nueva petición para poder visualizar también el nuevo producto y evitar estar refrescando la página manualmente */
  /* NOTA: pero el detalle con esto, ya sea hacerlo de forma automática o manual, trae igual algunos detalles a considerar, porque por ejemplo, si de por sí la petición trae 50 productos o items, entonces se realizará de nuevo la petición con esos 50 + el nuevo producto, lo cual puede resultar un poco pesado en alguna situaciones, pero para eso se puede realizar otra funcionalidad como las "actualizaciones optimistas" */
  const queryClient = useQueryClient();

  const productMutation = useMutation({
    mutationFn: createProductAction,
    onSuccess: (data, variables, context) => {
      console.log("onSuccess", { data, variables, context });
      queryClient.invalidateQueries({
        queryKey: ["products", { filterKey: data.category }],
      });
    },
    onSettled: (data, error, variables, context) => {
      console.log("onSettled", { data, error, variables, context });
    },
  });

  return { productMutation };
};

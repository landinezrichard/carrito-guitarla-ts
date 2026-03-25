export type Guitar = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
};

export type CartItem = Guitar & {
  quantity: number;
};

// heredar solo algunos campos de Guitar
// export type CartItem = Pick<Guitar, "id" | "name" | "price"> & {
//   quantity: number;
// };

// Omitir campos de Guitar en la herencia
// export type CartItem = Omit<Guitar, "image" | "description"> & {
//   quantity: number;
// };

// Para más info https://www.typescriptlang.org/docs/handbook/utility-types.html

// Forma lookup para obtener un tipo a partir de otro
// Parecido al Pick pero con index signature
// util para obtener el tipo de id a partir de Guitar
// export type GuitarId = Guitar["id"];
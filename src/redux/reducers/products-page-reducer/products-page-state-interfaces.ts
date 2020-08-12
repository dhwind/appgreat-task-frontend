export interface ProductItemOptions {
    id: number;
    name: string;
    price: number;
    image: string;
}

export interface ProductsPageState {
    productsItems: Array<ProductItemOptions>;
}
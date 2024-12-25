export interface Item {
    name: string;
    description: string;
    price: number;
    vegan: boolean;
}

export interface Subcategory {
    name: string;
    items: Item[];
}

export interface Category {
    name: string;
    items?: Item[];
    subcategories?: Subcategory[];
}
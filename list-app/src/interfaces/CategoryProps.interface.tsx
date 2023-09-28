import ItemProps from "./ItemProps.interface";

export default interface CategoryProps {
    name: string;
    id: number;
    items: ItemProps[];
}
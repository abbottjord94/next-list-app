import CategoryProps from "./CategoryProps.interface";

export default interface ListProps {
    title: string;
    id: number;
    categories: CategoryProps[];
}
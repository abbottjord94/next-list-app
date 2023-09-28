import ItemProps from "@/interfaces/ItemProps.interface";

export default function ListItem(props: ItemProps) {
    return(
        <div>
            <div className="m-4 md:p-4 bg-gray-100 hover:bg-gray-200">
                <div className="flex flex-row">{props.name}</div>
            </div>
        </div>
    );
}
import CategoryProps from "@/interfaces/CategoryProps.interface";

export default function Category(props: CategoryProps) {

    const handleCategoryClick = () => {
        props.onCategoryClick(props.items);
    }

    return(
        <div>
            <div className="m-4 md:p-4 bg-gray-100 hover:bg-gray-200">
                <div 
                    className="flex flex-row"
                    onClick={handleCategoryClick}
                >
                    {props.name}
                </div>
            </div>
        </div>
    );
}
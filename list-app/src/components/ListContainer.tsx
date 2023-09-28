"use client";   

import Category from "./Category";
import ItemProps from "@/interfaces/ItemProps.interface";
import { useState } from "react";
import ListItem from "./ListItem";

export default function ListContainer() {

    {/*
        Mock data for front-end development only
    */}
    const categories = [
        {name: "Category 1", id: 1, items: [
            {name: "Item 1", id: 1, category: 1},
            {name: "Item 2", id: 2, category: 1},
            {name: "Item 3", id: 3, category: 1},
        ]},
        {name: "Category 2", id: 2, items: [
            {name: "Item 4", id: 4, category: 2},
            {name: "Item 5", id: 5, category: 2},
            {name: "Item 6", id: 6, category: 2},
            {name: "Item 10", id: 10, category: 2},
            {name: "Item 11", id: 11, category: 2},
            {name: "Item 12", id: 12, category: 2},
        ]},
        {name: "Category 3", id: 3, items: [
            {name: "Item 7", id: 7, category: 3},
            {name: "Item 8", id: 8, category: 3},
            {name: "Item 9", id: 9, category: 3},
            {name: "Item 13", id: 13, category: 3},
            {name: "Item 14", id: 14, category: 3},
        ]},
    ];

    const [items, setItems] = useState<ItemProps[]>([]);

    const setCurrentItems = (newItems: ItemProps[]) => {
        setItems(newItems);
    }
    
    return(
        <div>
            <div className="border-black border w-auto h-auto m-4 md:m-10 p-4">
                <div className="w-full">
                    <div className = "text-center text-2xl">List Container</div>
                    <div className="flex flex-row">
                        <div className="border border-black w-1/3 mt-4 md:mt-10 pb-10">
                            <div className="text-center border-b border-black mx-12">Categories</div>
                            <div>
                                {categories.map((category) => (
                                    <Category
                                        key={category.id}
                                        name={category.name}
                                        id={category.id}
                                        items={category.items}
                                        onCategoryClick={setCurrentItems}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="border border-black w-2/3 mt-4 md:mt-10 pb-10">
                            <div className="text-center border-b border-black mx-12">Items</div>
                            <div>
                                {items.map((item) => (
                                    <ListItem 
                                        key={item.id}
                                        name={item.name}
                                        id={item.id}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
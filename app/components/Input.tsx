"use client";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React, { use, useState } from "react";
interface SearchInputProps {
    placeholder?: string;
    buttonText?: string;
    onSearch?: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
    placeholder = "Search For A Property",
    buttonText = "Find Property",
    onSearch,
}) => {
    const [query, setQuery] = useState("");

    const handleSearch = () => {
        if (onSearch) onSearch(query);
    };
    return (
        <div className="">
            <div className="relative w-full max-w-[1000px] group">
                {/* Само поле ввода */}
                <Input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={placeholder}
                    className="w-full bg-[#141414] border border-zinc-800 rounded-xl py-5 px-6 pr-44 text-white placeholder-zinc-500 outline-none focus:border-[#703bf7] focus:ring-1 focus:ring-[#703bf7] transition-all duration-300 shadow-inner"
                />

                {/* Кнопка внутри инпута */}
                <Button
                    onClick={handleSearch}
                    className="absolute right-2 top-1  bg-[#703bf7] hover:bg-[#5e2de3] text-white px-5 py-3 rounded-lg flex items-center gap-2 transition-all duration-200 shadow-lg outline-none 
             focus:ring-2 focus:ring-[#703bf7] focus:ring-inset 
             "
                >
                    <Search size={20} className="shrink-0" />
                    <span className="font-medium text-sm md:text-base hidden md:block">
                        {buttonText}
                    </span>
                </Button>
            </div>
            {/* {" "}
            <Field orientation="horizontal">
                <Input type="search" placeholder="Search..." />
                <Button>Search</Button>
            </Field> */}
        </div>
    );
};

export default SearchInput;

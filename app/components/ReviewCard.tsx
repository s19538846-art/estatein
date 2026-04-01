import React from "react";
import { Star } from "lucide-react"; // Или любая другая библиотека иконок

interface ReviewProps {
    title: string;
    text: string;
    author: string;
    location: string;
    avatarUrl: string;
    rating?: number;
}

const ReviewCard: React.FC<ReviewProps> = ({
    title,
    text,
    author,
    location,
    avatarUrl,
    rating = 5,
}) => {
    return (
        <div className="max-w-md bg-[#141414] text-white p-8  shadow-2xl font-sans">
            {/* Stars Section */}
            <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-zinc-800 flex items-center justify-center"
                    >
                        <Star
                            size={18}
                            className={
                                i < rating
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-zinc-600"
                            }
                        />
                    </div>
                ))}
            </div>

            {/* Content Section */}
            <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3 tracking-tight">
                    {title}
                </h3>
                <p className="text-zinc-400 leading-relaxed text-base">
                    {text}
                </p>
            </div>

            {/* Author Section */}
            <div className="flex items-center gap-3">
                <img
                    src={avatarUrl}
                    alt={author}
                    className="w-12 h-12 rounded-full object-cover bg-zinc-800"
                />
                <div>
                    <h4 className="font-medium text-[17px]">{author}</h4>
                    <p className="text-zinc-500 text-sm">{location}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
// Пример использования компонента ReviewCard
{/* <ReviewCard
    title="Exceptional Service!"
    text="Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!"
    author="Wade Warren"
    location="USA, California"
    avatarUrl="https://i.pravatar.cc/150?u=wade" // Заглушка аватара
/>; */}

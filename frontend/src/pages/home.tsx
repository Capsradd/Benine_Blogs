import { useState } from 'react'
import { Link } from 'react-router-dom'

const cards = [
    {
        meta: 'user | 1 days ago',
        title: 'Elysia JS, Framework for weebs',
        image: './banner-elysia.jpg',
        body: 'Backend TypeScript framework with End-to-End Type Safety, formidable speed, and exceptional DX across runtime. Supercharged by Bun',
    },
    {
        meta: 'user | 3 days ago',
        title: 'Bun, runtime for modern web',
        image: './banner-elysia.jpg',
        body: 'A fast JavaScript runtime with a bundler, test runner, and package manager built in.',
    },
    {
        meta: 'user | 5 days ago',
        title: 'TypeScript tips for APIs',
        image: './banner-elysia.jpg',
        body: 'Practical patterns for building typed APIs with consistent validation and DX.',
    },
]

export default function Home() {
    const [activeIndex, setActiveIndex] = useState(0)
    const total = cards.length
    const current = cards[activeIndex]

    const goTo = (index: number) => {
        const nextIndex = (index + total) % total
        setActiveIndex(nextIndex)
    }

    return (
        <div className="bg-[#262626] min-h-screen flex items-center justify-between px-50">
            <div className="text-white font-medium text-6xl leading-16">
                <h1>Create Blogs</h1>
                <Link to="/your"><h1>Your Blogs</h1></Link>
                <Link to="/browse"><h1>Browse Blogs</h1></Link>
            </div>
            <div className="flex flex-col items-center gap-4">
                <div
                    key={activeIndex}
                    className="bg-[#3A3A3A] rounded-4xl w-fit h-fit p-4 card-animate"
                >
                    <div className="w-150 text-white">
                        <div className="flex items-center justify-between text-1xl mt-1 mb-5 font-medium ">
                            <p>{current.meta}</p>
                            <p>{current.title}</p>
                        </div>
                        <img src={current.image} className="rounded-4xl" alt="Blog banner" />
                        <p className="mt-5">{current.body}</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 text-white ">
                    <button
                        type="button"
                        className="px-3 py-1 rounded-full border border-white/30"
                        onClick={() => goTo(activeIndex - 1)}
                    >
                        {'<'}
                    </button>
                    <div className="flex items-center gap-2">
                        {cards.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                onClick={() => goTo(index)}
                                className={`h-2 w-2 rounded-full ${
                                    index === activeIndex ? 'bg-white' : 'bg-white/40'
                                }`}
                                aria-label={`Go to card ${index + 1}`}
                            />
                        ))}
                    </div>
                    <button
                        type="button"
                        className="px-3 py-1 rounded-full border border-white/30"
                        onClick={() => goTo(activeIndex + 1)}
                    >
                        {'>'}
                    </button>
                </div>
            </div>
        </div>
    )
}
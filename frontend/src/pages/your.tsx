const cards = [
    {
        meta: 'user | 1 days ago',
        title: 'Elysia JS, Framework for weebs',
        image: './banner-elysia.jpg',
        body: 'Backend TypeScript framework with End-to-End Type Safety, formidable speed, and exceptional DX across runtime. Supercharged by Bun',
    },
        {
        meta: 'user | 1 days ago',
        title: 'Elysia JS, Framework for weebs',
        image: './banner-elysia.jpg',
        body: 'Backend TypeScript framework with End-to-End Type Safety, formidable speed, and exceptional DX across runtime. Supercharged by Bun',
    },
]


export default function Home() {
    return (
        <div className="bg-[#262626] min-h-screen px-10 py-10">
        <h1 className="text-white text-2xl font-bold mt-30 ml-3">Your Blogs</h1>
            <div className="mx-auto grid max-w-450 grid-cols-4 gap-10 mt-5 h-170">
                {cards.map((card, index) => (
                    <div key={index} className="bg-[#3A3A3A] rounded-4xl p-4 card-animate hover:-translate-y-2 duration-150">
                        <div className="text-white">
                            <div className="flex items-center justify-between text-1xl mt-1 mb-5 font-medium">
                                <p>{card.meta}</p>
                                <p>{card.title}</p>
                            </div>
                            <img src={card.image} className="rounded-4xl w-full" alt="Blog banner" />
                            <p className="mt-5">{card.body}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
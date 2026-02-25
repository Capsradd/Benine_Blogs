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
        {
        meta: 'user | 5 days ago',
        title: 'TypeScript tips for APIs',
        image: './banner-elysia.jpg',
        body: 'Practical patterns for building typed APIs with consistent validation and DX.',
    },
]


export default function Home() {
    return (
        <div className="bg-[#262626] min-h-screen px-10 py-10">
            <div className="mx-auto grid max-w-450 grid-cols-4 gap-10 mt-35">
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
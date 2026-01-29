const Collections = () => {
    const collections = [
        {
            id: 1,
            name: "Sneakers",
            description: "Comfortable and stylish sneakers",
            image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=400&fit=crop&crop=center",
            products: 24
        },
        {
            id: 2,
            name: "Casual Shoes",
            description: "Perfect for relaxed outings and casual occasions",
            image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&h=400&fit=crop&crop=center",
            products: 18
        },
        {
            id: 3,
            name: "Formal Shoes",
            description: "Elegant shoes for business and formal events",
            image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=600&h=400&fit=crop&crop=center",
            products: 15
        },
        {
            id: 4,
            name: "Sports Shoes",
            description: "High-performance shoes for athletic activities",
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=400&fit=crop&crop=center",
            products: 21
        },
        {
            id: 5,
            name: "Boots",
            description: "Durable and stylish boots for all seasons",
            image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=600&h=400&fit=crop&crop=center",
            products: 12
        },
        {
            id: 6,
            name: "Sandals",
            description: "Comfortable sandals for summer and beach",
            image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=600&h=400&fit=crop&crop=center",
            products: 16
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Collections</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Discover our carefully curated collections of premium shoes designed for every occasion and lifestyle.
                    </p>
                </div>

                {/* Collections Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {collections.map((collection) => (
                        <div key={collection.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                            <div className="relative overflow-hidden">
                                <img 
                                    src={collection.image} 
                                    alt={collection.name}
                                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 cursor-pointer">
                                        View Collection
                                    </button>
                                </div>
                                <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                    {collection.products} items
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{collection.name}</h3>
                                <p className="text-gray-600 mb-4">{collection.description}</p>
                                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-colors duration-300 cursor-pointer">
                                    Shop Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Can't Find What You're Looking For?</h2>
                        <p className="text-gray-600 mb-6">
                            Contact our customer service team and we'll help you find the perfect pair of shoes.
                        </p>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 cursor-pointer">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collections;
import { Heart, CheckCircle, DollarSign, Zap } from 'lucide-react';

const Home = () => {
    // Sample data for collections
    const collections = [
        {
            name: "Sneakers",
            image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop&crop=center",
            link: "/sneakers"
        },
        {
            name: "Casual Shoes",
            image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=300&fit=crop&crop=center",
            link: "/casual"
        },
        {
            name: "Formal Shoes",
            image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=400&h=300&fit=crop&crop=center",
            link: "/formal"
        },
        {
            name: "Sports Shoes",
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center",
            link: "/sports"
        }
    ];

    // Sample data for best sellers
    const bestSellers = [
        {
            id: 1,
            name: "Urban Runner",
            price: "रु 15,000",
            image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=300&h=300&fit=crop&crop=center",
            rating: 5
        },
        {
            id: 2,
            name: "Classic Comfort",
            price: "रु 12,500",
            image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=300&h=300&fit=crop&crop=center",
            rating: 4
        },
        {
            id: 3,
            name: "Sport Elite",
            price: "रु 18,000",
            image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&h=300&fit=crop&crop=center",
            rating: 5
        },
        {
            id: 4,
            name: "Business Pro",
            price: "रु 22,000",
            image: "https://images.unsplash.com/photo-1582897085656-c636d006a246?w=300&h=300&fit=crop&crop=center",
            rating: 4
        }
    ];

    // Sample customer reviews
    const reviews = [
        {
            id: 1,
            name: "Sarah Johnson",
            rating: 5,
            comment: "Amazing quality and super comfortable! I wear them all day without any discomfort.",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face"
        },
        {
            id: 2,
            name: "Mike Chen",
            rating: 5,
            comment: "Best shoes I've ever bought. Great value for money and excellent customer service.",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
        },
        {
            id: 3,
            name: "Emily Davis",
            rating: 4,
            comment: "Stylish and durable. Perfect for both work and casual outings.",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
        }
    ];

    const renderStars = (rating) => {
        return [...Array(5)].map((_, i) => (
            <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                ★
            </span>
        ));
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-white text-gray-900 py-20 px-6">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 space-y-6">
                        <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                            Stylish & Comfortable
                            <span className="block text-blue-500">Shoes</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-lg">
                            Step into comfort and style with our premium collection of shoes designed for every occasion.
                        </p>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 transform hover:scale-105 cursor-pointer">
                            Shop Now
                        </button>
                    </div>
                    <div className="lg:w-1/2 mt-10 lg:mt-0">
                        <img 
                            src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=400&fit=crop&crop=center" 
                            alt="Premium Shoes" 
                            className="w-full max-w-lg mx-auto rounded-lg shadow-2xl"
                        />
                    </div>
                </div>
            </section>

            {/* Collections Section */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Collections</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {collections.map((collection, index) => (
                            <div key={index} className="group cursor-pointer">
                                <div className="relative overflow-hidden rounded-lg shadow-lg">
                                    <img 
                                        src={collection.image} 
                                        alt={collection.name}
                                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="text-white text-lg font-semibold">View Collection</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mt-4 text-center">{collection.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Our Shoes Section */}
            <section className="py-16 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Our Shoes?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Heart className="w-8 h-8 text-blue-500" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Comfortable Fit</h3>
                            <p className="text-gray-600">Engineered for all-day comfort with premium cushioning and ergonomic design.</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="w-8 h-8 text-green-500" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Materials</h3>
                            <p className="text-gray-600">Made from premium leather and sustainable materials for superior quality.</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <DollarSign className="w-8 h-8 text-yellow-500" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Affordable Price</h3>
                            <p className="text-gray-600">Premium quality at competitive prices. Great value for your investment.</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Zap className="w-8 h-8 text-purple-500" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Long-lasting Design</h3>
                            <p className="text-gray-600">Built to last with reinforced construction and timeless style.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Best Sellers Section */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Best Sellers</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {bestSellers.map((shoe) => (
                            <div key={shoe.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="relative">
                                    <img 
                                        src={shoe.image} 
                                        alt={shoe.name}
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
                                        New
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{shoe.name}</h3>
                                    <div className="flex items-center mb-2">
                                        {renderStars(shoe.rating)}
                                        <span className="ml-2 text-gray-600 text-sm">({shoe.rating}.0)</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-2xl font-bold text-blue-500">{shoe.price}</span>
                                        <button className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition-colors duration-300 cursor-pointer">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About the Brand Section */}
            <section className="py-16 px-6 bg-gray-900 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-8">About Our Brand</h2>
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2">
                            <img 
                                src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=500&h=400&fit=crop&crop=center" 
                                alt="Shoe craftsmanship" 
                                className="rounded-lg shadow-xl"
                            />
                        </div>
                        <div className="lg:w-1/2 space-y-6">
                            <p className="text-xl leading-relaxed text-gray-300">
                                We make shoes designed for comfort and everyday style. Our passion for quality craftsmanship 
                                and innovative design drives us to create footwear that doesn't just look good, but feels 
                                amazing too.
                            </p>
                            <p className="text-lg text-gray-400">
                                Since our founding, we've been committed to using sustainable materials and ethical 
                                manufacturing practices, ensuring that every step you take is a step towards a better future.
                            </p>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 cursor-pointer">
                                Learn More About Us
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Customer Reviews Section */}
            <section className="py-16 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">What Our Customers Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {reviews.map((review) => (
                            <div key={review.id} className="bg-white rounded-lg shadow-lg p-6">
                                <div className="flex items-center mb-4">
                                    <img 
                                        src={review.avatar} 
                                        alt={review.name}
                                        className="w-12 h-12 rounded-full object-cover mr-4"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-gray-900">{review.name}</h4>
                                        <div className="flex">
                                            {renderStars(review.rating)}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-600 italic">"{review.comment}"</p>
                            </div>
                        ))}
                    </div>
                    
                    {/* Overall Rating */}
                    <div className="text-center mt-12">
                        <div className="inline-flex items-center bg-white rounded-lg shadow-lg px-8 py-4">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-gray-900">4.8</div>
                                <div className="flex justify-center mb-1">
                                    {renderStars(5)}
                                </div>
                                <div className="text-sm text-gray-600">Based on 1,247 reviews</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-16 px-6 bg-blue-500 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-4">Ready to Step Up Your Style?</h2>
                    <p className="text-xl mb-8 text-blue-100">
                        Join thousands of satisfied customers who've made the switch to comfort and style.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-blue-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-300 cursor-pointer">
                            Shop All Collections
                        </button>
                        <button className="border-2 border-white text-white hover:bg-white hover:text-blue-500 px-8 py-4 rounded-lg font-semibold transition-colors duration-300 cursor-pointer">
                            View Size Guide
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
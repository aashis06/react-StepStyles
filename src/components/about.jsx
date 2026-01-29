import { Leaf, Gem, Handshake, Rocket } from 'lucide-react';

const About = () => {
    const stats = [
        { number: "50K+", label: "Happy Customers" },
        { number: "15+", label: "Years Experience" },
        { number: "200+", label: "Shoe Models" },
        { number: "98%", label: "Customer Satisfaction" }
    ];

    const team = [
        {
            name: "Sarah Johnson",
            role: "Founder & CEO",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
            description: "Passionate about creating comfortable footwear that doesn't compromise on style."
        },
        {
            name: "Michael Chen",
            role: "Head Designer",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
            description: "15+ years of experience in footwear design and sustainable manufacturing."
        },
        {
            name: "Emily Rodriguez",
            role: "Quality Manager",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
            description: "Ensures every pair meets our high standards of quality and comfort."
        }
    ];

    const values = [
        {
            icon: <Leaf className="w-8 h-8 text-green-500" />,
            title: "Sustainability",
            description: "We use eco-friendly materials and sustainable manufacturing processes to protect our planet."
        },
        {
            icon: <Gem className="w-8 h-8 text-blue-500" />,
            title: "Quality",
            description: "Every pair is crafted with premium materials and undergoes rigorous quality testing."
        },
        {
            icon: <Handshake className="w-8 h-8 text-purple-500" />,
            title: "Community",
            description: "We believe in giving back to our community and supporting local artisans."
        },
        {
            icon: <Rocket className="w-8 h-8 text-orange-500" />,
            title: "Innovation",
            description: "Constantly pushing boundaries with new technologies and design innovations."
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl font-bold mb-6">About StepStyle</h1>
                    <p className="text-xl leading-relaxed">
                        We make shoes designed for comfort and everyday style. Our journey began with a simple belief: 
                        everyone deserves footwear that looks great and feels even better.
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl font-bold text-blue-500 mb-2">{stat.number}</div>
                                <div className="text-gray-600 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-16 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    Founded in 2010, StepStyle began as a small family business with a big dream: 
                                    to create shoes that combine timeless style with modern comfort technology.
                                </p>
                                <p>
                                    What started in a small workshop has grown into a global brand, but our core 
                                    values remain unchanged. We believe that great shoes should feel as good as 
                                    they look, and that quality craftsmanship never goes out of style.
                                </p>
                                <p>
                                    Today, we're proud to serve customers worldwide, offering a diverse range of 
                                    footwear that meets the demands of modern life while honoring traditional 
                                    shoemaking techniques.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <img 
                                src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&h=500&fit=crop&crop=center" 
                                alt="Shoe craftsmanship" 
                                className="rounded-lg shadow-xl"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-blue-500 text-white p-6 rounded-lg shadow-lg">
                                <div className="text-2xl font-bold">15+</div>
                                <div className="text-sm">Years of Excellence</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                                <div className="flex justify-center mb-4">{value.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <img 
                                    src={member.image} 
                                    alt={member.name}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                                    <p className="text-blue-500 font-medium mb-3">{member.role}</p>
                                    <p className="text-gray-600">{member.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-6 bg-blue-500 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Experience the Difference?</h2>
                    <p className="text-xl mb-8">
                        Join thousands of satisfied customers who've discovered the perfect blend of comfort and style.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-blue-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-300 cursor-pointer">
                            Shop Our Collections
                        </button>
                        <button className="border-2 border-white text-white hover:bg-white hover:text-blue-500 px-8 py-4 rounded-lg font-semibold transition-colors duration-300 cursor-pointer">
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;

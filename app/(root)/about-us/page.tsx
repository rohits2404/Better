import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Award, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutUsPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 to-green-50 pt-20 pb-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center pt-10">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            We're making homeownership simpler, faster, and more accessible
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Better was founded with a simple mission: to make the mortgage process better for everyone. We're using
                            technology to eliminate the traditional pain points of getting a mortgage.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our mission</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                We believe that getting a mortgage should be simple, transparent, and fast. That's why we've built a
                                digital-first platform that puts you in control of your home buying journey.
                            </p>
                            <p className="text-lg text-gray-600 mb-8">
                                Since our founding, we've helped over 500,000 families achieve their homeownership dreams, funding more
                                than $100 billion in home loans.
                            </p>
                            <Link href="/start">
                                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">Start your journey</Button>
                            </Link>
                        </div>
                        <div>
                            <Image
                            src="/images/about-1.png?height=400&width=500"
                            alt="Team collaboration"
                            width={500}
                            height={400}
                            className="rounded-2xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our values</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        These principles guide everything we do and help us deliver the best possible experience for our
                        customers.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <Card className="border-0 shadow-lg">
                            <CardContent className="p-8 text-center">
                                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Users className="h-8 w-8 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-semibold mb-4">Customer first</h3>
                                <p className="text-gray-600">Every decision we make starts with how it will benefit our customers.</p>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-lg">
                            <CardContent className="p-8 text-center">
                                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Target className="h-8 w-8 text-green-600" />
                                </div>
                                <h3 className="text-xl font-semibold mb-4">Transparency</h3>
                                <p className="text-gray-600">No hidden fees, no surprises. We believe in complete transparency.</p>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-lg">
                            <CardContent className="p-8 text-center">
                                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Award className="h-8 w-8 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-semibold mb-4">Excellence</h3>
                                <p className="text-gray-600">
                                We strive for excellence in everything we do, from technology to service.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-lg">
                            <CardContent className="p-8 text-center">
                                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Heart className="h-8 w-8 text-red-600" />
                                </div>
                                <h3 className="text-xl font-semibold mb-4">Empathy</h3>
                                <p className="text-gray-600">We understand that buying a home is one of life's biggest decisions.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leadership team</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Our experienced leadership team brings together expertise from technology, finance, and real estate.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Vishal Garg",
                                role: "CEO & Founder",
                                image: "/images/about-2.png?height=300&width=300",
                            },
                            {
                                name: "Paula Tuffin",
                                role: "Chief Compliance Officer",
                                image: "/images/about-3.png?height=300&width=300",
                            },
                            {
                                name: "Kevin Ryan",
                                role: "Chief Financial Officer",
                                image: "/images/about-4.png?height=300&width=300",
                            },
                        ].map((member, index) => (
                            <Card key={index} className="border-0 shadow-lg">
                                <CardContent className="p-6 text-center">
                                    <Image
                                    src={member.image || "/placeholder.svg"}
                                    alt={member.name}
                                    width={200}
                                    height={200}
                                    className="rounded-full mx-auto mb-4"
                                    />
                                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                                    <p className="text-gray-600">{member.role}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-green-600">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our impact by the numbers</h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-white mb-2">$100B+</div>
                            <div className="text-green-100">Total loans funded</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-white mb-2">500K+</div>
                            <div className="text-green-100">Families helped</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-white mb-2">50</div>
                            <div className="text-green-100">States served</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-white mb-2">1000+</div>
                            <div className="text-green-100">Team members</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
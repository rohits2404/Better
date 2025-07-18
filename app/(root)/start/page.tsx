"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowRight, DollarSign, MapPin } from "lucide-react"

export default function StartPage() {

    const [step, setStep] = useState(1)

    const [formData, setFormData] = useState({
        loanPurpose: "",
        propertyType: "",
        propertyUse: "",
        homePrice: "",
        downPayment: "",
        zipCode: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    })

    const handleNext = () => {
        if (step < 4) {
            setStep(step + 1)
        }
    }

    const handleBack = () => {
        if (step > 1) {
            setStep(step - 1)
        }
    }

    const updateFormData = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
    }

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                <Card className="w-full max-w-2xl mx-auto shadow-lg">
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl font-bold">What can we help you with?</CardTitle>
                        <p className="text-gray-600">Tell us about your loan needs</p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div>
                            <Label className="text-base font-medium mb-4 block">I want to:</Label>
                            <RadioGroup
                            value={formData.loanPurpose}
                            onValueChange={(value) => updateFormData("loanPurpose", value)}
                            className="space-y-3"
                            >
                                <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                                    <RadioGroupItem value="purchase" id="purchase" />
                                    <Label htmlFor="purchase" className="flex-1 cursor-pointer">
                                    <div className="font-medium">Buy a home</div>
                                    <div className="text-sm text-gray-500">Purchase a new home</div>
                                    </Label>
                                </div>
                                <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                                    <RadioGroupItem value="refinance" id="refinance" />
                                    <Label htmlFor="refinance" className="flex-1 cursor-pointer">
                                    <div className="font-medium">Refinance</div>
                                    <div className="text-sm text-gray-500">Replace my current mortgage</div>
                                    </Label>
                                </div>
                                <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                                    <RadioGroupItem value="cashout" id="cashout" />
                                    <Label htmlFor="cashout" className="flex-1 cursor-pointer">
                                    <div className="font-medium">Cash-out refinance</div>
                                    <div className="text-sm text-gray-500">Tap into my home's equity</div>
                                    </Label>
                                </div>
                            </RadioGroup>
                        </div>
                    </CardContent>
                </Card>
            )

            case 2:
                return (
                <Card className="w-full max-w-2xl mx-auto shadow-lg">
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl font-bold">Tell us about the property</CardTitle>
                        <p className="text-gray-600">Property details help us find the right loan for you</p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div>
                            <Label className="text-base font-medium mb-4 block">Property type:</Label>
                            <RadioGroup
                            value={formData.propertyType}
                            onValueChange={(value) => updateFormData("propertyType", value)}
                            className="grid grid-cols-2 gap-4"
                            >
                                <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                                    <RadioGroupItem value="single-family" id="single-family" />
                                    <Label htmlFor="single-family" className="cursor-pointer">
                                    Single Family Home
                                    </Label>
                                </div>
                                <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                                    <RadioGroupItem value="condo" id="condo" />
                                    <Label htmlFor="condo" className="cursor-pointer">
                                    Condo
                                    </Label>
                                </div>
                                <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                                    <RadioGroupItem value="townhouse" id="townhouse" />
                                    <Label htmlFor="townhouse" className="cursor-pointer">
                                    Townhouse
                                    </Label>
                                </div>
                                <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                                    <RadioGroupItem value="multi-family" id="multi-family" />
                                    <Label htmlFor="multi-family" className="cursor-pointer">
                                    Multi-Family
                                    </Label>
                                </div>
                            </RadioGroup>
                        </div>

                        <div>
                            <Label className="text-base font-medium mb-4 block">How will you use this property?</Label>
                            <RadioGroup
                            value={formData.propertyUse}
                            onValueChange={(value) => updateFormData("propertyUse", value)}
                            className="space-y-3"
                            >
                                <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                                    <RadioGroupItem value="primary" id="primary" />
                                    <Label htmlFor="primary" className="cursor-pointer">
                                    Primary residence
                                    </Label>
                                </div>
                                <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                                    <RadioGroupItem value="secondary" id="secondary" />
                                    <Label htmlFor="secondary" className="cursor-pointer">
                                    Secondary/Vacation home
                                    </Label>
                                </div>
                                <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                                    <RadioGroupItem value="investment" id="investment" />
                                    <Label htmlFor="investment" className="cursor-pointer">
                                    Investment property
                                    </Label>
                                </div>
                            </RadioGroup>
                        </div>
                    </CardContent>
                </Card>
            )

            case 3:
                return (
                <Card className="w-full max-w-2xl mx-auto shadow-lg">
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl font-bold">Financial details</CardTitle>
                        <p className="text-gray-600">Help us understand your budget</p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="homePrice">Home price</Label>
                                <div className="relative">
                                    <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                    <Input
                                    id="homePrice"
                                    type="number"
                                    placeholder="400,000"
                                    value={formData.homePrice}
                                    onChange={(e) => updateFormData("homePrice", e.target.value)}
                                    className="pl-10"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="downPayment">Down payment</Label>
                                <div className="relative">
                                    <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                    <Input
                                    id="downPayment"
                                    type="number"
                                    placeholder="80,000"
                                    value={formData.downPayment}
                                    onChange={(e) => updateFormData("downPayment", e.target.value)}
                                    className="pl-10"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="zipCode">Property ZIP code</Label>
                            <div className="relative">
                                <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                <Input
                                id="zipCode"
                                type="text"
                                placeholder="12345"
                                value={formData.zipCode}
                                onChange={(e) => updateFormData("zipCode", e.target.value)}
                                className="pl-10"
                                maxLength={5}
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )

            case 4:
                return (
                    <Card className="w-full max-w-2xl mx-auto shadow-lg">
                        <CardHeader className="text-center">
                            <CardTitle className="text-2xl font-bold">Almost done!</CardTitle>
                            <p className="text-gray-600">Just need a few details to get you pre-approved</p>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName">First name</Label>
                                    <Input
                                    id="firstName"
                                    type="text"
                                    placeholder="John"
                                    value={formData.firstName}
                                    onChange={(e) => updateFormData("firstName", e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName">Last name</Label>
                                    <Input
                                    id="lastName"
                                    type="text"
                                    placeholder="Doe"
                                    value={formData.lastName}
                                    onChange={(e) => updateFormData("lastName", e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">Email address</Label>
                                <Input
                                id="email"
                                type="email"
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={(e) => updateFormData("email", e.target.value)}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="phone">Phone number</Label>
                                <Input
                                id="phone"
                                type="tel"
                                placeholder="(555) 123-4567"
                                value={formData.phone}
                                onChange={(e) => updateFormData("phone", e.target.value)}
                                />
                            </div>

                            <div className="bg-green-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-green-800 mb-2">What happens next?</h3>
                                <ul className="text-sm text-green-700 space-y-1">
                                <li>• Get pre-approved in minutes</li>
                                <li>• No impact to your credit score</li>
                                <li>• Connect with a loan officer</li>
                                <li>• Start shopping for your home</li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
            )

        default:
            return null
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 pt-20">
            <div className="container mx-auto px-4 py-8">
                {/* Progress Bar */}
                <div className="max-w-2xl mx-auto mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium text-gray-600">Step {step} of 4</span>
                        <span className="text-sm font-medium text-gray-600">{Math.round((step / 4) * 100)}% Complete</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                        className="bg-green-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(step / 4) * 100}%` }}
                        ></div>
                    </div>
                </div>

                {/* Step Content */}
                {renderStep()}

                {/* Navigation Buttons */}
                <div className="max-w-2xl mx-auto mt-8 flex justify-between">
                    <Button variant="outline" onClick={handleBack} disabled={step === 1} className="px-8 bg-transparent">
                        Back
                    </Button>

                    {step < 4 ? (
                        <Button
                        onClick={handleNext}
                        className="bg-green-600 hover:bg-green-700 text-white px-8"
                        disabled={
                            (step === 1 && !formData.loanPurpose) ||
                            (step === 2 && (!formData.propertyType || !formData.propertyUse)) ||
                            (step === 3 && (!formData.homePrice || !formData.downPayment || !formData.zipCode))
                        }
                        >
                            Continue
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    ) : (
                        <Button
                        className="bg-green-600 hover:bg-green-700 text-white px-8"
                        disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone}
                        >
                            Get Pre-Approved
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    )}
                </div>

                {/* Trust Indicators */}
                <div className="max-w-2xl mx-auto mt-12 text-center">
                    <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                            <span>Secure & encrypted</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                            <span>No impact to credit</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                            <span>Takes 3 minutes</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
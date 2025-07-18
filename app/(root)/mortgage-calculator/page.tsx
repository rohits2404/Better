"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Calculator, Home } from "lucide-react"
import Link from "next/link"

export default function MortgageCalculatorPage() {
  const [homePrice, setHomePrice] = useState(400000)
  const [downPayment, setDownPayment] = useState(80000)
  const [loanTerm, setLoanTerm] = useState(30)
  const [interestRate, setInterestRate] = useState(6.5)
  const [propertyTax, setPropertyTax] = useState(265)
  const [homeInsurance, setHomeInsurance] = useState(150)
  const [pmi, setPmi] = useState(200)
  const [monthlyPayment, setMonthlyPayment] = useState(0)
  const [principalAndInterest, setPrincipalAndInterest] = useState(0)

  const downPaymentPercentage = (downPayment / homePrice) * 100

  useEffect(() => {
    calculatePayment()
  }, [homePrice, downPayment, loanTerm, interestRate, propertyTax, homeInsurance, pmi])

  const calculatePayment = () => {
    const loanAmount = homePrice - downPayment
    const monthlyRate = interestRate / 100 / 12
    const numberOfPayments = loanTerm * 12

    if (monthlyRate === 0) {
      setPrincipalAndInterest(loanAmount / numberOfPayments)
    } else {
      const monthlyPI =
        (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
      setPrincipalAndInterest(monthlyPI)
    }

    const totalMonthly = principalAndInterest + propertyTax + homeInsurance + (downPaymentPercentage < 20 ? pmi : 0)
    setMonthlyPayment(totalMonthly)
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Mortgage Calculator</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Calculate your monthly mortgage payment and see how different factors affect your costs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Calculator Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-6 w-6 text-green-600" />
                Loan Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Home Price */}
              <div className="space-y-2">
                <Label htmlFor="homePrice" className="text-sm font-medium">
                  Home Price
                </Label>
                <Input
                  id="homePrice"
                  type="number"
                  value={homePrice}
                  onChange={(e) => setHomePrice(Number(e.target.value))}
                  className="text-lg"
                />
                <Slider
                  value={[homePrice]}
                  onValueChange={(value) => setHomePrice(value[0])}
                  max={2000000}
                  min={100000}
                  step={10000}
                  className="mt-2"
                />
              </div>

              {/* Down Payment */}
              <div className="space-y-2">
                <Label htmlFor="downPayment" className="text-sm font-medium">
                  Down Payment ({downPaymentPercentage.toFixed(1)}%)
                </Label>
                <Input
                  id="downPayment"
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="text-lg"
                />
                <Slider
                  value={[downPayment]}
                  onValueChange={(value) => setDownPayment(value[0])}
                  max={homePrice * 0.5}
                  min={homePrice * 0.03}
                  step={1000}
                  className="mt-2"
                />
              </div>

              {/* Loan Term */}
              <div className="space-y-2">
                <Label htmlFor="loanTerm" className="text-sm font-medium">
                  Loan Term (years)
                </Label>
                <div className="grid grid-cols-3 gap-2">
                  {[15, 20, 30].map((term) => (
                    <Button
                      key={term}
                      variant={loanTerm === term ? "default" : "outline"}
                      onClick={() => setLoanTerm(term)}
                      className="w-full"
                    >
                      {term} years
                    </Button>
                  ))}
                </div>
              </div>

              {/* Interest Rate */}
              <div className="space-y-2">
                <Label htmlFor="interestRate" className="text-sm font-medium">
                  Interest Rate (%)
                </Label>
                <Input
                  id="interestRate"
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="text-lg"
                />
                <Slider
                  value={[interestRate]}
                  onValueChange={(value) => setInterestRate(value[0])}
                  max={10}
                  min={3}
                  step={0.1}
                  className="mt-2"
                />
              </div>

              {/* Additional Costs */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="propertyTax" className="text-sm font-medium">
                    Property Tax (monthly)
                  </Label>
                  <Input
                    id="propertyTax"
                    type="number"
                    value={propertyTax}
                    onChange={(e) => setPropertyTax(Number(e.target.value))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="homeInsurance" className="text-sm font-medium">
                    Home Insurance (monthly)
                  </Label>
                  <Input
                    id="homeInsurance"
                    type="number"
                    value={homeInsurance}
                    onChange={(e) => setHomeInsurance(Number(e.target.value))}
                  />
                </div>
              </div>

              {downPaymentPercentage < 20 && (
                <div className="space-y-2">
                  <Label htmlFor="pmi" className="text-sm font-medium">
                    PMI (monthly)
                  </Label>
                  <Input id="pmi" type="number" value={pmi} onChange={(e) => setPmi(Number(e.target.value))} />
                </div>
              )}
            </CardContent>
          </Card>

          {/* Results */}
          <div className="space-y-6">
            {/* Monthly Payment */}
            <Card className="shadow-lg border-green-200">
              <CardContent className="p-8 text-center">
                <div className="mb-4">
                  <Home className="h-12 w-12 text-green-600 mx-auto mb-2" />
                  <h3 className="text-lg font-medium text-gray-600">Monthly Payment</h3>
                </div>
                <div className="text-4xl font-bold text-green-600 mb-2">{formatCurrency(monthlyPayment)}</div>
                <p className="text-sm text-gray-500">Principal, interest, taxes, and insurance</p>
              </CardContent>
            </Card>

            {/* Payment Breakdown */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Payment Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Principal & Interest</span>
                  <span className="font-semibold">{formatCurrency(principalAndInterest)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Property Tax</span>
                  <span className="font-semibold">{formatCurrency(propertyTax)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Home Insurance</span>
                  <span className="font-semibold">{formatCurrency(homeInsurance)}</span>
                </div>
                {downPaymentPercentage < 20 && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">PMI</span>
                    <span className="font-semibold">{formatCurrency(pmi)}</span>
                  </div>
                )}
                <hr />
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total Monthly Payment</span>
                  <span className="text-green-600">{formatCurrency(monthlyPayment)}</span>
                </div>
              </CardContent>
            </Card>

            {/* Loan Summary */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Loan Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Home Price</span>
                  <span className="font-semibold">{formatCurrency(homePrice)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Down Payment</span>
                  <span className="font-semibold">{formatCurrency(downPayment)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Loan Amount</span>
                  <span className="font-semibold">{formatCurrency(homePrice - downPayment)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Interest Rate</span>
                  <span className="font-semibold">{interestRate}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Loan Term</span>
                  <span className="font-semibold">{loanTerm} years</span>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="shadow-lg bg-green-50 border-green-200">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">Ready to get started?</h3>
                <p className="text-gray-600 mb-4">Get pre-approved in minutes with Better</p>
                <Link href="/start">
                  <Button className="bg-green-600 hover:bg-green-700 text-white w-full">Start your application</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
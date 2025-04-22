"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SiteHeader } from "@/components/site-header"
import { ImageWithAnimation } from "@/components/image-with-animation"
import {
  ArrowRight,
  Package,
  Truck,
  MapPin,
  Search,
  Calculator,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export default function ShippingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      {/* Hero Section */}
      <section className="w-full bg-gray-50 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Ship Anywhere in India with Ease
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Fast, reliable, and affordable shipping solutions for businesses and individuals across India.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#shipping-calculator"
                  onClick={() => document.getElementById("shipping-calculator").scrollIntoView({ behavior: "smooth" })}
                >
                  <Button className="bg-red-600 text-white hover:bg-red-700">
                    Get a Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#track-shipment">
                  <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                    Track Shipment
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <ImageWithAnimation
                src="/placeholder.svg?height=400&width=500"
                alt="Shipping Services"
                width={500}
                height={400}
                className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                animation="zoom-in"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Calculator Section */}
      <section id="shipping-calculator" className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-3 py-1 text-sm font-medium text-red-800">
                Shipping Calculator
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Calculate Shipping Cost</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get an instant quote for your shipment based on weight, dimensions, and destination.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-4xl rounded-xl border bg-white p-6 shadow-sm">
            <Tabs defaultValue="standard" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="standard">Standard Shipping</TabsTrigger>
                <TabsTrigger value="express">Express Shipping</TabsTrigger>
              </TabsList>
              <TabsContent value="standard" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Standard Shipping Calculator</CardTitle>
                    <CardDescription>Delivery within 3-5 business days across India</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="grid gap-6">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="from-location">From Location</Label>
                          <div className="relative">
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select city" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="delhi">Delhi</SelectItem>
                                <SelectItem value="mumbai">Mumbai</SelectItem>
                                <SelectItem value="bangalore">Bangalore</SelectItem>
                                <SelectItem value="chennai">Chennai</SelectItem>
                                <SelectItem value="kolkata">Kolkata</SelectItem>
                                <SelectItem value="hyderabad">Hyderabad</SelectItem>
                                <SelectItem value="pune">Pune</SelectItem>
                                <SelectItem value="ahmedabad">Ahmedabad</SelectItem>
                              </SelectContent>
                            </Select>
                            <Button variant="ghost" size="icon" className="absolute right-0 top-0">
                              <MapPin className="h-4 w-4" />
                              <span className="sr-only">Select on map</span>
                            </Button>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="to-location">To Location</Label>
                          <div className="relative">
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select city" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="delhi">Delhi</SelectItem>
                                <SelectItem value="mumbai">Mumbai</SelectItem>
                                <SelectItem value="bangalore">Bangalore</SelectItem>
                                <SelectItem value="chennai">Chennai</SelectItem>
                                <SelectItem value="kolkata">Kolkata</SelectItem>
                                <SelectItem value="hyderabad">Hyderabad</SelectItem>
                                <SelectItem value="pune">Pune</SelectItem>
                                <SelectItem value="ahmedabad">Ahmedabad</SelectItem>
                              </SelectContent>
                            </Select>
                            <Button variant="ghost" size="icon" className="absolute right-0 top-0">
                              <MapPin className="h-4 w-4" />
                              <span className="sr-only">Select on map</span>
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="from-address">From Address</Label>
                          <Textarea id="from-address" placeholder="Enter complete address" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="to-address">To Address</Label>
                          <Textarea id="to-address" placeholder="Enter complete address" />
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="from-pincode">From PIN Code</Label>
                          <Input id="from-pincode" placeholder="e.g., 110001" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="to-pincode">To PIN Code</Label>
                          <Input id="to-pincode" placeholder="e.g., 400001" />
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="weight">Package Weight (kg)</Label>
                          <Input id="weight" type="number" min="0.1" step="0.1" placeholder="Enter weight" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="package-type">Package Type</Label>
                          <Select>
                            <SelectTrigger id="package-type">
                              <SelectValue placeholder="Select package type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="document">Document</SelectItem>
                              <SelectItem value="parcel">Parcel</SelectItem>
                              <SelectItem value="fragile">Fragile</SelectItem>
                              <SelectItem value="heavy">Heavy Goods</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-3">
                        <div className="space-y-2">
                          <Label htmlFor="length">Length (cm)</Label>
                          <Input id="length" type="number" min="1" placeholder="Length" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="width">Width (cm)</Label>
                          <Input id="width" type="number" min="1" placeholder="Width" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="height">Height (cm)</Label>
                          <Input id="height" type="number" min="1" placeholder="Height" />
                        </div>
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start space-y-4">
                    <Button className="w-full bg-red-600 text-white hover:bg-red-700">
                      <Calculator className="mr-2 h-4 w-4" />
                      Calculate Shipping Cost
                    </Button>

                    <div className="w-full rounded-lg bg-gray-50 p-4">
                      <div className="mb-2 text-sm font-medium text-gray-500">Estimated Cost</div>
                      <div className="text-2xl font-bold text-red-600">₹0.00</div>
                      <div className="mt-2 text-xs text-gray-500">
                        *Final cost may vary based on actual weight and dimensions
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="express" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Express Shipping Calculator</CardTitle>
                    <CardDescription>Priority delivery within 24-48 hours to major cities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="grid gap-6">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="from-location-express">From Location</Label>
                          <div className="relative">
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select city" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="delhi">Delhi</SelectItem>
                                <SelectItem value="mumbai">Mumbai</SelectItem>
                                <SelectItem value="bangalore">Bangalore</SelectItem>
                                <SelectItem value="chennai">Chennai</SelectItem>
                                <SelectItem value="kolkata">Kolkata</SelectItem>
                                <SelectItem value="hyderabad">Hyderabad</SelectItem>
                                <SelectItem value="pune">Pune</SelectItem>
                                <SelectItem value="ahmedabad">Ahmedabad</SelectItem>
                              </SelectContent>
                            </Select>
                            <Button variant="ghost" size="icon" className="absolute right-0 top-0">
                              <MapPin className="h-4 w-4" />
                              <span className="sr-only">Select on map</span>
                            </Button>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="to-location-express">To Location</Label>
                          <div className="relative">
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select city" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="delhi">Delhi</SelectItem>
                                <SelectItem value="mumbai">Mumbai</SelectItem>
                                <SelectItem value="bangalore">Bangalore</SelectItem>
                                <SelectItem value="chennai">Chennai</SelectItem>
                                <SelectItem value="kolkata">Kolkata</SelectItem>
                                <SelectItem value="hyderabad">Hyderabad</SelectItem>
                                <SelectItem value="pune">Pune</SelectItem>
                                <SelectItem value="ahmedabad">Ahmedabad</SelectItem>
                              </SelectContent>
                            </Select>
                            <Button variant="ghost" size="icon" className="absolute right-0 top-0">
                              <MapPin className="h-4 w-4" />
                              <span className="sr-only">Select on map</span>
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="from-address-express">From Address</Label>
                          <Textarea id="from-address-express" placeholder="Enter complete address" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="to-address-express">To Address</Label>
                          <Textarea id="to-address-express" placeholder="Enter complete address" />
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="from-pincode-express">From PIN Code</Label>
                          <Input id="from-pincode-express" placeholder="e.g., 110001" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="to-pincode-express">To PIN Code</Label>
                          <Input id="to-pincode-express" placeholder="e.g., 400001" />
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="weight-express">Package Weight (kg)</Label>
                          <Input id="weight-express" type="number" min="0.1" step="0.1" placeholder="Enter weight" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="package-type-express">Package Type</Label>
                          <Select>
                            <SelectTrigger id="package-type-express">
                              <SelectValue placeholder="Select package type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="document">Document</SelectItem>
                              <SelectItem value="parcel">Parcel</SelectItem>
                              <SelectItem value="fragile">Fragile</SelectItem>
                              <SelectItem value="heavy">Heavy Goods</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-3">
                        <div className="space-y-2">
                          <Label htmlFor="length-express">Length (cm)</Label>
                          <Input id="length-express" type="number" min="1" placeholder="Length" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="width-express">Width (cm)</Label>
                          <Input id="width-express" type="number" min="1" placeholder="Width" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="height-express">Height (cm)</Label>
                          <Input id="height-express" type="number" min="1" placeholder="Height" />
                        </div>
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start space-y-4">
                    <Button className="w-full bg-red-600 text-white hover:bg-red-700">
                      <Calculator className="mr-2 h-4 w-4" />
                      Calculate Express Shipping Cost
                    </Button>

                    <div className="w-full rounded-lg bg-gray-50 p-4">
                      <div className="mb-2 text-sm font-medium text-gray-500">Estimated Cost</div>
                      <div className="text-2xl font-bold text-red-600">₹0.00</div>
                      <div className="mt-2 text-xs text-gray-500">
                        *Express shipping available only between major cities
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Track Shipment Section */}
      <section id="track-shipment" className="w-full bg-gray-50 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-3 py-1 text-sm font-medium text-red-800">
                Track & Trace
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Track Your Shipment</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Real-time tracking for all your shipments across India.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-3xl">
            <div className="rounded-xl border bg-white p-6 shadow-sm">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="tracking-number">Tracking Number</Label>
                  <div className="flex gap-2">
                    <Input id="tracking-number" placeholder="Enter your tracking number" className="flex-1" />
                    <Button className="bg-red-600 text-white hover:bg-red-700">
                      <Search className="mr-2 h-4 w-4" />
                      Track
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500">
                    Enter the tracking number provided in your shipping confirmation email.
                  </p>
                </div>

                <div className="rounded-lg bg-gray-50 p-4">
                  <div className="text-center text-sm text-gray-500">
                    Enter your tracking number above to see the status of your shipment.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Services Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-3 py-1 text-sm font-medium text-red-800">
                Our Services
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Shipping Solutions</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Tailored shipping services to meet your specific needs.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-3">
            <div className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                <Package className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Standard Delivery</h3>
              <p className="mb-4 text-gray-500">
                Cost-effective shipping solution with delivery within 3-5 business days across India.
              </p>
              <ul className="mb-4 space-y-2 text-sm text-gray-500">
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-red-600"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span>Parcels up to 20kg</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-red-600"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span>Real-time tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-red-600"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span>Insurance up to ₹10,000</span>
                </li>
              </ul>
              <Link href="#shipping-calculator">
                <Button className="w-full bg-red-600 text-white hover:bg-red-700">Get a Quote</Button>
              </Link>
            </div>

            <div className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                <Truck className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Express Delivery</h3>
              <p className="mb-4 text-gray-500">
                Priority shipping with delivery within 24-48 hours to major cities across India.
              </p>
              <ul className="mb-4 space-y-2 text-sm text-gray-500">
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-red-600"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span>Parcels up to 15kg</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-red-600"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span>Priority handling</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-red-600"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span>Insurance up to ₹25,000</span>
                </li>
              </ul>
              <Link href="#shipping-calculator">
                <Button className="w-full bg-red-600 text-white hover:bg-red-700">Get a Quote</Button>
              </Link>
            </div>

            <div className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-red-600"
                >
                  <rect width="16" height="13" x="4" y="5" rx="2"></rect>
                  <path d="M16 2v3"></path>
                  <path d="M8 2v3"></path>
                  <path d="M4 10h16"></path>
                  <path d="M7 15h.01"></path>
                  <path d="M11 15h.01"></path>
                  <path d="M15 15h.01"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Scheduled Delivery</h3>
              <p className="mb-4 text-gray-500">Plan your deliveries in advance with our scheduled delivery service.</p>
              <ul className="mb-4 space-y-2 text-sm text-gray-500">
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-red-600"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span>Choose your delivery date</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-red-600"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span>Time-slot selection</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-red-600"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span>Insurance up to ₹15,000</span>
                </li>
              </ul>
              <Link href="#shipping-calculator">
                <Button className="w-full bg-red-600 text-white hover:bg-red-700">Get a Quote</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-gray-200">
        <div className="container mx-auto px-4 py-12 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="rounded-md bg-red-600 p-1">
                  <Package className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-bold">Viji Parcel Service</h3>
              </div>
              <p className="text-sm text-gray-400">
                Revolutionizing logistics across India with cutting-edge technology and nationwide network.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/business" className="text-gray-400 hover:text-white">
                    Business
                  </Link>
                </li>
                <li>
                  <Link href="/shipping" className="text-gray-400 hover:text-white">
                    Shipping
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-red-500" />
                  <span>504/2-B, New Seerapalayam Village, Pollachi Main Road, Eachanari (Po), Coimbatore - 641021</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-red-500" />
                  <span>+91 90033 65000</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-red-500" />
                  <span>info@arcglobal.co.in</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} ARC Parcel Service Pvt Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import KeyPartners from "./Components/banner"
import HeroSection from "./Components/hero-section"
import FeaturesSection from "./Components/features-section"

interface Job {
  title: string
  specialty: string
  location: string
  salary: string
}

interface JobCategory {
  [key: string]: Job[]
}

interface Category {
  title: string
  image: string
}

export default function Component() {
  const [activeTab, setActiveTab] = useState("PHYSICIAN")

  const tabs = [
    "PHYSICIAN",
    "CRNA",
    "NURSE PRACTITIONER",
    "PHYSICIAN ASSISTANT",
    "ANESTHESIOLOGIST ASSISTANT"
  ]

  const jobsByCategory: JobCategory = {
    PHYSICIAN: [
      {
        title: "Locum Physician Gastroenterology Job",
        specialty: "Gastroenterology",
        location: "Gaborone, BT",
        salary: "Tsh4,000/hr - $45/hr"
      },
      {
        title: "Locum Physician Obstetrics/Gynecology Job",
        specialty: "Obstetrics/Gynecology",
        location: "Adis Ababa, ET",
        salary: "$49/hr - $40/hr"
      },
    ],
    CRNA: [
      {
        title: "CRNA Anesthesia Job",
        specialty: "Anesthesia",
        location: "Nairobi, KE",
        salary: "$100/hr - $120/hr"
      },
      {
        title: "CRNA Pain Management Job",
        specialty: "Pain Management",
        location: "Kampala, UG",
        salary: "$90/hr - $110/hr"
      },
    ],
    "NURSE PRACTITIONER": [
      {
        title: "Family Nurse Practitioner Job",
        specialty: "Family Practice",
        location: "Dar es Salaam, TZ",
        salary: "$70/hr - $85/hr"
      },
      {
        title: "Psychiatric Nurse Practitioner Job",
        specialty: "Psychiatry",
        location: "Accra, GH",
        salary: "$80/hr - $95/hr"
      },
    ],
    "PHYSICIAN ASSISTANT": [
      {
        title: "Emergency Medicine PA Job",
        specialty: "Emergency Medicine",
        location: "Lagos, NG",
        salary: "$75/hr - $90/hr"
      },
      {
        title: "Orthopedic Surgery PA Job",
        specialty: "Orthopedics",
        location: "Kigali, RW",
        salary: "$80/hr - $95/hr"
      },
    ],
    "ANESTHESIOLOGIST ASSISTANT": [
      {
        title: "Anesthesiologist Assistant Job",
        specialty: "Anesthesiology",
        location: "Lusaka, ZM",
        salary: "$90/hr - $110/hr"
      },
      {
        title: "Pediatric Anesthesiologist Assistant Job",
        specialty: "Pediatric Anesthesiology",
        location: "Maputo, MZ",
        salary: "$95/hr - $115/hr"
      },
    ],
  }

  const categories: Category[] = [
    { title: "Search physician jobs", image: "/physician.webp?height=300&width=400" },
    { title: "Search CRNA jobs", image: "/nurse.webp?height=300&width=400" },
    { title: "Search PA jobs", image: "/doctor.avif?height=300&width=400" },
    { title: "Search NP jobs", image: "/therapy.webp?height=300&width=400" },
    { title: "Search anesthesiologist assistant jobs", image: "/assistant.webp?height=300&width=400" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 py-12">
            <h2 className="text-4xl font-bold text-center mb-8 text-[#21897E]">
              Featured Locum Tenens Jobs
            </h2>
            
            <div className="relative flex overflow-x-auto mb-8">
              <div className="flex">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 text-sm font-medium whitespace-nowrap relative transition-colors
                      ${activeTab === tab 
                        ? 'text-[#21897E]' 
                        : 'text-gray-600 hover:text-[#21897E]'
                      }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#21897E] rounded-t-full">
                        <div 
                          className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-[#21897E]"
                          style={{
                            boxShadow: '0 0 8px rgba(33, 137, 126, 0.4)',
                          }}
                        />
                      </div>
                    )}
                  </button>
                ))}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-200" />
            </div>

            <div className="space-y-4">
              {jobsByCategory[activeTab].map((job, index) => (
                <Card key={index} className="p-6 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-center border-0 border-b">
                  <div className="space-y-1">
                    <h3 className="font-bold text-gray-900">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#21897E]">
                          <path d="M20 6H16V4C16 2.89 15.11 2 14 2H10C8.89 2 8 2.89 8 4V6H4C2.89 6 2 6.89 2 8V19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6ZM10 4H14V6H10V4Z" />
                        </svg>
                        {job.specialty}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-[#21897E]" />
                        {job.location}
                      </div>
                    </div>
                    <div className="font-medium text-gray-900">{job.salary}</div>
                  </div>
                  <Button 
                    className="bg-[#40C4B2] hover:bg-[#21897E] text-white px-8 rounded-full text-sm font-medium"
                  >
                    APPLY
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <KeyPartners />
        <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-50">
          <div className="container">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {categories.map((category, index) => (
                <Link 
                  key={index} 
                  href="#" 
                  className="group relative overflow-hidden rounded-lg transition-transform hover:scale-105"
                >
                  <Image
                    src={category.image}
                    alt={category.title}
                    width={400}
                    height={300}
                    className="aspect-[4/3] object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 transition-opacity group-hover:bg-black/60" />
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <h3 className="text-center text-xl font-bold text-white transition-transform group-hover:scale-105">
                      {category.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
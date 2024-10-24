"use client";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";

export default function Faq() {
  return (
    <div className="max-w-4xl mx-auto px-4   space-y-5 text-start">
      <div className="w-full max-w-7xl mx-auto px-4 ">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-8">
            {" "}
            Frequently Asked Questions
          </h1>
          <p className="text-lg mb-6">
            Got questions about our firearms, accessories, or services?
            We&apos;ve got the answers! Check out our most frequently asked
            questions below.
          </p>
          <p className="text-lg">
            Still need help? Feel free to reach out on our contact page, and
            we&apos;ll be happy to assist you further.
          </p>
        </div>
      </div>

      {/* Required Items */}
      <Card variant="bordered">
        <CardHeader>
          <h3 className="text-xl font-semibold">
            Required Items when Buying a Firearm
          </h3>
        </CardHeader>
        <div className="p-4">
          <p className="mt-2">
            <strong>Note:</strong> All items must be current:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              Valid CA ID or CA Driver&apos;s License (If your CA DL says
              &quot;Federal Limits Apply,&quot; please bring a passport or a
              birth certificate).
            </li>
            <li>2nd Proof of Residence (handguns only).</li>
            <li>Firearms Safety Certificate (FSC) or Valid Exemption.</li>
          </ul>
        </div>
      </Card>

      {/* Types of Proof of Residence */}
      <Card variant="bordered">
        <CardHeader>
          <h3 className="text-xl font-semibold">Types of Proof of Residence</h3>
        </CardHeader>
        <div className="p-4">
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>CA DMV Vehicle Registration</li>
            <li>Utility Bill (mobile phone bills do not count)</li>
            <li>Residential Lease Agreement</li>
            <li>CCW/Guard Card</li>
          </ul>
        </div>
      </Card>

      {/* Basic Requirements */}
      <Card variant="bordered">
        <div className="p-4">
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Minimum age is 21 years or older</li>
            <li>
              United States Citizen or Resident Alien with Greencard or I-94
            </li>
            <li>No Felonies or violent misdemeanors on record</li>
            <li>
              Must not be an unlawful user or addicted to a controlled substance
              (Federal)
            </li>
          </ul>
        </div>
      </Card>

      {/* Fee Schedule */}
      <Card variant="bordered">
        <CardHeader>
          <h3 className="text-xl font-semibold">Fee Schedule</h3>
        </CardHeader>
        <div className="p-4">
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>DROS: $37.19</li>
            <li>PPT: $10 per firearm</li>
            <li>Ammunition Background Check: $1 (+$19 if not on AFS system)</li>
            <li>FCS Test: $25 (1 Free Retry)</li>
          </ul>
        </div>
      </Card>
    </div>
  );
}

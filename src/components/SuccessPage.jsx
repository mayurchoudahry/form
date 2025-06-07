"use client"
import React from "react";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { CheckCircle } from "lucide-react"

const countries = [
  { code: "IN", name: "India", dialCode: "+91" },
  { code: "US", name: "United States", dialCode: "+1" },
  { code: "UK", name: "United Kingdom", dialCode: "+44" },
  { code: "CA", name: "Canada", dialCode: "+1" },
  { code: "AU", name: "Australia", dialCode: "+61" },
]

const SuccessPage = () => {
  const navigate = useNavigate()
  const [submittedData, setSubmittedData] = useState(null)

  useEffect(() => {
    const data = localStorage.getItem("formSubmissionData")
    if (data) {
      setSubmittedData(JSON.parse(data))
    } else {
      // Redirect to form if no data found
      navigate("/")
    }
  }, [navigate])

  const handleBackToForm = () => {
    localStorage.removeItem("formSubmissionData")
    navigate("/")
  }

  const getCountryName = (code) => {
    return countries.find((c) => c.code === code)?.name || code
  }

  if (!submittedData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-md">
          <div className="px-6 py-4 border-b border-gray-200 text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <h1 className="text-2xl font-bold text-green-600">Registration Successful!</h1>
            <p className="text-gray-600 mt-2">Thank you for your registration. Here are the details you submitted:</p>
          </div>
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Personal Information</h3>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-medium">First Name:</span> {submittedData.firstName}
                    </p>
                    <p>
                      <span className="font-medium">Last Name:</span> {submittedData.lastName}
                    </p>
                    <p>
                      <span className="font-medium">Username:</span> {submittedData.username}
                    </p>
                    <p>
                      <span className="font-medium">Email:</span> {submittedData.email}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Contact Information</h3>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-medium">Phone:</span> {submittedData.countryCode}{" "}
                      {submittedData.phoneNumber}
                    </p>
                    <p>
                      <span className="font-medium">Country:</span> {getCountryName(submittedData.country)}
                    </p>
                    <p>
                      <span className="font-medium">City:</span> {submittedData.city}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Account Security</h3>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-medium">Password:</span> {"*".repeat(submittedData.password.length)}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Identity Documents</h3>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-medium">PAN Number:</span> {submittedData.panNumber}
                    </p>
                    <p>
                      <span className="font-medium">Aadhar Number:</span>{" "}
                      {submittedData.aadharNumber.replace(/(\d{4})(\d{4})(\d{4})/, "$1 $2 $3")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleBackToForm}
                  className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Register Another User
                </button>
                <button
                  onClick={() => window.print()}
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Print Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuccessPage

import React, { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import countryList from "react-select-country-list";
import CountryFlag from "react-country-flag";

const ZAPIER_WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/123456/abcde";

function madridTimestamp() {
  return new Date().toLocaleString("en-US", {
    timeZone: "Europe/Madrid",
    month: "long",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

function Form() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    eventName: "ARC & 4BiddenKnowledge",
    timestamp: madridTimestamp(),
    email: "",
    phone: "",
    residence: "",
    goals: "",
    cryptoExperience: "",
    coachingInvest: "",
    cryptoInvest: "",
    referral: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const countryOptions = useMemo(() => countryList().getData(), []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    try {
      const res = await fetch(ZAPIER_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error(`Zapier responded ${res.status}`);

      navigate("/thank-you");
    } catch (err) {
      console.error(err);
      alert(
        "Sorry, something went wrong while sending your application. Please try again."
      );
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-neutral-800 min-h-screen flex flex-col">
      {/* NAV / LOGO BAR */}
      <header className="bg-brand-800 py-4 px-4">
        <div className="container mx-auto max-w-6xl flex justify-center">
          <Link to="/" className="inline-block">
            <img
              src={process.env.PUBLIC_URL + "/images/arc-logo.png"}
              alt="ARCrypto Logo"
              className="h-20 w-auto filter drop-shadow-lg"
            />
          </Link>
        </div>
      </header>

      {/* HERO BACKGROUND */}
      <section className="flex-grow bg-gradient-to-r from-brand-800 to-brand-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-white rounded-full filter blur-3xl opacity-10 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full filter blur-3xl opacity-10 -translate-x-1/3 translate-y-1/3"></div>

        <div className="container mx-auto max-w-3xl px-6 py-16 md:py-24 relative z-10">
          <div className="bg-white rounded-xl shadow-2xl p-10 md:p-14">
            <h1 className="text-3xl md:text-4xl font-headline font-bold text-brand-600 mb-8 text-center">
              Start Your Wealth Plan Today
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-700">
                  Phone number (with country code)
                </label>
                <PhoneInput
                  country={"us"}
                  enableSearch
                  disableCountryCode={false}
                  value={formData.phone}
                  onChange={(value) =>
                    setFormData((prev) => ({ ...prev, phone: `+${value}` }))
                  }
                  inputProps={{ name: "phone", required: true, id: "phone" }}
                  containerClass="mt-1"
                  inputClass="w-full !bg-white !border-neutral-300 !rounded-md !pl-14"
                  dropdownClass="!bg-white !text-black"
                />
              </div>

              {/* Residence */}
              <div>
                <label htmlFor="residence" className="block text-sm font-medium text-neutral-700">
                  Country of residence
                </label>
                <Select
                  id="residence"
                  name="residence"
                  options={countryOptions}
                  placeholder="Select country"
                  value={countryOptions.find((c) => c.label === formData.residence) || null}
                  onChange={(selected) =>
                    setFormData((prev) => ({ ...prev, residence: selected.label }))
                  }
                  isSearchable
                  formatOptionLabel={(country) => (
                    <div className="flex items-center">
                      <CountryFlag
                        countryCode={country.value}
                        svg
                        style={{ width: "1.5em", height: "1.5em", marginRight: "0.5em" }}
                      />
                      <span>{country.label}</span>
                    </div>
                  )}
                  className="mt-1"
                  classNamePrefix="select"
                  required
                />
              </div>

              {/* Goals */}
              <div>
                <label htmlFor="goals" className="block text-sm font-medium text-neutral-700">
                  Primary investment goals
                </label>
                <input
                  id="goals"
                  name="goals"
                  type="text"
                  required
                  value={formData.goals}
                  onChange={(e) => setFormData((prev) => ({ ...prev, goals: e.target.value }))}
                  className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                />
              </div>

              {/* Crypto Experience */}
              <div>
                <label htmlFor="cryptoExperience" className="block text-sm font-medium text-neutral-700">
                  Previous crypto-investing experience
                </label>
                <textarea
                  id="cryptoExperience"
                  name="cryptoExperience"
                  rows={3}
                  required
                  value={formData.cryptoExperience}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, cryptoExperience: e.target.value }))
                  }
                  className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                />
              </div>

              {/* Coaching Investment */}
              <div>
                <label htmlFor="coachingInvest" className="block text-sm font-medium text-neutral-700">
                  Amount invested in coaching / education (last 12 months)
                </label>
                <select
                  id="coachingInvest"
                  name="coachingInvest"
                  required
                  value={formData.coachingInvest}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, coachingInvest: e.target.value }))
                  }
                  className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                >
                  <option value="">Select range</option>
                  <option value="$0 – $999 USD">$0 – $999 USD</option>
                  <option value="$1,000 – $4,999 USD">$1,000 – $4,999 USD</option>
                  <option value="$5,000 – $9,999 USD">$5,000 – $9,999 USD</option>
                  <option value="$10,000+ USD">$10,000+ USD</option>
                </select>
              </div>

              {/* Crypto Investment */}
              <div>
                <label htmlFor="cryptoInvest" className="block text-sm font-medium text-neutral-700">
                  Amount you plan to invest in crypto
                </label>
                <select
                  id="cryptoInvest"
                  name="cryptoInvest"
                  required
                  value={formData.cryptoInvest}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, cryptoInvest: e.target.value }))
                  }
                  className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                >
                  <option value="">Select range</option>
                  <option value="$0 – $999 USD">$0 – $999 USD</option>
                  <option value="$1,000 – $4,999 USD">$1,000 – $4,999 USD</option>
                  <option value="$5,000 – $9,999 USD">$5,000 – $9,999 USD</option>
                  <option value="$10,000+ USD">$10,000+ USD</option>
                </select>
              </div>

              {/* Referral */}
              <div>
                <label htmlFor="referral" className="block text-sm font-medium text-neutral-700">
                  Who referred you to ARC?
                </label>
                <input
                  id="referral"
                  name="referral"
                  type="text"
                  required
                  value={formData.referral}
                  onChange={(e) => setFormData((prev) => ({ ...prev, referral: e.target.value }))}
                  className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
                />
              </div>

              {/* Submit */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center px-10 py-3 rounded-full font-bold bg-brand-600 text-white hover:bg-brand-700 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? "Submitting…" : "Submit Application"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Form;

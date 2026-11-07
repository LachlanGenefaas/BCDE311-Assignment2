import { useState } from "react";
import type { FormEvent } from "react";
import Header from "./Header.tsx";
import PageFooter from "./PageFooter.tsx";

interface DonatePageProps {
  headerImage: string;
  footerImage: string;
}

export default function DonatePage({
  headerImage,
  footerImage,
}: DonatePageProps) {
  const [submitted, setSubmitted] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-white">
      <Header image={headerImage} />
      <main className="donate-page">
        <div className="donate-heading">
          <h1>Donate</h1>
          <p>
            Your donation helps fund information, awareness programmes and
            support services for people affected by prostate cancer.
          </p>
        </div>

        <form className="donation-form" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Choose a donation amount</legend>
            <div className="donation-amounts">
              {[25, 50, 100, 250].map((amount) => (
                <label className="donation-option" key={amount}>
                  <input
                    type="radio"
                    name="amount"
                    value={amount}
                    required
                    onChange={() => setSelectedAmount(String(amount))}
                  />
                  <span>${amount}</span>
                </label>
              ))}
              <label className="donation-option donation-custom">
                <input
                  type="radio"
                  name="amount"
                  value="custom"
                  required
                  onChange={() => setSelectedAmount("custom")}
                />
                <span>Other</span>
              </label>
            </div>
            <label className="donation-field donation-custom-field">
              <span>Custom amount</span>
              <div className="currency-input">
                <span>$</span>
                <input
                  type="number"
                  name="customAmount"
                  min="1"
                  step="1"
                  placeholder="Enter amount"
                  disabled={selectedAmount !== "custom"}
                  required={selectedAmount === "custom"}
                />
              </div>
            </label>
          </fieldset>

          <fieldset>
            <legend>Your details</legend>
            <div className="donation-details-grid">
              <label className="donation-field">
                <span>First name</span>
                <input type="text" name="firstName" required />
              </label>
              <label className="donation-field">
                <span>Last name</span>
                <input type="text" name="lastName" required />
              </label>
              <label className="donation-field donation-full-width">
                <span>Email address</span>
                <input type="email" name="email" required />
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend>Donation frequency</legend>
            <div className="donation-frequency">
              <label>
                <input
                  type="radio"
                  name="frequency"
                  value="once"
                  defaultChecked
                />
                <span>One-time</span>
              </label>
              <label>
                <input type="radio" name="frequency" value="monthly" />
                <span>Monthly</span>
              </label>
            </div>
          </fieldset>

          <p className="donation-note">
            This is a demonstration form. No payment will be processed and no
            payment information is collected.
          </p>

          {submitted && (
            <div className="donation-success">
              Thank you for your support.
            </div>
          )}

          <button className="donation-submit" type="submit">
            Continue with donation
          </button>
        </form>
      </main>
      <PageFooter image={footerImage} />
    </div>
  );
}

import { useMemo, useState } from "react";
import { Calculator } from "lucide-react";
import { whatsappLink } from "@/lib/site-config";

export function EMI() {
  const [price, setPrice] = useState(210000);
  const [down, setDown] = useState(30000);
  const [months, setMonths] = useState(36);
  const rate = 9.5;

  const emi = useMemo(() => {
    const p = Math.max(price - down, 0);
    const r = rate / 12 / 100;
    if (p === 0) return 0;
    return Math.round((p * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1));
  }, [price, down, months]);

  return (
    <section id="emi" className="bg-background py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1750px] px-6 xl:px-12">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
              Finance made simple
            </h2>
            <div className="mt-4 h-0.5 w-16 bg-honda-red" />
            <p className="mt-6 max-w-md text-muted-foreground">
              Estimate your monthly instalment in seconds. Kanade Honda works with leading lenders
              to offer approvals in under 30 minutes.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-foreground">
              {[
                "Interest from 9.5% p.a.",
                "Loan tenure up to 48 months",
                "Minimal documentation",
                "On-road insurance assistance",
              ].map((x) => (
                <li key={x} className="flex items-center gap-3 border-b border-border pb-3">
                  <span className="size-1.5 bg-honda-red" /> {x}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-surface p-7 shadow-card md:p-10">
            <div className="mb-8 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-honda-red">
              <Calculator className="size-4" /> EMI Calculator
            </div>

            <Slider
              label="Ex-showroom price"
              value={price}
              min={60000}
              max={1800000}
              step={5000}
              onChange={setPrice}
              format={(v) => `₹${v.toLocaleString("en-IN")}`}
            />
            <Slider
              label="Down payment"
              value={down}
              min={0}
              max={Math.max(price - 10000, 0)}
              step={5000}
              onChange={setDown}
              format={(v) => `₹${v.toLocaleString("en-IN")}`}
            />
            <Slider
              label="Tenure"
              value={months}
              min={12}
              max={48}
              step={6}
              onChange={setMonths}
              format={(v) => `${v} months`}
            />

            <div className="mt-8 flex flex-wrap items-end justify-between gap-4 border-t border-border pt-6">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Estimated EMI
                </div>
                <div className="font-display text-4xl font-extrabold text-foreground">
                  ₹{emi.toLocaleString("en-IN")}
                  <span className="ml-1 text-base font-medium text-muted-foreground">/mo</span>
                </div>
              </div>
              <a
                href={whatsappLink(
                  `Hi Kanade Honda, I'd like to apply for finance. Ex-showroom price: ₹${price.toLocaleString("en-IN")}, down payment: ₹${down.toLocaleString("en-IN")}, tenure: ${months} months, estimated EMI: ₹${emi.toLocaleString("en-IN")}/mo.`,
                )}
                target="_blank"
                rel="noreferrer noopener"
                className="bg-honda-red px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition hover:brightness-110"
              >
                Apply for finance
              </a>
            </div>
            <p className="mt-5 text-center text-[11px] leading-relaxed text-muted-foreground">
              * EMI shown is an estimate. Actual ex-showroom price, interest rate and on-road costs
              may vary according to market conditions and lender policies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  format,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  format: (v: number) => string;
}) {
  return (
    <div className="mb-7">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm text-muted-foreground">{label}</span>
        <span className="font-display text-sm font-bold text-foreground">{format(value)}</span>
      </div>
      <input
        type="range"
        aria-label={label}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-1 w-full cursor-pointer appearance-none bg-border accent-[color:var(--honda-red)]"
      />
    </div>
  );
}

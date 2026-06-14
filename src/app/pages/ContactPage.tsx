import { useState } from "react";
import { Link } from "react-router";
import { Navbar } from "../components/shared/Navbar";
import svgPaths from "../../imports/HeroSobre/svg-4z82zqaibu";
import { gridBase } from "../components/code/constants";

/* ─── Icons ─────────────────────────────────────────────────────────────── */

function PhoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M20.97 16.33c.04.27-.06.55-.28.74l-2.38 2.36a1 1 0 0 1-.71.29c-.1 0-.2-.01-.3-.04a17.9 17.9 0 0 1-7.44-3.97A17.74 17.74 0 0 1 5.96 9.1a17.75 17.75 0 0 1-.98-2.52.99.99 0 0 1 .25-.96L7.6 3.25A.86.86 0 0 1 8.24 3c.26 0 .5.1.68.27l3.1 3.08c.39.38.39 1 0 1.4L10.7 9.07a11.8 11.8 0 0 0 1.47 2.2 11.87 11.87 0 0 0 2.23 1.99l1.3-1.29c.37-.38.99-.38 1.37 0l3.11 3.08c.2.2.29.48.8.28z" stroke="#FFBD24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M2.75 4.4h16.5c.76 0 1.38.62 1.38 1.38v10.46c0 .76-.62 1.38-1.38 1.38H2.75c-.76 0-1.38-.62-1.38-1.38V5.77c0-.76.62-1.37 1.38-1.37z" stroke="#FFBD24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20.62 5.77l-9.62 6.87L1.38 5.77" stroke="#FFBD24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <div className="relative size-[1.375rem]">
      <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 25 25">
        <path d={svgPaths.p1c760700} fill="#FFBD24" />
      </svg>
    </div>
  );
}

function ChevronIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─── Page header ───────────────────────────────────────────────────────── */

function ContactHeader() {
  return (
    <div
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#ffd324] to-[#e9a402]"
    >
      <Navbar variant="page" />

      <div className="px-[15.625rem] pt-[3.75rem] pb-[5rem]">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="mb-[2rem]">
          <ol className="flex items-center gap-2 font-['Montserrat',sans-serif] text-[0.875rem] text-[#1a0e04]">
            <li>
              <Link to="/" className="hover:opacity-70 transition-opacity">Início</Link>
            </li>
            <li className="flex items-center opacity-60">
              <ChevronIcon />
            </li>
            <li className="font-bold">Contato</li>
          </ol>
        </nav>

        {/* Title + support text */}
        <div className="flex flex-col gap-[1.25rem] max-w-[43.75rem]">
          <div>
            <p
              className="font-['Montserrat',sans-serif] font-medium text-[#1a0e04] tracking-[0.0975rem] uppercase text-[1.375rem] leading-[1.2]"
            >
              Fale com a gente
            </p>
            <div className="mt-[0.75rem]">
              <div className="inline-block rotate-[-0.8deg] skew-x-[0.29deg]">
                <div className="relative bg-[#171717] flex items-center justify-center overflow-hidden px-[1.5rem] py-[0.75rem] rounded-[0.625rem]">
                  <p
                    className="font-['Montserrat',sans-serif] font-black text-[#fafafa] uppercase tracking-[0.05rem] whitespace-nowrap text-[clamp(2.5rem,3.75vw,4.5rem)] leading-none"
                  >
                    Vamos conversar!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p
            className="font-['Montserrat',sans-serif] font-normal text-[#4a3728] text-[1.125rem] leading-[1.6]"
          >
            Quer fazer um pedido, se tornar um parceiro ou simplesmente saber mais sobre o Nosso Chope? Preencha o formulário e nossa equipe entrará em contato em breve.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Form ──────────────────────────────────────────────────────────────── */

interface FormData {
  name: string;
  phone: string;
  city: string;
  email: string;
  age: string;
  triedBefore: string;
}

const INPUT_BASE =
  "w-full bg-white border border-[#d1d5db] rounded-[0.625rem] px-[1rem] py-[0.75rem] font-['Montserrat',sans-serif] text-[0.9375rem] text-[#171717] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#ffbd24] focus:border-[#ffbd24] transition-all";

const LABEL_BASE =
  "block font-['Montserrat',sans-serif] font-semibold text-[0.875rem] text-[#1a0e04] uppercase tracking-[0.0375rem] mb-[0.5rem]";

function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    city: "",
    email: "",
    age: "",
    triedBefore: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-[1.5rem] py-[4rem]">
        <div
          className="flex items-center justify-center rounded-full bg-[#ffbd24] w-[5rem] h-[5rem]"
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M8 20l8 8L32 12" stroke="#171717" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="text-center">
          <p className="font-['Montserrat',sans-serif] font-black text-[#171717] text-[1.75rem] mb-[0.125rem]">
            Mensagem enviada!
          </p>
          <p className="font-['Montserrat',sans-serif] font-normal text-[#4a3728] text-[1rem] max-w-[25rem]">
            Obrigado pelo seu contato. Nossa equipe retornará em breve.
          </p>
        </div>
        <button
          onClick={() => setSubmitted(false)}
          className="inline-flex items-center gap-2 bg-[#f9cc0a] text-[#1a0e04] px-[1.5rem] py-[0.75rem] rounded-[1.875rem] font-['Montserrat',sans-serif] font-bold text-[0.9375rem] cursor-pointer select-none btn-shimmer btn-ripple-container
            transition-all duration-200 hover:-translate-y-[0.1875rem] hover:shadow-[0_0.625rem_2rem_rgba(249,204,10,0.55)] hover:brightness-[1.04]
            active:translate-y-[0.0625rem] active:scale-[0.98] ease-[cubic-bezier(0.34,1.56,0.64,1)]"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-5">
        {/* Nome completo */}
        <div className="col-span-2">
          <label htmlFor="name" className={LABEL_BASE}>Nome completo</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Seu nome completo"
            value={form.name}
            onChange={handleChange}
            className={INPUT_BASE}
          />
        </div>

        {/* Telefone */}
        <div>
          <label htmlFor="phone" className={LABEL_BASE}>Telefone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="(21) 9 9999-9999"
            value={form.phone}
            onChange={handleChange}
            className={INPUT_BASE}
          />
        </div>

        {/* Cidade */}
        <div>
          <label htmlFor="city" className={LABEL_BASE}>Cidade</label>
          <input
            id="city"
            name="city"
            type="text"
            required
            placeholder="Sua cidade"
            value={form.city}
            onChange={handleChange}
            className={INPUT_BASE}
          />
        </div>

        {/* E-mail */}
        <div>
          <label htmlFor="email" className={LABEL_BASE}>E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="seu@email.com.br"
            value={form.email}
            onChange={handleChange}
            className={INPUT_BASE}
          />
        </div>

        {/* Idade */}
        <div>
          <label htmlFor="age" className={LABEL_BASE}>Idade</label>
          <input
            id="age"
            name="age"
            type="number"
            required
            min="18"
            max="120"
            placeholder="Sua idade"
            value={form.age}
            onChange={handleChange}
            className={INPUT_BASE}
          />
        </div>

        {/* Já experimentou? */}
        <div className="col-span-2">
          <label className={LABEL_BASE}>Já experimentou nosso chope?</label>
          <div className="flex gap-4">
            {[
              { value: "sim", label: "Sim, já provei! 🍺" },
              { value: "nao", label: "Ainda não, mas quero!" },
              { value: "nao_sei", label: "Não tenho certeza" },
            ].map((opt) => (
              <label
                key={opt.value}
                className={`flex items-center gap-[0.75rem] flex-1 cursor-pointer rounded-[0.625rem] px-[1rem] py-[0.75rem] border-2 transition-all font-['Montserrat',sans-serif] font-medium text-[0.875rem] ${
                  form.triedBefore === opt.value
                    ? "border-[#ffbd24] bg-[#fff9e6] text-[#1a0e04]"
                    : "border-[#d1d5db] bg-white text-[#6b7280] hover:border-[#ffbd24]"
                }`}
              >
                <input
                  type="radio"
                  name="triedBefore"
                  value={opt.value}
                  checked={form.triedBefore === opt.value}
                  onChange={handleChange}
                  className="accent-[#ffbd24] w-[1rem] h-[1rem] flex-shrink-0"
                />
                {opt.label}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Submit */}
      <div className="flex items-center gap-[1rem] pt-[0.125rem]">
        <button
          type="submit"
          className="inline-flex items-center gap-[0.75rem] bg-[#ffbd24] text-[#1a0e04] px-[2rem] py-[1rem] rounded-[1.875rem] font-['Montserrat',sans-serif] font-bold text-[1rem] tracking-[0.03125rem] cursor-pointer select-none btn-shimmer btn-group btn-ripple-container
            transition-all duration-200 hover:-translate-y-[0.1875rem] hover:shadow-[0_0.625rem_2rem_rgba(249,204,10,0.55)] hover:brightness-[1.04]
            active:translate-y-[0.0625rem] active:brightness-[0.96] active:scale-[0.98]
            focus-visible:ring-2 focus-visible:ring-[#f9cc0a] focus-visible:ring-offset-2 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
        >
          <WhatsAppIcon />
          Enviar mensagem
        </button>
        <p className="font-['Montserrat',sans-serif] font-normal text-[#9ca3af] text-[0.8125rem]">
          Bebida alcoólica. Proibida para menores de 18 anos.
        </p>
      </div>
    </form>
  );
}

/* ─── Contact info sidebar ──────────────────────────────────────────────── */

function ContactInfo() {
  return (
    <div className="flex flex-col gap-6">
      {/* Brand message */}
      <div
        className="rounded-[1.25rem] p-[2rem] overflow-hidden relative bg-gradient-to-br from-[#ffd324] to-[#e9a402]"
      >
        <p
          className="font-['Montserrat',sans-serif] font-black text-[#171717] uppercase tracking-[0.05rem] mb-[0.75rem] text-[clamp(1.5rem,2vw,2.25rem)] leading-[1.1]"
        >
          O puro malte<br />que você merece!
        </p>
        <p className="font-['Montserrat',sans-serif] font-normal text-[#4a3728] text-[0.9375rem] leading-[1.6]">
          Seja para o seu evento, estabelecimento ou simplesmente para o prazer de beber um bom chope.
        </p>
      </div>

      {/* Contact details */}
      <div className="bg-[#f2f2f2] rounded-[1.25rem] p-[2rem] flex flex-col gap-[1.25rem]">
        <p className="font-['Montserrat',sans-serif] font-bold text-[#1a0e04] text-[1.125rem] uppercase tracking-[0.0625rem]">
          Fale Direto
        </p>

        {/* Phone */}
        <a
          href="tel:+5521999999999"
          className="flex items-center gap-[1rem] group"
        >
          <div
            className="flex items-center justify-center rounded-[0.875rem] flex-shrink-0 w-[3.25rem] h-[3.25rem] bg-[#171717]"
          >
            <PhoneIcon />
          </div>
          <div>
            <p className="font-['Montserrat',sans-serif] font-semibold text-[0.75rem] text-[#9ca3af] uppercase tracking-[0.05rem] mb-[0.03125rem]">
              Telefone / WhatsApp
            </p>
            <p className="font-['Montserrat',sans-serif] font-bold text-[#171717] text-[1.0625rem] group-hover:text-[#1a0e04] transition-colors">
              (21) 9 9999-9999
            </p>
          </div>
        </a>

        {/* Divider */}
        <div className="h-px bg-[#d1d5db]" />

        {/* Email */}
        <a
          href="mailto:contato@nossochope.com.br"
          className="flex items-center gap-[1rem] group"
        >
          <div
            className="flex items-center justify-center rounded-[0.875rem] flex-shrink-0 w-[3.25rem] h-[3.25rem] bg-[#171717]"
          >
            <EmailIcon />
          </div>
          <div>
            <p className="font-['Montserrat',sans-serif] font-semibold text-[0.75rem] text-[#9ca3af] uppercase tracking-[0.05rem] mb-[0.03125rem]">
              E-mail
            </p>
            <p className="font-['Montserrat',sans-serif] font-bold text-[#171717] text-[0.9375rem] group-hover:text-[#1a0e04] transition-colors">
              contato@nossochope.com.br
            </p>
          </div>
        </a>
      </div>

      {/* WhatsApp CTA */}
      <a
        href="https://wa.me/5521999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-[0.75rem] bg-[#171717] text-[#fafafa] px-[1.5rem] py-[1rem] rounded-[1.875rem] font-['Montserrat',sans-serif] font-bold text-[0.9375rem] tracking-[0.03125rem] cursor-pointer select-none btn-group btn-ripple-container
          transition-all duration-200 hover:-translate-y-[0.1875rem] hover:bg-[#262626] hover:shadow-[0_0.625rem_1.75rem_rgba(0,0,0,0.45)]
          active:translate-y-[0.0625rem] active:bg-[#0a0a0a] active:scale-[0.98]
          focus-visible:ring-2 focus-visible:ring-[#fafafa] focus-visible:ring-offset-2 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
      >
        <div className="relative size-[1.375rem]">
          <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 25 25">
            <path d={svgPaths.p1c760700} fill="#FFBD24" />
          </svg>
        </div>
        Chamar no WhatsApp
      </a>

      {/* Opening note */}
      <p className="font-['Montserrat',sans-serif] font-normal text-[#9ca3af] text-[0.8125rem] text-center leading-[1.5]">
        Atendemos de segunda a sábado, das 9h às 18h.
      </p>
    </div>
  );
}

/* ─── Contact Page ──────────────────────────────────────────────────────── */

export function ContactPage() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      <ContactHeader />

      {/* Main content */}
      <main className="flex-1 bg-white px-[15.625rem] py-[5rem]">
        <div className="flex gap-[5rem] items-start">
          {/* Form — 7 cols equivalent */}
          <div className="flex-1 min-w-0">
            <div className="mb-[2rem]">
              <p
                className="font-['Montserrat',sans-serif] font-black text-[#171717] uppercase tracking-[0.05rem] text-[clamp(1.5rem,2vw,2.25rem)] leading-[1.2]"
              >
                Preencha o formulário
              </p>
              <p className="font-['Montserrat',sans-serif] font-normal text-[#6b7280] text-[0.9375rem] mt-[0.5rem] leading-[1.6]">
                Todos os campos marcados são obrigatórios. Respondemos em até 24h úteis.
              </p>
            </div>
            <ContactForm />
          </div>

          {/* Sidebar — contact info */}
          <div className="flex-shrink-0 w-[23.75rem]">
            <ContactInfo />
          </div>
        </div>
      </main>
    </div>
  );
}

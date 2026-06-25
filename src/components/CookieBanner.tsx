"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "essential-only");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-[#0F172A] border border-white/10 rounded-2xl shadow-2xl p-5 flex flex-col md:flex-row items-start md:items-center gap-4">
        <div className="flex items-start gap-3 flex-1">
          <Cookie size={20} className="text-sky-400 mt-0.5 shrink-0" />
          <div className="text-sm text-gray-300">
            <p className="font-semibold text-white mb-1">Uso de Cookies</p>
            <p className="text-xs leading-relaxed">
              Utilizamos cookies essenciais para o funcionamento do site e, com sua autorização,
              cookies analíticos para melhorar sua experiência. Nenhum dado de saúde é coletado automaticamente.
              Saiba mais na nossa{" "}
              <Link href="/privacidade" className="text-sky-400 hover:underline">
                Política de Privacidade
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0 w-full md:w-auto">
          <button
            onClick={decline}
            className="flex-1 md:flex-none text-xs px-4 py-2 rounded-lg border border-white/20 text-gray-400 hover:text-white hover:border-white/40 transition-colors"
          >
            Somente essenciais
          </button>
          <button
            onClick={accept}
            className="flex-1 md:flex-none text-xs px-4 py-2 rounded-lg bg-[#1B3A6B] hover:bg-[#2A5298] text-white font-semibold transition-colors"
          >
            Aceitar todos
          </button>
          <button
            onClick={decline}
            className="text-gray-500 hover:text-white p-1 transition-colors"
            aria-label="Fechar"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

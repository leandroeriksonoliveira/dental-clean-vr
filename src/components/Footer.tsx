import Link from "next/link";
import { MapPin, Phone, Clock, ShieldCheck, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      {/* Disclaimer obrigatório CFO/CRO */}
      <div className="bg-[#1B3A6B]/30 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 text-center">
          <p className="text-xs text-blue-200 leading-relaxed">
            <ShieldCheck className="inline mr-1" size={13} />
            <strong>Aviso importante:</strong> O conteúdo deste site é de natureza informativa e educativa, e{" "}
            <strong>não substitui a avaliação, diagnóstico ou tratamento por profissional habilitado</strong>.
            Consulte sempre um cirurgião-dentista. As informações aqui apresentadas seguem as diretrizes do{" "}
            Conselho Federal de Odontologia (CFO) e do CRO/RJ.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Coluna 1: Identidade */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#1B3A6B] border border-white/20 flex items-center justify-center">
                <svg viewBox="0 0 40 40" width="26" height="26" fill="none">
                  <path
                    d="M20 6C14 6 8 10 8 17c0 4 1.5 7 3 9.5C13.5 30 15 34 20 34s6.5-4 9-7.5c1.5-2.5 3-5.5 3-9.5C32 10 26 6 20 6z"
                    fill="white"
                    opacity="0.9"
                  />
                  <path
                    d="M20 10c-2 0-4 1-5 2.5 1 .5 2 .8 3 .8 1.5 0 3-.5 4-1.2C21.5 10.5 20.8 10 20 10z"
                    fill="#0EA5E9"
                  />
                </svg>
              </div>
              <div>
                <p className="font-bold text-lg">Dental Clean</p>
                <p className="text-xs text-sky-400">Ortodontia · Volta Redonda/RJ</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Cuidando do seu sorriso com excelência, dedicação e ética profissional há mais de 30 anos.
            </p>
            {/* Identificação obrigatória CFO */}
            <div className="bg-[#1B3A6B]/40 border border-white/10 rounded-lg p-3 text-xs text-gray-300 space-y-1">
              <p className="font-semibold text-sky-400 uppercase tracking-wide text-[10px]">Responsável Técnico</p>
              <p className="font-semibold text-white">Dr. Joel Junior RT</p>
              <p>Cirurgião-Dentista — Especialista em Ortodontia</p>
              <p>CRO/RJ: 19.478 · EPAO: 4.963</p>
            </div>
          </div>

          {/* Coluna 2: Contato */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest text-sky-400 mb-4">Contato</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin size={15} className="text-sky-400 mt-0.5 shrink-0" />
                <span>Av. Sávio Cota de Almeida Gama, 1586<br />Retiro — Volta Redonda/RJ<br />CEP 27.281-422</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={15} className="text-sky-400 shrink-0" />
                <a href="tel:2433463474" className="hover:text-white transition-colors">(24) 3346-3474</a>
                <span className="text-gray-500">|</span>
                <a href="tel:24988171939" className="hover:text-white transition-colors">(24) 98817-1939</a>
              </li>
              <li className="flex items-center gap-2">
                <Share2 size={15} className="text-sky-400 shrink-0" />
                <a
                  href="https://www.instagram.com/dentalcleanvr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @dentalcleanvr
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Horários */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest text-sky-400 mb-4">Horários</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Clock size={14} className="text-sky-400" />
                <span>Segunda a Sexta: 8h às 18h</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={14} className="text-sky-400" />
                <span>Sábado: 8h às 12h</span>
              </li>
            </ul>
            <div className="mt-6">
              <a
                href="https://wa.me/5524988171939?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20na%20Dental%20Clean."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Agendar pelo WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Dental Clean — Dr. Joel Junior RT · CRO/RJ 19.478 · EPAO 4.963. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <Link href="/privacidade" className="hover:text-gray-300 transition-colors">
              Política de Privacidade
            </Link>
            <span>·</span>
            <span>Site em conformidade com o CFO e LGPD</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

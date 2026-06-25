import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Clock,
  ChevronRight,
  Award,
  Users,
  Stethoscope,
  Shield,
  Share2,
  CalendarCheck,
  CheckCircle2,
  Star,
} from "lucide-react";

const services = [
  {
    icon: "🦷",
    title: "Ortodontia",
    desc: "Especialidade principal da clínica. Correção de dentes e mordida com aparelhos fixos, removíveis e alinhadores modernos.",
    tag: "Especialidade",
  },
  {
    icon: "✨",
    title: "Clareamento Dental",
    desc: "Procedimento clínico supervisionado para clarear os dentes com segurança, utilizando géis e técnicas aprovadas.",
    tag: "Estética",
  },
  {
    icon: "🔬",
    title: "Facetas em Resina",
    desc: "Restaurações diretas em resina composta que melhoram a forma, cor e harmonia do sorriso.",
    tag: "Estética",
  },
  {
    icon: "🦴",
    title: "Prótese Protocolo",
    desc: "Reabilitação oral sobre implantes osseointegrados para pacientes que perderam todos os dentes, com planejamento individualizado.",
    tag: "Reabilitação",
  },
  {
    icon: "😴",
    title: "Aparelho para Ronco e Apneia",
    desc: "Dispositivo intraoral para o tratamento do ronco e da apneia obstrutiva do sono leve a moderada, conforme indicação médica.",
    tag: "Saúde do Sono",
  },
  {
    icon: "👶",
    title: "Odontopediatria",
    desc: "Atendimento odontológico especializado para crianças, com técnicas de humanização e ambiente acolhedor.",
    tag: "Infantil",
  },
];

const differentials = [
  {
    icon: <Users size={24} className="text-[#0EA5E9]" />,
    title: "Mesmo dentista do início ao fim",
    desc: "Você é atendido pelo Dr. Joel Junior em todas as consultas, garantindo continuidade e confiança no tratamento.",
  },
  {
    icon: <Clock size={24} className="text-[#0EA5E9]" />,
    title: "Pontualidade respeitada",
    desc: "Valorizamos seu tempo. Nossos atendimentos seguem rigorosamente os horários marcados.",
  },
  {
    icon: <CalendarCheck size={24} className="text-[#0EA5E9]" />,
    title: "Plano de tratamento detalhado",
    desc: "Você recebe um plano de tratamento completo com as etapas, duração estimada e orientações claras.",
  },
  {
    icon: <Shield size={24} className="text-[#0EA5E9]" />,
    title: "Ética e conformidade profissional",
    desc: "Todos os procedimentos seguem as normas do CRO/RJ e do Conselho Federal de Odontologia (CFO).",
  },
];

export default function Home() {
  return (
    <>
      {/* ====== HERO ====== */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0F172A 0%, #1B3A6B 45%, #2A5298 100%)",
        }}
      >
        {/* Decorative circles */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-sky-500/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/10 rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-xs text-sky-300 font-semibold uppercase tracking-wider mb-6">
              <Star size={12} className="fill-sky-300" />
              Mais de 30 anos em Volta Redonda/RJ
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight mb-5">
              Seu sorriso{" "}
              <span className="text-gradient">mais bonito</span>{" "}
              começa aqui
            </h1>
            <p className="text-blue-200 text-lg mb-8 leading-relaxed">
              Clínica especializada em Ortodontia em Volta Redonda. Cuidado
              personalizado, ética profissional e excelência em cada consulta.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/5524988171939?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20na%20Dental%20Clean."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-green-900/30"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Agendar Consulta
              </a>
              <a
                href="#sobre"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold px-6 py-3.5 rounded-xl transition-all"
              >
                Conheça a clínica
                <ChevronRight size={16} />
              </a>
            </div>

            {/* Info badges */}
            <div className="mt-10 flex flex-wrap gap-4">
              {[
                { label: "CRO/RJ 19.478", icon: "🏅" },
                { label: "EPAO 4.963", icon: "📋" },
                { label: "Volta Redonda/RJ", icon: "📍" },
              ].map((b) => (
                <div
                  key={b.label}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-3 py-1.5 text-xs text-white/80"
                >
                  <span>{b.icon}</span>
                  {b.label}
                </div>
              ))}
            </div>
          </div>

          {/* Hero image / card do dentista */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Card principal */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl max-w-sm w-full">
                {/* Avatar placeholder com ícone profissional */}
                <div className="w-28 h-28 mx-auto bg-gradient-to-br from-[#1B3A6B] to-[#0EA5E9] rounded-full flex items-center justify-center mb-5 shadow-xl border-4 border-white/30">
                  <svg viewBox="0 0 80 80" width="60" height="60" fill="none">
                    {/* Head */}
                    <circle cx="40" cy="28" r="16" fill="white" opacity="0.9" />
                    {/* Body */}
                    <path d="M16 70 Q16 52 40 52 Q64 52 64 70" fill="white" opacity="0.7" />
                    {/* Stethoscope hint */}
                    <circle cx="40" cy="56" r="4" fill="#0EA5E9" />
                  </svg>
                </div>

                <div className="text-center">
                  <h2 className="text-white font-bold text-xl mb-1">Dr. Joel Junior RT</h2>
                  <p className="text-sky-300 text-sm font-medium mb-1">Cirurgião-Dentista</p>
                  <p className="text-sky-300 text-sm mb-4">Especialista em Ortodontia</p>
                  <div className="bg-white/10 rounded-xl p-3 text-xs text-white/70 space-y-1 border border-white/10">
                    <p>CRO/RJ: <span className="text-white font-semibold">19.478</span></p>
                    <p>EPAO: <span className="text-white font-semibold">4.963</span></p>
                  </div>
                </div>

                <div className="mt-6 flex justify-center gap-4 text-white/60 text-xs">
                  <div className="text-center">
                    <p className="text-white font-bold text-lg">30+</p>
                    <p>Anos de experiência</p>
                  </div>
                  <div className="w-px bg-white/20" />
                  <div className="text-center">
                    <p className="text-white font-bold text-lg">483</p>
                    <p>Posts no Instagram</p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                Atendendo agora
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/40">
          <ChevronRight size={20} className="rotate-90" />
        </div>
      </section>

      {/* ====== SOBRE / PROFISSIONAL ====== */}
      <section id="sobre" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            {/* Imagem / visual */}
            <div className="relative">
              <div
                className="rounded-3xl overflow-hidden shadow-2xl"
                style={{
                  background: "linear-gradient(135deg, #1B3A6B, #2A5298)",
                  minHeight: "420px",
                }}
              >
                <div className="flex flex-col items-center justify-center h-full p-10 text-white text-center min-h-[420px]">
                  {/* Tooth icon */}
                  <div className="mb-6">
                    <svg viewBox="0 0 120 120" width="120" height="120">
                      <path
                        d="M60 15C40 15 20 28 20 50c0 12 4 22 9 30 7 11 10 25 31 25s24-14 31-25c5-8 9-18 9-30C100 28 80 15 60 15z"
                        fill="white"
                        opacity="0.15"
                      />
                      <path
                        d="M60 20C42 20 24 31 24 50c0 11 3.5 20 8 27.5 6.5 10.5 9.5 22.5 28 22.5s21.5-12 28-22.5c4.5-7.5 8-16.5 8-27.5C96 31 78 20 60 20z"
                        fill="white"
                        opacity="0.9"
                      />
                      <path
                        d="M60 24c-4 0-9 2-12 5 2 1.5 5 2.5 8 2.5 4 0 8-1.5 10.5-3.5C64.5 25 62.2 24 60 24z"
                        fill="#0EA5E9"
                        opacity="0.8"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Dental Clean</h3>
                  <p className="text-sky-200 text-sm mb-6">Excelência em Ortodontia</p>
                  <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
                    {[
                      { n: "30+", l: "Anos de experiência" },
                      { n: "CRO/RJ", l: "19.478" },
                      { n: "EPAO", l: "4.963" },
                      { n: "Retiro", l: "Volta Redonda/RJ" },
                    ].map((s) => (
                      <div
                        key={s.l}
                        className="bg-white/10 rounded-xl p-3 border border-white/10 text-center"
                      >
                        <p className="text-white font-bold text-base">{s.n}</p>
                        <p className="text-sky-300 text-xs">{s.l}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-sky-100 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-14 h-14 bg-blue-100 rounded-xl -z-10" />
            </div>

            {/* Texto */}
            <div>
              <span className="text-[#0EA5E9] text-sm font-semibold uppercase tracking-widest">
                Sobre o Profissional
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mt-2 mb-5">
                Dr. Joel Junior RT
              </h2>

              {/* CRO badge obrigatório CFO */}
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 mb-5">
                <Award size={16} className="text-[#1B3A6B]" />
                <span className="text-[#1B3A6B] text-sm font-semibold">
                  Cirurgião-Dentista · CRO/RJ 19.478 · EPAO 4.963
                </span>
              </div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Com mais de 30 anos de atuação em Volta Redonda/RJ, o Dr. Joel Junior RT é especialista em
                Ortodontia registrado no Conselho Regional de Odontologia do Rio de Janeiro (CRO/RJ 19.478)
                e possui Especialização em Prótese e Aparelhos Ortodônticos (EPAO 4.963).
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Fundador da Dental Clean, atua com dedicação ao atendimento individualizado, sendo o mesmo
                profissional presente em todas as consultas do paciente. A clínica é referência em Ortodontia
                no bairro Retiro, atendendo crianças, jovens e adultos com tratamentos planejados e éticos.
              </p>

              <div className="space-y-3 mb-7">
                {[
                  "Especialista em Ortodontia (EPAO 4.963)",
                  "Graduação em Cirurgia e Traumatologia Buco-Maxilo-Facial",
                  "Mais de 30 anos de experiência clínica",
                  "Atendimento personalizado e humanizado",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <a
                href="https://www.instagram.com/dentalcleanvr/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B3A6B] border-2 border-[#1B3A6B] px-5 py-2.5 rounded-xl hover:bg-[#1B3A6B] hover:text-white transition-all"
              >
                <Share2 size={16} />
                Siga no Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ====== SERVIÇOS ====== */}
      <section id="servicos" className="py-20 section-bg-alt">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#0EA5E9] text-sm font-semibold uppercase tracking-widest">
              O que oferecemos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mt-2 mb-4">
              Especialidades e Serviços
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              Realizamos tratamentos odontológicos com técnicas atualizadas e ética profissional,
              sempre seguindo as diretrizes do CRO/RJ e do Conselho Federal de Odontologia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm card-hover"
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <div className="inline-block bg-blue-50 text-[#1B3A6B] text-xs font-semibold px-2 py-0.5 rounded-md mb-2">
                  {s.tag}
                </div>
                <h3 className="font-bold text-[#1B3A6B] text-lg mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Aviso informativo CFO */}
          <div className="mt-10 bg-amber-50 border border-amber-200 rounded-2xl p-5 flex items-start gap-3">
            <span className="text-amber-500 text-xl shrink-0">ℹ️</span>
            <p className="text-amber-800 text-sm leading-relaxed">
              <strong>Aviso informativo:</strong> As descrições acima têm caráter exclusivamente educativo.
              O plano de tratamento adequado é determinado após avaliação clínica individualizada pelo
              cirurgião-dentista. Não caracteriza indicação ou promessa de resultado.
            </p>
          </div>
        </div>
      </section>

      {/* ====== DIFERENCIAIS ====== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#0EA5E9] text-sm font-semibold uppercase tracking-widest">
              Por que nos escolher
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mt-2">
              Nossos Diferenciais
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {differentials.map((d) => (
              <div
                key={d.title}
                className="flex items-start gap-5 p-6 rounded-2xl border border-gray-100 shadow-sm card-hover bg-white"
              >
                <div className="bg-blue-50 rounded-xl p-3 shrink-0">{d.icon}</div>
                <div>
                  <h3 className="font-bold text-[#1B3A6B] mb-2">{d.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== ESTRUTURA ====== */}
      <section id="estrutura" className="py-20 section-bg-alt">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#0EA5E9] text-sm font-semibold uppercase tracking-widest">
              Nossa Clínica
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] mt-2 mb-4">
              Estrutura e Localização
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">
              Ambiente moderno, higienizado e preparado para oferecer o máximo de conforto e
              segurança durante seu atendimento.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: <Stethoscope size={28} className="text-[#0EA5E9]" />,
                title: "Equipamentos Modernos",
                desc: "Utilizamos equipamentos odontológicos atuais e materiais de alta qualidade, com manutenção regular.",
              },
              {
                icon: <Shield size={28} className="text-[#0EA5E9]" />,
                title: "Biossegurança",
                desc: "Protocolos rigorosos de esterilização e biossegurança seguidos conforme as normas da ANVISA e CRO/RJ.",
              },
              {
                icon: <Users size={28} className="text-[#0EA5E9]" />,
                title: "Ambiente Acolhedor",
                desc: "Espaço confortável e humanizado, adequado ao atendimento de pacientes de todas as idades.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm text-center card-hover"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-50 rounded-2xl p-4">{item.icon}</div>
                </div>
                <h3 className="font-bold text-[#1B3A6B] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Map embed */}
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
            <div className="grid md:grid-cols-2">
              <div className="p-8 flex flex-col justify-center">
                <h3 className="font-bold text-[#1B3A6B] text-xl mb-4 flex items-center gap-2">
                  <MapPin className="text-[#0EA5E9]" size={20} />
                  Como nos encontrar
                </h3>
                <address className="not-italic text-gray-600 text-sm leading-relaxed mb-4">
                  Av. Sávio Cota de Almeida Gama, 1586<br />
                  Retiro — Volta Redonda/RJ<br />
                  CEP 27.281-422
                </address>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <Phone size={14} className="text-[#0EA5E9]" />
                    <a href="tel:2433463474" className="hover:text-[#1B3A6B]">(24) 3346-3474</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={14} className="text-green-500" />
                    <a href="tel:24988171939" className="hover:text-[#1B3A6B]">(24) 98817-1939 (WhatsApp)</a>
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  <p className="flex items-center gap-2 mb-1">
                    <Clock size={14} className="text-[#0EA5E9]" />
                    Segunda a Sexta: 8h às 18h
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock size={14} className="text-[#0EA5E9]" />
                    Sábado: 8h às 12h
                  </p>
                </div>
              </div>
              <div className="min-h-[320px] bg-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3704.0!2d-44.0837!3d-22.5234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDMxJzI0LjIiUyA0NMKwMDUnMDEuMyJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
                  width="100%"
                  height="320"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Dental Clean — Volta Redonda/RJ"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== CONTATO / CTA ====== */}
      <section id="contato" className="py-20 gradient-hero">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-sky-400 text-sm font-semibold uppercase tracking-widest">
              Fale conosco
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Agende sua Consulta
            </h2>
            <p className="text-blue-200 max-w-xl mx-auto text-sm leading-relaxed">
              Entre em contato pelos nossos canais de atendimento. Será um prazer conhecer você
              e iniciar um planejamento personalizado para o seu sorriso.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                ),
                bg: "bg-green-600",
                title: "WhatsApp",
                sub: "(24) 98817-1939",
                href: "https://wa.me/5524988171939?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20na%20Dental%20Clean.",
                cta: "Enviar mensagem",
              },
              {
                icon: <Phone size={28} className="text-white" />,
                bg: "bg-[#1B3A6B]",
                title: "Telefone",
                sub: "(24) 3346-3474",
                href: "tel:2433463474",
                cta: "Ligar agora",
              },
              {
                icon: <Share2 size={28} className="text-white" />,
                bg: "bg-gradient-to-br from-purple-600 to-pink-500",
                title: "Instagram",
                sub: "@dentalcleanvr",
                href: "https://www.instagram.com/dentalcleanvr/",
                cta: "Seguir",
              },
            ].map((c) => (
              <a
                key={c.title}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-7 text-center hover:bg-white/20 transition-all card-hover"
              >
                <div
                  className={`w-14 h-14 ${c.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                >
                  {c.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-1">{c.title}</h3>
                <p className="text-blue-300 text-sm mb-4">{c.sub}</p>
                <span className="text-xs text-white/60 border border-white/20 px-3 py-1 rounded-full">
                  {c.cta}
                </span>
              </a>
            ))}
          </div>

          {/* Aviso disclaimer obrigatório */}
          <div className="mt-12 max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
            <p className="text-blue-200 text-xs leading-relaxed">
              <Shield className="inline mr-1 text-sky-400" size={13} />
              As informações disponibilizadas neste site têm caráter informativo e educativo.{" "}
              <strong className="text-white">O agendamento não constitui diagnóstico ou indicação de tratamento</strong>.
              O plano de tratamento é elaborado exclusivamente após avaliação presencial pelo cirurgião-dentista.
              Dental Clean — CRO/RJ 19.478 · EPAO 4.963 | Conforme as normas do CFO e LGPD.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export const siteConfig = {
  name: "Dental Clean",
  tagline: "Ortodontia · Volta Redonda/RJ",
  url: "https://dentalcleanvr.vercel.app",
  instagram: "https://www.instagram.com/dentalcleanvr/",
  whatsapp: "5524988171939",
  whatsappMessage:
    "Olá, gostaria de agendar uma consulta na Dental Clean.",
  phone: "(24) 3346-3474",
  phoneRaw: "2433463474",
  mobile: "(24) 98817-1939",
  mobileRaw: "24988171939",
  address: {
    street: "Av. Sávio Cota de Almeida Gama, 1586",
    neighborhood: "Retiro",
    city: "Volta Redonda",
    state: "RJ",
    zip: "27281-422",
    full: "Av. Sávio Cota de Almeida Gama, 1586 — Retiro, Volta Redonda/RJ — CEP 27.281-422",
    mapsQuery:
      "Av.+Sávio+Cota+de+Almeida+Gama,+1586,+Retiro,+Volta+Redonda+-+RJ,+27281-422",
  },
  hours: {
    weekdays: "Segunda a Sexta: 8h às 18h",
    saturday: "Sábado: 8h às 12h",
  },
  dentist: {
    name: "Joel Junior RT",
    fullName: "Dr. Joel Junior RT",
    title: "Cirurgião-Dentista",
    specialty: "Especialista em Ortodontia",
    cro: "19.478",
    croFull: "CRO/RJ 19.478",
    epao: "4.963",
    experience: "30+",
    specialtyExperience: "25+",
  },
} as const;

export function whatsappUrl(message: string = siteConfig.whatsappMessage) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

import { siteConfig } from "@/lib/site";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: siteConfig.dentist.fullName,
    description:
      "Clínica odontológica especializada em Ortodontia em Volta Redonda/RJ.",
    url: siteConfig.url,
    image: `${siteConfig.url}/images/dr-joel.png`,
    telephone: [`+55${siteConfig.phoneRaw}`, `+55${siteConfig.mobileRaw}`],
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -22.5234,
      longitude: -44.0837,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "12:00",
      },
    ],
    medicalSpecialty: "Ortodontia",
    memberOf: {
      "@type": "Organization",
      name: "Conselho Regional de Odontologia do Rio de Janeiro",
    },
    parentOrganization: {
      "@type": "MedicalBusiness",
      name: siteConfig.name,
      url: siteConfig.url,
      sameAs: [siteConfig.instagram],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

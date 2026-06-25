import { SKETCHFAB_MODELS } from "@/lib/dental-3d";

export const CONTENT_DISCLAIMER =
  "As descrições e modelos 3D têm caráter exclusivamente educativo e informativo. " +
  "Não substituem consulta, exame clínico ou diagnóstico odontológico. " +
  "O plano de tratamento é definido somente após avaliação presencial pelo cirurgião-dentista, " +
  "conforme as normas do CRO/RJ e do Conselho Federal de Odontologia.";

export type Service = {
  id: string;
  icon: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  tag: string;
  image: string | null;
  sketchfabModelId: string;
};

export const SERVICES: Service[] = [
  {
    id: "ortodontia",
    icon: "🦷",
    title: "Ortodontia",
    shortDescription:
      "Correção de dentes e mordida com aparelhos fixos, removíveis e alinhadores modernos.",
    fullDescription:
      "A ortodontia é a especialidade odontológica dedicada ao diagnóstico, prevenção e correção " +
      "das más posições dos dentes e dos ossos maxilares. Na Dental Clean, o tratamento ortodôntico " +
      "é conduzido por especialista com mais de 25 anos de experiência na área, com planejamento " +
      "individualizado e acompanhamento contínuo do mesmo profissional do início ao fim.",
    tag: "Especialidade",
    image: null,
    sketchfabModelId: SKETCHFAB_MODELS.permanentDentition,
  },
  {
    id: "clareamento",
    icon: "✨",
    title: "Clareamento Dental",
    shortDescription:
      "Procedimento clínico supervisionado para clarear os dentes com segurança e técnicas aprovadas.",
    fullDescription:
      "O clareamento dental é um procedimento estético realizado sob supervisão profissional, " +
      "utilizando géis clareadores e protocolos reconhecidos pela literatura odontológica. " +
      "A indicação, concentração do agente e número de sessões dependem da avaliação clínica " +
      "individual, considerando a saúde dos tecidos dentais e gengivais.",
    tag: "Estética",
    image: null,
    sketchfabModelId: SKETCHFAB_MODELS.centralIncisor,
  },
  {
    id: "facetas",
    icon: "🔬",
    title: "Facetas em Resina",
    shortDescription:
      "Restaurações diretas em resina composta que melhoram forma, cor e harmonia do sorriso.",
    fullDescription:
      "As facetas em resina composta são restaurações estéticas realizadas diretamente na clínica, " +
      "permitindo correções de forma, cor, tamanho e proporção dos dentes anteriores. " +
      "O planejamento considera a anatomia dental, a oclusão e as expectativas do paciente, " +
      "sempre após avaliação clínica detalhada.",
    tag: "Estética",
    image: null,
    sketchfabModelId: SKETCHFAB_MODELS.incisorEndodontic,
  },
  {
    id: "protese-protocolo",
    icon: "🦴",
    title: "Prótese Protocolo",
    shortDescription:
      "Reabilitação oral sobre implantes para pacientes edêntulos, com planejamento individualizado.",
    fullDescription:
      "A prótese protocolo sobre implantes é uma modalidade de reabilitação oral fixa indicada " +
      "para pacientes que perderam todos os dentes de uma ou ambas as arcadas. O tratamento envolve " +
      "planejamento cirúrgico e protético individualizado, com implantes osseointegrados que servem " +
      "de suporte à prótese. A indicação depende de avaliação clínica, exames de imagem e condições " +
      "de saúde bucal e sistêmica do paciente.",
    tag: "Reabilitação",
    image: "/images/protese-protocolo.png",
    sketchfabModelId: SKETCHFAB_MODELS.dentalImplant,
  },
  {
    id: "apneia",
    icon: "😴",
    title: "Aparelho para Ronco e Apneia",
    shortDescription:
      "Dispositivo intraoral para ronco e apneia obstrutiva do sono leve a moderada, conforme indicação.",
    fullDescription:
      "O aparelho intraoral para ronco e apneia obstrutiva do sono (AOS) é um dispositivo customizado " +
      "que posiciona a mandíbula de forma a ampliar a via aérea superior durante o sono. " +
      "Sua indicação é avaliada em conjunto com o médico responsável pelo diagnóstico da AOS, " +
      "sendo recomendado principalmente em casos leves a moderados, conforme diretrizes clínicas.",
    tag: "Saúde do Sono",
    image: null,
    sketchfabModelId: SKETCHFAB_MODELS.tmjDisc,
  },
  {
    id: "odontopediatria",
    icon: "👶",
    title: "Odontopediatria",
    shortDescription:
      "Atendimento odontológico especializado para crianças, com humanização e ambiente acolhedor.",
    fullDescription:
      "A odontopediatria é a especialidade dedicada à saúde bucal de crianças e adolescentes. " +
      "Na Dental Clean, o atendimento infantil prioriza a prevenção, a orientação aos responsáveis " +
      "e técnicas de humanização que tornam a experiência mais confortável, contribuindo para a " +
      "formação de hábitos saudáveis desde cedo.",
    tag: "Infantil",
    image: null,
    sketchfabModelId: SKETCHFAB_MODELS.primaryMolar,
  },
];

import type { Metadata } from "next";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade | Dental Clean",
  description: "Política de Privacidade da Dental Clean, conforme a Lei Geral de Proteção de Dados (LGPD — Lei 13.709/2018).",
};

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#1B3A6B] hover:text-[#0EA5E9] mb-8 transition-colors"
        >
          <ArrowLeft size={16} />
          Voltar ao site
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-blue-50 p-3 rounded-xl">
              <ShieldCheck size={28} className="text-[#1B3A6B]" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#1B3A6B]">Política de Privacidade</h1>
              <p className="text-gray-500 text-sm">Última atualização: junho de 2025</p>
            </div>
          </div>

          <div className="prose prose-sm max-w-none text-gray-700 space-y-8">
            <section>
              <h2 className="text-lg font-bold text-[#1B3A6B] mb-3">1. Identificação do Controlador</h2>
              <p className="leading-relaxed">
                Esta Política de Privacidade é aplicada ao site da <strong>Dental Clean</strong>, clínica
                odontológica sob responsabilidade do <strong>Dr. Joel Junior RT</strong>,
                Cirurgião-Dentista inscrito no CRO/RJ sob o n.º 19.478 e EPAO 4.963, com sede na
                Av. Sávio Cota de Almeida Gama, 1.586 — Retiro, Volta Redonda/RJ, CEP 27.281-422.
              </p>
              <p className="leading-relaxed mt-2">
                Contato do responsável pelo tratamento de dados:{" "}
                <a href="tel:2433463474" className="text-[#0EA5E9]">(24) 3346-3474</a> |{" "}
                <a href="tel:24988171939" className="text-[#0EA5E9]">(24) 98817-1939</a>
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#1B3A6B] mb-3">2. Base Legal (LGPD)</h2>
              <p className="leading-relaxed">
                O tratamento de dados pessoais realizado por este site fundamenta-se na{" "}
                <strong>Lei Geral de Proteção de Dados Pessoais — LGPD (Lei n.º 13.709/2018)</strong>,
                especificamente nos seguintes fundamentos:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2 text-sm">
                <li><strong>Consentimento</strong> (Art. 7.º, I): para dados coletados via formulários e cookies analíticos;</li>
                <li><strong>Legítimo interesse</strong> (Art. 7.º, IX): para fins de segurança do site e manutenção de sessão;</li>
                <li><strong>Cumprimento de obrigação legal</strong> (Art. 7.º, II): quando exigido pelo CRO/RJ ou legislação aplicável.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#1B3A6B] mb-3">3. Dados Coletados</h2>
              <p className="leading-relaxed mb-3">Este site pode coletar os seguintes dados pessoais:</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-blue-50">
                      <th className="text-left p-3 font-semibold text-[#1B3A6B] border border-gray-200">Dado</th>
                      <th className="text-left p-3 font-semibold text-[#1B3A6B] border border-gray-200">Finalidade</th>
                      <th className="text-left p-3 font-semibold text-[#1B3A6B] border border-gray-200">Base Legal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Nome, telefone, e-mail", "Agendamento de consultas e contato", "Consentimento (Art. 7.º, I)"],
                      ["Dados de navegação (cookies essenciais)", "Funcionamento técnico do site", "Legítimo interesse (Art. 7.º, IX)"],
                      ["Dados analíticos (cookies opcionais)", "Análise de uso e melhoria do site", "Consentimento (Art. 7.º, I)"],
                    ].map(([dado, fin, base]) => (
                      <tr key={dado} className="border-b border-gray-100">
                        <td className="p-3 border border-gray-200">{dado}</td>
                        <td className="p-3 border border-gray-200">{fin}</td>
                        <td className="p-3 border border-gray-200">{base}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-lg p-3 mt-3">
                <strong>⚠️ Atenção:</strong> Este site <strong>não coleta dados de saúde</strong> (dados sensíveis)
                via formulários digitais. O histórico clínico e informações sobre saúde são tratados
                exclusivamente no ambiente físico da clínica, com consentimento formal.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#1B3A6B] mb-3">4. Cookies</h2>
              <p className="leading-relaxed">
                Utilizamos cookies de duas categorias:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2 text-sm">
                <li>
                  <strong>Cookies essenciais:</strong> necessários para o funcionamento do site (sessão,
                  preferências de idioma). Não requerem consentimento.
                </li>
                <li>
                  <strong>Cookies analíticos (opcionais):</strong> coletam informações de uso de forma
                  anonimizada para análise de tráfego. Requerem seu consentimento explícito via banner.
                </li>
              </ul>
              <p className="mt-2 text-sm">
                Você pode alterar suas preferências de cookies a qualquer momento, limpando o armazenamento
                local do navegador.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#1B3A6B] mb-3">5. Compartilhamento de Dados</h2>
              <p className="leading-relaxed">
                Seus dados pessoais <strong>não são vendidos, alugados ou compartilhados com terceiros</strong>
                para fins comerciais. Podem ser compartilhados apenas nas seguintes situações:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2 text-sm">
                <li>Cumprimento de obrigação legal ou regulatória (ex: CRO/RJ);</li>
                <li>Com prestadores de serviços técnicos (ex: hospedagem), sob contrato de confidencialidade;</li>
                <li>Mediante ordem judicial.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#1B3A6B] mb-3">6. Seus Direitos (LGPD, Art. 18)</h2>
              <p className="leading-relaxed mb-2">
                Como titular de dados, você tem direito a:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Confirmar a existência de tratamento de seus dados;</li>
                <li>Acessar seus dados;</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
                <li>Solicitar anonimização, bloqueio ou eliminação de dados desnecessários;</li>
                <li>Revogar o consentimento a qualquer momento;</li>
                <li>Opor-se ao tratamento realizado com base em legítimo interesse.</li>
              </ul>
              <p className="mt-3 text-sm">
                Para exercer seus direitos, entre em contato pelo telefone{" "}
                <a href="tel:2433463474" className="text-[#0EA5E9]">(24) 3346-3474</a> ou WhatsApp{" "}
                <a href="tel:24988171939" className="text-[#0EA5E9]">(24) 98817-1939</a>.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#1B3A6B] mb-3">7. Retenção de Dados</h2>
              <p className="leading-relaxed">
                Os dados coletados são armazenados pelo período necessário para cumprir as finalidades descritas
                ou conforme exigido por lei. Dados de prontuários clínicos seguem os prazos determinados pelo
                CRO/RJ (mínimo de 20 anos conforme Resolução CFO 198/2019).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#1B3A6B] mb-3">8. Segurança</h2>
              <p className="leading-relaxed">
                Este site utiliza protocolo <strong>HTTPS com certificado SSL</strong>, garantindo a
                criptografia das comunicações entre o navegador do usuário e o servidor. Adotamos
                medidas técnicas e organizacionais razoáveis para proteger seus dados contra acesso
                não autorizado, alteração ou divulgação indevida.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#1B3A6B] mb-3">9. Links Externos</h2>
              <p className="leading-relaxed">
                Este site pode conter links para redes sociais (Instagram, WhatsApp) e outras plataformas.
                A Dental Clean não se responsabiliza pelas práticas de privacidade dessas plataformas externas.
                Recomendamos que você leia as políticas de privacidade de cada serviço acessado.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#1B3A6B] mb-3">10. Alterações nesta Política</h2>
              <p className="leading-relaxed">
                Esta Política de Privacidade pode ser atualizada periodicamente. A data da última atualização
                é sempre indicada no topo deste documento. Recomendamos consulta regular.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#1B3A6B] mb-3">11. Contato e Encarregado de Dados</h2>
              <p className="leading-relaxed">
                Em caso de dúvidas, solicitações ou incidentes relacionados a dados pessoais, entre em contato:
              </p>
              <div className="bg-blue-50 rounded-xl p-4 mt-3 text-sm">
                <p><strong>Dental Clean</strong></p>
                <p>Dr. Joel Junior RT — CRO/RJ 19.478 · EPAO 4.963</p>
                <p>Av. Sávio Cota de Almeida Gama, 1.586 — Retiro, Volta Redonda/RJ · CEP 27.281-422</p>
                <p className="mt-2">
                  Tel: <a href="tel:2433463474" className="text-[#0EA5E9]">(24) 3346-3474</a>{" "}
                  | WhatsApp: <a href="tel:24988171939" className="text-[#0EA5E9]">(24) 98817-1939</a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

export default function SuscripcionPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Primeros pasos</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Suscripción
      </h2>
      <p className="text-base leading-7 text-gray-700 md:text-lg">
        Conoce los planes de suscripción disponibles y cómo aprovechar tu prueba gratuita de 60 días en ESFERA.
      </p>

      {/* Prueba gratuita */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Prueba gratuita de 60 días
        </h3>
        <p className="text-base leading-7 text-gray-700">
          Al registrarte, automáticamente obtienes acceso a una prueba gratuita de 60 días con todas las funcionalidades de la plataforma.
        </p>
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <Image
            src="/registro-creacion_usuario_empresa_proyecto/recuadro_60d_gratis.png"
            alt="Promoción de 60 días gratis"
            width={1200}
            height={800}
            className="w-full"
          />
        </div>
      </div>

      {/* Etapas del proceso */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Proceso de configuración inicial
        </h3>
        <p className="text-base leading-7 text-gray-700">
          Durante el proceso de registro, pasarás por tres etapas importantes para configurar tu cuenta:
        </p>
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <Image
            src="/registro-creacion_usuario_empresa_proyecto/importante_etapas.png"
            alt="Etapas del proceso de configuración"
            width={1200}
            height={800}
            className="w-full"
          />
        </div>
      </div>

      {/* Advertencia */}
      <div className="space-y-4">
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <Image
            src="/registro-creacion_usuario_empresa_proyecto/advertencia_etapas.png"
            alt="Advertencia sobre las etapas"
            width={1200}
            height={800}
            className="w-full"
          />
        </div>
      </div>

      {/* Información sobre planes */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Planes de suscripción
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-xl font-semibold text-[#2d2d2d]">Plan Básico</h4>
            <ul className="list-inside list-disc space-y-2 text-sm text-gray-700">
              <li>Gestión de proyectos ilimitados</li>
              <li>Control de almacén</li>
              <li>Módulo de compras</li>
              <li>Reportes básicos</li>
            </ul>
          </div>
          <div className="rounded-2xl border-2 border-[#4db8a8] bg-[#d4f1eb] p-6 shadow-sm">
            <div className="mb-2 inline-block rounded-full bg-[#4db8a8] px-3 py-1 text-xs font-semibold text-white">
              Recomendado
            </div>
            <h4 className="mb-3 text-xl font-semibold text-[#2d2d2d]">Plan Premium</h4>
            <ul className="list-inside list-disc space-y-2 text-sm text-gray-700">
              <li>Todas las funciones del Plan Básico</li>
              <li>Análisis de precios unitarios</li>
              <li>Gestión de cartera</li>
              <li>Reportes avanzados</li>
              <li>Soporte prioritario</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Nota importante */}
      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-2 font-semibold text-[#2d2d2d]">💡 Importante</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>No necesitas tarjeta de crédito para comenzar tu prueba gratuita</li>
          <li>Puedes cancelar en cualquier momento sin penalización</li>
          <li>Al finalizar el período de prueba, puedes elegir el plan que mejor se adapte a tus necesidades</li>
        </ul>
      </div>
    </div>
  );
}

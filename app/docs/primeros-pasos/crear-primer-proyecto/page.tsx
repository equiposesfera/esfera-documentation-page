import Image from "next/image";

export default function CrearPrimerProyectoPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Primeros pasos</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Crear primer proyecto
      </h2>
      <p className="text-base leading-7 text-gray-700 md:text-lg">
        Una vez creada tu empresa, el último paso de la configuración inicial es crear tu primer proyecto. Los proyectos son la unidad de trabajo principal en ESFERA.
      </p>

      {/* Introducción */}
      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-2 font-semibold text-[#2d2d2d]">ℹ️ ¿Qué es un proyecto?</h4>
        <p className="text-sm text-gray-700">
          Un proyecto en ESFERA representa una obra, construcción o actividad específica que deseas gestionar. Cada proyecto tiene su propio presupuesto, equipo de trabajo, almacén y seguimiento de avances.
        </p>
      </div>

      {/* Paso 1: Formulario inicial */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          1. Acceder al formulario de proyecto
        </h3>
        <p className="text-base leading-7 text-gray-700">
          Después de crear tu empresa, se te presentará automáticamente el formulario para crear tu primer proyecto. También puedes crear nuevos proyectos desde el panel de administración en cualquier momento.
        </p>
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <Image
            src="/registro-creacion_usuario_empresa_proyecto/formulario_nuevo_proyecto.png"
            alt="Formulario para crear nuevo proyecto"
            width={1200}
            height={800}
            className="w-full"
          />
        </div>
      </div>

      {/* Campos requeridos */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          2. Información del proyecto
        </h3>
        <p className="text-base leading-7 text-gray-700">
          Completa la información básica de tu proyecto:
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Información básica</h4>
            <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
              <li>Nombre del proyecto</li>
              <li>Código o identificador interno</li>
              <li>Cliente o propietario</li>
              <li>Ubicación del proyecto</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Configuración inicial</h4>
            <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
              <li>Presupuesto inicial estimado</li>
              <li>Fecha de inicio</li>
              <li>Fecha estimada de finalización</li>
              <li>Tipo de proyecto</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Ejemplo completado */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          3. Ejemplo de proyecto configurado
        </h3>
        <p className="text-base leading-7 text-gray-700">
          Aquí puedes ver un ejemplo de cómo se vería el formulario completado:
        </p>
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <Image
            src="/registro-creacion_usuario_empresa_proyecto/formulario_nuevo_proyecto_lleno.png"
            alt="Ejemplo de formulario de proyecto completado"
            width={1200}
            height={800}
            className="w-full"
          />
        </div>
      </div>

      {/* Siguientes pasos */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          4. Después de crear tu proyecto
        </h3>
        <p className="text-base leading-7 text-gray-700">
          Una vez creado tu proyecto, podrás:
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-[#d4f1eb] p-4">
            <div className="mb-2 text-2xl">📊</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Gestionar presupuestos</h4>
            <p className="text-sm text-gray-700">Crear y administrar presupuestos detallados con análisis de precios unitarios</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-[#d4f1eb] p-4">
            <div className="mb-2 text-2xl">👥</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Agregar equipo</h4>
            <p className="text-sm text-gray-700">Invitar miembros del equipo y asignar roles y permisos</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-[#d4f1eb] p-4">
            <div className="mb-2 text-2xl">📦</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Control de almacén</h4>
            <p className="text-sm text-gray-700">Administrar entradas, salidas y stock de materiales</p>
          </div>
        </div>
      </div>

      {/* Consejos finales */}
      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-2 font-semibold text-[#2d2d2d]">🎉 ¡Felicidades!</h4>
        <p className="mb-2 text-sm text-gray-700">
          Has completado la configuración inicial de ESFERA. Ahora estás listo para comenzar a trabajar en tu proyecto.
        </p>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Explora los diferentes módulos disponibles</li>
          <li>Personaliza la configuración según tus necesidades</li>
          <li>Invita a tu equipo para colaborar</li>
          <li>Consulta la documentación para aprovechar todas las funcionalidades</li>
        </ul>
      </div>
    </div>
  );
}

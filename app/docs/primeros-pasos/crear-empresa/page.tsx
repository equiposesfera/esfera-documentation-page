import Image from "next/image";

export default function CrearEmpresaPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Primeros pasos</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Crear empresa
      </h2>
      <p className="text-base leading-7 text-gray-700 md:text-lg">
        Después de verificar tu cuenta, el siguiente paso es crear tu empresa en ESFERA. Este es un paso fundamental para comenzar a usar la plataforma.
      </p>

      {/* Introducción */}
      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-2 font-semibold text-[#2d2d2d]">ℹ️ ¿Por qué crear una empresa?</h4>
        <p className="text-sm text-gray-700">
          La empresa es la entidad principal en ESFERA. Todos los proyectos, usuarios y configuraciones se organizan bajo una empresa. Puedes crear múltiples empresas si gestionas diferentes negocios.
        </p>
      </div>

      {/* Paso 1: Acceder al formulario */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          1. Completar datos de la empresa
        </h3>
        <p className="text-base leading-7 text-gray-700">
          Al iniciar sesión por primera vez, se te presentará un formulario para crear tu empresa. También puedes acceder a este formulario desde la configuración de tu cuenta.
        </p>
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <Image
            src="/registro-creacion_usuario_empresa_proyecto/formulario_nueva_empresa.png"
            alt="Formulario para crear nueva empresa"
            width={1200}
            height={800}
            className="w-full"
          />
        </div>
      </div>

      {/* Campos del formulario */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          2. Información requerida
        </h3>
        <p className="text-base leading-7 text-gray-700">
          Completa todos los campos obligatorios con la información de tu empresa:
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Datos básicos</h4>
            <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
              <li>Nombre de la empresa</li>
              <li>Nombre comercial</li>
              <li>Tipo de empresa</li>
              <li>País y ciudad</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Información fiscal</h4>
            <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
              <li>NIT o identificación fiscal</li>
              <li>Dirección fiscal</li>
              <li>Teléfono de contacto</li>
              <li>Correo corporativo</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Ejemplo de formulario completo */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          3. Ejemplo de formulario completado
        </h3>
        <p className="text-base leading-7 text-gray-700">
          Aquí puedes ver un ejemplo de cómo se vería el formulario completado correctamente:
        </p>
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <Image
            src="/registro-creacion_usuario_empresa_proyecto/formulario_nueva_empresa_lleno.png"
            alt="Ejemplo de formulario de empresa completado"
            width={1200}
            height={800}
            className="w-full"
          />
        </div>
      </div>

      {/* Consejos */}
      <div className="rounded-2xl border-l-4 border-[#f59e0b] bg-orange-50 px-6 py-4">
        <h4 className="mb-2 font-semibold text-[#2d2d2d]">💡 Consejos útiles</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Asegúrate de que la información fiscal sea correcta, ya que se usará en documentos oficiales</li>
          <li>El nombre de la empresa puede editarse posteriormente desde la configuración</li>
          <li>Puedes agregar el logo de tu empresa después de crearla</li>
          <li>Si gestionas múltiples empresas, puedes crear más desde el panel de administración</li>
        </ul>
      </div>
    </div>
  );
}

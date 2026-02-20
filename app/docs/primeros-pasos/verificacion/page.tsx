import Image from "next/image";

export default function VerificacionEmailPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Primeros pasos</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Verificación de email
      </h2>
      <p className="text-base leading-7 text-gray-700 md:text-lg">
        Verifica tu dirección de correo electrónico para activar tu cuenta y acceder a todas las funcionalidades de ESFERA.
      </p>

      {/* Paso 1: Aviso de correo */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          1. Aviso de correo electrónico
        </h3>
        <p className="text-base leading-7 text-gray-700">
          Después de completar el registro, recibirás una notificación indicando que se ha enviado un correo de verificación a tu dirección de email.
        </p>
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <Image
            src="/registro-creacion_usuario_empresa_proyecto/aviso_de_correo_electronico.png"
            alt="Aviso de correo electrónico enviado"
            width={1200}
            height={800}
            className="w-full"
          />
        </div>
      </div>

      {/* Paso 2: Correo de validación */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          2. Revisar correo de validación
        </h3>
        <p className="text-base leading-7 text-gray-700">
          Revisa tu bandeja de entrada y busca el correo de verificación de ESFERA. Si no lo encuentras, revisa la carpeta de spam o correo no deseado.
        </p>
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <Image
            src="/registro-creacion_usuario_empresa_proyecto/correo_de_validacion.png"
            alt="Correo de validación"
            width={1200}
            height={800}
            className="w-full"
          />
        </div>
      </div>

      {/* Paso 3: Hacer clic en el enlace */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          3. Confirmar verificación
        </h3>
        <p className="text-base leading-7 text-gray-700">
          Haz clic en el enlace de verificación del correo para activar tu cuenta. Serás redirigido automáticamente a la plataforma.
        </p>
      </div>

      {/* Nota importante */}
      <div className="rounded-2xl border-l-4 border-[#f59e0b] bg-orange-50 px-6 py-4">
        <h4 className="mb-2 font-semibold text-[#2d2d2d]">⚠️ Nota importante</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>El enlace de verificación expira en 24 horas</li>
          <li>Si no recibiste el correo, puedes solicitar reenvío desde la página de inicio de sesión</li>
          <li>Asegúrate de revisar la carpeta de spam</li>
        </ul>
      </div>
    </div>
  );
}

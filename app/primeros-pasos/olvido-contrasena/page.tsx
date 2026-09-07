import Image from "next/image";

export default function OlvidoContrasenaPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Primeros pasos</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Olvido de contraseña
      </h2>
      <p className="text-base leading-7 text-gray-700 md:text-lg">
        Si olvidaste tu contraseña, sigue estos pasos para restablecerla y recuperar el acceso a tu cuenta.
      </p>

      {/* Paso 1: Solicitar recuperación */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          1. Solicitar recuperación de contraseña
        </h3>
        <p className="text-base leading-7 text-gray-700">
          En la página de inicio de sesión, haz clic en &ldquo;¿Olvidaste tu contraseña?&rdquo; e ingresa tu dirección de correo electrónico registrada.
        </p>
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <Image
            src="/registro-creacion_usuario_empresa_proyecto/olvido-contasena.png"
            alt="Formulario de olvido de contraseña"
            width={1200}
            height={800}
            className="w-full"
          />
        </div>
      </div>

      {/* Paso 2: Aviso de correo */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          2. Confirmación de envío
        </h3>
        <p className="text-base leading-7 text-gray-700">
          Recibirás una confirmación indicando que se ha enviado un correo con instrucciones para restablecer tu contraseña.
        </p>
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <Image
            src="/registro-creacion_usuario_empresa_proyecto/aviso-correo-olvido-contrasena.png"
            alt="Aviso de envío de correo para restablecer contraseña"
            width={1200}
            height={800}
            className="w-full"
          />
        </div>
      </div>

      {/* Paso 3: Email de recuperación */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          3. Correo de recuperación
        </h3>
        <p className="text-base leading-7 text-gray-700">
          Revisa tu correo electrónico y haz clic en el enlace proporcionado para crear una nueva contraseña. El enlace tiene una validez de 1 hora.
        </p>
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <Image
            src="/registro-creacion_usuario_empresa_proyecto/email-olvido-contrasena.png"
            alt="Correo electrónico de recuperación de contraseña"
            width={1200}
            height={800}
            className="w-full"
          />
        </div>
      </div>

      {/* Consejos de seguridad */}
      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-2 font-semibold text-[#2d2d2d]">🔒 Consejos de seguridad</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Crea una contraseña única y segura</li>
          <li>No compartas tu contraseña con nadie</li>
          <li>Si no solicitaste el cambio de contraseña, ignora el correo y contacta a soporte</li>
          <li>Cambia tu contraseña regularmente</li>
        </ul>
      </div>
    </div>
  );
}

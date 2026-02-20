import Image from "next/image";

export default function RegistroCuentaPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Primeros pasos</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Registro de cuenta
      </h2>
      <p className="text-base leading-7 text-gray-700 md:text-lg">
        Aprende a crear tu cuenta en ESFERA completando el proceso de registro paso a paso.
      </p>

      {/* Paso 1: Ingresar datos personales */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          1. Ingresar datos personales
        </h3>
        <p className="text-base leading-7 text-gray-700">
          Completa el formulario con tus datos personales. Asegúrate de ingresar un correo electrónico válido, ya que recibirás un enlace de verificación.
        </p>
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <Image
            src="/registro-creacion_usuario_empresa_proyecto/formulario_de_ingreso_de_datos.png"
            alt="Formulario de ingreso de datos personales"
            width={1200}
            height={800}
            className="w-full"
          />
        </div>
      </div>

      {/* Paso 2: Crear contraseña */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          2. Crear contraseña
        </h3>
        <p className="text-base leading-7 text-gray-700">
          Ingresa una contraseña segura que cumpla con los requisitos de seguridad. La contraseña debe tener al menos 8 caracteres e incluir letras mayúsculas, minúsculas y números.
        </p>
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <Image
            src="/registro-creacion_usuario_empresa_proyecto/formulario_de_ingreso_de_contraseña.png"
            alt="Formulario de ingreso de contraseña"
            width={1200}
            height={800}
            className="w-full"
          />
        </div>
      </div>

      {/* Paso 3: Confirmación */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          3. Confirmación de registro
        </h3>
        <p className="text-base leading-7 text-gray-700">
          Una vez completado el formulario, recibirás una confirmación de que tu registro fue exitoso. Revisa tu correo electrónico para verificar tu cuenta.
        </p>
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <Image
            src="/registro-creacion_usuario_empresa_proyecto/confirmacion_de_registro_exitoso.png"
            alt="Confirmación de registro exitoso"
            width={1200}
            height={800}
            className="w-full"
          />
        </div>
      </div>

      {/* Consejos importantes */}
      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-2 font-semibold text-[#2d2d2d]">💡 Consejos importantes</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Utiliza un correo electrónico al que tengas acceso permanente</li>
          <li>Guarda tu contraseña en un lugar seguro</li>
          <li>Verifica que los datos ingresados sean correctos antes de continuar</li>
        </ul>
      </div>
    </div>
  );
}

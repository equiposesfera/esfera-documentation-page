import Image from "next/image";
import Link from "next/link";

export default function CrearNuevoManoObraPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Análisis de precio unitario</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Crear nueva mano de obra
      </h2>
      <p className="text-base leading-7 text-gray-700 md:text-lg">
        Crea registros de mano de obra individuales usando el formulario guiado. Este método te permite definir cuadrillas, especialidades y costos de forma precisa.
      </p>

      {/* Imagen principal */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
        <Image
          src="/apu/opcion-crear-nuevo-mano-obra.png"
          alt="Crear nueva mano de obra"
          width={1200}
          height={800}
          className="w-full"
        />
      </div>

      {/* Proceso paso a paso */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Proceso de creación
        </h3>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-lg font-bold text-white">
              1
            </div>
            <div className="flex-1">
              <h4 className="mb-1 font-semibold text-[#2d2d2d]">Accede al módulo de mano de obra</h4>
                <p className="text-sm text-gray-700">
                Desde el menú de Análisis de Precio Unitario, selecciona &quot;Mano de obra&quot; y haz clic en &quot;Crear nuevo&quot;.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-lg font-bold text-white">
              2
            </div>
            <div className="flex-1">
              <h4 className="mb-1 font-semibold text-[#2d2d2d]">Completa los datos requeridos</h4>
              <p className="text-sm text-gray-700">
                Ingresa código, descripción, especialidad, costo por hora y unidad de medida (generalmente HH - Horas Hombre).
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-lg font-bold text-white">
              3
            </div>
            <div className="flex-1">
              <h4 className="mb-1 font-semibold text-[#2d2d2d]">Define la cuadrilla (opcional)</h4>
              <p className="text-sm text-gray-700">
                Si trabajas con cuadrillas, especifica la composición (capataz, oficiales, peones) y el factor de rendimiento.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-lg font-bold text-white">
              4
            </div>
            <div className="flex-1">
              <h4 className="mb-1 font-semibold text-[#2d2d2d]">Guarda y verifica</h4>
              <p className="text-sm text-gray-700">
                Revisa que todos los datos sean correctos y guarda. El registro estará disponible inmediatamente para usar en tus ítems.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tipos de mano de obra */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Tipos de mano de obra
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border-2 border-[#4db8a8] bg-[#d4f1eb] p-5">
            <div className="mb-3 text-2xl">👷</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Mano de obra individual</h4>
            <p className="mb-3 text-sm text-gray-700">
              Un solo tipo de trabajador con su costo por hora (ej: Oficial albañil, Peón, Soldador especializado).
            </p>
            <div className="space-y-1 text-xs text-gray-600">
              <div className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                Código único
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                Costo por HH
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                Especialidad
              </div>
            </div>
          </div>
          <div className="rounded-2xl border-2 border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">👥</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Cuadrilla</h4>
            <p className="mb-3 text-sm text-gray-700">
              Grupo de trabajadores que laboran juntos (ej: 1 capataz + 2 oficiales + 4 peones).
            </p>
            <div className="space-y-1 text-xs text-gray-600">
              <div className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                Composición variable
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                Costo combinado
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                Factor de rendimiento
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Datos requeridos */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Datos requeridos
        </h3>
        <div className="space-y-4">
          {/* Información básica */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-3 flex items-center gap-2 font-semibold text-[#2d2d2d]">
              <span className="text-xl">📝</span>
              Información básica
            </h4>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex gap-2">
                <span className="font-medium">Código:</span>
                <span>Identificador único (ej: MO-001, ALB-OF-01)</span>
              </div>
              <div className="flex gap-2">
                <span className="font-medium">Descripción:</span>
                <span>Nombre claro del tipo de trabajador</span>
              </div>
              <div className="flex gap-2">
                <span className="font-medium">Especialidad:</span>
                <span>Categoría (albañil, electricista, plomero, etc.)</span>
              </div>
            </div>
          </div>

          {/* Costos */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-3 flex items-center gap-2 font-semibold text-[#2d2d2d]">
              <span className="text-xl">💰</span>
              Costos
            </h4>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex gap-2">
                <span className="font-medium">Costo por hora:</span>
                <span>Tarifa horaria incluyendo cargas sociales</span>
              </div>
              <div className="flex gap-2">
                <span className="font-medium">Moneda:</span>
                <span>Divisa del costo (Bs, USD, etc.)</span>
              </div>
              <div className="flex gap-2">
                <span className="font-medium">Unidad:</span>
                <span>Generalmente HH (Horas Hombre)</span>
              </div>
            </div>
          </div>

          {/* Composición de cuadrilla */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-3 flex items-center gap-2 font-semibold text-[#2d2d2d]">
              <span className="text-xl">👥</span>
              Composición de cuadrilla (opcional)
            </h4>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex gap-2">
                <span className="font-medium">Capataz:</span>
                <span>Cantidad y costo por hora</span>
              </div>
              <div className="flex gap-2">
                <span className="font-medium">Oficiales:</span>
                <span>Cantidad y costo por hora</span>
              </div>
              <div className="flex gap-2">
                <span className="font-medium">Peones:</span>
                <span>Cantidad y costo por hora</span>
              </div>
              <div className="flex gap-2">
                <span className="font-medium">Factor rendimiento:</span>
                <span>Ajuste de productividad (0.8 - 1.2)</span>
              </div>
            </div>
          </div>

          {/* Información adicional */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-3 flex items-center gap-2 font-semibold text-[#2d2d2d]">
              <span className="text-xl">ℹ️</span>
              Información adicional
            </h4>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex gap-2">
                <span className="font-medium">Notas:</span>
                <span>Observaciones sobre rendimiento o condiciones</span>
              </div>
              <div className="flex gap-2">
                <span className="font-medium">Categoría:</span>
                <span>Clasificación para organización</span>
              </div>
              <div className="flex gap-2">
                <span className="font-medium">Estado:</span>
                <span>Activo o inactivo</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Uso en ítems */}
      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-2 font-semibold text-[#2d2d2d]">🔗 Uso en ítems de APU</h4>
        <p className="text-sm text-gray-700">
          Una vez creada la mano de obra, podrás agregarla como componente en tus análisis de precio unitario, 
          especificando el rendimiento (cuántas HH se necesitan por unidad de ítem). El costo se calculará 
          automáticamente multiplicando el costo por hora por el rendimiento.
        </p>
      </div>

      {/* Mejores prácticas */}
      <div className="rounded-2xl border-l-4 border-[#f59e0b] bg-orange-50 px-6 py-4">
        <h4 className="mb-2 font-semibold text-[#2d2d2d]">💡 Mejores prácticas</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Usa códigos consistentes que identifiquen especialidad y nivel (ej: ALB-OF, ELE-PE)</li>
          <li>Incluye cargas sociales y beneficios en el costo por hora</li>
          <li>Actualiza regularmente los costos según convenios laborales</li>
          <li>Define cuadrillas para actividades que requieren trabajo en equipo</li>
          <li>Documenta el factor de rendimiento basado en experiencia de proyectos previos</li>
          <li>Mantén categorías claras para facilitar búsquedas (oficial, peón, especializado)</li>
        </ul>
      </div>

      {/* Navegación */}
      <div className="flex flex-wrap gap-4">
        <Link 
          href="/analisis-precio-unitario/mano-de-obra"
          className="rounded-xl bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
        >
          ← Volver a mano de obra
        </Link>
        <Link 
          href="/analisis-precio-unitario/mano-de-obra/importar-desde-csv"
          className="rounded-xl bg-[#4db8a8] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#3da799]"
        >
          Ver importación desde CSV →
        </Link>
      </div>
    </div>
  );
}

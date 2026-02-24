import Image from "next/image";
import Link from "next/link";

export default function SalidasAlmacenPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Almacén</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Salidas de almacén
      </h2>
      <p className="text-base leading-7 text-gray-700 md:text-lg">
        Las salidas asignan materiales del almacén a un item específ�ico y una etapa (piso) de la obra.
        Cada salida reduce el stock disponible y traza hacia dónde van los materiales.
      </p>

      <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
        <Image
          src="/almacen/salidas-almacen.png"
          alt="Registro de salidas de almacén"
          width={1200}
          height={800}
          className="w-full"
        />
      </div>

      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">💭box ¿Qué es una salida?</h4>
        <p className="text-sm text-gray-700">
          Es el registr�io del envío de materiales desde el almacén hacia un item y etapa de la obra.
          Especificas qué material sale, en qué cantidad, a qué item se asigna y en qué etapa (piso) se usará.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Pasos para registrar una salida
        </h3>
        <div className="space-y-4">
          {[
            {
              title: "Accede a Salidas",
              desc: "En la sección de Almacén, selecciona Salidas para ver el registro de asignaciones.",
            },
            {
              title: "Haz click en \"Nueva salida\"",
              desc: "Se abre el formulario para registrar un envío de materiales desde el almacén.",
            },
            {
              title: "Selecciona el material",
              desc: "Elige el material disponible en almacén que deseas enviar. Solo aparecen materiales con stock.",
            },
            {
              title: "Ingresa la cantidad",
              desc: "Especifica cuántas unidades del material se envían. No puede exceder el stock disponible.",
            },
            {
              title: "Asigna a un item",
              desc: "Selecciona a qué item del presupuesto se asigna este material.",
            },
            {
              title: "Especifica la etapa",
              desc: "Indica en qué piso o etapa de la obra se usará este material.",
            },
            {
              title: "Agrega observaciones (opcional)",
              desc: "Notas sobre prioridad, cambios o comentarios especiales de la salida.",
            },
            {
              title: "Guarda la salida",
              desc: "La salida se registra, el stock disponible se reduce y queda trazada la asignación.",
            },
          ].map((step, index) => (
            <div key={step.title} className="flex gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-lg font-bold text-white">
                {index + 1}
              </div>
              <div className="flex-1">
                <h4 className="mb-1 font-semibold text-[#2d2d2d]">{step.title}</h4>
                <p className="text-sm text-gray-700">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Asignación a item y etapa
        </h3>
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <Image
            src="/almacen/salida-asignacion-items-etapas.png"
            alt="Asignación de material a item y etapa"
            width={1200}
            height={700}
            className="w-full"
          />
        </div>
        <p className="text-sm text-gray-700">
          Cada salida debe vincularse a un item del presupuesto y una etapa específica para que se conozca
          exactamente dónde está cada material enviado desde almacén.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Datos en una salida
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Material</h4>
            <p className="text-sm text-gray-700">
              Qué material se está asignando (cemento, acero, arena, tubería, etc.).
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Cantidad salida</h4>
            <p className="text-sm text-gray-700">
              Cuántas unidades se envían desde almacén a obra.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Item destino</h4>
            <p className="text-sm text-gray-700">
              A qué partida del presupuesto se carga este material.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Etapa (Piso)</h4>
            <p className="text-sm text-gray-700">
              En qué nivel o fase de la obra se usa este material.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Fecha de salida</h4>
            <p className="text-sm text-gray-700">
              Cuándo se envió el material desde el almacén.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Observaciones</h4>
            <p className="text-sm text-gray-700">
              Notas sobre urgencia, cambios o condiciones especiales.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Operaciones sobre salidas
        </h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border-2 border-[#4db8a8] bg-[#d4f1eb] p-5">
            <div className="mb-3 text-2xl">👁️</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Ver salidas</h4>
            <p className="text-sm text-gray-700">
              Visualiza el listado de todas las salidas registradas, filtradas por material, item o etapa.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">✏️</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Editar salida</h4>
            <p className="text-sm text-gray-700">
              Modifica cantidad, item o etapa asignada antes de confirmar la salida.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">🗑️</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Anular salida</h4>
            <p className="text-sm text-gray-700">
              Suprime una salida y devuelve el stock al almacén (si se fue sin usar).
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border-l-4 border-[#f59e0b] bg-orange-50 px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">⚠️ Consideraciones importantes</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Solo puedes hacer salidas de materiales con stock disponible</li>
          <li>La cantidad no puede exceder el stock en almacén</li>
          <li>Cada salida debe asignarse a un item y etapa específicos</li>
          <li>No puedes hacer salidas a materiales sin stock (genera ruptura)</li>
          <li>Las salidas reduce automáticamente el stock disponible</li>
        </ul>
      </div>

      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">💡 Buenas prácticas</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Asigna salidas específicamente a items cuando sea posible</li>
          <li>Especifica siempre la etapa (piso) para trazabilidad</li>
          <li>Revisa stock regularmente para evitar asignaciones ambiguas</li>
          <li>Documenta cambios o variantes en observaciones</li>
          <li>Coordina con supervisores de obra antes de asignar a etapas</li>
        </ul>
      </div>

      <div className="rounded-2xl border-2 border-[#4db8a8] bg-white p-6">
        <h4 className="mb-3 flex items-center gap-2 font-semibold text-[#2d2d2d]">
          <span className="text-xl">▶️</span>
          Siguiente paso: Consultar Stock
        </h4>
        <p className="mb-4 text-sm text-gray-700">
          Después de entradas y salidas, ve a Stock para visualizar los materiales disponibles
          en tiempo real en el almacén.
        </p>
        <Link
          href="/docs/almacen/stock"
          className="inline-block rounded-xl bg-[#4db8a8] px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-[#3da799]"
        >
          Ver Stock →
        </Link>
      </div>
    </div>
  );
}

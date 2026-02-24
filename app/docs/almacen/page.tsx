import Image from "next/image";
import Link from "next/link";

export default function AlmacenPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Almacén</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Gestión de almacén
      </h2>
      <p className="text-base leading-7 text-gray-700 md:text-lg">
        El módulo de almacén controla el flujo de materiales desde su ingreso hasta su uso en obra.
        Registra entradas, realiza salidas asignadas a ítems y etapas, y mantiene visible el stock disponible.
      </p>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Flujo de almacén
        </h3>
        <p className="text-base leading-7 text-gray-700">
          El proceso de gestión de materiales sigue estos pasos:
        </p>
        <div className="space-y-3">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-lg font-bold text-white">
              1
            </div>
            <div className="flex-1">
              <h4 className="mb-1 font-semibold text-[#2d2d2d]">Registrar entradas</h4>
              <p className="text-sm text-gray-700">
                Cuando llegan los materiales de una orden de compra pagada, los registras en Entradas.
                El sistema actualiza automáticamente el stock disponible.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-lg font-bold text-white">
              2
            </div>
            <div className="flex-1">
              <h4 className="mb-1 font-semibold text-[#2d2d2d]">Hacer salidas asignadas</h4>
              <p className="text-sm text-gray-700">
                En Salidas, asignas materiales del almacén a un item específico en una etapa (piso) de la obra.
                Especificas cantidad y destino del material.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-lg font-bold text-white">
              3
            </div>
            <div className="flex-1">
              <h4 className="mb-1 font-semibold text-[#2d2d2d]">Consultar stock disponible</h4>
              <p className="text-sm text-gray-700">
                En Stock visualizas en tiempo real qué materiales hay disponibles en almacén
                después de todas las entradas y salidas.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Secciones de almacén
        </h3>
        <div className="grid gap-6 md:grid-cols-3">
          <Link href="/docs/almacen/entradas" className="group">
            <div className="h-full rounded-2xl border-2 border-[#4db8a8] bg-[#d4f1eb] p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 text-4xl">📦</div>
              <h4 className="mb-3 text-lg font-semibold text-[#2d2d2d] group-hover:text-[#4db8a8]">
                Entradas
              </h4>
              <p className="mb-4 text-sm text-gray-700">
                Registra materiales que ingresan de órdenes de compra. Actualiza stock disponible.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                  Nueva entrada
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                  Conectar orden de compra
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                  Verificar cantidad
                </div>
              </div>
              <div className="mt-4 text-sm font-semibold text-[#4db8a8] group-hover:underline">
                Ver más →
              </div>
            </div>
          </Link>

          <Link href="/docs/almacen/salidas" className="group">
            <div className="h-full rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-[#4db8a8] hover:shadow-md">
              <div className="mb-4 text-4xl">💭box</div>
              <h4 className="mb-3 text-lg font-semibold text-[#2d2d2d] group-hover:text-[#4db8a8]">
                Salidas
              </h4>
              <p className="mb-4 text-sm text-gray-700">
                Asigna materiales a items y etapas específicas. Controla consumo de materiales.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                  Nueva salida
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                  Asignar a item
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                  Especificar etapa
                </div>
              </div>
              <div className="mt-4 text-sm font-semibold text-[#4db8a8] group-hover:underline">
                Ver más →
              </div>
            </div>
          </Link>

          <Link href="/docs/almacen/stock" className="group">
            <div className="h-full rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-[#4db8a8] hover:shadow-md">
              <div className="mb-4 text-4xl">📊</div>
              <h4 className="mb-3 text-lg font-semibold text-[#2d2d2d] group-hover:text-[#4db8a8]">
                Stock
              </h4>
              <p className="mb-4 text-sm text-gray-700">
                Consulta materiales disponibles en almacén. Visualiza niveles en tiempo real.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                  Ver existencias
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                  Disponibles por material
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                  Alertas de bajo stock
                </div>
              </div>
              <div className="mt-4 text-sm font-semibold text-[#4db8a8] group-hover:underline">
                Ver más →
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">ℹ️ Relación con compras y obra</h4>
        <div className="space-y-2 text-sm text-gray-700">
          <p>
            El almacén depende de <strong>Órdenes de compra pagadas</strong>. Solo las entregas de órdenes
            pagadas pueden registrarse como entradas.
          </p>
          <p>
            Los materiales se asignan a <strong>Ítems y etapas de la obra</strong>, controlando cuál es el destino
            de cada material enviado desde el almacén.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border-l-4 border-[#f59e0b] bg-orange-50 px-6 py-4">
        <h4 className="mb-2 font-semibold text-[#2d2d2d]">💡 Mejores prácticas</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Registra entradas inmediatamente al recibir los materiales</li>
          <li>Verifica cantidad y calidad en cada entrada</li>
          <li>Asigna salidas a item y etapa específicos para trazabilidad</li>
          <li>Revisa stock regularmente para evitar ruptura de inventario</li>
          <li>Documenta motivos de salidas no planeadas</li>
        </ul>
      </div>
    </div>
  );
}

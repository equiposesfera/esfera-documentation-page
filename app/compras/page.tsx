import Link from "next/link";

export default function ComprasPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Compras</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Gestión de compras
      </h2>
      <p className="text-base leading-7 text-gray-700 md:text-lg">
        El módulo de compras permite solicitar materiales, cotizar con proveedores, autorizar gastos
        y generar órdenes de compra. Controla todo el ciclo desde la necesidad hasta el pago.
      </p>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Flujo de compras
        </h3>
        <p className="text-base leading-7 text-gray-700">
          El proceso de compras sigue estos pasos:
        </p>
        <div className="space-y-3">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-lg font-bold text-white">
              1
            </div>
            <div className="flex-1">
              <h4 className="mb-1 font-semibold text-[#2d2d2d]">Crear pedido</h4>
              <p className="text-sm text-gray-700">
                Registras un pedido con uno o más materiales necesarios. El pedido debe ser autorizado
                antes de pasar a cotización.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-lg font-bold text-white">
              2
            </div>
            <div className="flex-1">
              <h4 className="mb-1 font-semibold text-[#2d2d2d]">Cotizar materiales</h4>
              <p className="text-sm text-gray-700">
                En Cotizaciones, seleccionas el pedido autorizado y agregas uno o más proveedores para cada
                material, con sus precios y condiciones.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-lg font-bold text-white">
              3
            </div>
            <div className="flex-1">
              <h4 className="mb-1 font-semibold text-[#2d2d2d]">Autorizar cotización</h4>
              <p className="text-sm text-gray-700">
                En Autorizaciones revisas y apruebas la cotización. Este paso valida que los proveedores
                y precios cumplan con políticas de la empresa.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-lg font-bold text-white">
              4
            </div>
            <div className="flex-1">
              <h4 className="mb-1 font-semibold text-[#2d2d2d]">Generar orden de compra</h4>
              <p className="text-sm text-gray-700">
                Una vez autorizada, generas la orden de compra seleccionando el proveedor con mejor oferta.
                La orden queda lista para enviar y hacer seguimiento.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-lg font-bold text-white">
              5
            </div>
            <div className="flex-1">
              <h4 className="mb-1 font-semibold text-[#2d2d2d]">Pagar orden de compra</h4>
              <p className="text-sm text-gray-700">
                En el listado de órdenes, das click en el estado y seleccionas &quot;Pagar&quot; para registrar
                el pago total o parcial de la orden.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Secciones de compras
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          <Link href="/compras/pedidos" className="group">
            <div className="h-full rounded-2xl border-2 border-[#4db8a8] bg-[#d4f1eb] p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 text-4xl">📝</div>
              <h4 className="mb-3 text-lg font-semibold text-[#2d2d2d] group-hover:text-[#4db8a8]">
                Pedidos
              </h4>
              <p className="mb-4 text-sm text-gray-700">
                Crea solicitudes de compra con los materiales necesarios. Autoriza pedidos antes de cotizar.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                  Nuevo pedido
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                  Agregar materiales
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                  Autorizar pedido
                </div>
              </div>
              <div className="mt-4 text-sm font-semibold text-[#4db8a8] group-hover:underline">
                Ver más →
              </div>
            </div>
          </Link>

          <Link href="/compras/cotizaciones" className="group">
            <div className="h-full rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-[#4db8a8] hover:shadow-md">
              <div className="mb-4 text-4xl">💰</div>
              <h4 className="mb-3 text-lg font-semibold text-[#2d2d2d] group-hover:text-[#4db8a8]">
                Cotizaciones
              </h4>
              <p className="mb-4 text-sm text-gray-700">
                Solicita precios a proveedores para cada material. Compara ofertas y condiciones.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                  Cotizar materiales
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                  Agregar proveedores
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                  Comparar precios
                </div>
              </div>
              <div className="mt-4 text-sm font-semibold text-[#4db8a8] group-hover:underline">
                Ver más →
              </div>
            </div>
          </Link>

          <Link href="/compras/autorizaciones" className="group">
            <div className="h-full rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-[#4db8a8] hover:shadow-md">
              <div className="mb-4 text-4xl">✅</div>
              <h4 className="mb-3 text-lg font-semibold text-[#2d2d2d] group-hover:text-[#4db8a8]">
                Autorizaciones
              </h4>
              <p className="mb-4 text-sm text-gray-700">
                Aprueba cotizaciones antes de generar órdenes de compra. Control de gastos y políticas.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                  Revisar cotizaciones
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                  Autorizar compra
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                  Historial de aprobaciones
                </div>
              </div>
              <div className="mt-4 text-sm font-semibold text-[#4db8a8] group-hover:underline">
                Ver más →
              </div>
            </div>
          </Link>

          <Link href="/compras/ordenes-de-compra" className="group">
            <div className="h-full rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-[#4db8a8] hover:shadow-md">
              <div className="mb-4 text-4xl">📋</div>
              <h4 className="mb-3 text-lg font-semibold text-[#2d2d2d] group-hover:text-[#4db8a8]">
                Órdenes de compra
              </h4>
              <p className="mb-4 text-sm text-gray-700">
                Genera órdenes con proveedores seleccionados. Gestiona pagos y seguimiento de entregas.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                  Generar orden
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                  Pagar orden
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                  Seguimiento de entregas
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
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">ℹ️ Beneficios del flujo completo</h4>
        <div className="space-y-2 text-sm text-gray-700">
          <p>
            El flujo estructurado de compras asegura <strong>trazabilidad</strong> desde la necesidad hasta el pago,
            permitiendo auditorías y control de presupuesto.
          </p>
          <p>
            Las autorizaciones en cada etapa garantizan que las compras cumplan con <strong>políticas internas</strong>
            y presupuestos aprobados.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border-l-4 border-[#f59e0b] bg-orange-50 px-6 py-4">
        <h4 className="mb-2 font-semibold text-[#2d2d2d]">💡 Mejores prácticas</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Crea pedidos con descripción clara de materiales y cantidades</li>
          <li>Cotiza con al menos 3 proveedores para comparar ofertas</li>
          <li>Documenta criterios de selección del proveedor</li>
          <li>Autoriza solo compras dentro del presupuesto aprobado</li>
          <li>Registra pagos inmediatamente para mantener actualizado el flujo de caja</li>
        </ul>
      </div>
    </div>
  );
}

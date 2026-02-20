import Image from "next/image";
import Link from "next/link";

export default function ItemsAnalisisPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Análisis de precio unitario</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Ítems
      </h2>
      <p className="text-base leading-7 text-gray-700 md:text-lg">
        Los ítems son la base del análisis de precio unitario en ESFERA. Un ítem representa una actividad o partida de construcción con todos sus componentes: materiales, mano de obra, equipos y herramientas necesarias para su ejecución.
      </p>

      {/* ¿Qué es un ítem? */}
      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">📋 ¿Qué es un ítem de construcción?</h4>
        <p className="mb-3 text-sm text-gray-700">
          Un ítem es una unidad de trabajo claramente definida con un precio unitario específico. Por ejemplo: "Vaciado de concreto f'c=210 kg/cm²" medido en m³, o "Instalación de puerta de madera" medido por unidad.
        </p>
        <p className="text-sm text-gray-700">
          Cada ítem incluye el desglose completo de todos los recursos necesarios (materiales, mano de obra, equipos) para realizar una unidad de medida de esa actividad.
        </p>
      </div>

      {/* Tres formas de crear ítems */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Tres formas de crear ítems en ESFERA
        </h3>
        <p className="text-base leading-7 text-gray-700">
          ESFERA te ofrece tres métodos para agregar ítems a tu catálogo, cada uno diseñado para diferentes necesidades y situaciones:
        </p>
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <Image
            src="/apu/items-opciones.png"
            alt="Tres opciones para crear ítems en ESFERA"
            width={1200}
            height={800}
            className="w-full"
          />
        </div>
      </div>

      {/* Opciones de creación */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* Opción 1: Importar desde ESFERA */}
        <Link href="/docs/analisis-precio-unitario/items/importar-desde-esfera" className="group">
          <div className="h-full rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-[#4db8a8] hover:shadow-md">
            <div className="mb-4 text-4xl">🏗️</div>
            <h4 className="mb-3 text-lg font-semibold text-[#2d2d2d] group-hover:text-[#4db8a8]">
              Importar desde ESFERA
            </h4>
            <p className="mb-4 text-sm text-gray-700">
              Usa el catálogo predefinido de ESFERA con ítems estándar de construcción listos para usar.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                Ítems precargados
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                APUs completos
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                Rápido y fácil
              </div>
            </div>
            <div className="mt-4 text-sm font-semibold text-[#4db8a8] group-hover:underline">
              Ver más →
            </div>
          </div>
        </Link>

        {/* Opción 2: Importar desde Excel */}
        <Link href="/docs/analisis-precio-unitario/items/importar-desde-excel" className="group">
          <div className="h-full rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-[#4db8a8] hover:shadow-md">
            <div className="mb-4 text-4xl">📊</div>
            <h4 className="mb-3 text-lg font-semibold text-[#2d2d2d] group-hover:text-[#4db8a8]">
              Importar desde Excel
            </h4>
            <p className="mb-4 text-sm text-gray-700">
              Descarga la plantilla, complétala con tus datos y súbela para importar múltiples ítems.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                Importación masiva
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                Plantilla base
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                Trabajo offline
              </div>
            </div>
            <div className="mt-4 text-sm font-semibold text-[#4db8a8] group-hover:underline">
              Ver más →
            </div>
          </div>
        </Link>

        {/* Opción 3: Crear desde cero */}
        <Link href="/docs/analisis-precio-unitario/items/crear-desde-cero" className="group">
          <div className="h-full rounded-2xl border-2 border-[#4db8a8] bg-[#d4f1eb] p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-2 inline-block rounded-full bg-[#4db8a8] px-3 py-1 text-xs font-semibold text-white">
              Más usado
            </div>
            <div className="mb-4 text-4xl">✏️</div>
            <h4 className="mb-3 text-lg font-semibold text-[#2d2d2d] group-hover:text-[#4db8a8]">
              Crear desde cero
            </h4>
            <p className="mb-4 text-sm text-gray-700">
              Crea ítems personalizados especificando materiales, mano de obra, equipos y herramientas.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                Control total
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                Personalización completa
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                APU detallado
              </div>
            </div>
            <div className="mt-4 text-sm font-semibold text-[#4db8a8] group-hover:underline">
              Ver más →
            </div>
          </div>
        </Link>
      </div>

      {/* Comparación de métodos */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          ¿Cuál método elegir?
        </h3>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-[#2d2d2d]">Método</th>
                <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-[#2d2d2d]">Mejor para</th>
                <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-[#2d2d2d]">Ventajas</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="border-b border-gray-100 px-4 py-3 font-medium text-gray-700">Importar desde ESFERA</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Proyectos estándar, inicio rápido</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Rapidez, ítems validados</td>
              </tr>
              <tr>
                <td className="border-b border-gray-100 px-4 py-3 font-medium text-gray-700">Importar desde Excel</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Migración de catálogos, grandes volúmenes</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Masividad, trabajo offline</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">Crear desde cero</td>
                <td className="px-4 py-3 text-gray-700">Ítems especializados, control total</td>
                <td className="px-4 py-3 text-gray-700">Precisión, personalización</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Componentes de un ítem */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Componentes de un ítem
        </h3>
        <p className="text-base leading-7 text-gray-700">
          Independientemente del método que elijas, un ítem completo incluye:
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-3 flex items-center gap-2 font-semibold text-[#2d2d2d]">
              <span className="text-xl">📦</span>
              Materiales y servicios
            </h4>
            <p className="text-sm text-gray-700">
              Todos los insumos necesarios con cantidades, unidades y precios unitarios.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-3 flex items-center gap-2 font-semibold text-[#2d2d2d]">
              <span className="text-xl">👷</span>
              Mano de obra
            </h4>
            <p className="text-sm text-gray-700">
              Personal requerido con rendimientos, jornales y beneficios sociales.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-3 flex items-center gap-2 font-semibold text-[#2d2d2d]">
              <span className="text-xl">🚜</span>
              Equipos y maquinarias
            </h4>
            <p className="text-sm text-gray-700">
              Maquinaria necesaria con horas de uso y tarifas de alquiler u operación.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-3 flex items-center gap-2 font-semibold text-[#2d2d2d]">
              <span className="text-xl">🔧</span>
              Herramientas
            </h4>
            <p className="text-sm text-gray-700">
              Herramientas menores calculadas como % de mano de obra o valor específico.
            </p>
          </div>
        </div>
      </div>

      {/* Consejos */}
      <div className="rounded-2xl border-l-4 border-[#f59e0b] bg-orange-50 px-6 py-4">
        <h4 className="mb-2 font-semibold text-[#2d2d2d]">💡 Recomendaciones</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Combina métodos: importa ítems base de ESFERA y personalízalos según tu necesidad</li>
          <li>Mantén un catálogo organizado con códigos consistentes y categorías claras</li>
          <li>Actualiza regularmente los precios de tu catálogo según el mercado</li>
          <li>Documenta las fuentes de tus rendimientos y precios para futuras referencias</li>
        </ul>
      </div>
    </div>
  );
}

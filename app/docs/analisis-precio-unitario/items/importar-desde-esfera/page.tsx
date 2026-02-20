import Image from "next/image";

export default function ImportarDesdeEsferaPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Análisis de precio unitario</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Importar desde ESFERA
      </h2>
      <p className="text-base leading-7 text-gray-700 md:text-lg">
        Aprovecha el catálogo predefinido de ítems que ESFERA te ofrece. Importa ítems estándar de construcción con precios, materiales, mano de obra y equipos ya configurados.
      </p>

      {/* Visualización de la opción */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Acceder a la opción
        </h3>
        <p className="text-base leading-7 text-gray-700">
          En el módulo de Análisis de Precio Unitario, encontrarás la opción de importar ítems desde el catálogo de ESFERA.
        </p>
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <Image
            src="/apu/opcion-importar-items-desde-esfera.png"
            alt="Opción de importar ítems desde ESFERA"
            width={1200}
            height={800}
            className="w-full"
          />
        </div>
      </div>

      {/* Ventajas */}
      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">✨ Ventajas de importar desde ESFERA</h4>
        <ul className="list-inside list-disc space-y-2 text-sm text-gray-700">
          <li><strong>Ahorra tiempo:</strong> No necesitas crear ítems desde cero</li>
          <li><strong>Ítems estandarizados:</strong> Basados en prácticas de la industria de construcción</li>
          <li><strong>Preconfigurados:</strong> Incluyen materiales, mano de obra, equipos y rendimientos</li>
          <li><strong>Personalizables:</strong> Puedes ajustar los ítems importados según tus necesidades</li>
          <li><strong>Actualizados:</strong> El catálogo se actualiza regularmente con precios de mercado</li>
        </ul>
      </div>

      {/* Cómo importar */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Cómo importar ítems desde ESFERA
        </h3>
        <div className="space-y-3">
          <div className="flex gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white">1</span>
            <div>
              <h4 className="font-semibold text-[#2d2d2d]">Accede al módulo de ítems</h4>
              <p className="text-sm text-gray-700">Ve a "Análisis de precio unitario" → "Ítems" en tu proyecto</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white">2</span>
            <div>
              <h4 className="font-semibold text-[#2d2d2d]">Selecciona "Importar desde ESFERA"</h4>
              <p className="text-sm text-gray-700">Haz clic en el botón de importación y elige esta opción</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white">3</span>
            <div>
              <h4 className="font-semibold text-[#2d2d2d]">Explora el catálogo</h4>
              <p className="text-sm text-gray-700">Busca y filtra por categorías, grupos o palabras clave</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white">4</span>
            <div>
              <h4 className="font-semibold text-[#2d2d2d]">Selecciona los ítems</h4>
              <p className="text-sm text-gray-700">Marca los ítems que deseas agregar a tu proyecto</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white">5</span>
            <div>
              <h4 className="font-semibold text-[#2d2d2d]">Importa a tu catálogo</h4>
              <p className="text-sm text-gray-700">Los ítems se agregarán automáticamente a tu catálogo de proyecto</p>
            </div>
          </div>
        </div>
      </div>

      {/* Categorías disponibles */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Categorías disponibles en el catálogo
        </h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">🏗️</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Obras preliminares</h4>
            <p className="text-sm text-gray-700">Replanteo, demoliciones, excavaciones, limpieza de terreno</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">🧱</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Estructura</h4>
            <p className="text-sm text-gray-700">Concreto, encofrado, acero, cimentaciones, columnas, vigas</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">🧰</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Albañilería</h4>
            <p className="text-sm text-gray-700">Muros, tabiques, revoques, enlucidos, pisos</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">🎨</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Acabados</h4>
            <p className="text-sm text-gray-700">Pinturas, revestimientos, cielos rasos, carpintería</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">⚡</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Instalaciones</h4>
            <p className="text-sm text-gray-700">Eléctricas, sanitarias, gas, telecomunicaciones</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">🌳</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Exteriores</h4>
            <p className="text-sm text-gray-700">Jardines, pavimentos, cercos, áreas verdes</p>
          </div>
        </div>
      </div>

      {/* Después de importar */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Después de importar
        </h3>
        <p className="text-base leading-7 text-gray-700">
          Una vez importados los ítems a tu catálogo, puedes:
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex gap-3 rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <span className="text-xl">✏️</span>
            <div>
              <h4 className="font-semibold text-[#2d2d2d]">Editar componentes</h4>
              <p className="text-sm text-gray-700">Ajusta materiales, cantidades, rendimientos según tu región</p>
            </div>
          </div>
          <div className="flex gap-3 rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <span className="text-xl">💰</span>
            <div>
              <h4 className="font-semibold text-[#2d2d2d]">Actualizar precios</h4>
              <p className="text-sm text-gray-700">Modifica precios de materiales y mano de obra a tu mercado local</p>
            </div>
          </div>
          <div className="flex gap-3 rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <span className="text-xl">📊</span>
            <div>
              <h4 className="font-semibold text-[#2d2d2d]">Agregar al presupuesto</h4>
              <p className="text-sm text-gray-700">Usa los ítems directamente en tu presupuesto de obra</p>
            </div>
          </div>
          <div className="flex gap-3 rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <span className="text-xl">🔄</span>
            <div>
              <h4 className="font-semibold text-[#2d2d2d]">Duplicar y modificar</h4>
              <p className="text-sm text-gray-700">Crea variantes del ítem para diferentes escenarios</p>
            </div>
          </div>
        </div>
      </div>

      {/* Consejos */}
      <div className="rounded-2xl border-l-4 border-[#f59e0b] bg-orange-50 px-6 py-4">
        <h4 className="mb-2 font-semibold text-[#2d2d2d]">💡 Consejos útiles</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Revisa los componentes del ítem antes de usarlo en tu presupuesto</li>
          <li>Ajusta los precios a tu mercado local para mayor precisión</li>
          <li>Verifica que las unidades de medida coincidan con tu proyecto</li>
          <li>Puedes importar múltiples ítems a la vez para agilizar el proceso</li>
        </ul>
      </div>
    </div>
  );
}

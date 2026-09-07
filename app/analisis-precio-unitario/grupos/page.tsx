export default function GruposPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Análisis de precio unitario</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Grupos
      </h2>
      <p className="text-base leading-7 text-gray-700 md:text-lg">
        Organiza tus materiales, mano de obra y equipos en grupos temáticos. Los grupos permiten clasificar y agrupar insumos similares para facilitar búsquedas y gestión.
      </p>

      {/* ¿Qué son los grupos? */}
      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">📂 ¿Qué son los grupos?</h4>
        <p className="mb-3 text-sm text-gray-700">
          Los grupos son categorías de segundo nivel que agrupan insumos relacionados dentro de una categoría principal. 
          Por ejemplo, dentro de la categoría &quot;Materiales de construcción&quot; podrías tener grupos como &quot;Cemento y cal&quot;, &quot;Agregados&quot;, &quot;Acero&quot;, etc.
        </p>
        <p className="text-sm text-gray-700">
          Los grupos facilitan la organización jerárquica de tu catálogo y permiten búsquedas más rápidas y precisas.
        </p>
      </div>

      {/* Operaciones disponibles */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Operaciones disponibles
        </h3>
        <p className="text-base leading-7 text-gray-700">
          En la sección de grupos puedes realizar tres operaciones principales:
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border-2 border-[#4db8a8] bg-[#d4f1eb] p-5">
            <div className="mb-3 text-2xl">➕</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Crear</h4>
            <p className="text-sm text-gray-700">
              Crea nuevos grupos para clasificar tus insumos según lo que mejor se adapte a tu organización.
            </p>
          </div>
          <div className="rounded-2xl border-2 border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">✏️</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Modificar</h4>
            <p className="text-sm text-gray-700">
              Edita el nombre y descripción de grupos existentes para mantenerlos actualizados.
            </p>
          </div>
          <div className="rounded-2xl border-2 border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">🗑️</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Eliminar</h4>
            <p className="text-sm text-gray-700">
              Suprime grupos que ya no uses (solo si no tienen insumos asignados).
            </p>
          </div>
        </div>
      </div>

      {/* Estructura jerárquica */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Estructura jerárquica
        </h3>
        <p className="text-base leading-7 text-gray-700">
          Los grupos se organizan en una jerarquía de dos niveles:
        </p>
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <div className="space-y-4">
            {/* Nivel 1 */}
            <div className="rounded-lg border-l-4 border-[#4db8a8] bg-white p-4">
              <div className="mb-3 text-sm font-semibold text-[#4db8a8]">NIVEL 1: CATEGORÍA</div>
              <div className="mb-2 text-lg font-medium text-[#2d2d2d]">Materiales de construcción</div>
              <p className="text-sm text-gray-700">
                Categoría principal que engloba todo tipo de materiales
              </p>
            </div>

            {/* Flecha */}
            <div className="flex justify-center">
              <div className="text-gray-400">▼</div>
            </div>

            {/* Nivel 2 */}
            <div className="space-y-2">
              <div className="rounded-lg border-l-4 border-gray-300 bg-white p-4">
                <div className="mb-1 text-xs font-semibold text-gray-500">NIVEL 2: GRUPO</div>
                <div className="text-base font-medium text-gray-700">Cemento y cal</div>
              </div>
              <div className="rounded-lg border-l-4 border-gray-300 bg-white p-4">
                <div className="mb-1 text-xs font-semibold text-gray-500">NIVEL 2: GRUPO</div>
                <div className="text-base font-medium text-gray-700">Agregados</div>
              </div>
              <div className="rounded-lg border-l-4 border-gray-300 bg-white p-4">
                <div className="mb-1 text-xs font-semibold text-gray-500">NIVEL 2: GRUPO</div>
                <div className="text-base font-medium text-gray-700">Acero y armaduras</div>
              </div>
              <div className="rounded-lg border-l-4 border-gray-300 bg-white p-4">
                <div className="mb-1 text-xs font-semibold text-gray-500">NIVEL 2: GRUPO</div>
                <div className="text-base font-medium text-gray-700">Acabados y revestimientos</div>
              </div>
            </div>

            {/* Flecha */}
            <div className="flex justify-center">
              <div className="text-gray-400">▼</div>
            </div>

            {/* Insumos */}
            <div className="space-y-2">
              <div className="rounded-lg border-l-4 border-green-300 bg-green-50 p-4">
                <div className="mb-1 text-xs font-semibold text-green-600">INSUMO: Cemento Portland</div>
                <div className="text-sm text-gray-700">Código: CEI-101 | Unidad: bolsa | Precio: Bs 85.50</div>
              </div>
              <div className="rounded-lg border-l-4 border-green-300 bg-green-50 p-4">
                <div className="mb-1 text-xs font-semibold text-green-600">INSUMO: Cal hidratada</div>
                <div className="text-sm text-gray-700">Código: CEI-102 | Unidad: bolsa | Precio: Bs 12.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ejemplos de grupos */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Ejemplos de grupos por categoría
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-3 flex items-center gap-2 font-semibold text-[#2d2d2d]">
              <span className="text-xl">📦</span>
              Materiales
            </h4>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8] flex-shrink-0 mt-1.5"></span>
                <span><strong>Cemento y cal:</strong> Portland, blanca, hidratada</span>
              </div>
              <div className="flex gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8] flex-shrink-0 mt-1.5"></span>
                <span><strong>Agregados:</strong> Arena, grava, piedra tosca</span>
              </div>
              <div className="flex gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8] flex-shrink-0 mt-1.5"></span>
                <span><strong>Acero:</strong> Varillas, malla, perfiles</span>
              </div>
              <div className="flex gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8] flex-shrink-0 mt-1.5"></span>
                <span><strong>Tuberías:</strong> PVC, hierro, cobre</span>
              </div>
              <div className="flex gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8] flex-shrink-0 mt-1.5"></span>
                <span><strong>Acabados:</strong> Pintura, cerámicos, baldosas</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-3 flex items-center gap-2 font-semibold text-[#2d2d2d]">
              <span className="text-xl">👥</span>
              Mano de obra
            </h4>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8] flex-shrink-0 mt-1.5"></span>
                <span><strong>Albañilería:</strong> Oficiales, peones, capataces</span>
              </div>
              <div className="flex gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8] flex-shrink-0 mt-1.5"></span>
                <span><strong>Electricidad:</strong> Maestros, instaladores</span>
              </div>
              <div className="flex gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8] flex-shrink-0 mt-1.5"></span>
                <span><strong>Plomería:</strong> Maestros fontaneros, peones</span>
              </div>
              <div className="flex gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8] flex-shrink-0 mt-1.5"></span>
                <span><strong>Soldadura:</strong> Soldadores, ayudantes</span>
              </div>
              <div className="flex gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8] flex-shrink-0 mt-1.5"></span>
                <span><strong>Acabados:</strong> Pintores, yeseros, colocadores</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Crear grupos */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Crear nuevos grupos
        </h3>
        <p className="text-base leading-7 text-gray-700">
          Pasos para crear un grupo:
        </p>
        <div className="rounded-2xl border border-gray-200 bg-white p-5">
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white flex-shrink-0">
                1
              </span>
              <div>
                <p className="text-sm font-medium text-gray-700">Accede a &quot;Grupos&quot;</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white flex-shrink-0">
                2
              </span>
              <div>
                <p className="text-sm font-medium text-gray-700">Haz clic en &quot;Crear nuevo grupo&quot;</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white flex-shrink-0">
                3
              </span>
              <div>
                <p className="text-sm font-medium text-gray-700">Selecciona la categoría padre (ej: &quot;Materiales de construcción&quot;)</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white flex-shrink-0">
                4
              </span>
              <div>
                <p className="text-sm font-medium text-gray-700">Ingresa el nombre del grupo (ej: &quot;Agregados&quot;)</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white flex-shrink-0">
                5
              </span>
              <div>
                <p className="text-sm font-medium text-gray-700">Añade una descripción (opcional)</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white flex-shrink-0">
                6
              </span>
              <div>
                <p className="text-sm font-medium text-gray-700">Guarda y el grupo estará disponible inmediatamente</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mejores prácticas */}
      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">💡 Mejores prácticas</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Crea una estructura de grupos consistente desde el inicio</li>
          <li>Usa nombres descriptivos y evita redundancias</li>
          <li>Sigue un estándar en tu región o industria si es posible</li>
          <li>Agrupa insumos similares para facilitar búsquedas</li>
          <li>Revisa regularmente tu estructura y consolida grupos con pocos elementos</li>
          <li>Documenta los grupos para que tu equipo los use consistentemente</li>
          <li>No crees muchos grupos de primer nivel; usa la segunda jerarquía</li>
        </ul>
      </div>

      {/* Restricciones */}
      <div className="rounded-2xl border-l-4 border-[#f59e0b] bg-orange-50 px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">⚠️ Restricciones importantes</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>No puedes eliminar un grupo que tenga insumos asignados</li>
          <li>No puedes reasignar un grupo a una categoría diferente después de crearlo</li>
          <li>Los nombres de grupos deben ser únicos dentro de la misma categoría padre</li>
          <li>Si necesitas cambiar un insumo de grupo, debes crear uno nuevo y migrar manualmente</li>
        </ul>
      </div>
    </div>
  );
}

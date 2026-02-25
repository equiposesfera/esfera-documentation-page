import Image from "next/image";

export default function CrearDesdeCeroPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Análisis de precio unitario</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Crear desde cero
      </h2>
      <p className="text-base leading-7 text-gray-700 md:text-lg">
        Crea ítems personalizados especificando cada componente: materiales, servicios, mano de obra, equipos, maquinarias y herramientas. Control total sobre tu análisis de precio unitario.
      </p>

      {/* Visualización de la opción */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Acceder a la opción
        </h3>
        <p className="text-base leading-7 text-gray-700">
          En el módulo de Análisis de Precio Unitario, selecciona la opción de crear un nuevo ítem desde cero para tener control total sobre cada componente.
        </p>
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <Image
            src="/apu/opcion-crear-nuevo-item.png"
            alt="Opción de crear nuevo ítem desde cero"
            width={1200}
            height={800}
            className="w-full"
          />
        </div>
      </div>

      {/* Ventajas */}
      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">✨ Ventajas de crear desde cero</h4>
        <ul className="list-inside list-disc space-y-2 text-sm text-gray-700">
          <li><strong>Control total:</strong> Define exactamente qué incluye tu ítem</li>
          <li><strong>Precisión:</strong> Ajusta cada componente a tus necesidades específicas</li>
          <li><strong>Flexibilidad:</strong> Crea ítems únicos para trabajos especializados</li>
          <li><strong>Transparencia:</strong> Conoce exactamente de dónde viene cada costo</li>
          <li><strong>Aprendizaje:</strong> Comprende mejor la composición de costos</li>
        </ul>
      </div>

      {/* Proceso de creación */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Proceso de creación
        </h3>
        <div className="space-y-3">
          <div className="flex gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white">1</span>
            <div>
              <h4 className="font-semibold text-[#2d2d2d]">Información básica</h4>
              <p className="text-sm text-gray-700">Define código, descripción, unidad de medida, categoría y grupo</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white">2</span>
            <div>
              <h4 className="font-semibold text-[#2d2d2d]">Agregar materiales y servicios</h4>
              <p className="text-sm text-gray-700">Especifica los materiales necesarios con cantidades y precios</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white">3</span>
            <div>
              <h4 className="font-semibold text-[#2d2d2d]">Definir mano de obra</h4>
              <p className="text-sm text-gray-700">Indica el personal requerido y sus rendimientos</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white">4</span>
            <div>
              <h4 className="font-semibold text-[#2d2d2d]">Incluir equipos y maquinarias</h4>
              <p className="text-sm text-gray-700">Agrega los equipos necesarios con tiempos de uso</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white">5</span>
            <div>
              <h4 className="font-semibold text-[#2d2d2d]">Calcular herramientas</h4>
              <p className="text-sm text-gray-700">Define el costo de herramientas (% de mano de obra o valor fijo)</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white">6</span>
            <div>
              <h4 className="font-semibold text-[#2d2d2d]">Revisar y guardar</h4>
              <p className="text-sm text-gray-700">Verifica el precio total calculado y guarda tu ítem</p>
            </div>
          </div>
        </div>
      </div>

      {/* Componentes del ítem */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Componentes de un ítem
        </h3>
        <p className="text-base leading-7 text-gray-700">
          Un análisis de precio unitario completo incluye los siguientes componentes:
        </p>
      </div>

      {/* 1. Materiales y servicios */}
      <div className="space-y-4">
        <div className="rounded-2xl border-2 border-[#4db8a8] bg-white p-6">
          <h4 className="mb-4 flex items-center gap-3 text-xl font-semibold text-[#2d2d2d]">
            <span className="text-2xl">📦</span>
            Materiales y servicios
          </h4>
          <p className="mb-4 text-sm text-gray-700">
            Todos los materiales y servicios necesarios para ejecutar una unidad del ítem.
          </p>
          <div className="space-y-3">
            <div className="rounded-lg bg-gray-50 p-4">
              <h5 className="mb-2 font-semibold text-[#2d2d2d]">Información requerida:</h5>
              <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
                <li><strong>Material/Servicio:</strong> Selecciona de tu catálogo o crea uno nuevo</li>
                <li><strong>Cantidad:</strong> Cantidad necesaria por unidad del ítem</li>
                <li><strong>Unidad:</strong> kg, m³, m², unidad, etc.</li>
                <li><strong>Precio unitario:</strong> Costo por unidad del material</li>
                <li><strong>Desperdicio:</strong> Porcentaje de desperdicio (opcional)</li>
              </ul>
            </div>
            <div className="rounded-lg bg-[#d4f1eb] p-4">
              <p className="text-sm font-semibold text-[#2d2d2d]">Ejemplo:</p>
              <p className="mt-1 text-sm text-gray-700">
                Para "Vaciado de concreto f'c=210 kg/cm²": Cemento (8.5 bolsas), Arena (0.5 m³), Piedra (0.7 m³), Agua (0.2 m³)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Mano de obra */}
      <div className="space-y-4">
        <div className="rounded-2xl border-2 border-[#4db8a8] bg-white p-6">
          <h4 className="mb-4 flex items-center gap-3 text-xl font-semibold text-[#2d2d2d]">
            <span className="text-2xl">👷</span>
            Mano de obra
          </h4>
          <p className="mb-4 text-sm text-gray-700">
            Personal requerido para ejecutar el trabajo, con sus respectivos rendimientos.
          </p>
          <div className="space-y-3">
            <div className="rounded-lg bg-gray-50 p-4">
              <h5 className="mb-2 font-semibold text-[#2d2d2d]">Información requerida:</h5>
              <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
                <li><strong>Recurso:</strong> Categoría del trabajador (oficial, ayudante, etc.)</li>
                <li><strong>Cantidad/Rendimiento:</strong> Horas-hombre por unidad</li>
                <li><strong>Jornal:</strong> Costo por hora o por día</li>
                <li><strong>Beneficios sociales:</strong> Incluidos automáticamente según configuración</li>
              </ul>
            </div>
            <div className="rounded-lg bg-[#d4f1eb] p-4">
              <p className="text-sm font-semibold text-[#2d2d2d]">Ejemplo:</p>
              <p className="mt-1 text-sm text-gray-700">
                Para "Vaciado de concreto": Oficial albañil (0.5 hh), Ayudante (1.0 hh), Operario (0.3 hh)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Equipos y maquinarias */}
      <div className="space-y-4">
        <div className="rounded-2xl border-2 border-[#4db8a8] bg-white p-6">
          <h4 className="mb-4 flex items-center gap-3 text-xl font-semibold text-[#2d2d2d]">
            <span className="text-2xl">🚜</span>
            Equipos, maquinarias y herramientas mayores
          </h4>
          <p className="mb-4 text-sm text-gray-700">
            Equipos mecánicos necesarios para la ejecución del trabajo.
          </p>
          <div className="space-y-3">
            <div className="rounded-lg bg-gray-50 p-4">
              <h5 className="mb-2 font-semibold text-[#2d2d2d]">Información requerida:</h5>
              <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
                <li><strong>Equipo:</strong> Tipo de maquinaria (mezcladora, vibrador, etc.)</li>
                <li><strong>Cantidad:</strong> Horas-máquina por unidad</li>
                <li><strong>Tarifa:</strong> Costo por hora de uso</li>
                <li><strong>Operador:</strong> Puede incluirse automáticamente</li>
              </ul>
            </div>
            <div className="rounded-lg bg-[#d4f1eb] p-4">
              <p className="text-sm font-semibold text-[#2d2d2d]">Ejemplo:</p>
              <p className="mt-1 text-sm text-gray-700">
                Para "Excavación con maquinaria": Retroexcavadora (0.05 hm), Camión volquete (0.08 hm)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Herramientas menores */}
      <div className="space-y-4">
        <div className="rounded-2xl border-2 border-[#4db8a8] bg-white p-6">
          <h4 className="mb-4 flex items-center gap-3 text-xl font-semibold text-[#2d2d2d]">
            <span className="text-2xl">🔧</span>
            Herramientas menores
          </h4>
          <p className="mb-4 text-sm text-gray-700">
            Herramientas manuales y equipos pequeños de uso frecuente.
          </p>
          <div className="space-y-3">
            <div className="rounded-lg bg-gray-50 p-4">
              <h5 className="mb-2 font-semibold text-[#2d2d2d]">Formas de cálculo:</h5>
              <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
                <li><strong>Porcentaje de mano de obra:</strong> Típicamente 3% a 5% del costo de mano de obra</li>
                <li><strong>Valor específico:</strong> Monto fijo si conoces el costo exacto</li>
                <li><strong>Detalle individual:</strong> Lista cada herramienta con su desgaste</li>
              </ul>
            </div>
            <div className="rounded-lg bg-[#d4f1eb] p-4">
              <p className="text-sm font-semibold text-[#2d2d2d]">Recomendación:</p>
              <p className="mt-1 text-sm text-gray-700">
                Para la mayoría de ítems, usar 5% de mano de obra es suficiente. Para trabajos especializados, considera detallar herramientas específicas.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cálculo automático */}
      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">🧮 Cálculo automático del precio</h4>
        <p className="mb-3 text-sm text-gray-700">
          ESFERA calcula automáticamente el precio unitario total sumando:
        </p>
        <div className="space-y-2 text-sm text-gray-700">
          <p className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-[#4db8a8]"></span>
            Costo total de materiales y servicios
          </p>
          <p className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-[#4db8a8]"></span>
            Costo total de mano de obra (con beneficios sociales)
          </p>
          <p className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-[#4db8a8]"></span>
            Costo total de equipos y maquinarias
          </p>
          <p className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-[#4db8a8]"></span>
            Costo de herramientas menores
          </p>
        </div>
      </div>

      {/* Consejos */}
      <div className="rounded-2xl border-l-4 border-[#f59e0b] bg-orange-50 px-6 py-4">
        <h4 className="mb-2 font-semibold text-[#2d2d2d]">💡 Consejos para crear ítems</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Usa códigos de ítem consistentes y descriptivos</li>
          <li>Verifica los rendimientos con datos históricos o manuales técnicos</li>
          <li>Incluye desperdicios realistas en materiales (5-10% es común)</li>
          <li>Asegúrate que las unidades de medida sean coherentes</li>
          <li>Documenta las fuentes de tus precios y rendimientos</li>
          <li>Revisa el precio final comparándolo con referencias del mercado</li>
        </ul>
      </div>
    </div>
  );
}

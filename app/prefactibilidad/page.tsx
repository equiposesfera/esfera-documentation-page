export default function PrefactibilidadPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Módulo</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Sep 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Prefactibilidad
      </h2>
      <p className="text-base leading-7 text-gray-700 md:text-lg">
        Evalúa preliminarmente un proyecto comparando costos e ingresos antes de comprometer la inversión. La pantalla reúne importes, porcentajes y valores por unidad de superficie.
      </p>

      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">Ordenar sin alterar el informe</h4>
        <p className="text-sm text-gray-700">
          Haz clic en los encabezados <strong>Monto</strong>, <strong>%</strong> o <strong>Monto por m²</strong> para ordenar temporalmente las filas de mayor a menor. Este orden sirve para analizar la información y no reemplaza el orden guardado del informe.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Flujo recomendado
        </h3>
        <div className="space-y-3">
          {[
            { title: "Registra los costos", desc: "Agrega las líneas que formarán parte del análisis y marca cuáles se incluyen." },
            { title: "Registra los ingresos", desc: "Completa superficies, precios por m² y demás supuestos comerciales." },
            { title: "Compara los indicadores", desc: "Ordena por monto, porcentaje o costo por m² para identificar rápidamente los conceptos de mayor impacto." },
            { title: "Guarda el orden definitivo", desc: "Arrastra las filas al orden deseado y usa Guardar cuando quieras conservarlo en el informe." },
          ].map((step, index) => (
            <div key={step.title} className="flex gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white">{index + 1}</span>
              <div>
                <h4 className="font-semibold text-[#2d2d2d]">{step.title}</h4>
                <p className="text-sm text-gray-700">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border-l-4 border-[#f59e0b] bg-orange-50 px-6 py-4">
        <h4 className="mb-2 font-semibold text-[#2d2d2d]">Importante</h4>
        <p className="text-sm text-gray-700">
          Verifica la moneda y la unidad de área del análisis antes de comparar resultados. El monto por m² depende de la superficie configurada.
        </p>
      </div>
    </div>
  );
}

import Image from "next/image";

export default function ImportarDesdeExcelPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Análisis de precio unitario</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Importar desde Excel
      </h2>
      <p className="text-base leading-7 text-gray-700 md:text-lg">
        Importa tus ítems de forma masiva utilizando una plantilla de Excel. Ideal para migrar catálogos existentes o cargar múltiples ítems simultáneamente.
      </p>

      {/* Visualización de la opción */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Acceder a la opción
        </h3>
        <p className="text-base leading-7 text-gray-700">
          En el módulo de Análisis de Precio Unitario, selecciona la opción de importar ítems desde Excel.
        </p>
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <Image
            src="/apu/opcion-importar-items-desde-excel.png"
            alt="Opción de importar ítems desde Excel"
            width={1200}
            height={800}
            className="w-full"
          />
        </div>
      </div>

      {/* Ventajas */}
      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">✨ Ventajas de importar desde Excel</h4>
        <ul className="list-inside list-disc space-y-2 text-sm text-gray-700">
          <li><strong>Importación masiva:</strong> Carga cientos de ítems en segundos</li>
          <li><strong>Trabajo offline:</strong> Prepara tu catálogo sin conexión a internet</li>
          <li><strong>Migración fácil:</strong> Trae tus ítems de otros sistemas o proyectos</li>
          <li><strong>Plantilla estructurada:</strong> Formato predefinido que asegura consistencia</li>
          <li><strong>Revisión previa:</strong> Valida los datos antes de la importación</li>
        </ul>
      </div>

      {/* Proceso de importación */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Proceso de importación
        </h3>
        <div className="space-y-3">
          <div className="flex gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white">1</span>
            <div>
              <h4 className="font-semibold text-[#2d2d2d]">Descarga la plantilla</h4>
              <p className="text-sm text-gray-700">Obtén la plantilla de Excel desde el módulo de ítems</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white">2</span>
            <div>
              <h4 className="font-semibold text-[#2d2d2d]">Completa los datos</h4>
              <p className="text-sm text-gray-700">Llena la plantilla con tu información siguiendo el formato establecido</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white">3</span>
            <div>
              <h4 className="font-semibold text-[#2d2d2d]">Guarda el archivo</h4>
              <p className="text-sm text-gray-700">Asegúrate de guardar como .xlsx o .csv</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white">4</span>
            <div>
              <h4 className="font-semibold text-[#2d2d2d]">Sube el archivo</h4>
              <p className="text-sm text-gray-700">Selecciona &quot;Importar desde Excel&quot; y carga tu archivo</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white">5</span>
            <div>
              <h4 className="font-semibold text-[#2d2d2d]">Revisa y confirma</h4>
              <p className="text-sm text-gray-700">Verifica los datos importados y confirma la operación</p>
            </div>
          </div>
        </div>
      </div>

      {/* Estructura de la plantilla */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Estructura de la plantilla
        </h3>
        <p className="text-base leading-7 text-gray-700">
          ESFERA proporciona una plantilla de Excel con el formato correcto para importar tus ítems. Descarga la plantilla y complétala con tu información.
        </p>
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <Image
            src="/apu/plantilla-importar-items-de-excel.png"
            alt="Plantilla de Excel para importar ítems"
            width={1200}
            height={800}
            className="w-full"
          />
        </div>
        <p className="text-base leading-7 text-gray-700">
          La plantilla contiene las siguientes columnas obligatorias:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-[#2d2d2d]">Columna</th>
                <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-[#2d2d2d]">Descripción</th>
                <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-[#2d2d2d]">Obligatorio</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="border-b border-gray-100 px-4 py-3 font-medium text-gray-700">Código</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Identificador único del ítem</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Sí</td>
              </tr>
              <tr>
                <td className="border-b border-gray-100 px-4 py-3 font-medium text-gray-700">Descripción</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Nombre del ítem</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Sí</td>
              </tr>
              <tr>
                <td className="border-b border-gray-100 px-4 py-3 font-medium text-gray-700">Unidad</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Unidad de medida (m², m³, kg, etc.)</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Sí</td>
              </tr>
              <tr>
                <td className="border-b border-gray-100 px-4 py-3 font-medium text-gray-700">Categoría</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Categoría del ítem</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">No</td>
              </tr>
              <tr>
                <td className="border-b border-gray-100 px-4 py-3 font-medium text-gray-700">Grupo</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Grupo del ítem</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">No</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">Precio unitario</td>
                <td className="px-4 py-3 text-gray-700">Precio total del ítem</td>
                <td className="px-4 py-3 text-gray-700">No</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Componentes del ítem */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Componentes del ítem en la plantilla
        </h3>
        <p className="text-base leading-7 text-gray-700">
          Para cada ítem, puedes incluir sus componentes en hojas separadas de la plantilla:
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-3 font-semibold text-[#2d2d2d]">📦 Materiales y servicios</h4>
            <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
              <li>Código del material</li>
              <li>Descripción</li>
              <li>Unidad</li>
              <li>Cantidad</li>
              <li>Precio unitario</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-3 font-semibold text-[#2d2d2d]">👷 Mano de obra</h4>
            <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
              <li>Código del recurso</li>
              <li>Descripción</li>
              <li>Unidad (hora, día)</li>
              <li>Cantidad/rendimiento</li>
              <li>Precio por hora/día</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-3 font-semibold text-[#2d2d2d]">🚜 Equipos y maquinarias</h4>
            <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
              <li>Código del equipo</li>
              <li>Descripción</li>
              <li>Unidad (hora, día)</li>
              <li>Cantidad</li>
              <li>Precio por hora/día</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-3 font-semibold text-[#2d2d2d]">🔧 Herramientas</h4>
            <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
              <li>% de mano de obra (3-5%)</li>
              <li>O detalle específico</li>
              <li>Descripción</li>
              <li>Precio</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Validaciones */}
      <div className="rounded-2xl border-l-4 border-[#f59e0b] bg-orange-50 px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">⚠️ Validaciones del sistema</h4>
        <p className="mb-2 text-sm text-gray-700">
          ESFERA validará tu archivo antes de importar. Asegúrate de:
        </p>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Todos los códigos sean únicos</li>
          <li>Las unidades de medida existan en el sistema</li>
          <li>Los valores numéricos sean correctos (sin letras)</li>
          <li>No dejar celdas obligatorias vacías</li>
          <li>Usar el formato de fecha correcto si aplica</li>
        </ul>
      </div>

      {/* Consejos */}
      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-2 font-semibold text-[#2d2d2d]">💡 Consejos útiles</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>No modifiques los nombres de las columnas en la plantilla</li>
          <li>Usa códigos consistentes (por ejemplo: EST-001, EST-002 para estructura)</li>
          <li>Revisa que los decimales usen punto (.) no coma (,)</li>
          <li>Puedes dejar hojas vacías si no necesitas importar todos los componentes</li>
          <li>Haz una copia de seguridad de tu plantilla antes de subirla</li>
        </ul>
      </div>
    </div>
  );
}

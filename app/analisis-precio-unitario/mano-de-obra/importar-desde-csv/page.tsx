import Image from "next/image";
import Link from "next/link";

export default function ImportarManoObraCSVPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Análisis de precio unitario</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Importar mano de obra desde CSV
      </h2>
      <p className="text-base leading-7 text-gray-700 md:text-lg">
        Importa múltiples registros de mano de obra simultáneamente usando un archivo CSV. Ideal para migrar catálogos completos o actualizar costos masivamente.
      </p>

      {/* Imagen principal */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
        <Image
          src="/apu/opcion-importar-mano-obra-csv.png"
          alt="Importar mano de obra desde CSV"
          width={1200}
          height={800}
          className="w-full"
        />
      </div>

      {/* Proceso paso a paso */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Proceso de importación
        </h3>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-lg font-bold text-white">
              1
            </div>
            <div className="flex-1">
              <h4 className="mb-1 font-semibold text-[#2d2d2d]">Descarga la plantilla CSV</h4>
                <p className="text-sm text-gray-700">
                Desde el módulo de mano de obra, haz clic en &quot;Importar CSV&quot; y descarga la plantilla para asegurar el formato correcto.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-lg font-bold text-white">
              2
            </div>
            <div className="flex-1">
              <h4 className="mb-1 font-semibold text-[#2d2d2d]">Completa el archivo CSV</h4>
              <p className="text-sm text-gray-700">
                Llena el archivo con los datos de tu mano de obra siguiendo la estructura indicada. Puedes usar Excel, Google Sheets o cualquier editor de texto.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-lg font-bold text-white">
              3
            </div>
            <div className="flex-1">
              <h4 className="mb-1 font-semibold text-[#2d2d2d]">Carga el archivo</h4>
              <p className="text-sm text-gray-700">
                Selecciona tu archivo CSV completado y súbelo a la plataforma. El sistema validará el formato automáticamente.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-lg font-bold text-white">
              4
            </div>
            <div className="flex-1">
              <h4 className="mb-1 font-semibold text-[#2d2d2d]">Revisa y confirma</h4>
              <p className="text-sm text-gray-700">
                Verifica el resumen de importación, corrige errores si los hay, y confirma para agregar los registros a tu catálogo.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vista de plantilla */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Plantilla CSV
        </h3>
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <Image
            src="/apu/plantilla-importar-mano-obra-csv.png"
            alt="Plantilla de importación CSV para mano de obra"
            width={1200}
            height={600}
            className="w-full"
          />
        </div>
      </div>

      {/* Estructura del CSV */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Estructura del archivo CSV
        </h3>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-[#2d2d2d]">Columna</th>
                <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-[#2d2d2d]">Descripción</th>
                <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-[#2d2d2d]">Requerido</th>
                <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-[#2d2d2d]">Ejemplo</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="border-b border-gray-100 px-4 py-3 font-mono text-xs text-gray-700">codigo</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Identificador único</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Sí</td>
                <td className="border-b border-gray-100 px-4 py-3 font-mono text-xs text-gray-600">ALB-OF-01</td>
              </tr>
              <tr>
                <td className="border-b border-gray-100 px-4 py-3 font-mono text-xs text-gray-700">descripcion</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Nombre del tipo de trabajador</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Sí</td>
                <td className="border-b border-gray-100 px-4 py-3 font-mono text-xs text-gray-600">Oficial albañil</td>
              </tr>
              <tr>
                <td className="border-b border-gray-100 px-4 py-3 font-mono text-xs text-gray-700">especialidad</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Categoría del trabajador</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Sí</td>
                <td className="border-b border-gray-100 px-4 py-3 font-mono text-xs text-gray-600">Albañilería</td>
              </tr>
              <tr>
                <td className="border-b border-gray-100 px-4 py-3 font-mono text-xs text-gray-700">costo_hora</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Tarifa horaria con cargas sociales</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Sí</td>
                <td className="border-b border-gray-100 px-4 py-3 font-mono text-xs text-gray-600">35.50</td>
              </tr>
              <tr>
                <td className="border-b border-gray-100 px-4 py-3 font-mono text-xs text-gray-700">unidad</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Unidad de medida</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Sí</td>
                <td className="border-b border-gray-100 px-4 py-3 font-mono text-xs text-gray-600">HH</td>
              </tr>
              <tr>
                <td className="border-b border-gray-100 px-4 py-3 font-mono text-xs text-gray-700">moneda</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Divisa del costo</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Sí</td>
                <td className="border-b border-gray-100 px-4 py-3 font-mono text-xs text-gray-600">Bs</td>
              </tr>
              <tr>
                <td className="border-b border-gray-100 px-4 py-3 font-mono text-xs text-gray-700">categoria</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Clasificación (oficial, peón, etc.)</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">No</td>
                <td className="border-b border-gray-100 px-4 py-3 font-mono text-xs text-gray-600">Oficial</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-gray-700">notas</td>
                <td className="px-4 py-3 text-gray-700">Observaciones adicionales</td>
                <td className="px-4 py-3 text-gray-700">No</td>
                <td className="px-4 py-3 font-mono text-xs text-gray-600">Incluye cargas sociales</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Ejemplo de CSV */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Ejemplo de archivo CSV
        </h3>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-gray-50 p-4">
          <pre className="text-xs text-gray-700">
{`codigo,descripcion,especialidad,costo_hora,unidad,moneda,categoria,notas
ALB-OF-01,Oficial albañil,Albañilería,35.50,HH,Bs,Oficial,Incluye cargas sociales
ALB-PE-01,Peón albañil,Albañilería,25.00,HH,Bs,Peón,Ayudante general
ELE-OF-01,Oficial electricista,Electricidad,42.00,HH,Bs,Oficial,Certificado CNE
PL-OF-01,Oficial plomero,Plomería,38.50,HH,Bs,Oficial,Instalaciones sanitarias
SOLD-ESP-01,Soldador especializado,Soldadura,55.00,HH,Bs,Especializado,Certificación SMAW
CAP-01,Capataz general,Supervisión,48.00,HH,Bs,Supervisor,Experiencia +5 años`}
          </pre>
        </div>
      </div>

      {/* Requisitos de formato */}
      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">📋 Requisitos de formato</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>El archivo debe ser CSV (valores separados por comas)</li>
          <li>La primera fila debe contener los nombres de las columnas exactamente como se muestran</li>
          <li>Los códigos deben ser únicos (no repetir códigos existentes)</li>
          <li>Los costos deben ser números decimales (usar punto, no coma)</li>
          <li>La codificación del archivo debe ser UTF-8</li>
          <li>No dejar filas vacías entre registros</li>
        </ul>
      </div>

      {/* Validaciones */}
      <div className="rounded-2xl border-l-4 border-[#f59e0b] bg-orange-50 px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">⚠️ Validaciones del sistema</h4>
        <div className="space-y-2 text-sm text-gray-700">
          <p>El sistema validará automáticamente:</p>
          <ul className="list-inside list-disc space-y-1">
            <li>Que todos los campos requeridos estén completos</li>
            <li>Que los códigos sean únicos y no existan en el catálogo</li>
            <li>Que los costos sean números válidos mayores a 0</li>
            <li>Que la unidad sea válida (HH, HD, días, etc.)</li>
            <li>Que la moneda coincida con las configuradas en el proyecto</li>
          </ul>
          <p className="mt-3 font-medium">
            Si hay errores, se mostrará un reporte detallado indicando qué filas tienen problemas.
          </p>
        </div>
      </div>

      {/* Consejos */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5">
        <h4 className="mb-3 flex items-center gap-2 font-semibold text-[#2d2d2d]">
          <span className="text-xl">💡</span>
          Consejos para una importación exitosa
        </h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Trabaja primero en Excel/Sheets y exporta como CSV al final</li>
          <li>Mantén una copia de respaldo antes de importar</li>
          <li>Importa en lotes pequeños la primera vez para verificar el formato</li>
          <li>Usa códigos que sigan un estándar consistente (ej: ESP-CAT-NUM)</li>
          <li>Incluye cargas sociales y beneficios en el costo por hora</li>
          <li>Documenta cualquier factor de rendimiento en las notas</li>
          <li>Verifica que la moneda sea la misma para todos los registros</li>
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
          href="/analisis-precio-unitario/mano-de-obra/crear-nuevo"
          className="rounded-xl bg-[#4db8a8] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#3da799]"
        >
          Ver creación manual →
        </Link>
      </div>
    </div>
  );
}

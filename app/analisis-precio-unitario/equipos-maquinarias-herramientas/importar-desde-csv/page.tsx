import Image from "next/image";
import Link from "next/link";

export default function ImportarEquiposCSVPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Análisis de precio unitario</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Importar equipos, maquinarias y herramientas desde CSV
      </h2>
      <p className="text-base leading-7 text-gray-700 md:text-lg">
        Importa múltiples equipos, maquinarias y herramientas simultáneamente usando un archivo CSV. Ideal para migrar catálogos completos o actualizar costos de tu parque de equipos.
      </p>

      {/* Imagen principal */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
        <Image
          src="/apu/opcion-importar-equipos-maquinarias-herramientas-csv.png"
          alt="Importar equipos desde CSV"
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
                Desde el módulo de equipos, haz clic en &quot;Importar CSV&quot; y descarga la plantilla para asegurar el formato correcto.
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
                Llena el archivo con los datos de tus equipos siguiendo la estructura indicada. Puedes usar Excel, Google Sheets o cualquier editor de texto.
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
                Verifica el resumen de importación, corrige errores si los hay, y confirma para agregar los equipos a tu catálogo.
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
            src="/apu/plantilla-importar-equipos-maquinarias-herramientas-csv.png"
            alt="Plantilla de importación CSV para equipos"
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
                <td className="border-b border-gray-100 px-4 py-3 font-mono text-xs text-gray-600">MAQ-EXC-320</td>
              </tr>
              <tr>
                <td className="border-b border-gray-100 px-4 py-3 font-mono text-xs text-gray-700">descripcion</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Nombre completo del equipo</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Sí</td>
                <td className="border-b border-gray-100 px-4 py-3 font-mono text-xs text-gray-600">Excavadora hidráulica 320 HP</td>
              </tr>
              <tr>
                <td className="border-b border-gray-100 px-4 py-3 font-mono text-xs text-gray-700">tipo</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Categoría del recurso</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Sí</td>
                <td className="border-b border-gray-100 px-4 py-3 font-mono text-xs text-gray-600">Maquinaria pesada</td>
              </tr>
              <tr>
                <td className="border-b border-gray-100 px-4 py-3 font-mono text-xs text-gray-700">marca</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Fabricante del equipo</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">No</td>
                <td className="border-b border-gray-100 px-4 py-3 font-mono text-xs text-gray-600">Caterpillar</td>
              </tr>
              <tr>
                <td className="border-b border-gray-100 px-4 py-3 font-mono text-xs text-gray-700">modelo</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Modelo específico</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">No</td>
                <td className="border-b border-gray-100 px-4 py-3 font-mono text-xs text-gray-600">320D</td>
              </tr>
              <tr>
                <td className="border-b border-gray-100 px-4 py-3 font-mono text-xs text-gray-700">costo_hora</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Costo total por hora de uso</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Sí</td>
                <td className="border-b border-gray-100 px-4 py-3 font-mono text-xs text-gray-600">450.00</td>
              </tr>
              <tr>
                <td className="border-b border-gray-100 px-4 py-3 font-mono text-xs text-gray-700">unidad</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Unidad de medida</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Sí</td>
                <td className="border-b border-gray-100 px-4 py-3 font-mono text-xs text-gray-600">HM</td>
              </tr>
              <tr>
                <td className="border-b border-gray-100 px-4 py-3 font-mono text-xs text-gray-700">moneda</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Divisa del costo</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Sí</td>
                <td className="border-b border-gray-100 px-4 py-3 font-mono text-xs text-gray-600">USD</td>
              </tr>
              <tr>
                <td className="border-b border-gray-100 px-4 py-3 font-mono text-xs text-gray-700">capacidad</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Capacidad de trabajo</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">No</td>
                <td className="border-b border-gray-100 px-4 py-3 font-mono text-xs text-gray-600">2.5 m³</td>
              </tr>
              <tr>
                <td className="border-b border-gray-100 px-4 py-3 font-mono text-xs text-gray-700">potencia</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Potencia del motor</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">No</td>
                <td className="border-b border-gray-100 px-4 py-3 font-mono text-xs text-gray-600">320 HP</td>
              </tr>
              <tr>
                <td className="border-b border-gray-100 px-4 py-3 font-mono text-xs text-gray-700">disponibilidad</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Propiedad del equipo</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">No</td>
                <td className="border-b border-gray-100 px-4 py-3 font-mono text-xs text-gray-600">Propio</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-gray-700">notas</td>
                <td className="px-4 py-3 text-gray-700">Observaciones adicionales</td>
                <td className="px-4 py-3 text-gray-700">No</td>
                <td className="px-4 py-3 font-mono text-xs text-gray-600">Incluye operador certificado</td>
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
{`codigo,descripcion,tipo,marca,modelo,costo_hora,unidad,moneda,capacidad,potencia,disponibilidad,notas
MAQ-EXC-320,Excavadora hidráulica 320 HP,Maquinaria pesada,Caterpillar,320D,450.00,HM,USD,2.5 m³,320 HP,Propio,Incluye operador certificado
MAQ-MOT-140,Motoniveladora 140 HP,Maquinaria pesada,John Deere,672G,380.00,HM,USD,3.7 m,140 HP,Propio,Mantenimiento al día
EQ-MEZC-01,Mezcladora de concreto 1 saco,Equipo,Carmix,3.5TT,25.00,HM,Bs,350 L,9 HP,Propio,Portátil
EQ-VIBR-01,Vibrador de concreto 2.5 HP,Equipo,Wacker,M2500,8.50,HM,Bs,35mm,2.5 HP,Propio,Cabezal 35mm
HTA-AND-01,Andamio metálico tubular,Herramienta,Nacional,,2.50,HM,Bs,5m altura,,Alquilado,Por módulo
HTA-COMP-01,Compresor de aire 185 CFM,Herramienta,Atlas Copco,XAS185,45.00,HM,USD,185 CFM,115 HP,Alquilado,Incluye mangueras`}
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
          <li>Los tipos válidos son: Maquinaria pesada, Equipo, Herramienta</li>
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
            <li>Que la unidad sea válida (HM, HD, días, etc.)</li>
            <li>Que la moneda coincida con las configuradas en el proyecto</li>
            <li>Que el tipo de equipo sea uno de los valores permitidos</li>
          </ul>
          <p className="mt-3 font-medium">
            Si hay errores, se mostrará un reporte detallado indicando qué filas tienen problemas.
          </p>
        </div>
      </div>

      {/* Componentes del costo */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Componentes del costo por hora
        </h3>
        <div className="rounded-2xl border border-gray-200 bg-white p-5">
          <p className="mb-3 text-sm text-gray-700">
            Recuerda que el <strong>costo_hora</strong> debe incluir todos los componentes:
          </p>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-3">
              <div className="mb-1 text-xs font-semibold text-gray-500">DEPRECIACIÓN</div>
              <div className="text-sm text-gray-700">(Valor compra - Valor residual) / Vida útil horas</div>
            </div>
            <div className="rounded-lg bg-gray-50 p-3">
              <div className="mb-1 text-xs font-semibold text-gray-500">MANTENIMIENTO</div>
              <div className="text-sm text-gray-700">Preventivo + Correctivo + Repuestos</div>
            </div>
            <div className="rounded-lg bg-gray-50 p-3">
              <div className="mb-1 text-xs font-semibold text-gray-500">COMBUSTIBLE</div>
              <div className="text-sm text-gray-700">Consumo horario × Precio combustible</div>
            </div>
            <div className="rounded-lg bg-gray-50 p-3">
              <div className="mb-1 text-xs font-semibold text-gray-500">OPERADOR</div>
              <div className="text-sm text-gray-700">Costo operador si aplica (maquinaria pesada)</div>
            </div>
          </div>
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
          <li>Calcula el costo horario completo antes de importar</li>
          <li>Usa códigos que identifiquen tipo y capacidad (MAQ-EXC-320)</li>
          <li>Incluye especificaciones técnicas en la descripción si son relevantes</li>
          <li>Distingue entre equipos propios (con depreciación) y alquilados (tarifa directa)</li>
          <li>Documenta disponibilidad para gestión de recursos en proyectos</li>
          <li>Verifica que la moneda sea consistente según tipo de equipo</li>
        </ul>
      </div>

      {/* Navegación */}
      <div className="flex flex-wrap gap-4">
        <Link 
          href="/analisis-precio-unitario/equipos-maquinarias-herramientas"
          className="rounded-xl bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
        >
          ← Volver a equipos
        </Link>
        <Link 
          href="/analisis-precio-unitario/equipos-maquinarias-herramientas/crear-nuevo"
          className="rounded-xl bg-[#4db8a8] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#3da799]"
        >
          Ver creación manual →
        </Link>
      </div>
    </div>
  );
}

export default function CronogramaPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-[#2d2d2d] mb-4" style={{ fontFamily: "var(--font-display)" }}>
          Cronograma
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Contenido sobre cronograma de presupuestos en Esfera.ai
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#2d2d2d] mb-4">
            ¿Qué es el Cronograma?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Aquí va la descripción del módulo de cronograma.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#2d2d2d] mb-4">
            Características Principales
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Lista de características aquí</li>
            <li>Segunda característica</li>
            <li>Tercera característica</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#2d2d2d] mb-4">
            Cómo Usar
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Instrucciones de uso aquí.
          </p>
        </section>
      </div>
    </div>
  );
}

export default function PermisosUsuariosPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Usuarios</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Permisos
      </h2>
      <p className="text-base leading-7 text-gray-700 md:text-lg">
        Controla exactamente qué puede hacer cada usuario en tu proyecto. En ESFERA, los permisos son granulares y pueden ser modificados en cualquier momento por los administradores.
      </p>

      {/* Gestión flexible de permisos */}
      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">⚡ Cambios de permisos en tiempo real</h4>
        <p className="text-sm text-gray-700">
          Los administradores pueden cambiar los permisos de cualquier usuario en cualquier momento, <strong>sin necesidad de reinvitaciones o confirmaciones</strong>. Simplemente selecciona el usuario de la lista de usuarios del proyecto y modifica sus permisos instantáneamente.
        </p>
      </div>

      {/* Cómo modificar permisos */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Cómo modificar permisos de un usuario
        </h3>
        <div className="space-y-3">
          <div className="flex gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white">1</span>
            <div>
              <h4 className="font-semibold text-[#2d2d2d]">Accede a la lista de usuarios</h4>
              <p className="text-sm text-gray-700">Ve a la sección &ldquo;Usuarios&rdquo; dentro de tu proyecto</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white">2</span>
            <div>
              <h4 className="font-semibold text-[#2d2d2d]">Selecciona el usuario</h4>
              <p className="text-sm text-gray-700">Haz clic en el usuario cuyo permisos deseas modificar</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white">3</span>
            <div>
              <h4 className="font-semibold text-[#2d2d2d]">Ajusta los permisos</h4>
              <p className="text-sm text-gray-700">Selecciona o deselecciona los módulos y acciones permitidas</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white">4</span>
            <div>
              <h4 className="font-semibold text-[#2d2d2d]">Guarda los cambios</h4>
              <p className="text-sm text-gray-700">Los cambios se aplican instantáneamente</p>
            </div>
          </div>
        </div>
      </div>

      {/* Módulos y permisos */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Módulos disponibles
        </h3>
        <p className="text-base leading-7 text-gray-700">
          Para cada módulo, puedes controlar qué acciones puede realizar el usuario:
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h4 className="mb-3 text-lg font-semibold text-[#2d2d2d]">Almacén</h4>
            <ul className="list-inside list-disc space-y-2 text-sm text-gray-700">
              <li>Ver inventario</li>
              <li>Crear entradas/salidas</li>
              <li>Editar stock</li>
              <li>Generar reportes</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h4 className="mb-3 text-lg font-semibold text-[#2d2d2d]">Compras</h4>
            <ul className="list-inside list-disc space-y-2 text-sm text-gray-700">
              <li>Ver compras</li>
              <li>Crear órdenes</li>
              <li>Aprobar compras</li>
              <li>Ver histórico</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h4 className="mb-3 text-lg font-semibold text-[#2d2d2d]">Presupuestos</h4>
            <ul className="list-inside list-disc space-y-2 text-sm text-gray-700">
              <li>Ver presupuestos</li>
              <li>Crear presupuestos</li>
              <li>Editar presupuestos</li>
              <li>Aprobar cambios</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h4 className="mb-3 text-lg font-semibold text-[#2d2d2d]">Obra</h4>
            <ul className="list-inside list-disc space-y-2 text-sm text-gray-700">
              <li>Ver avances</li>
              <li>Reportar avances</li>
              <li>Ver planillas</li>
              <li>Editar planillas</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Acciones según rol */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Tipos de acciones
        </h3>
        <p className="text-base leading-7 text-gray-700">
          Cada módulo permite controlar las siguientes acciones:
        </p>
        <div className="grid gap-4">
          <div className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-4">
            <span className="shrink-0 text-2xl">👁️</span>
            <div>
              <h4 className="font-semibold text-[#2d2d2d]">Ver</h4>
              <p className="text-sm text-gray-700">El usuario puede visualizar información pero no puede hacer cambios</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-4">
            <span className="shrink-0 text-2xl">✏️</span>
            <div>
              <h4 className="font-semibold text-[#2d2d2d]">Editar</h4>
              <p className="text-sm text-gray-700">El usuario puede crear, modificar y eliminar registros</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-4">
            <span className="shrink-0 text-2xl">✅</span>
            <div>
              <h4 className="font-semibold text-[#2d2d2d]">Aprobar</h4>
              <p className="text-sm text-gray-700">El usuario puede aprobar acciones de otros usuarios en este módulo</p>
            </div>
          </div>
        </div>
      </div>

      {/* Ventajas del sistema de permisos */}
      <div className="rounded-2xl border-l-4 border-[#f59e0b] bg-orange-50 px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">✨ Ventajas de la gestión de permisos en ESFERA</h4>
        <ul className="list-inside list-disc space-y-2 text-sm text-gray-700">
          <li><strong>Control granular:</strong> Permisos específicos por módulo y acción</li>
          <li><strong>Cambios instantáneos:</strong> No requiere reinvitaciones ni confirmaciones</li>
          <li><strong>Auditoria:</strong> Registro de quién hizo cambios en los permisos</li>
          <li><strong>Escalabilidad:</strong> Fácil de gestionar incluso con muchos usuarios</li>
          <li><strong>Seguridad:</strong> Los usuarios solo ven lo que está permitido</li>
        </ul>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";

export default function FlujoTrabajoPage() {
  const [isVideoExpanded, setIsVideoExpanded] = useState(false);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Guía de uso</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Versión 1.0 · Actualizado Feb 2026</span>
      </div>

      <div className="space-y-6">
        <h1 className="text-4xl font-semibold text-[#2d2d2d] md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
          Flujo de Trabajo en Esfera.AI
        </h1>

        <div className="space-y-4 text-base leading-8 text-gray-700">
          <p>
            Aprende el <span className="font-semibold text-[#4db8a8]">flujo de trabajo completo</span> de Esfera.AI en solo 7 minutos. Este videotutorial te guiará paso a paso a través de las funcionalidades principales de la plataforma.
          </p>
        </div>
      </div>

      {/* Video Container */}
      <div className="space-y-4">
        <div className="rounded-2xl border-2 border-[#4db8a8] bg-gradient-to-br from-[#d4f1eb] to-[#e8f5f1] p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-[#2d2d2d]">Tutorial completo - 7 minutos</h2>
            <button
              onClick={() => setIsVideoExpanded(!isVideoExpanded)}
              className="inline-flex items-center gap-2 bg-[#4db8a8] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#3a9688] transition"
            >
              {isVideoExpanded ? (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Cerrar
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                  Expandir
                </>
              )}
            </button>
          </div>
          
          <div 
            className={`relative bg-black rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
              isVideoExpanded ? 'h-auto' : 'h-auto'
            }`}
            style={{ aspectRatio: "16/9" }}
            onClick={() => !isVideoExpanded && setIsVideoExpanded(true)}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/mZIimzmA8Pc"
              title="Flujo de trabajo completo en Esfera.AI"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Contenido del flujo de trabajo */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-[#2d2d2d]">¿Qué aprenderás en este tutorial?</h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          {/* Tarjeta 1 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-lg transition">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-[#4db8a8] p-3 flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-[#2d2d2d]">Configuración general</h3>
                <p className="text-sm text-gray-600">
                  Primeros pasos para configurar tu cuenta, crear tu empresa y organizar tu espacio de trabajo en Esfera.AI.
                </p>
              </div>
            </div>
          </div>

          {/* Tarjeta 2 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-lg transition">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-[#4db8a8] p-3 flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-[#2d2d2d]">Cómo trabajar con Esfera</h3>
                <p className="text-sm text-gray-600">
                  Descubre la metodología de trabajo y el flujo completo desde la planificación hasta la ejecución de tus proyectos.
                </p>
              </div>
            </div>
          </div>

          {/* Tarjeta 3 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-lg transition">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-[#4db8a8] p-3 flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-[#2d2d2d]">Gestión de proyectos</h3>
                <p className="text-sm text-gray-600">
                  Organiza y estructura tus proyectos de construcción de manera eficiente desde el inicio hasta el cierre.
                </p>
              </div>
            </div>
          </div>

          {/* Tarjeta 4 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-lg transition">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-[#4db8a8] p-3 flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-[#2d2d2d]">Planificación financiera</h3>
                <p className="text-sm text-gray-600">
                  Aprende a crear presupuestos, analizar costos y tomar decisiones financieras informadas en tus proyectos.
                </p>
              </div>
            </div>
          </div>

          {/* Tarjeta 5 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-lg transition">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-[#4db8a8] p-3 flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-[#2d2d2d]">Control de ejecución</h3>
                <p className="text-sm text-gray-600">
                  Monitorea el avance de tus obras, registra información y mantén control total sobre el progreso del proyecto.
                </p>
              </div>
            </div>
          </div>

          {/* Tarjeta 6 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-lg transition">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-[#4db8a8] p-3 flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-[#2d2d2d]">Gestión de recursos</h3>
                <p className="text-sm text-gray-600">
                  Administra materiales, equipos y personal de forma centralizada para optimizar el uso de recursos.
                </p>
              </div>
            </div>
          </div>

          {/* Tarjeta 7 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-lg transition">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-[#4db8a8] p-3 flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-[#2d2d2d]">Colaboración en equipo</h3>
                <p className="text-sm text-gray-600">
                  Gestiona permisos, asigna roles y trabaja en equipo con diferentes niveles de acceso a la información.
                </p>
              </div>
            </div>
          </div>

          {/* Tarjeta 8 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-lg transition">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-[#4db8a8] p-3 flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-[#2d2d2d]">Usos de la IA integrada</h3>
                <p className="text-sm text-gray-600">
                  Aprovecha el asistente inteligente para análisis rápidos, reportes automáticos y toma de decisiones eficiente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal expandido del video */}
      {isVideoExpanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95 p-4"
          onClick={() => setIsVideoExpanded(false)}
        >
          <div
            className="relative w-full max-w-6xl bg-black rounded-lg overflow-hidden"
            style={{ aspectRatio: "16/9" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoExpanded(false)}
              className="absolute top-4 right-4 z-10 rounded-full bg-white/20 p-3 text-white hover:bg-white/40 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/mZIimzmA8Pc?autoplay=1"
              title="Flujo de trabajo completo en Esfera.AI"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

import React from 'react';

const ProductModal = ({ product, onClose }) => {
    // Si no hay producto seleccionado, el modal no se renderiza
    if (!product) return null;

    const sendWhatsApp = () => {
        // Usamos product.nombre que viene de la columna 'nombre'
        const message = `¡Hola Lionchshop! 🦁 Me interesa este producto: ${product.nombre}. ¿Está disponible?`;
        window.open(`https://wa.me/573159309346?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-2xl overflow-hidden max-w-4xl w-full shadow-2xl flex flex-col md:flex-row relative animate-in fade-in zoom-in duration-300">

                {/* Botón Cerrar */}
                <button onClick={onClose} className="absolute top-4 right-4 bg-white/10 hover:bg-red-500 text-white p-2 rounded-full transition-all z-10">
                    <span className="text-xl font-bold">✕</span>
                </button>

                {/* Lado de la Imagen (Columna 'imagen') */}
                <div className="md:w-1/2 bg-[#121212] flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-gray-800">
                    <img
                        src={product.imagen} // <--- Columna 'imagen'
                        alt={product.nombre}
                        className="max-h-[300px] md:max-h-[450px] w-auto object-contain drop-shadow-[0_0_20px_rgba(66,234,237,0.2)] hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* Lado de la Info (Columnas 'nombre', 'precio', 'descripcion') */}
                <div className="md:w-1/2 p-8 flex flex-col">
                    <div className="mb-6">
                        <span className="text-lion-cyan text-[10px] font-bold tracking-[0.3em] uppercase">Detalles del Producto</span>
                        <h2 className="text-3xl font-bold text-white mt-2 leading-tight">
                            {product.nombre} {/* <--- Columna 'nombre' */}
                        </h2>
                        <div className="text-2xl font-black text-green-400 mt-2">
                            ${Number(product.precio).toLocaleString('es-CO')} {/* <--- Columna 'precio' */}
                        </div>
                    </div>

                    <div className="flex-grow">
                        <h3 className="text-gray-500 uppercase tracking-widest text-[10px] font-bold mb-3 border-b border-gray-800 pb-2">
                            Descripción
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-sm">
                            {product.descripcion || "Este producto no tiene una descripción detallada todavía."} {/* <--- Columna 'descripcion' */}
                        </p>
                    </div>

                    {/* Botones de Acción */}
                    <div className="mt-8 space-y-4">
                        <button
                            onClick={sendWhatsApp}
                            className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all active:scale-95 shadow-lg shadow-green-900/20"
                        >
                            <span className="text-lg">Pedir por WhatsApp</span>
                            <span className="bg-white/20 p-1 rounded-md text-xs">📱</span>
                        </button>

                        <div className="flex justify-between items-center px-2">
                            <p className="text-[9px] text-gray-500 uppercase tracking-widest font-medium">
                                Lion Tech Shop • 2026
                            </p>
                            <div className="flex gap-1">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                <span className="text-[9px] text-green-500 uppercase font-bold">Disponible</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
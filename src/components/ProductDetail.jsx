import React from 'react';

const ProductDetail = ({ product, onClose }) => {
    if (!product) return null;

    // Función para mensaje de WhatsApp personalizado
    const sendWhatsApp = () => {
        const message = `Hola Lionchshop! Me interesa el producto: ${product.name}`;
        window.open(`https://wa.me/573000000000?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <div className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl flex flex-col md:flex-row relative">

                {/* Botón Cerrar */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 bg-gray-100 hover:bg-red-100 hover:text-red-600 p-2 rounded-full transition-colors z-10"
                >
                    ✕
                </button>

                {/* Lado Izquierdo: La Foto con efecto */}
                <div className="md:w-1/2 bg-gray-50 flex items-center justify-center p-8">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* Lado Derecho: Info y Botones */}
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-2">Nuevo Producto</span>
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-4">{product.name}</h2>

                    <p className="text-gray-600 leading-relaxed mb-6 italic">
                        "{product.description}"
                    </p>

                    <div className="text-2xl font-bold text-gray-800 mb-8">
                        ${product.price} <span className="text-sm text-gray-400 font-normal">COP</span>
                    </div>

                    {/* Botones Creativos */}
                    <div className="space-y-4">
                        <button
                            onClick={sendWhatsApp}
                            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-green-200 transition-all active:scale-95"
                        >
                            <span>Pedir por WhatsApp</span>
                        </button>

                        <button className="w-full bg-black hover:bg-gray-800 text-white font-bold py-4 rounded-xl transition-all active:scale-95">
                            Agregar al Carrito
                        </button>
                    </div>

                    <p className="mt-6 text-center text-gray-400 text-xs">
                        ✨ Envío rápido y seguro con Lionchshop
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

const Admin = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // Estado para el formulario (Crear/Editar)
  const [form, setForm] = useState({ nombre: '', precio: '', status: 'Stock Inmediato', imagen: '' });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchProductos();
  }, []);

  const fetchProductos = async () => {
    const { data } = await supabase.from('productos').select('*').order('id', { ascending: false });
    setProductos(data);
  };

  const handleSubirImagen = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);
    const fileName = `${Date.now()}_${file.name}`;
    
    // 1. Subir a Storage (Asegúrate de tener un bucket llamado 'productos' público)
    const { data, error } = await supabase.storage.from('productos').upload(fileName, file);

    if (error) {
      alert("Error al subir imagen: " + error.message);
    } else {
      const { data: urlData } = supabase.storage.from('productos').getPublicUrl(fileName);
      setForm({ ...form, imagen: urlData.publicUrl });
      alert("Imagen subida con éxito");
    }
    setLoading(false);
  };

  const guardarProducto = async (e) => {
    e.preventDefault();
    if (!form.imagen) return alert("Sube una imagen primero");

    if (editId) {
      // ACTUALIZAR (Update)
      await supabase.from('productos').update(form).eq('id', editId);
      setEditId(null);
    } else {
      // CREAR (Create)
      await supabase.from('productos').insert([form]);
    }

    setForm({ nombre: '', precio: '', status: 'Stock Inmediato', imagen: '' });
    fetchProductos();
  };

  const prepararEdicion = (p) => {
    setForm({ nombre: p.nombre, precio: p.precio, status: p.status, imagen: p.imagen });
    setEditId(p.id);
    window.scrollTo(0, 0);
  };

  const eliminarProducto = async (id) => {
    if (window.confirm('¿Eliminar este producto?')) {
      await supabase.from('productos').delete().eq('id', id);
      fetchProductos();
    }
  };

  return (
    <div className="p-8 bg-lion-black min-h-screen text-white pt-24 pb-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-lion-cyan tracking-widest">PANEL ADMIN LION TECH</h1>

        {/* --- FORMULARIO --- */}
        <form onSubmit={guardarProducto} className="bg-lion-dark p-6 rounded-2xl border border-lion-cyan/20 mb-12">
          <h2 className="text-xl mb-6 font-bold">{editId ? 'Editar Producto' : 'Añadir Nuevo Producto'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="text" placeholder="Nombre del producto" required
              className="bg-black border border-gray-800 p-3 rounded-lg"
              value={form.nombre} onChange={e => setForm({...form, nombre: e.target.value})}
            />
            <input 
              type="number" placeholder="Precio (ej: 28000)" required
              className="bg-black border border-gray-800 p-3 rounded-lg"
              value={form.precio} onChange={e => setForm({...form, precio: e.target.value})}
            />
            <select 
              className="bg-black border border-gray-800 p-3 rounded-lg"
              value={form.status} onChange={e => setForm({...form, status: e.target.value})}
            >
              <option value="Stock Inmediato">Stock Inmediato</option>
              <option value="Agotado">Agotado</option>
              <option value="Próximamente">Próximamente</option>
            </select>
            <div className="flex flex-col gap-2">
              <input type="file" accept="image/*" onChange={handleSubirImagen} className="text-xs" />
              {form.imagen && <p className="text-[10px] text-green-400">Imagen lista ✓</p>}
            </div>
          </div>
          <button 
            type="submit" disabled={loading}
            className="w-full mt-6 bg-lion-cyan text-black font-bold py-3 rounded-lg hover:scale-[1.02] transition-transform"
          >
            {loading ? 'Subiendo...' : (editId ? 'ACTUALIZAR PRODUCTO' : 'GUARDAR PRODUCTO')}
          </button>
          {editId && (
            <button onClick={() => {setEditId(null); setForm({nombre:'', precio:'', status:'Stock Inmediato', imagen:''})}} 
                    className="w-full mt-2 text-gray-500 text-xs">Cancelar Edición</button>
          )}
        </form>

        {/* --- LISTA DE PRODUCTOS --- */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold mb-4 text-gray-400">Inventario Actual</h2>
          {productos.map(p => (
            <div key={p.id} className="flex justify-between items-center bg-lion-dark/50 p-4 rounded-xl border border-gray-900">
              <div className="flex items-center gap-4">
                <img src={p.imagen} className="w-12 h-12 object-cover rounded-lg border border-gray-800" />
                <div>
                  <p className="font-bold text-sm">{p.nombre}</p>
                  <p className="text-lion-cyan text-xs">${Number(p.precio).toLocaleString('es-CO')}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button onClick={() => prepararEdicion(p)} className="text-blue-400 text-xs font-bold px-3 py-1 border border-blue-400/30 rounded-lg hover:bg-blue-400 hover:text-white transition-all">EDITAR</button>
                <button onClick={() => eliminarProducto(p.id)} className="text-red-500 text-xs font-bold px-3 py-1 border border-red-500/30 rounded-lg hover:bg-red-500 hover:text-white transition-all">BORRAR</button>
              </div>
            </div>
          ))}
        </div>

        <button onClick={() => supabase.auth.signOut()} className="mt-12 text-gray-600 text-[10px] uppercase tracking-widest hover:text-white transition-colors">Cerrar Sesión Segura</button>
      </div>
    </div>
  );
};

export default Admin;
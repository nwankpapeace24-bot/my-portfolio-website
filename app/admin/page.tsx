"use client";

import { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import {
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiEyeOff,
  FiEye,
  FiLogOut,
  FiBriefcase,
  FiMessageCircle,
  FiUploadCloud,
  FiX,
  FiExternalLink,
} from "react-icons/fi";
import { CldUploadWidget } from "next-cloudinary";
import {
  getPortfolioItems,
  upsertPortfolioItem,
  deletePortfolioItem,
  getTestimonials,
  upsertTestimonial,
  deleteTestimonial,
} from "@/lib/actions";
import Link from "next/link";

export default function AdminDashboard() {
  const { status } = useSession();
  const [activeTab, setActiveTab] = useState<"portfolio" | "testimonials">("portfolio");
  const [items, setItems] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  if (status === "unauthenticated") redirect("/login");

  const loadData = async () => {
    setLoading(true);
    try {
      const data = activeTab === "portfolio" 
        ? await getPortfolioItems() 
        : await getTestimonials();
      setItems(data || []);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [activeTab]);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure? This action cannot be undone.")) return;
    if (activeTab === "portfolio") await deletePortfolioItem(id);
    else await deleteTestimonial(id);
    loadData();
  };

  const toggleVisibility = async (item: any) => {
    const updatedItem = { ...item, isHidden: !item.isHidden };
    if (activeTab === "portfolio") await upsertPortfolioItem(updatedItem);
    else await upsertTestimonial(updatedItem);
    loadData();
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex font-body text-writer-deep-blue">
      {/* Sidebar */}
      <aside className="w-64 bg-writer-deep-blue text-white p-6 hidden md:flex flex-col sticky top-0 h-screen">
        <Link href="/" className="mb-10 block group">
          <h1 className="text-xl font-heading font-bold group-hover:text-writer-sky-blue transition-colors">Peace Admin</h1>
          <p className="text-xs opacity-70 flex items-center gap-1 uppercase tracking-widest mt-1">
            <FiExternalLink size={10} /> View Site
          </p>
        </Link>

        <nav className="space-y-2 flex-1">
          <TabButton active={activeTab === "portfolio"} onClick={() => setActiveTab("portfolio")} icon={<FiBriefcase />} label="Portfolio" />
          <TabButton active={activeTab === "testimonials"} onClick={() => setActiveTab("testimonials")} icon={<FiMessageCircle />} label="Testimonials" />
        </nav>

        <button onClick={() => signOut()} className="mt-auto flex items-center gap-3 p-3 text-red-400 hover:bg-red-500/10 rounded-xl transition font-bold">
          <FiLogOut /> Sign Out
        </button>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 lg:p-12">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-heading font-bold capitalize tracking-tight">{activeTab}</h2>
            <p className="text-sm text-gray-500">Manage content without touching code.</p>
          </div>
          <button
            onClick={() => { setEditingItem(null); setIsModalOpen(true); }}
            className="bg-writer-deep-blue text-white px-8 py-3.5 rounded-2xl flex items-center gap-2 font-bold hover:shadow-xl transition-all active:scale-95"
          >
            <FiPlus size={20} /> Add {activeTab === "portfolio" ? "Project" : "Testimonial"}
          </button>
        </header>

        {loading ? (
          <div className="flex justify-center py-32"><div className="animate-spin h-12 w-12 border-4 border-gray-100 border-b-writer-sky-blue rounded-full" /></div>
        ) : (
          <div className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50/50 text-[10px] tracking-widest uppercase text-gray-400 border-b">
                  <th className="p-6 text-left font-bold">Title / Name</th>
                  <th className="p-6 text-left font-bold">Type / Company</th>
                  <th className="p-6 text-center font-bold">Status</th>
                  <th className="p-6 text-right font-bold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
  {items.map((item) => (
    <tr key={item.id} className={`transition-colors hover:bg-gray-50/30 ${item.isHidden ? "opacity-60 bg-gray-50/40" : ""}`}>
      <td className="p-6">
        <div className="flex items-center gap-4">
          {/* Only show image if we are in the portfolio tab */}
          {activeTab === "portfolio" && (
            <img 
              src={item.image || "/placeholder.png"} 
              className="w-14 h-14 rounded-xl object-cover bg-gray-100 border shadow-sm" 
              alt="" 
            />
          )}
          <div>
            <p className="font-bold text-gray-800">{item.title || item.name}</p>
            <p className="text-[10px] text-gray-400 font-mono">ID: {item.id.substring(0, 8)}</p>
          </div>
        </div>
      </td>
                    <td className="p-6">
                      <p className="text-sm font-semibold text-gray-600">{item.type || item.company || "—"}</p>
                    </td>
                    <td className="p-6 text-center">
                      <span className={`px-4 py-1.5 text-[10px] uppercase font-black rounded-full ${item.isHidden ? "bg-red-50 text-red-500" : "bg-green-50 text-green-600"}`}>
                        {item.isHidden ? "Hidden" : "Live"}
                      </span>
                    </td>
                    <td className="p-6 text-right">
                      <div className="flex justify-end gap-1">
                        <ActionButton onClick={() => { setEditingItem(item); setIsModalOpen(true); }} icon={<FiEdit2 size={16} />} />
                        <ActionButton onClick={() => toggleVisibility(item)} icon={item.isHidden ? <FiEye size={16} /> : <FiEyeOff size={16} />} />
                        <ActionButton onClick={() => handleDelete(item.id)} icon={<FiTrash2 size={16} />} variant="danger" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>

      {isModalOpen && (
        <Modal
          type={activeTab}
          item={editingItem}
          onClose={() => setIsModalOpen(false)}
          onSuccess={() => { setIsModalOpen(false); loadData(); }}
        />
      )}
    </div>
  );
}


/* ---------------- MODAL COMPONENT ---------------- */

function Modal({ type, item, onClose, onSuccess }: any) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    id: item?.id || "",
    title: item?.title || "",
    name: item?.name || "",
    type: item?.type || "", 
    client: item?.client || "",
    description: item?.description || item?.testimonial || "",
    image: item?.image || "",
    link: item?.link || "",
    rating: item?.rating || 5,
    featured: item?.featured || false,
    isHidden: item?.isHidden || false,
    tags: item?.tags?.join(", ") || "", 
    company: item?.company || "",
    role: item?.role || "",
    metric: item?.metric || "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (type === "portfolio") {
        await upsertPortfolioItem({
          ...formData,
          id: formData.id || undefined,
          tags: formData.tags.split(",").map(t => t.trim()).filter(Boolean),
        });
      } else {
        const testimonialData = {
          id: formData.id || undefined,
          name: formData.name,
          role: formData.role,
          company: formData.company,
          testimonial: formData.description,
          metric: formData.metric,
          rating: parseInt(formData.rating.toString()),
          featured: formData.featured,
          isHidden: formData.isHidden,
        };
        await upsertTestimonial(testimonialData);
      }
      onSuccess();
    } catch (err) {
      console.error(err);
      alert("Error saving data.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-writer-deep-blue/60 backdrop-blur-md flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-[2.5rem] w-full max-w-2xl shadow-2xl my-auto animate-in fade-in zoom-in duration-200">
        <div className="p-8 border-b flex justify-between items-center">
          <h3 className="text-2xl font-heading font-bold text-writer-deep-blue">
            {item ? "Edit" : "Create"} {type === "portfolio" ? "Project" : "Testimonial"}
          </h3>
          <button onClick={onClose} className="p-3 hover:bg-gray-100 rounded-2xl transition text-gray-400 hover:text-red-500">
            <FiX size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {type === "portfolio" && (
            <div className="md:col-span-2 flex items-center gap-6 bg-gray-50/50 p-6 rounded-[1.5rem] border-2 border-dashed border-gray-200">
              <div className="w-24 h-24 rounded-2xl bg-white border flex items-center justify-center overflow-hidden">
                {formData.image ? (
                  <img src={formData.image} className="w-full h-full object-cover" alt="" />
                ) : (
                  <FiUploadCloud className="text-gray-300" size={32} />
                )}
              </div>
              <CldUploadWidget 
                uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET} 
                onSuccess={(res: any) => setFormData({...formData, image: res.info.secure_url})}
              >
                {({ open }) => (
                  <button type="button" onClick={() => open()} className="bg-writer-deep-blue text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:opacity-90 transition">
                    {formData.image ? "Change Media" : "Upload Media"}
                  </button>
                )}
              </CldUploadWidget>
            </div>
          )}

          {type === "portfolio" ? (
            <>
              <Input 
                label="Project Title" 
                placeholder="e.g. Bao Casino Review 2025" 
                value={formData.title} 
                onChange={(v: string) => setFormData({...formData, title: v})} 
              />
              <Input 
                label="Client" 
                placeholder="e.g. CryptoManicks or Esports News Hub" 
                value={formData.client} 
                onChange={(v: string) => setFormData({...formData, client: v})} 
              />
              <Input 
                label="Type" 
                placeholder="e.g. Casino Review / Industry Guide" 
                value={formData.type} 
                onChange={(v: string) => setFormData({...formData, type: v})} 
              />
              <Input 
                label="Link" 
                placeholder="https://cryptomaniaks.com/reviews/..." 
                value={formData.link} 
                onChange={(v: string) => setFormData({...formData, link: v})} 
              />
              <div className="md:col-span-2">
                <Input 
                  label="Tags (split by comma)" 
                  placeholder="Crypto, Bitcoin, CS:GO, Featured" 
                  value={formData.tags} 
                  onChange={(v: string) => setFormData({...formData, tags: v})} 
                />
              </div>
            </>
          ) : (
            <>
              <Input 
                label="Client Name" 
                placeholder="e.g. Sarah Jenkins" 
                value={formData.name} 
                onChange={(v: string) => setFormData({...formData, name: v})} 
              />
              <Input 
                label="Role" 
                placeholder="e.g. Head of Growth" 
                value={formData.role} 
                onChange={(v: string) => setFormData({...formData, role: v})} 
              />
              <Input 
                label="Company" 
                placeholder="e.g. Crypto2Community" 
                value={formData.company} 
                onChange={(v: string) => setFormData({...formData, company: v})} 
              />
              <Input 
                label="Success Metric" 
                placeholder="e.g. 50% increase in lead generation" 
                value={formData.metric} 
                onChange={(v: string) => setFormData({...formData, metric: v})} 
              />
              <Input 
  label="Rating (1-5)" 
  type="number" 
  min="0"
  max="5"
  step="0.1" // Allows for ratings like 4.8
  placeholder="5.0"
  value={formData.rating} 
  onChange={(v: string) => {
    const val = parseFloat(v);
    // If user types a number higher than 5, force it to 5
    if (val > 5) setFormData({...formData, rating: 5});
    else if (val < 0) setFormData({...formData, rating: 0});
    else setFormData({...formData, rating: v});
  }} 
/>
            </>
          )}

          <div className="md:col-span-2 space-y-2">
            <label className="text-[10px] font-black uppercase text-gray-400 ml-1">
              {type === "portfolio" ? "Description" : "Testimonial Content"}
            </label>
            <textarea
              required
              rows={4}
              placeholder={type === "portfolio" 
                ? "e.g. Comprehensive review of Bao Casino's crypto gambling features and bonuses..." 
                : "e.g. Peace transformed our content strategy, resulting in a 7 BTC welcome bonus coverage that doubled our traffic..."
              }
              className="w-full border-2 border-gray-100 p-4 rounded-2xl focus:border-writer-sky-blue outline-none text-sm transition-colors placeholder:text-gray-300"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>

          <div className="md:col-span-2 flex gap-4 p-5 bg-gray-50 rounded-2xl border">
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="checkbox" 
                checked={formData.featured} 
                onChange={(e) => setFormData({
                    ...formData, 
                    featured: e.target.checked, 
                    isHidden: e.target.checked ? false : formData.isHidden
                })} 
              />
              <span className="text-sm font-bold">Featured</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="checkbox" 
                checked={formData.isHidden} 
                onChange={(e) => setFormData({
                    ...formData, 
                    isHidden: e.target.checked, 
                    featured: e.target.checked ? false : formData.featured
                })} 
              />
              <span className="text-sm font-bold text-red-500">Hidden</span>
            </label>
          </div>

          <button 
            disabled={isSubmitting} 
            className="md:col-span-2 bg-writer-deep-blue text-white py-5 rounded-[1.5rem] font-black uppercase tracking-widest disabled:opacity-50 hover:shadow-lg transition-all active:scale-[0.98]"
          >
            {isSubmitting ? "Syncing..." : "Publish Content"}
          </button>
        </form>
      </div>
    </div>
  );
}

/* ---------------- HELPERS ---------------- */

function Input({ label, value, onChange, placeholder, type = "text", min, max }: any) {
  return (
    <div className="space-y-1">
      <label className="text-[10px] font-black uppercase text-gray-400 ml-1">{label}</label>
      <input 
        type={type} 
        required 
        min={min} // Added this
        max={max} // Added this
        placeholder={placeholder}
        className="w-full border-2 border-gray-100 p-4 rounded-2xl focus:border-writer-sky-blue outline-none text-sm transition-all placeholder:text-gray-300" 
        value={value} 
        onChange={(e) => onChange(e.target.value)} 
      />
    </div>
  );
}

function TabButton({ active, onClick, icon, label }: any) {
  return (
    <button onClick={onClick} className={`w-full flex items-center gap-4 p-4 rounded-2xl font-bold transition-all ${active ? "bg-writer-sky-blue text-white shadow-lg" : "opacity-60 hover:bg-white/5"}`}>
      {icon} {label}
    </button>
  );
}

function ActionButton({ onClick, icon, variant = "default" }: any) {
  return (
    <button onClick={onClick} className={`p-3 rounded-xl transition-all ${variant === "danger" ? "text-gray-300 hover:text-red-500 hover:bg-red-50" : "text-gray-300 hover:text-writer-sky-blue hover:bg-gray-100"}`}>
      {icon}
    </button>
  );
}
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
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col md:flex-row font-body text-writer-deep-blue">
      {/* Mobile Header */}
      <div className="md:hidden bg-writer-deep-blue text-white p-4 flex justify-between items-center sticky top-0 z-40 shadow-md">
        <h1 className="font-heading font-bold tracking-tight">Peace Admin</h1>
        <button onClick={() => signOut()} className="p-2 text-red-400">
          <FiLogOut size={20} />
        </button>
      </div>

      {/* Desktop Sidebar */}
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
      <main className="flex-1 p-4 sm:p-6 lg:p-12 pb-24 md:pb-12">
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold capitalize tracking-tight">{activeTab}</h2>
            <p className="text-xs sm:text-sm text-gray-500">Manage content without touching code.</p>
          </div>
          <button
            onClick={() => { setEditingItem(null); setIsModalOpen(true); }}
            className="w-full sm:w-auto bg-writer-deep-blue text-white px-6 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl flex justify-center items-center gap-2 font-bold hover:shadow-xl transition-all active:scale-95"
          >
            <FiPlus size={20} /> Add {activeTab === "portfolio" ? "Project" : "Testimonial"}
          </button>
        </header>

        {loading ? (
          <div className="flex justify-center py-32"><div className="animate-spin h-12 w-12 border-4 border-gray-100 border-b-writer-sky-blue rounded-full" /></div>
        ) : (
          <>
            <div className="hidden md:block bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm">
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
                          {activeTab === "portfolio" && (
                            <img src={item.image || "/placeholder.png"} className="w-14 h-14 rounded-xl object-cover bg-gray-100 border shadow-sm" alt="" />
                          )}
                          <div>
                            <p className="font-bold text-gray-800">{item.title || item.name}</p>
                            <p className="text-[10px] text-gray-400 font-mono">ID: {item.id.substring(0, 8)}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-6 text-sm font-semibold text-gray-600">{item.type || item.company || "—"}</td>
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

            <div className="md:hidden space-y-4">
              {items.map((item) => (
                <div key={item.id} className={`bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-4 ${item.isHidden ? "opacity-60" : ""}`}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      {activeTab === "portfolio" && (
                        <img src={item.image || "/placeholder.png"} className="w-12 h-12 rounded-lg object-cover border" alt="" />
                      )}
                      <div>
                        <p className="font-bold text-gray-900 leading-tight">{item.title || item.name}</p>
                        <p className="text-[10px] text-gray-400 uppercase tracking-tighter mt-1">{item.type || item.company || "No Category"}</p>
                      </div>
                    </div>
                    <span className={`px-2 py-1 text-[8px] uppercase font-black rounded-md ${item.isHidden ? "bg-red-50 text-red-500" : "bg-green-50 text-green-600"}`}>
                      {item.isHidden ? "Hidden" : "Live"}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between border-t pt-3">
                    <p className="text-[10px] text-gray-300 font-mono">ID: {item.id.substring(0, 8)}</p>
                    <div className="flex gap-2">
                       <button onClick={() => { setEditingItem(item); setIsModalOpen(true); }} className="p-2 bg-gray-50 rounded-lg text-gray-600"><FiEdit2 size={16} /></button>
                       <button onClick={() => toggleVisibility(item)} className="p-2 bg-gray-50 rounded-lg text-gray-600">{item.isHidden ? <FiEye size={16} /> : <FiEyeOff size={16} />}</button>
                       <button onClick={() => handleDelete(item.id)} className="p-2 bg-red-50 rounded-lg text-red-500"><FiTrash2 size={16} /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </main>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around p-2 z-40 pb-safe">
        <MobileTabButton active={activeTab === "portfolio"} onClick={() => setActiveTab("portfolio")} icon={<FiBriefcase size={20} />} label="Portfolio" />
        <MobileTabButton active={activeTab === "testimonials"} onClick={() => setActiveTab("testimonials")} icon={<FiMessageCircle size={20} />} label="Testimonials" />
        <button onClick={() => window.open('/', '_blank')} className="flex flex-col items-center p-2 text-gray-400">
          <FiExternalLink size={20} />
          <span className="text-[10px] font-bold mt-1">Site</span>
        </button>
      </nav>

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

/* ---------------- MOBILE HELPERS ---------------- */

function MobileTabButton({ active, onClick, icon, label }: any) {
  return (
    <button onClick={onClick} className={`flex flex-col items-center p-2 transition-colors ${active ? "text-writer-sky-blue" : "text-gray-400"}`}>
      {icon}
      <span className="text-[10px] font-bold mt-1">{label}</span>
    </button>
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
        await upsertTestimonial({
          id: formData.id || undefined,
          name: formData.name,
          role: formData.role,
          company: formData.company,
          testimonial: formData.description,
          metric: formData.metric,
          rating: parseFloat(formData.rating.toString()),
          featured: formData.featured,
          isHidden: formData.isHidden,
        });
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
    <div className="fixed inset-0 bg-writer-deep-blue/60 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-t-[2rem] sm:rounded-[2.5rem] w-full max-w-2xl shadow-2xl animate-in slide-in-from-bottom sm:zoom-in duration-300 max-h-[95vh] flex flex-col">
        <div className="p-6 sm:p-8 border-b flex justify-between items-center sticky top-0 bg-white rounded-t-[2rem] z-10">
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-writer-deep-blue">
            {item ? "Edit" : "Create"} {type === "portfolio" ? "Project" : "Testimonial"}
          </h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-xl transition text-gray-400 hover:text-red-500">
            <FiX size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 sm:p-8 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {type === "portfolio" && (
            <div className="md:col-span-2 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-gray-50/50 p-4 sm:p-6 rounded-[1.5rem] border-2 border-dashed border-gray-200">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white border flex items-center justify-center overflow-hidden shrink-0">
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
                  <button type="button" onClick={() => open()} className="w-full sm:w-auto bg-writer-deep-blue text-white px-5 py-2.5 rounded-xl font-bold text-sm">
                    {formData.image ? "Change Media" : "Upload Media"}
                  </button>
                )}
              </CldUploadWidget>
            </div>
          )}

          {type === "portfolio" ? (
            <>
              <Input label="Project Title" placeholder="e.g. Bao Casino Review" value={formData.title} onChange={(v: string) => setFormData({...formData, title: v})} />
              <Input label="Client" placeholder="e.g. CryptoManicks" value={formData.client} onChange={(v: string) => setFormData({...formData, client: v})} />
              <Input label="Content Type" placeholder="e.g. Case Study" value={formData.type} onChange={(v: string) => setFormData({...formData, type: v})} />
              <Input label="Live Link" placeholder="https://..." value={formData.link} onChange={(v: string) => setFormData({...formData, link: v})} />
              <div className="md:col-span-2">
                <Input label="Tags (comma separated)" placeholder="SEO, Casino, Case Study" value={formData.tags} onChange={(v: string) => setFormData({...formData, tags: v})} />
              </div>
            </>
          ) : (
            <>
              <Input label="Client Name" placeholder="e.g. John Doe" value={formData.name} onChange={(v: string) => setFormData({...formData, name: v})} />
              <Input label="Role" placeholder="e.g. Marketing Lead" value={formData.role} onChange={(v: string) => setFormData({...formData, role: v})} />
              <Input label="Company" placeholder="e.g. TechFlow Inc" value={formData.company} onChange={(v: string) => setFormData({...formData, company: v})} />
              <Input label="Success Metric" placeholder="e.g. 40% Increase in ROI" value={formData.metric} onChange={(v: string) => setFormData({...formData, metric: v})} />
              <Input label="Rating (1-5)" type="number" step="0.1" value={formData.rating} onChange={(v: string) => setFormData({...formData, rating: v})} />
            </>
          )}

          <div className="md:col-span-2 space-y-2">
            <label className="text-[10px] font-black uppercase text-gray-400 ml-1">Description</label>
            <textarea
              required
              rows={3}
              placeholder={type === "portfolio" ? "Briefly describe the project goals and results..." : "Paste the client's testimonial here..."}
              className="w-full border-2 border-gray-100 p-4 rounded-2xl focus:border-writer-sky-blue outline-none text-sm"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>

          <div className="md:col-span-2 flex gap-4 p-4 bg-gray-50 rounded-2xl border">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-5 h-5 rounded border-gray-300" checked={formData.featured} onChange={(e) => setFormData({...formData, featured: e.target.checked})} />
              <span className="text-sm font-bold">Featured on Homepage</span>
            </label>
          </div>

          <button disabled={isSubmitting} className="md:col-span-2 bg-writer-deep-blue text-white py-4 sm:py-5 rounded-2xl font-black uppercase tracking-widest disabled:opacity-50 mb-6 active:scale-95 transition-transform">
            {isSubmitting ? "Syncing..." : "Publish Content"}
          </button>
        </form>
      </div>
    </div>
  );
}

/* ---------------- SHARED HELPERS ---------------- */

function Input({ label, value, onChange, placeholder, type = "text", step }: any) {
  return (
    <div className="space-y-1">
      <label className="text-[10px] font-black uppercase text-gray-400 ml-1">{label}</label>
      <input 
        type={type} 
        step={step}
        required 
        placeholder={placeholder}
        className="w-full border-2 border-gray-100 p-3 sm:p-4 rounded-xl sm:rounded-2xl focus:border-writer-sky-blue outline-none text-sm transition-all" 
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
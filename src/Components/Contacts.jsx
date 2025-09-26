import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function ContactsCards() {
  const initialContacts = [
    {
      id: "1",
      name: "Aisha Varma",
      email: "aisha@solara.dev",
      phone: "+91 98765 10101",
      company: "Solara Labs",
      notes: "Prefers email.",
      createdAt: "2025-09-01",
    },
    {
      id: "2",
      name: "Rahul Mehta",
      email: "rahul@zenpay.in",
      phone: "+91 99988 77665",
      company: "ZenPay",
      notes: "CFO contact via Sanjay.",
      createdAt: "2025-09-10",
    },
    {
      id: "3",
      name: "Neha Sharma",
      email: "neha@pixelnest.io",
      phone: "+91 98000 55555",
      company: "PixelNest",
      notes: "Asked for demo next week.",
      createdAt: "2025-09-15",
    },
    {
      id: "4",
      name: "Arun Kumar",
      email: "arun@deltafin.com",
      phone: "+91 97000 44444",
      company: "DeltaFin",
      notes: "Whatsapp follow-up.",
      createdAt: "2025-09-17",
    },
    {
      id: "5",
      name: "Meera Iyer",
      email: "meera@brightstack.ai",
      phone: "+91 91234 22334",
      company: "BrightStack",
      notes: "Requested pricing sheet.",
      createdAt: "2025-09-18",
    },
    {
      id: "6",
      name: "Siddharth Rao",
      email: "sid@quantech.io",
      phone: "+91 93450 66778",
      company: "QuanTech",
      notes: "Follow-up call scheduled.",
      createdAt: "2025-09-19",
    },
    {
      id: "7",
      name: "Priya Nair",
      email: "priya@cloudstride.com",
      phone: "+91 96543 22345",
      company: "CloudStride",
      notes: "Interested in annual plan.",
      createdAt: "2025-09-20",
    },
    {
      id: "8",
      name: "Vikram Singh",
      email: "vikram@finlogic.in",
      phone: "+91 97666 88990",
      company: "FinLogic",
      notes: "Sent proposal last week.",
      createdAt: "2025-09-21",
    },
    {
      id: "9",
      name: "Anjali Gupta",
      email: "anjali@medinova.org",
      phone: "+91 98877 55661",
      company: "MediNova",
      notes: "Asked for case studies.",
      createdAt: "2025-09-22",
    },
    {
      id: "10",
      name: "Karan Patel",
      email: "karan@orbitworks.io",
      phone: "+91 97777 33445",
      company: "OrbitWorks",
      notes: "Meeting scheduled in Bangalore.",
      createdAt: "2025-09-23",
    },
  ];

  const [contacts, setContacts] = useState(initialContacts);
  const [viewMode, setViewMode] = useState("cards");
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [modalMode, setModalMode] = useState("add"); // 'add' | 'edit'
  const [editingId, setEditingId] = useState(null);
  const [activeModal, setActiveModal] = useState(false);

  const validateForm = () => {
    const errors = {};
    if (!form.name.trim()) errors.name = "Name is required";
    if (!form.email.trim()) errors.email = "Email is required";
    return errors;
  };

  const resetForm = () => {
    setForm({ name: "", company: "", email: "", phone: "", notes: "" });
    setFormErrors({});
  };

  const openAdd = () => {
    setModalMode("add");
    setEditingId(null);
    resetForm();
    setIsAddOpen(true);
  };

  const openEdit = (contact) => {
    setModalMode("edit");
    setEditingId(contact.id);
    setForm({
      name: contact.name || "",
      company: contact.company || "",
      email: contact.email || "",
      phone: contact.phone || "",
      notes: contact.notes || "",
    });
    setIsAddOpen(true);
  };

  const handleDelete = (id) => {
    setActiveModal(true);
    console.log(activeModal);
    /*  alert("Are u sure"); */
    /*  */
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;

    if (modalMode === "edit" && editingId) {
      setContacts(
        contacts.map((c) =>
          c.id === editingId
            ? {
                ...c,
                name: form.name.trim(),
                company: form.company.trim(),
                email: form.email.trim(),
                phone: form.phone.trim(),
                notes: form.notes.trim(),
              }
            : c
        )
      );
      setIsAddOpen(false);
      resetForm();
      setEditingId(null);
      setModalMode("add");
      return;
    }

    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    const newContact = {
      id: String(Date.now()),
      name: form.name.trim(),
      company: form.company.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      notes: form.notes.trim(),
      createdAt: `${yyyy}-${mm}-${dd}`,
    };
    setContacts([newContact, ...contacts]);
    setIsAddOpen(false);
    resetForm();
  };

  return (
    <>
      <div className="contacts-header">
        <div className="contact-heading">
          <h2 style={{ margin: 0 }}>Contacts</h2>
          <h4 style={{ margin: 0, color: "#45474b" }}>
            Store, search, and manage your network in one neat place
          </h4>
        </div>
        <div className="contacts-toggle-wrap">
          <button onClick={openAdd} className="contacts-add-btn">
            + Add Contact
          </button>
          <div className="contacts-view-toggle">
            <div
              className={`contacts-toggle-slider ${
                viewMode === "cards" ? "cards" : "table"
              }`}
            ></div>
            <div className="contacts-tabs">
              <button
                onClick={() => setViewMode("cards")}
                className={`contacts-tab-btn ${
                  viewMode === "cards" ? "active" : ""
                }`}
              >
                Cards
              </button>
              <button
                onClick={() => setViewMode("table")}
                className={`contacts-tab-btn ${
                  viewMode === "table" ? "active" : ""
                }`}
              >
                Table
              </button>
            </div>
          </div>
        </div>
      </div>

      {activeModal && (
        <div className="contacts-modal-overlay">
          <div role="dialog" aria-modal="true" className="contacts-modal">
            <div className="contacts-modal-header">
              <h3 className="contacts-modal-title">
                Delete this contact? This cannot be undone.
              </h3>
              <button
                onClick={() => {
                  /* setContacts(contacts.filter((c) => c.id !== id)) */ setActiveModal(
                    false
                  );
                }}
                aria-label="Close"
                className="contacts-close-btn"
              >
                ×
              </button>
            </div>
            <div className="modal-btns contacts-form-actions">
              <button className="contacts-cancel-btn">Cancel</button>
              <button className="contacts-save-btn">Sure</button>
            </div>
          </div>
        </div>
      )}

      {isAddOpen && (
        <div className="contacts-modal-overlay">
          <div role="dialog" aria-modal="true" className="contacts-modal">
            <div className="contacts-modal-header">
              <h3 className="contacts-modal-title">
                {modalMode === "edit" ? "Edit Contact" : "Add New Contact"}
              </h3>
              <button
                onClick={() => {
                  setIsAddOpen(false);
                  resetForm();
                }}
                aria-label="Close"
                className="contacts-close-btn"
              >
                ×
              </button>
            </div>
            <form onSubmit={handleSubmit} className="contacts-modal-form">
              <div className="contacts-form-grid">
                <div>
                  <label className="contacts-field-label">Name</label>
                  <input
                    className="contacts-input"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Jane Doe"
                  />
                  {formErrors.name && (
                    <div className="contacts-error">{formErrors.name}</div>
                  )}
                </div>
                <div>
                  <label className="contacts-field-label">Company</label>
                  <input
                    className="contacts-input"
                    value={form.company}
                    onChange={(e) =>
                      setForm({ ...form, company: e.target.value })
                    }
                    placeholder="Acme Inc."
                  />
                </div>
                <div>
                  <label className="contacts-field-label">Email</label>
                  <input
                    type="email"
                    className="contacts-input"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="jane@example.com"
                  />
                  {formErrors.email && (
                    <div className="contacts-error">{formErrors.email}</div>
                  )}
                </div>
                <div>
                  <label className="contacts-field-label">Phone</label>
                  <input
                    className="contacts-input"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    placeholder="+91 90000 00000"
                  />
                </div>
              </div>
              <div style={{ marginTop: 12 }}>
                <label className="contacts-field-label">Notes</label>
                <textarea
                  rows={3}
                  className="contacts-textarea"
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  placeholder="Optional notes"
                />
              </div>
              <div className="contacts-form-actions">
                <button
                  type="button"
                  onClick={() => {
                    setIsAddOpen(false);
                    resetForm();
                  }}
                  className="contacts-cancel-btn"
                >
                  Cancel
                </button>
                <button type="submit" className="contacts-save-btn">
                  {modalMode === "edit" ? "Update Contact" : "Save Contact"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {viewMode === "cards" && (
        <div className="contacts-cards-grid">
          {contacts.map((c) => (
            <div key={c.id} className="contacts-card">
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: 8,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: "#e5e7eb",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      color: "#374151",
                    }}
                  >
                    {(c.name || "")
                      .split(" ")
                      .map((p) => p[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div>
                    <div className="contacts-card-name">{c.name}</div>
                    <div className="contacts-card-company">{c.company}</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 6 }}>
                  <button
                    onClick={() => openEdit(c)}
                    aria-label="Edit"
                    title="Edit"
                    style={{
                      border: "1px solid #cbd5e1",
                      background: "#ffffff",
                      color: "#0f172a",
                      padding: "6px 8px",
                      borderRadius: 8,
                      cursor: "pointer",
                    }}
                  >
                    <FaEdit size={10} />
                  </button>
                  <button
                    onClick={() => handleDelete(c.id)}
                    aria-label="Delete"
                    title="Delete"
                    style={{
                      border: "1px solid ",
                      background: "#ef4444",
                      color: "#ffffff",
                      padding: "6px 8px",
                      borderRadius: 8,
                      cursor: "pointer",
                    }}
                  >
                    {" "}
                    <FaTrash size={10} />
                  </button>
                </div>
              </div>
              <div className="contacts-card-subtext">
                <a
                  href={`mailto:${c.email}`}
                  style={{ color: "#2563eb", textDecoration: "none" }}
                >
                  {c.email}
                </a>
              </div>
              <div className="contacts-card-subtext">
                <a
                  href={`tel:${c.phone}`}
                  style={{ color: "#334155", textDecoration: "none" }}
                >
                  {c.phone}
                </a>
              </div>
              <div className="contacts-card-notes">{c.notes}</div>
              <div className="contacts-card-date">Added: {c.createdAt}</div>
            </div>
          ))}
        </div>
      )}

      {viewMode === "table" && (
        <div className="contacts-table-wrap">
          <table className="contacts-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Company</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Notes</th>
                <th>Added</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((c, idx) => (
                <tr key={c.id}>
                  <td>{c.name}</td>
                  <td>{c.company}</td>
                  <td>{c.email}</td>
                  <td>{c.phone}</td>
                  <td>{c.notes}</td>
                  <td>{c.createdAt}</td>
                  <td>
                    <div style={{ display: "flex", gap: 6 }}>
                      <button
                        onClick={() => openEdit(c)}
                        style={{
                          border: "1px solid #cbd5e1",
                          background: "#ffffff",
                          color: "#0f172a",
                          padding: "6px 8px",
                          borderRadius: 8,
                          cursor: "pointer",
                        }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(c.id)}
                        style={{
                          border: "1px solid #ef4444",
                          background: "#ef4444",
                          color: "#ffffff",
                          padding: "6px 8px",
                          borderRadius: 8,
                          cursor: "pointer",
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default ContactsCards;

import React, { useState, useContext } from "react";
import ThemeContext from "../Components/ThemeContext.jsx";

const Invoice_list = () => {
  const { isDarkMode, colors } = useContext(ThemeContext);

  // ----------------- Invoice State -----------------
  const [invoices, setInvoices] = useState([
    { id: '#D01', name: 'Ritesh Agrawal', img: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg', phone: '(+12185-4521-7568)', amount: '₹253', date: '23rd Dec 2020', status: 'Unpaid' },
    { id: '#D02', name: 'Sumit Verma', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbE-QUYqDmpPIH6zn9rMNrk4ex0oeDXgyqyyIlnCFyzMU7RtQ1vr_oLrU&s', phone: '(+12185-4521-7568)', amount: '₹482', date: '23rd Dec 2020', status: 'Paid' },
    { id: '#D03', name: 'Vivek Goyal', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcP1z-g5KnqvN8OPoUz4QR8gZA5mA2n5TaRin9SBg1k6YMEZSLOeOC8oo&s', phone: '(+12185-4521-7568)', amount: '₹546', date: '23rd Dec 2020', status: 'Unpaid' },
    { id: '#D04', name: 'Suman Yadav', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNBeaVGKFAv18xJu3qmndVr5dVaJRDvGFXURzSX7rBNq2rXeG_okSnNxs&s', phone: '(+12185-4521-7568)', amount: '₹154', date: '23rd Dec 2020', status: 'Unpaid' },
    { id: '#D05', name: 'Amit Gupta', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaEASkguQ0DP8kdtG4AIpZrMwOzeT1y0nilpMmNWoFVmcAEK4LR3ZQtJg&s', phone: '(+12185-4521-7568)', amount: '₹458', date: '23rd Dec 2020', status: 'Paid' },
    { id: '#D06', name: 'Nitin Gupta', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGHFs8ZCOu8xw3YwWfT0JUw2Ww2Avdrel9-Q&s', phone: '(+12185-4521-7568)', amount: '₹548', date: '23rd Dec 2020', status: 'Paid' },
    { id: '#D07', name: 'Heena Verma', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7fZTsHAPEe_i02D0_aff9xKP5rdrna4ymeJcqi9CoUod5hTgfhR7cODo&s', phone: '(+12185-4521-7568)', amount: '₹658', date: '23rd Dec 2020', status: 'Unpaid' },
    { id: '#D08', name: 'Sachine Yadav', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSl7RX8NPBkVMD1gwIkZNambOiCavQKkhvsQ&s', phone: '(+12185-4521-7568)', amount: '₹457', date: '23rd Dec 2020', status: 'Unpaid' },
    { id: '#D09', name: 'Mayank Kumar', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT29GwaWk7h0eivDe1X33QrmPFJKohsqAFrAQ&s', phone: '(+12185-4521-7568)', amount: '₹586', date: '23rd Dec 2020', status: 'Paid' },
    { id: '#D10', name: 'Rahul Goyal', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPty6a8rKXnhOmdXVo_vgCZaQ6p0bu66n-ZA&s', phone: '(+12185-4521-7568)', amount: '₹325', date: '23rd Dec 2020', status: 'Unpaid' },
    { id: '#D011', name: 'Nitin Gupta', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGHFs8ZCOu8xw3YwWfT0JUw2Ww2Avdrel9-Q&s', phone: '(+12185-4521-7568)', amount: '₹548', date: '23rd Dec 2020', status: 'Paid' },
    { id: '#D012', name: 'Heena Verma', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7fZTsHAPEe_i02D0_aff9xKP5rdrna4ymeJcqi9CoUod5hTgfhR7cODo&s', phone: '(+12185-4521-7568)', amount: '₹658', date: '23rd Dec 2020', status: 'Unpaid' },
    { id: '#D013', name: 'Sachine Yadav', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSl7RX8NPBkVMD1gwIkZNambOiCavQKkhvsQ&s', phone: '(+12185-4521-7568)', amount: '₹457', date: '23rd Dec 2020', status: 'Unpaid' },
    { id: '#D014', name: 'Mayank Kumar', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT29GwaWk7h0eivDe1X33QrmPFJKohsqAFrAQ&s', phone: '(+12185-4521-7568)', amount: '₹586', date: '23rd Dec 2020', status: 'Paid' },
    { id: '#D015', name: 'Rahul Goyal', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPty6a8rKXnhOmdXVo_vgCZaQ6p0bu66n-ZA&s', phone: '(+12185-4521-7568)', amount: '₹325', date: '23rd Dec 2020', status: 'Unpaid' },
    { id: '#D016', name: 'Ritesh Agrawal', img: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg', phone: '(+12185-4521-7568)', amount: '₹253', date: '23rd Dec 2020', status: 'Unpaid' },
    { id: '#D017', name: 'Sumit Verma', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbE-QUYqDmpPIH6zn9rMNrk4ex0oeDXgyqyyIlnCFyzMU7RtQ1vr_oLrU&s', phone: '(+12185-4521-7568)', amount: '₹482', date: '23rd Dec 2020', status: 'Paid' },
    { id: '#D018', name: 'Vivek Goyal', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcP1z-g5KnqvN8OPoUz4QR8gZA5mA2n5TaRin9SBg1k6YMEZSLOeOC8oo&s', phone: '(+12185-4521-7568)', amount: '₹546', date: '23rd Dec 2020', status: 'Unpaid' },
    { id: '#D019', name: 'Suman Yadav', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNBeaVGKFAv18xJu3qmndVr5dVaJRDvGFXURzSX7rBNq2rXeG_okSnNxs&s', phone: '(+12185-4521-7568)', amount: '₹154', date: '23rd Dec 2020', status: 'Unpaid' },
    { id: '#D020', name: 'Amit Gupta', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaEASkguQ0DP8kdtG4AIpZrMwOzeT1y0nilpMmNWoFVmcAEK4LR3ZQtJg&s', phone: '(+12185-4521-7568)', amount: '₹458', date: '23rd Dec 2020', status: 'Paid' },
    { id: '#D021', name: 'Rohan Gupta', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaEASkguQ0DP8kdtG4AIpZrMwOzeT1y0nilpMmNWoFVmcAEK4LR3ZQtJg&s', phone: '(+12185-4521-7568)', amount: '₹458', date: '23rd Dec 2020', status: 'Paid' },
    { id: '#D019', name: 'Suman Yadav', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNBeaVGKFAv18xJu3qmndVr5dVaJRDvGFXURzSX7rBNq2rXeG_okSnNxs&s', phone: '(+12185-4521-7568)', amount: '₹154', date: '23rd Dec 2020', status: 'Unpaid' },
  ]);

  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(invoices.length / itemsPerPage);

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDoctors = invoices.slice(startIndex, endIndex);

  // ----------------- Form State -----------------
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    phone: "",
    amount: "",
    date: "",
    status: "Unpaid",
    photo: null,
    preview: null,
  });

  // Handle Input Change (text + file separately)
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "photo") {
      const file = files[0];
      if (file) {
        setFormData((prev) => ({
          ...prev,
          photo: file,
          preview: URL.createObjectURL(file), // preview for UI
        }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const { id, name, phone, amount, date, preview } = formData;

    if (!id || !name || !phone || !amount || !date) {
      alert("Please fill in all fields");
      return;
    }

    const newInvoice = {
      id,
      name,
      phone,
      amount,
      date,
      status: formData.status,
      img: preview || "https://via.placeholder.com/150", // fallback image
    };

    setInvoices((prev) => [...prev, newInvoice]);

    // Reset form
    setFormData({
      id: "",
      name: "",
      phone: "",
      amount: "",
      date: "",
      status: "Unpaid",
      photo: null,
      preview: null,
    });
  };

  // ----------------- Pagination -----------------
  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <section
      className="py-3 px-2 sm:px-4 lg:px-6"
      style={{
        backgroundColor: isDarkMode ? colors.darkBg : colors.lightBg,
        color: isDarkMode ? colors.darkText : colors.lightText,
      }}
    >
      <h1 className="text-xl font-semibold mb-4">Invoice List</h1>

      {/* ----------------- Table View ----------------- */}
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse hidden md:table min-w-[600px]">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="text-left p-2">Invoice</th>
              <th className="text-left p-2">Name</th>
              <th className="text-left p-2">Phone</th>
              <th className="text-left p-2">Amount</th>
              <th className="text-left p-2">Generate(Dt)</th>
              <th className="text-left p-2">Status</th>
              <th className="text-left p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentDoctors.map((invoice, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="p-2">{invoice.id}</td>
                <td className="p-2 flex items-center h-20">
                  <img
                    src={invoice.img}
                    alt="profile"
                    className="w-10 h-10 mr-2 object-cover rounded-full"
                  />
                  {invoice.name}
                </td>
                <td className="p-2">{invoice.phone}</td>
                <td className="p-2">{invoice.amount}</td>
                <td className="p-2">{invoice.date}</td>
                <td
                  className={`p-2 ${invoice.status === "Paid" ? "text-green-500" : "text-red-500"
                    }`}
                >
                  {invoice.status}
                </td>
                <td className="text-center">
                  <div className="flex flex-wrap items-center gap-2">
                    <button className="bg-blue-500 text-white px-4 py-1.5 font-semibold border-2 border-blue-600 rounded-md">View</button>
                    <button className="text-blue-600 px-4 py-1.5 font-semibold border-2 border-blue-600 rounded-md">Print</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* ----------------- Mobile Cards ----------------- */}
        <div className="md:hidden space-y-4">
          {currentDoctors.map((invoice) => (
            <div key={invoice.id} className="rounded-lg p-4 shadow-sm">
              <div className="flex items-center mb-2">
                <img
                  src={invoice.img}
                  alt="profile"
                  className="w-12 h-12 mr-3 object-cover rounded-full"
                />
                <div>
                  <p className="font-semibold">{invoice.name}</p>
                  <p className="text-sm text-gray-600">{invoice.id}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <p>
                  <span className="font-medium">Phone:</span> {invoice.phone}
                </p>
                <p>
                  <span className="font-medium">Amount:</span> {invoice.amount}
                </p>
                <p>
                  <span className="font-medium">Date:</span> {invoice.date}
                </p>
                <p>
                  <span className="font-medium">Status:</span>{" "}
                  <span
                    className={
                      invoice.status === "Paid"
                        ? "text-green-500"
                        : "text-red-500"
                    }
                  >
                    {invoice.status}
                  </span>
                </p>
              </div>
              <div className="flex gap-2 mt-3">
                <button className="bg-blue-500 py-1 px-3 text-white font-semibold rounded-md flex-1">
                  View
                </button>
                <button className="py-1 px-3 text-blue-600 font-semibold border-2 border-blue-600 rounded-md flex-1">
                  Print
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ----------------- Add New Invoice Form ----------------- */}
      <div className="mt-6 max-w-lg mx-auto p-5 border border-gray-500 rounded-lg">
        <h2 className="text-lg font-semibold mb-3">Add New Invoice</h2>
        <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
          {/* Text Inputs */}
          {["id", "name", "phone", "amount"].map((field) => (
            <input
              key={field}
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleInputChange}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              className="p-2 border border-gray-500 rounded-md focus:outline-none"
              style={{
                backgroundColor: isDarkMode ? colors.darkBg : colors.lightBg,
                color: isDarkMode ? "#f9fafb" : colors.lightText,
              }}
            />
          ))}

          {/* Date */}
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            className="p-2 border border-gray-500 rounded-md focus:outline-none"
          />

          {/* Status */}
          <select
            name="status"
            value={formData.status}
            onChange={handleInputChange}
            className="p-2 border border-gray-500 rounded-md focus:outline-none"
            style={{
              backgroundColor: isDarkMode ? colors.darkBg : colors.lightBg,
            }}
          >
            <option value="Unpaid">Unpaid</option>
            <option value="Paid">Paid</option>
          </select>

          {/* Photo Upload */}
          <div className="sm:col-span-2">
            <input
              type="file"
              name="photo"
              accept="image/*"
              capture="environment"
              onChange={handleInputChange}
              className="p-2 border border-gray-500 rounded-md focus:outline-none w-full"
            />
            {formData.preview && (
              <img
                src={formData.preview}
                alt="preview"
                className="mt-2 w-20 h-20 object-cover rounded-full"
              />
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md sm:col-span-2"
          >
            Add Invoice
          </button>
        </form>
      </div>

      {/* ----------------- Pagination ----------------- */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-6 px-4">
        <div className="mb-2 sm:mb-0">
          Showing {startIndex + 1}-{Math.min(endIndex, invoices.length)} of{" "}
          {invoices.length}
        </div>
        <div className="flex items-center gap-2">
          <button
            className="py-1 px-2 bg-blue-500 text-white rounded-md"
            onClick={handlePrev}
            disabled={page === 1}
          >
            Prev
          </button>
          <button className="py-1 px-2 bg-gray-100 text-black rounded-md">
            {page} of {totalPages}
          </button>
          <button
            className="py-1 px-2 bg-blue-500 text-white rounded-md"
            onClick={handleNext}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Invoice_list;

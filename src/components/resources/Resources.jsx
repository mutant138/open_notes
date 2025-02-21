import { useState } from "react";

const pdfFiles = [
  { name: "React Hooks Guide", url: "/pdfs/react-hooks.pdf" },
  { name: "JavaScript Basics", url: "/pdfs/javascript-basics.pdf" },
  { name: "CSS Flexbox", url: "/pdfs/css-flexbox.pdf" },
  { name: "Node.js Crash Course", url: "/pdfs/nodejs-crash-course.pdf" },
  { name: "MongoDB Essentials", url: "/pdfs/mongodb-essentials.pdf" },
  { name: "TypeScript Handbook", url: "/pdfs/typescript-handbook.pdf" }
];

const Resources = () => {
  const [search, setSearch] = useState("");

  const filteredPdfs = pdfFiles.filter(pdf =>
    pdf.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mt-16 px-4 max-w-screen mx-auto bg-gradient-to-r from-black via-gray-900 to-black min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6 text-[#00df9a] drop-shadow-lg">
        Resources
      </h1>

      {/* Banner Ad at the Top */}
      <div className="mb-6 flex justify-center">
        <div className="w-full max-w-3xl h-20 bg-gray-700 text-white flex items-center justify-center">
          Ad Placeholder (Banner)
        </div>
      </div>

      {/* Main Content with Side Ads */}
      <div className="flex justify-center gap-6">
        {/* Left Ad */}
        <div className="hidden lg:flex w-60 h-[600px] bg-gray-700 text-white items-center justify-center">
          Ad Placeholder (Left Sidebar)
        </div>

        {/* Content Section */}
        <div className="w-full max-w-4xl">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search PDFs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 bg-gray-800 border border-gray-600 text-white rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-[#00df9a]"
          />

          {/* PDF Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredPdfs.length > 0 ? (
              filteredPdfs.map((pdf, index) => (
                <div
                  key={index}
                  className="p-4 border border-gray-700 rounded-lg shadow-md bg-gray-900 hover:shadow-lg transition transform hover:scale-105"
                >
                  <h2 className="text-lg font-semibold mb-2 text-white">{pdf.name}</h2>

                  {/* Ad Below Every 2 PDFs */}
                  {index % 2 === 0 && (
                    <div className="w-full h-12 bg-gray-700 text-white flex items-center justify-center mb-2">
                      Ad Placeholder
                    </div>
                  )}

                  {/* Download Button */}
                  <a
                    href={pdf.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[#00df9a] font-medium hover:underline"
                  >
                    Download PDF
                  </a>

                  {/* Ad Below Download Button */}
                  <div className="w-full h-12 bg-gray-700 text-white flex items-center justify-center mt-2">
                    Ad Placeholder
                  </div>
                </div>
              ))
            ) : (
              <p className="col-span-4 text-center text-gray-400">No PDFs found</p>
            )}
          </div>
        </div>

        {/* Right Ad */}
        <div className="hidden lg:flex w-60 h-[600px] bg-gray-700 text-white items-center justify-center">
          Ad Placeholder (Right Sidebar)
        </div>
      </div>
    </div>
  );
};

export default Resources;

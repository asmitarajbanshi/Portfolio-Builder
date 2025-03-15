import React from "react";

// ✅ Named Exports
export function TemplatePortfolio() {
  return (
    <div className="p-6 bg-white text-black">
      <header className="p-4 bg-gray-100">
        <h1 className="text-3xl font-bold">Portfolio Template</h1>
      </header>
      <main className="p-4">
        <p>Showcase your projects here in a beautiful grid layout.</p>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-gray-200 p-4 rounded">Project 1</div>
          <div className="bg-gray-200 p-4 rounded">Project 2</div>
        </div>
      </main>
      <footer className="p-4 bg-gray-100">
        <p>Footer Content</p>
      </footer>
    </div>
  );
}

export function TemplateECommerce() {
  return (
    <div className="p-6 bg-white text-black">
      <header className="p-4 bg-blue-100">
        <h1 className="text-3xl font-bold">E-Commerce Template</h1>
      </header>
      <main className="p-4">
        <p>Display your products in a clean, modern layout.</p>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="bg-blue-200 p-4 rounded">Product 1</div>
          <div className="bg-blue-200 p-4 rounded">Product 2</div>
          <div className="bg-blue-200 p-4 rounded">Product 3</div>
        </div>
      </main>
      <footer className="p-4 bg-blue-100">
        <p>Footer Content</p>
      </footer>
    </div>
  );
}

export function TemplateLandingPage() {
  return (
    <div className="p-6 bg-white text-black">
      <header className="p-4 bg-green-100">
        <h1 className="text-3xl font-bold">Landing Page Template</h1>
      </header>
      <main className="p-4">
        <p>This landing page is designed to grab attention with a bold call-to-action.</p>
        <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded">Get Started</button>
      </main>
      <footer className="p-4 bg-green-100">
        <p>Footer Content</p>
      </footer>
    </div>
  );
}

export function TemplateBlog() {
  return (
    <div className="p-6 bg-white text-black">
      <header className="p-4 bg-yellow-100">
        <h1 className="text-3xl font-bold">Blog Template</h1>
      </header>
      <main className="p-4">
        <p>Share your articles and insights with this clean blog layout.</p>
        <div className="space-y-4 mt-4">
          <div className="bg-yellow-200 p-4 rounded">Blog Post 1</div>
          <div className="bg-yellow-200 p-4 rounded">Blog Post 2</div>
          <div className="bg-yellow-200 p-4 rounded">Blog Post 3</div>
        </div>
      </main>
      <footer className="p-4 bg-yellow-100">
        <p>Footer Content</p>
      </footer>
    </div>
  );
}

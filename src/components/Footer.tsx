const Footer = () => {
  return (
    // 1. Menghapus background putih dan border atas
    <footer className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* 2. Mengubah warna teks */}
          <p className="text-gray-400 text-sm">
            © 2025 CodeX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
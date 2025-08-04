const Contact = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 font-poppins text-foreground">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-card p-6 rounded-lg shadow-elegant">
            <h3 className="text-xl font-semibold mb-2 font-poppins text-primary">
              📞 Phone
            </h3>
            <p className="text-lg font-poppins text-foreground">
              +91 98765 43210
            </p>
          </div>
          <div className="bg-gradient-card p-6 rounded-lg shadow-elegant">
            <h3 className="text-xl font-semibold mb-2 font-poppins text-primary">
              📧 Email
            </h3>
            <p className="text-lg font-poppins text-foreground">
              support@fashionfiesta.in
            </p>
          </div>
        </div>
        <p className="text-lg font-poppins text-muted-foreground">
          Follow us on{" "}
          <a href="#" className="text-secondary hover:underline font-semibold">
            Instagram
          </a>{" "}
          |{" "}
          <a href="#" className="text-secondary hover:underline font-semibold">
            Facebook
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
import { useState } from "react";

export default function Newsletter() {
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="immeuble h-[748px]">
      <div className="container mx-auto px-5 lg:px-0  items-center py-10">
        <div className=" max-w-screen-sm bg-white/10 backdrop-filter backdrop-blur-lg shadow-lg rounded px-10 py-10">
          <form
            method="post"
            onSubmit={handleSubmit}
            className="flex flex-col space-y-5"
          >
            <h3 className=" font-heading text-4xl uppercase text-white mb-10">
              Ecrivez-nous un message
            </h3>
            <input
              type="text"
              name="name"
              id=""
              onChange={handleChange}
              value={data.name}
              required
              placeholder="Prénom & Nom"
              className="rounded border-none outline-none"
            />
            <input
              type="email"
              name="email"
              id=""
              onChange={handleChange}
              value={data.email}
              required
              placeholder="Email"
              className="rounded border-none outline-none"
            />
            <textarea
              name="message"
              id=""
              onChange={handleChange}
              value={data.message}
              cols="30"
              rows="10"
              placeholder="Votre message"
              className="rounded border-none focus:outline-none "
            />
            <button
              type="submit"
              className="bg-brand-red text-white font-semibold text-lg py-3 rounded hover:bg-brand-gray transition-all duration-300 ease"
            >
              Envoyer
            </button>

            {/* <p>
              {data.name} {data.email} {data.message}
            </p> */}
          </form>
        </div>
      </div>
    </div>
  );
}

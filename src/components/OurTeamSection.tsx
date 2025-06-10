const teamMembers = [
  { name: "Dr Philip Church", role: "Dentist", specialty: "Implants and Sedation", image: "/team/1.jpg" },
  { name: "Dr Jonathan Fitzpatrick", role: "Dentist", specialty: "Smile Makeovers", image: "/team/2.jpg" },
  { name: "Dr Juliette Anthony", role: "Dentist", specialty: "Orthodontics", image: "/team/3.jpg" },
  { name: "Dr Carla Newton", role: "Dentist", specialty: "Aesthetic Dentistry", image: "/team/4.jpg" },
  { name: "Dr David Kemp", role: "Dentist", specialty: "Endodontics", image: "/team/5.jpg" },
  { name: "Dr Priya Shah", role: "Dentist", specialty: "Oral Surgery", image: "/team/6.jpg" },
  { name: "Dr Emily Fraser", role: "Dentist", specialty: "Periodontics", image: "/team/7.jpg" },
];

const OurTeamSection = () => {
  return (
    <section className="bg-black text-white px-6 md:px-20 py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start">
        {/* Left Text Content */}
        <div className="md:w-1/3">
          <p className="text-sm text-violet-500 mb-1">Meet your dentists</p>
          <h2 className="text-4xl font-semibold mb-4">Our Team</h2>
          <p className="text-lg text-gray-300 mb-8">
            Award-winning dentists with years of experience in every aspect of cosmetic dentistry, oral surgery and facial aesthetics.
          </p>
          <button className="px-6 py-2 border border-violet-500 text-violet-500 rounded hover:bg-violet-500 hover:text-black transition">
            Meet Everyone
          </button>
        </div>

        {/* Right Doctor Images with Text */}
        <div className="md:w-2/3 grid grid-cols-2 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`flex flex-col items-center ${
                index === 6 ? "col-start-1" : ""
              }`}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-[250px] h-[330px] object-cover rounded-lg"
                draggable={false}
              />
              <div className="mt-3 text-center">
                <h3 className="font-semibold text-base text-white">{member.name}</h3>
                <p className="text-sm text-violet-400">{member.role}</p>
                <p className="text-sm text-gray-400">{member.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;

import "../App.css";
import "./SlideBar.css"
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState , useEffect} from "react";
import { NavLink } from "react-router-dom";

export default function Slidebar() {
 const [select, setSelect] = useState(0);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      // Ahora, setIsMobile será verdadero solo cuando el ancho de la ventana sea menor a 1024 píxeles
    };

    handleResize(); // Llamamos a la función al principio para determinar el estado inicial
    window.addEventListener("resize", handleResize); // Añadimos el listener del evento de resize

    // Limpiamos el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scroll = (section) => {
    if (section === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
       {isMobile && (
          <div className="fixed top-0 w-full flex justify-between items-center bg-black text-white p-4 z-50">
          <button onClick={toggleSidebar}>
            {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
          <div className="ml-auto">
            <img
              src={require("../assets/images/Logo.png")}
              alt="Logo"
              className="h-20"
            />
          </div>
        </div>
      )}

      <div
        className={`flex-none lg:block bg-black h-screen fixed z-40 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } w-full lg:w-[25%]`}
      >
        <div className="nav flex text-white text-lg mt-10 flex-col align-middle justify-center text-center w-full gap-5 overflow-hidden pt-10">
          <div data-aos="slide-down">
            <NavLink to={"/activity"}>
            <img
                src={require("../assets/images/MyPerfil.jpeg")}
                alt="Lucas Leiro"
                title="Discord Activity"
                // className="rounded-full border-solid cursor-pointer border-[8px] border-stone-600 min-h-fit mx-auto max-w-[190px] object-cover"
                className="rounded-full border-solid cursor-pointer border-[8px] border-stone-600 m-auto object-cover"
                style={{ width: "100%", maxWidth: "190px", height: "auto" }}
              />

              <h3 className="text-white name py-4 font-medium">
                Lucas Leiro
              </h3>
            </NavLink>
          </div>
          <p
            onClick={() => setSelect(0)}
            className={`cursor-pointer hover:text-blue-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
              select === 0 ? "text-blue-600 " : ""
            }`}
            data-aos="slide-right"
            data-aos-delay="200"
          >
            <NavLink
              to="#"
              onClick={() => {
                scroll("#");
                toggleSidebar();
              }}
            >
              <p title="Home Page"> Home</p>
            </NavLink>
          </p>
          <p
            onClick={() => setSelect(1)}
            className={`cursor-pointer hover:text-blue-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
              select === 1 ? "text-blue-600 " : ""
            }`}
            data-aos-delay="600"
            data-aos="slide-left"
          >
            <NavLink
              to="#about"
              onClick={() => {
                scroll("about");
                toggleSidebar();
              }}
            >
              <p title="About me"> About Me</p>
            </NavLink>
          </p>
          <p
            onClick={() => setSelect(2)}
            className={`cursor-pointer hover:text-blue-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
              select === 2 ? "text-blue-600 " : ""
            }`}
            data-aos="slide-right"
            data-aos-delay="1000"
          >
            <NavLink
              to="#resume"
              onClick={() => {
                scroll("resume");
                toggleSidebar();
              }}
            >
              <p title="Resume"> Resume</p>
            </NavLink>
          </p>
          <p
            onClick={() => setSelect(3)}
            className={`cursor-pointer hover:text-blue-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
              select === 3 ? "text-blue-600 " : ""
            }`}
            data-aos="slide-left"
            data-aos-delay="1400"
          >
            <NavLink
              to="#projects"
              onClick={() => {
                scroll("projects");
                toggleSidebar();
              }}
            >
              <p title="Projects"> Projects</p>
            </NavLink>
          </p>
          <p
            onClick={() => setSelect(4)}
            className={`cursor-pointer hover:text-blue-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
              select === 4 ? "text-blue-600 " : ""
            }`}
            data-aos="slide-right"
            data-aos-delay="1800"
          >
            <NavLink
              to="#contact"
              onClick={() => {
                scroll("contact");
                toggleSidebar();
              }}
            >
              <p title="Contact"> Contact</p>
            </NavLink>
          </p>
        </div>
        <div
          className="text-white flex flex-row gap-5 w-fit mx-auto pt-7"
          data-aos="slide-up"
          data-aos-delay="2300"
        >
          <div
            title="Github"
            onClick={() =>
              window.open("https://github.com/LucasLeiroA", "_blank")
            }
          >
            <GitHubIcon className="cursor-pointer hover:scale-105" />
          </div>
          <div
            title="Instagram"
            onClick={() =>
              window.open("https://www.instagram.com/_lucasleiro/", "_blank")
            }
          >
            {" "}
            <InstagramIcon className="cursor-pointer hover:scale-105" />
          </div>
          <div
            title="Linkedin"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/lucasleiro/",
                "_blank"
              )
            }
          >
            {" "}
            <LinkedInIcon className="cursor-pointer hover:scale-105" />
          </div>
          <div
            title="Facebook"
            onClick={() =>
              window.open("https://www.facebook.com/lucas.leiro.12", "_blank")
            }
          >
            <FacebookIcon className="cursor-pointer hover:scale-105" />
          </div>
        </div>
      </div>
    </>
  );
}

import "../../App.css";
import DownloadIcon from "@mui/icons-material/Download";
// import * as LottiePlayer from "@lottiefiles/lottie-player";
import "./about.css"

export default function About() {
  const getDate = () => {
    var dob = new Date("09/03/2001");
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    return age;
  };

  return (
    <div
      id="about"
      className="cont-about min-h-screen bg-white flex flex-col text-center gap-5 text-black text-sm lg:text-lg  font-normal"
    >
      <div
        className="head text-3xl lg:text-5xl mt-12 font-bold"
        data-aos={"slide-down"}
      >
        About Me
      </div>
      <div className="about-container flex flex-row  gap-6 ml-12 ">
        <div className="about-content flex-col mt-14 flex flex-auto w-64 gap-6 ml-8">
          <h3
            className="text-xl lg:text-3xl font-medium"
            data-aos={"fade-left"}
          >
            I'm <span className="text-yellow-600">Lucas Leiro,</span> a Web
            Enthusiast
          </h3>
          <p
            className="pt-5 leading-7 text-slate-900 text-justify"
            data-aos={"fade-left"}
          >
            I love playing football, ride a bike and do sports. I graduated from the National University of Tucumán (UTN).
             I am {getDate()}{" "}
            years old.I love exploring new technologies.
          </p>
          <p
            className="text-justify leading-7 text-slate-900"
            data-aos={"fade-right"}
          >
           I am a passionate programmer, holding a degree as a programming technician from the Universidad Tecnológica Nacional (UTN) in Tucumán, Argentina. Currently, I am part of the development team at Fina Partner, where I have had the privilege of gaining valuable experience in the field of software development and teamwork. I am a practical and meticulous person, focused on achieving excellence from the outset and always seeking ways to optimize and improve our processes to achieve even better results. My focus is on efficiency and quality. I firmly believe in the importance of creating solutions that are not only effective but also innovative and creative. That's why I greatly enjoy creating applications and developing solutions that make a difference. I am actively seeking a new job opportunity that will allow me to continue growing professionally and apply my skills in a dynamic and challenging environment. I am confident that I can add significant value to your team with my experience, dedication, and creative mindset. I sincerely appreciate your time and consideration. I am available for an interview at your convenience. I look forward to the possibility of working together and creating something extraordinary!
          </p>
        </div>

        <div class="about-animation relative flex-auto w-32   sm:rounded-lg  pl-4 col-md-12"
          data-aos={"slide-left"}
        >
          {/* <img
            src={LearningCode}
            alt="Learning Code"
            className="motion-safe:animate-zoomy"
          /> */}
           <div className="motion-safe:animate-zoomy">
            <lottie-player
              autoplay
              loop
              mode="bounce"
              src="https://assets10.lottiefiles.com/packages/lf20_w98qte06.json"
              style={{ width: "350px" }}
            />
          </div>

          <a
            href={require("../../assets/files/Lucas Resume.pdf")}
            download={"Lucas Resume"}
            target="_blank"
            rel="noreferrer"
            className="btn-donwload py-1 md:py-2 lg:py-3 mt-3 lg:mt-5 text-white mx-auto px-4  lg:px-9 bg-blue-600 border-2 w-fit border-blue-500 rounded-3xl  hover:-translate-y-1.5 duration-[350ms] hover:duration-[350ms] hover:bg-blue-800 hover:scale-[1.023] focus:bg-blue-800 sm:text-xl  animate-zoomy"
          >
            Download CV
            <DownloadIcon />
          </a>
        </div>

      </div>
    </div>
  );
}

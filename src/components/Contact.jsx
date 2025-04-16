import { useRef,useState } from "react"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser'
import {styles} from '../style'
import { EarthCanvas } from "./canvas"
import { slideIn } from "../utils/motion"
import { SectionWrapper } from "../hoc"
const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false)
//template_t4s4zo7
//service_kdjtjzm
//EVSdVAeH8ukXesLao
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_kdjtjzm',
      'template_t4s4zo7',
      {
        from_name: form.name,
        to_name: "Yasmine Emadeldin",
        from_email: form.email,
        to_email: "yasminee455@gmail.com",
        message: form.message,
      },
      'EVSdVAeH8ukXesLao'
    )
      .then(() => {
        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible.");
        setForm({
          name: "",
          email: "",
          message: "",
        });
      }, (error) => {
        setLoading(false);
        console.log(error);
        alert("Ahh, something went wrong. Please try again.");
      });
  }

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-24 overflow-hidden scale-[85%]  md:scale-90 ">
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75] bg-[#e8e3cf] p-8 rounded-2xl transform">
        <p className={styles.sectionSubText}>Impressed? Imagine what I can do for you. Let’s chat!</p>
        <h3 className={styles.sectionHeadText} >Contact Me.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
            <label className="flex flex-col">
              <span className="text-[#100d25] font-medium mb-4">Your Name</span>
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="What's your good name?" className="bg-[#f1eee2] py-4 px-6 placeholder:text-secondary text-[#100d25] rounded-lg outline-none border-none font-medium" />
            </label>
            <label className="flex flex-col">
              <span className="text-[#100d25] font-medium mb-4">Your Email</span>
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="What's your web address?" className="bg-[#f1eee2] py-4 px-6 placeholder:text-secondary text-[#100d25]  rounded-lg outline-none border-none font-medium" />
            </label>
            <label className="flex flex-col">
              <span className="text-[#100d25] font-medium mb-4">Your Message</span>
              <textarea rows={7} name="message" value={form.message} onChange={handleChange} placeholder="What do you want to say?" className="bg-[#f1eee2] py-4 px-6 placeholder:text-secondary text-[#100d25]  rounded-lg outline-none border-none font-medium" />
            </label>
            <button type="submit" className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
              {loading ? "Sending..." : "Send"}
            </button>
        </form>

      </motion.div>
      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  )
}
export default SectionWrapper(Contact,"contact")